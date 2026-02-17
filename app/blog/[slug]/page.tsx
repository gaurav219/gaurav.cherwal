import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/posts";

type BlogPostParams = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({ params }: BlogPostParams) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const Post = post.Component;

  return (
    <main className="mx-auto min-h-screen max-w-3xl px-6 py-20 text-slate-100">
      <article className="markdown-body max-w-none">
        <Post />
      </article>
    </main>
  );
}
