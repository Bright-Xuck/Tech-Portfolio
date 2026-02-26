export default function Experince() {
  return (
    <section
      id="experince"
      className="w-full px-8 py-5 bg-linear-to-b from-black/40 to-gray-900"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white text-center mb-12">
          Experience & Education
        </h2>
        <div className="grid grid-cols-[1fr_auto_1fr] ">
          <div className="w-full grid grid-cols-1 grid-rows-4 gap-6 items-center text-end">
            <span className="w-[60%] mx-auto">
              <h2>2023-Present</h2>
            </span>
            <span className="w-[60%] mx-auto">
              <h1>Front End Fundamentals</h1>
              <h3>
                Slef taught frontend developments with hands on projects and
                online resourses
              </h3>
            </span>
            <span className="w-[60%] mx-auto">
              <h1>2025</h1>
            </span>
            <span className="w-[60%] mx-auto">
              <h1>Biotech Universe</h1>
              <h3>
                Joined Biotech universe as one of the dev to build secure and
                scalable applications that solve real world prolblems
              </h3>
            </span>
          </div>
          <div className="w-0.5 grid grid-cols-1 grid-rows-4 border border-blue-400 items-center">
            <div className="w-3 h-3 bg-blue-500 rounded-full justify-self-center border border-black shadow-[0_0_8px_2px] shadow-black"></div>
            <div className="w-3 h-3 bg-blue-500 rounded-full justify-self-center border border-black shadow-[0_0_8px_2px] shadow-black"></div>
            <div className="w-3 h-3 bg-blue-500 rounded-full justify-self-center border border-black shadow-[0_0_8px_2px] shadow-black"></div>
            <div className="w-3 h-3 bg-blue-500 rounded-full justify-self-center border border-black shadow-[0_0_8px_2px] shadow-black"></div>
          </div>
          <div className="grid grid-cols-1 grid-rows-4 gap-6 items-center">
            <span className="w-[60%] mx-auto">
              <h2>Computer Engineering Student</h2>
              <h3>
                Studying the core concepts of what makes one a computer engineer
                and building scalable applications
              </h3>
            </span>
            <span className="w-[60%] mx-auto">
              <h2>2024-2025</h2>
            </span>
            <span className="w-[60%] mx-auto">
              <h3>Intern At Kings Digital</h3>
              <h3>
                Interned at Kings Digital where i gained hands on experince
                between local projects and real world applications and thinking
                in systems
              </h3>
            </span>
            <span className="w-[60%] mx-auto">
              <h1>2025-Present</h1>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
