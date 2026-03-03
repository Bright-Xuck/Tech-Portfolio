export default function AboutBoxes() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2 gap-6 md:gap-4 min-h-screen lg:h-[calc(100vh-6rem)] text-white px-4 md:px-8 py-8">
      {/* Backend Box */}
      <div className="tech-box tech-box-backend border-4 border-blue-500/30 rounded-xl bg-linear-to-br from-black to-blue-950/20 p-6 hover:shadow-2xl transition-all duration-300 overflow-hidden min-h-fit">
        <h1 className="text-xl md:text-2xl font-bold mb-4 bg-linear-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">Backend</h1>
        <div className="space-y-2">
          <h2 className="tech-item">Node.js</h2>
          <h3 className="tech-item">Express</h3>
          <h2 className="tech-item">REST APIs</h2>
          <h3 className="tech-item">Authentication</h3>
        </div>
      </div>

      {/* Database Box */}
      <div className="tech-box tech-box-database border-4 border-purple-500/30 rounded-xl bg-linear-to-br from-black to-purple-950/20 p-6 hover:shadow-2xl transition-all duration-300 overflow-hidden min-h-fit">
        <h1 className="text-xl md:text-2xl font-bold mb-4 bg-linear-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">Database</h1>
        <div className="space-y-2">
          <h1 className="tech-item">MongoDB</h1>
          <h2 className="tech-item">PostgreSQL</h2>
          <h2 className="tech-item">MySQL</h2>
          <h2 className="tech-item">Supabase</h2>
        </div>
      </div>

      {/* Frontend Box - Spans 2 rows on desktop only */}
      <div className="tech-box tech-box-frontend row-span-1 md:row-span-2 col-span-1 md:col-start-2 md:row-start-1 border-4 border-green-500/30 rounded-xl bg-linear-to-br from-black to-green-950/20 p-6 hover:shadow-2xl transition-all duration-300 overflow-hidden min-h-fit">
        <h1 className="text-xl md:text-2xl font-bold mb-4 bg-linear-to-r from-green-400 to-green-600 bg-clip-text text-transparent">Frontend</h1>
        <div className="space-y-2">
          <h2 className="tech-item">HTML5</h2>
          <h2 className="tech-item">CSS3</h2>
          <h3 className="tech-item">JavaScript</h3>
          <h2 className="tech-item">TypeScript</h2>
          <h2 className="tech-item">React</h2>
          <h3 className="tech-item">TailwindCSS</h3>
          <h2 className="tech-item">Responsive Design</h2>
          <h3 className="tech-item">Next.js</h3>
        </div>
      </div>

      {/* Tools Box */}
      <div className="tech-box tech-box-tools border-4 border-orange-500/30 rounded-xl bg-linear-to-br from-black to-orange-950/20 p-6 hover:shadow-2xl transition-all duration-300 overflow-hidden min-h-fit">
        <h1 className="text-xl md:text-2xl font-bold mb-4 bg-linear-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">Tools</h1>
        <div className="space-y-2">
          <h3 className="tech-item">Git & GitHub</h3>
          <h3 className="tech-item">VS Code</h3>
          <h3 className="tech-item">WordPress</h3>
          <h3 className="tech-item">Figma</h3>
        </div>
      </div>

      {/* DevOps Box */}
      <div className="tech-box tech-box-devops border-4 border-red-500/30 rounded-xl bg-linear-to-br from-black to-red-950/20 p-6 hover:shadow-2xl transition-all duration-300 overflow-hidden min-h-fit">
        <h1 className="text-xl md:text-2xl font-bold mb-4 bg-linear-to-r from-red-400 to-red-600 bg-clip-text text-transparent">DevOps</h1>
        <div className="space-y-2">
          <h2 className="tech-item">Docker</h2>
          <h2 className="tech-item">Vercel</h2>
          <h2 className="tech-item">Firebase</h2>
          <h2 className="tech-item">Linux</h2>
        </div>
      </div>
    </section>
  );
}
