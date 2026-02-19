import Link from "next/link";

const projects = [
  {
    name: "lsp_explain.nvim",
    description: "ai-powered LSP diagnostic explanations for neovim - get intelligent explanations of compiler errors and warnings directly in your editor, with actionable suggestions for fixes and improvements.",
    github: "https://github.com/gaurav219/lsp_explain.nvim",
    stack: ["go", "lua", "language server protocol", "openrouter", "redis", "neovim", "linux"]
  },
  {
    name: "refracto",
    description: "retrieval pipeline with cache-aware context assembly and response guardrails.",
    github: "https://github.com/gaurav219/Refracto1",
    stack: ["java", "python", "gen-ai", "goose (mcp)", "model context protocol", "rag", "prompt/context engineering", "qdrant"]
  },
];

const stack = [
  "java",
  "go",
  "python",
  "distributed systems",
  "zookeeper/etcd",
  "databricks",
  "apache spark",
  "ci/cd",
  "aws (s3, lambda, api gateway)",
  "postgresql",
  "redis/memcached",
  "cassandra",
  "cockroachdb",
  "docker",
  "kubernetes",
  "linux",
  "shell scripting",
  "prometheus",
  "grafana",
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#0b0f10] text-[#d7e3db]">
      <section className="mx-auto max-w-5xl px-6 py-14 md:py-20">
        <div className="rounded-xl border border-[#1f2b25] bg-[#0d1312] p-5 shadow-[0_0_0_1px_rgba(70,119,90,0.15)]">
          <p className="font-mono text-xs text-[#7ea58f]">gaurav@archive:~$ whoami</p>
          <h1 className="mt-3 font-mono text-3xl font-semibold text-[#c6f6d5] md:text-5xl">hi! I&apos;m gaurav cherwal</h1>
          <p className="mt-4 max-w-3xl text-base text-[#a8b8af] md:text-lg">
            agentic ai ops - building production ai systems while focussing on distributed systems.
          </p>

          <div className="mt-6 flex flex-wrap gap-3 font-mono text-sm">
            <Link
              href="/projects"
              className="rounded-md border border-[#2f503f] bg-[#122019] px-4 py-2 text-[#c6f6d5] transition hover:bg-[#173024]"
            >
              ./projects
            </Link>
            <Link
              href="/blog"
              className="rounded-md border border-[#2f503f] bg-[#122019] px-4 py-2 text-[#c6f6d5] transition hover:bg-[#173024]"
            >
              ./blog
            </Link>
            <Link
              href="/about"
              className="rounded-md border border-[#2f503f] bg-[#122019] px-4 py-2 text-[#c6f6d5] transition hover:bg-[#173024]"
            >
              ./about
            </Link>
          </div>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <section className="rounded-xl border border-[#1f2b25] bg-[#0d1312] p-5">
            <p className="font-mono text-xs text-[#7ea58f]">gaurav@archive:~$ ls projects/</p>
            <div className="mt-4 flex flex-wrap gap-2">
            <ul className="mt-4 space-y-4">
              {projects.map((project) => (
                <li key={project.name} className="border-l border-[#2f503f] pl-4">
                  <p className="<<<font-mono text-sm text-[#c6f6d5]">{project.name}</p>
                  <p className="mt-1 text-sm text-[#a8b8af]">{project.description}</p>
                  <Link href={project.github} className="mt-1 text-xs font-semibold text-[#8ad69f]">view on github</Link>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <span
                        key={item}
                        className="rounded border border-[#2f503f] bg-[#101917] px-2.5 py-1 font-mono text-xs text-[#bdd7c9]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </li>
              ))}
            </ul>
            </div>
          </section>

          <section className="rounded-xl border border-[#1f2b25] bg-[#0d1312] p-5">
            <p className="font-mono text-xs text-[#7ea58f]">gaurav@archive:~$ cat stack.txt</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {stack.map((item) => (
                <span
                  key={item}
                  className="rounded border border-[#2f503f] bg-[#101917] px-2.5 py-1 font-mono text-xs text-[#bdd7c9]"
                >
                  {item}
                </span>
              ))}
            </div>

            <p className="mt-6 font-mono text-xs text-[#7ea58f]">gaurav@archive:~$ status</p>
            <p className="mt-2 text-sm text-[#a8b8af]">
              curious on securing ai systems with strict kernel level sandboxing architecture.
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}
