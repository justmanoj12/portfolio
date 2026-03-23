import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { CheckCircle2, Terminal } from 'lucide-react';

const TerminalSimulation = ({ inView }: { inView: boolean }) => {
  const [logs, setLogs] = useState<string[]>([]);
  
  const mockLogs = [
    "Initializing test suite...",
    "Loading environment configurations...",
    "Running Pytest on backend module...",
    "PASS test_user_authentication.py 2.3s",
    "PASS test_database_migrations.py 1.1s",
    "Running Selenium E2E on Virtual Exhibition...",
    "PASS e2e_spotlight_mode.spec 4.5s",
    "All checks passed successfully."
  ];

  useEffect(() => {
    if (inView) {
      setLogs([]);
      let timeoutIds: ReturnType<typeof setTimeout>[] = [];
      mockLogs.forEach((log, index) => {
        const id = setTimeout(() => {
          setLogs(prev => [...prev, log]);
        }, index * 400 + 500); // Stagger appearance
        timeoutIds.push(id);
      });
      return () => timeoutIds.forEach(clearTimeout);
    }
  }, [inView]);

  return (
    <div className="w-full max-w-lg bg-white border border-emerald-200 rounded-lg overflow-hidden font-mono text-sm shadow-[0_4px_20px_rgba(5,150,105,0.1)]">
      <div className="bg-slate-50 px-4 py-2 border-b border-emerald-100 flex items-center gap-2">
        <Terminal size={14} className="text-emerald-600" />
        <span className="text-emerald-700/80 text-xs font-semibold tracking-wider">test_runner.sh</span>
      </div>
      <div className="p-4 h-56 overflow-hidden flex flex-col justify-end">
        {logs.map((log, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className={`flex items-start gap-2 mb-1 ${
              log.includes('PASS') ? 'text-emerald-600 font-medium' : 'text-slate-500'
            }`}
          >
            {log.includes('PASS') && <CheckCircle2 size={16} className="mt-0.5 shrink-0" />}
            <span className="break-all">{log}</span>
          </motion.div>
        ))}
        {inView && (
          <motion.div 
            animate={{ opacity: [1, 0, 1] }} 
            transition={{ repeat: Infinity, duration: 1 }}
            className="w-2 h-4 bg-emerald-500 mt-2"
          />
        )}
      </div>
    </div>
  );
};

export default function InteractiveResume() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  return (
    <section id="training" className="w-full max-w-[1920px] mx-auto py-32 px-8 md:px-16 relative bg-white border-x border-slate-100">
      <h2 className="text-3xl lg:text-5xl font-bold mb-16 text-black text-center tracking-tighter">
        Experience & Training<span className="text-[#ff5e00]">.</span>
      </h2>
      
      <div className="relative border-l-2 border-slate-300 ml-4 md:ml-1/2 md:translate-x-[-1px]">
        {/* Item 1 */}
        <div className="mb-24 relative flex items-center w-full justify-start md:justify-end">
          <div className="absolute left-[-9px] md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full bg-black border-2 border-white" />
          <div className="ml-8 md:ml-0 md:w-1/2 md:pr-12 md:text-right">
            <h3 className="text-2xl font-bold text-black mb-2 tracking-tight">Senior Full-Stack Engineer</h3>
            <p className="text-[#ff5e00] font-mono mb-4 text-xs tracking-widest uppercase font-bold">2023 - Present</p>
            <p className="text-slate-600 leading-relaxed font-light">
              Leading the development of highly scalable web applications, architecting solutions
              with React, Node.js, and modern cloud infrastructure.
            </p>
          </div>
        </div>

        {/* Item 2 - The Pulsing Automation Section */}
        <div ref={ref} className="mb-24 relative flex items-center w-full justify-start md:justify-start">
          <motion.div 
            animate={isInView ? { 
              boxShadow: ["0 0 0 0 rgba(16, 185, 129, 0.4)", "0 0 0 15px rgba(16, 185, 129, 0)"],
              backgroundColor: ["#e2e8f0", "#10b981", "#e2e8f0"]
            } : {}}
            transition={{ repeat: Infinity, duration: 2 }}
            className="absolute left-[-9px] md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full bg-slate-200 border-2 border-white z-10" 
          />
          
          <div className="ml-8 md:ml-0 md:w-1/2 md:pl-12 md:translate-x-full">
            <motion.h3 
              animate={isInView ? { color: ['#0f172a', '#059669', '#0f172a'] } : {}}
              transition={{ repeat: Infinity, duration: 3 }}
              className="text-2xl font-bold text-slate-900 mb-2"
            >
              Automation Engineer
            </motion.h3>
            <p className="text-emerald-600 font-mono mb-4 text-sm hover:underline cursor-pointer font-semibold">Test Automation Frameworks Certified</p>
            <p className="text-slate-600 leading-relaxed mb-8">
              Designed and maintained enterprise-level automation strategies using <span className="text-emerald-600 font-semibold">Python</span>.
              Reduced regression time by 60% with distributed test execution.
            </p>
            
            <TerminalSimulation inView={isInView} />
          </div>
        </div>
      </div>
    </section>
  );
}
