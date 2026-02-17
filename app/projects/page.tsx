import Link from "next/link";

const projects = [
  {
    title: "lsp_explain.nvim",
    description:
      "AI-powered LSP diagnostic explanations plugin for neovim. Get intelligent explanations of compiler errors and warnings directly in your editor, with actionable suggestions for fixes and improvements.",
    githubUrl: "https://github.com/gaurav219/lsp_explain.nvim",
  },
  {
    title: "refracto",
    description: "An agentic, ticket-driven code generation assistant built for SAP's CAP (Cloud Application Programming) projects.",
    githubUrl: "https://github.com/gaurav219/refracto1",
  },
];

export default function ProjectsPage() {
  return (
    <main className="mx-auto min-h-screen max-w-5xl px-6 py-16 text-slate-100 md:py-20">
      <h1 className="font-mono text-4xl font-semibold text-[#c6f6d5]">projects</h1>
      <p className="mt-4 text-slate-300">some of my current work on ai tooling and systems.</p>

      <section className="mt-8 space-y-5">
        {projects.map((project) => (
          <article key={project.title} className="rounded-xl border border-[#1f2b25] bg-[#0d1312] p-6">
            <h2 className="font-mono text-2xl font-semibold text-[#c6f6d5]">{project.title}</h2>
            <p className="mt-3 text-slate-300">{project.description}</p>
            <Link
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-block font-mono text-sm font-semibold text-[#8ad69f] hover:text-[#9ce5b4]"
            >
              View on GitHub
            </Link>
          </article>
        ))}
      </section>
    </main>
  );
}
