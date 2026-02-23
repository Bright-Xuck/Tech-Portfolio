export default function AboutBoxes() {
  return (
    <section className="grid grid-cols-3 grid-rows-2 gap-4 h-[calc(100vh-6rem)] text-white">
      <div className="border-8 border-neutral-800 rounded-xl bg-black">
        <h1>Backend</h1>
        <div>
          <h2>Node.js</h2>
          <h3>Express</h3>
          <h2>REST APIs</h2>
          <h3>Authentication</h3>
        </div>
      </div>
      <div className="border-8 border-neutral-800 rounded-xl bg-black">
        <h1>Database</h1>
        <div>
          <h1>MungoDB</h1>
          <h2>PostgreSQL</h2>
          <h2>MySQL</h2>
          <h2>Supabase</h2>
        </div>
      </div>
      <div className="row-span-2 col-span-1 col-start-2 row-start-1 border-8 border-neutral-800 rounded-xl bg-black">
        <h1>Frontend</h1>
        <div>
          <h2>HTML5</h2>
          <h2>CSS3</h2>
          <h3>JavavScript</h3>
          <h2>TypeScript</h2>
          <h2>React</h2>
          <h3>TailwindCSS</h3>
          <h2>Responsive Design</h2>
          <h3>Next.js</h3>
        </div>
      </div>
      <div className="border-8 border-neutral-800 rounded-xl bg-black">
        <h1>Tools</h1>
        <div>
          <h3>Git & GitHub</h3>
          <h3>VS code</h3>
          <h3>WordPress</h3>
          <h3>Vercel</h3>
          <h3>Shadcn</h3>
          <h3>Semrush</h3>
        </div>
      </div>
      <div className="border-8 border-neutral-800 rounded-xl bg-black">
        <h1>Core Competence</h1>
        <div>
            <h3>Problem Solving</h3>
            <h3>Debugging</h3>
            <h3>Version Control</h3>
            <h1>Performace</h1>
            <h3>Security</h3>
            <h3>SEO</h3>
        </div>
      </div>
    </section>
  );
}
