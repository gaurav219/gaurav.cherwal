import { readdir } from "node:fs/promises";
import path from "node:path";

export type BlogPostMeta = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  readTime: string;
};

type BlogPostModule = {
  default: React.ComponentType;
  metadata?: BlogPostMeta;
};

const POSTS_DIR = path.join(process.cwd(), "content", "blog");

async function getPostSlugs() {
  const entries = await readdir(POSTS_DIR, { withFileTypes: true });

  return entries
    .filter((entry) => entry.isFile() && entry.name.endsWith(".mdx"))
    .map((entry) => entry.name.replace(/\.mdx$/, ""));
}

async function loadPostModule(slug: string): Promise<BlogPostModule | null> {
  try {
    return (await import(`@/content/blog/${slug}.mdx`)) as BlogPostModule;
  } catch {
    return null;
  }
}

function fallbackMetaFromSlug(slug: string): BlogPostMeta {
  return {
    slug,
    title: slug.replace(/-/g, " "),
    date: "1970-01-01",
    excerpt: "",
    readTime: "",
  };
}

export async function getAllPosts(): Promise<BlogPostMeta[]> {
  const slugs = await getPostSlugs();
  const posts = await Promise.all(
    slugs.map(async (slug) => {
      const mod = await loadPostModule(slug);
      if (!mod?.metadata) {
        return fallbackMetaFromSlug(slug);
      }

      return { ...mod.metadata, slug };
    }),
  );

  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function getPostBySlug(slug: string) {
  const mod = await loadPostModule(slug);
  if (!mod) {
    return null;
  }

  const metadata = mod.metadata ? { ...mod.metadata, slug } : fallbackMetaFromSlug(slug);

  return {
    Component: mod.default,
    metadata,
  };
}
