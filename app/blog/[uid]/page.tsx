import { notFound } from "next/navigation";
import { getAllPosts, getPostByUid } from "@/lib/posts";

type BlogPostParams = {
  params: Promise<{ uid: string }>;
};

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({ uid: post.uid }));
}

export default async function BlogPostPage({ params }: BlogPostParams) {
  const { uid } = await params;
  const post = await getPostByUid(uid);

  if (!post) {
    notFound();
  }

  const Post = post.Component;
  const { title, excerpt, date, readTime } = post.metadata;

  return (
    <main className="mx-auto min-h-screen max-w-3xl px-6 py-20 text-slate-100">
      <header className="mb-10">
        <p className="text-xs uppercase tracking-[0.15em] text-slate-400">
          {date} {readTime ? `· ${readTime}` : ""}
        </p>
        <h1 className="mt-2 text-4xl font-semibold text-white">{title}</h1>
        {excerpt ? (
          <p className="mt-4 rounded-r-md border-l-2 border-sky-400/70 bg-[#111a1d] px-4 py-3 text-sm italic leading-relaxed text-slate-200">
            {excerpt}
          </p>
        ) : null}
      </header>
      <article className="markdown-body max-w-none">
        <Post />
      </article>
    </main>
  );
}
