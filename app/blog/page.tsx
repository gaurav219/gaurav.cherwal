import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <main className="mx-auto min-h-screen max-w-4xl px-6 py-20 text-slate-100">
      <h1 className="text-4xl font-semibold">blog</h1>
      <p className="mt-4 text-slate-300">notes on backend architecture, ai systems, and linux stuff.</p>

      <section className="mt-10 space-y-4">
        {posts.map((post) => (
          <article key={post.slug} className="rounded-xl border border-slate-800 bg-[#0d1312] p-5">
            <p className="text-xs uppercase tracking-[0.15em] text-slate-400">
              {post.date} {post.readTime ? `· ${post.readTime}` : ""}
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-white">{post.title}</h2>
            {post.excerpt ? <p className="mt-2 text-slate-300">{post.excerpt}</p> : null}
            <Link className="mt-4 inline-block font-semibold text-sky-300 hover:text-sky-200" href={`/blog/${post.slug}`}>
              Read post
            </Link>
          </article>
        ))}
      </section>
    </main>
  );
}
