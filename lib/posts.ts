import { readdir } from "node:fs/promises";
import path from "node:path";

type BlogPostFrontmatter = {
  uid: string;
  title: string;
  date: string;
  excerpt: string;
  readTime: string;
};

export type BlogPostMeta = {
  slug: string;
  uid: string;
  title: string;
  date: string;
  excerpt: string;
  readTime: string;
};

type BlogPostModule = {
  default: React.ComponentType;
  metadata?: BlogPostFrontmatter;
};

const POSTS_DIR = path.join(process.cwd(), "content", "blog");

async function getPostSlugs() {
  const entries = await readdir(POSTS_DIR, { withFileTypes: true });

  return entries
    .filter((entry) => entry.isFile() && entry.name.endsWith(".mdx"))
    .map((entry) => entry.name.replace(/\.mdx$/, ""));
}

async function loadPostModule(slug: string): Promise<BlogPostModule | null> {
  const modulePath = `@/content/blog/${slug}.mdx`;

  try {
    const postModule = (await import(modulePath)) as BlogPostModule;
    return postModule;
  } catch {
    return null;
  }
}

function buildMeta(slug: string, metadata?: BlogPostFrontmatter): BlogPostMeta {
  if (!metadata) {
    throw new Error(`Missing metadata export for blog post "${slug}"`);
  }

  const uid = metadata.uid.trim();
  if (!uid) {
    throw new Error(`Missing metadata.uid for blog post "${slug}"`);
  }

  return {
    ...metadata,
    slug,
    uid,
  };
}

export async function getAllPosts(): Promise<BlogPostMeta[]> {
  const slugs = await getPostSlugs();
  const posts = await Promise.all(
    slugs.map(async (slug) => {
      const mod = await loadPostModule(slug);
      if (!mod) {
        throw new Error(`Unable to load blog post module "${slug}"`);
      }
      return buildMeta(slug, mod?.metadata);
    }),
  );

  const seenUids = new Set<string>();
  for (const post of posts) {
    if (seenUids.has(post.uid)) {
      throw new Error(`Duplicate blog uid "${post.uid}" found (slug "${post.slug}")`);
    }
    seenUids.add(post.uid);
  }

  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function getPostBySlug(slug: string) {
  const mod = await loadPostModule(slug);
  if (!mod) {
    return null;
  }

  const metadata = buildMeta(slug, mod.metadata);

  return {
    Component: mod.default,
    metadata,
  };
}

export async function getPostByUid(uid: string) {
  const posts = await getAllPosts();
  const matchingPost = posts.find((post) => post.uid === uid);
  if (!matchingPost) {
    return null;
  }

  return getPostBySlug(matchingPost.slug);
}
