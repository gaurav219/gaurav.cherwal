export default function AboutPage() {
  return (
    <main className="mx-auto min-h-screen max-w-6xl px-6 py-16 font-sans text-slate-100 md:py-24">
      <section className="rounded-2xl border border-[#1f2b25] bg-[#0d1312] p-8 md:p-12">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#7ea58f]">about me</p>
        <h3 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight md:text-4xl">
          ai-first backend engineer.
        </h3>
        <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
          i currently am trying to research around how to make model inference better, faster processing of data pipelines in ai systems, and building performant api&apos;s.
          <br></br><br></br>my skill set sits at the intersection of distributed systems and applied ai, with a strong focus on
          observability, performance, and simplicity.
        </p>
      </section>


      <section className="mt-8 rounded-xl border border-[#1f2b25] bg-[#0d1312] p-6 md:p-8">
        <h2 className="text-3xl font-semibold">experience</h2>
        <li className="mt-6 text-slate-300">
          <p>
              <span className="font-semibold text-[#9fe6b9] text-lg md:text-xl">Linkova</span>
            <span className="ml-2 italic text-slate-400">Early-stage ecommerce technology company building systems to improve growth for DTC brands</span>
          </p>
          <ul className="mt-2 space-y-2">
            <li>Built and maintained automated workflows using n8n and RetellAI for automating workflows to increase operational
visibility by ~27%, and reduce manual reporting overhead.</li>
            <li>Designed and implemented a scalable data pipeline for processing and analyzing large volumes of ecommerce data, improving insights and decision-making.</li>
            <li>Designed and optimized PostgreSQL-backed data models in Supabase for analytics and feature pipelines, improving
query execution speed by ~35% through indexing, normalization aligned with long-term structure.</li>
          </ul>
          <div className="mt-4 flex flex-wrap gap-2">
            {[
              "n8n",
              "retellai",
              "nextjs",
              "supabase",
              "nodejs",
              "typescript",
              "gemini"
            ].map((item) => (
              <span
                key={item}
                className="rounded border border-[#2f503f] bg-[#101917] px-2.5 py-1 font-mono text-xs text-[#bdd7c9]"
              >
                {item}
              </span>
            ))}
          </div>
        </li>
        <li className="mt-4 text-slate-300">
          <p>
              <span className="font-semibold text-[#9fe6b9] text-lg md:text-xl">SAP</span>
            <span className="ml-2 italic text-slate-400">Global enterprise software provider developing cloud-native ERP and AI-powered business automation platforms.</span>
          </p>
          <ul className="mt-2 space-y-2">
            <li>Built LLM-powered code-generation pipelines using MCP and LangGraph for an automated ticket-generator platform</li>
            <li>Designed a RAG pipeline grounded in SAP CAP (Java) documentation and project metadata, to enable context-aware
LLM reasoning.</li>
            <li>Built AIOps pipelines for LLM agents across iterative deployments.</li>
          </ul>
          <div className="mt-4 flex flex-wrap gap-2">
            {["java", "sap cap", "mcp", "langgraph", "rag", "goose-mcp", "genai"].map((item) => (
              <span
                key={item}
                className="rounded border border-[#2f503f] bg-[#101917] px-2.5 py-1 font-mono text-xs text-[#bdd7c9]"
              >
                {item}
              </span>
            ))}
          </div>
        </li>
        <li className="mt-4 text-slate-300">
          <p>
              <span className="font-semibold text-[#9fe6b9] text-lg md:text-xl">Infosys Ltd (Vodafone DE)</span>
            <span className="ml-2 italic text-slate-400">Enterprise IT services provider specializing in scalable backend systems, cloud migration, and digital transformation initiatives.</span>
          </p>
          <ul className="mt-2 space-y-2">
            <li>Implemented Java Spring services on AWS for migration from Oracle to PostgreSQL.</li>
            <li>Automated CI/CD with Kubernetes and Jenkins.</li>
            <li>Implemented a logistics management platform built on Python (Flask) microservices.</li>
          </ul>
          <div className="mt-4 flex flex-wrap gap-2">
            {["java", "spring boot", "aws", "postgresql", "kubernetes", "jenkins", "python", "flask"].map((item) => (
              <span
                key={item}
                className="rounded border border-[#2f503f] bg-[#101917] px-2.5 py-1 font-mono text-xs text-[#bdd7c9]"
              >
                {item}
              </span>
            ))}
          </div>
        </li>
      </section>

      <section className="mt-8 rounded-xl border border-[#1f2b25] bg-[#0d1312] p-6 md:p-8">
        <h2 className="text-3xl font-semibold">education</h2>
        <li className="mt-6 text-slate-300">
          <span className="font-semibold text-[#9fe6b9] text-lg md:text-xl">University of California, Irvine</span> <span className="italic text-slate-400">(Master of Computer Science, specialization in Software Systems and AI)</span>
            <br></br>
          <span className="italic text-slate-400">(2024 - 2025)</span>
          <ul className="mt-2 space-y-2">
            <li>advanced operating systems (c)</li>
            <li>machine learning (python)</li>
            <li>computer systems and architecture (risc-v)</li>
            <li>parallel distributed computing (observability)</li>
          </ul>
        </li>
      </section>

      <section className="mt-8 grid gap-7">
        <article className="rounded-xl border border-[#1f2b25] bg-[#0d1312] p-6 md:p-8">
          <h2 className="text-2xl font-semibold">Other interest areas</h2>
          <ul className="mt-4 space-y-3 text-slate-300">
            <li>Linux Kernel and driver development</li>
            <li>eBPF and perf performance tools</li>
            <li>Trying to make OpenClaw more secure at systems level event capturing.</li>
            <li>ways to improve context engineering for modern llm&apos;s.</li>
          </ul>
        </article>
      </section>
    </main>
  );
}
