import { motion } from 'framer-motion';

const skillsDesc: Record<string, string> = {
  React: "Building scalable frontend architectures.",
  NodeJS: "Creating robust backend APIs with Express.",
  Python: "Writing automation scripts and backend services.",
  Selenium: "End-to-End browser testing.",
  Tailwind: "Rapid UI development with utility classes.",
  Pytest: "Unit and integration testing in Python."
};

const devSkills = ["React", "NodeJS", "Tailwind", "Python", "Selenium", "Pytest"];
const autoSkills = ["Python", "Selenium", "Pytest", "NodeJS", "React", "Tailwind"];

export default function LayoutMorph({ view }: { view: 'developer' | 'automation' }) {
  const activeSkills = view === 'developer' ? devSkills : autoSkills;

  return (
    <section id="skills-section" className="w-full max-w-6xl mx-auto py-24 px-8 bg-slate-50">
      <h2 className="text-3xl font-bold mb-12 text-slate-800">
        <span className="text-[#0047AB]">01. </span>Core Expertise
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {activeSkills.map((skill, i) => (
          <motion.div
            layout
            key={skill}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              layout: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
            className={`glass p-8 rounded-2xl flex flex-col justify-between group origin-center shadow-sm hover:shadow-md transition-shadow
              ${i === 0 ? 'md:col-span-2 md:row-span-2 bg-white' : 'bg-white/60'}`}
          >
            <div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900 group-hover:text-[#0047AB] transition-colors">{skill}</h3>
              <p className="text-slate-600">{skillsDesc[skill]}</p>
            </div>
            
            {i === 0 && (
              <div className="mt-8 flex gap-2 flex-wrap">
                <span className="px-3 py-1 bg-emerald-50 rounded-full text-xs font-semibold text-emerald-700 border border-emerald-200">Primary Focus</span>
                {view === 'automation' && skill === 'Python' && (
                  <span className="px-3 py-1 bg-blue-50 rounded-full text-xs font-semibold text-blue-700 border border-blue-200">Test Automation</span>
                )}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
