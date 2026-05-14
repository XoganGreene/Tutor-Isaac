import { ArrowRight, PenTool } from 'lucide-react';
import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pt-24 pb-32 lg:pt-36 lg:pb-40 border-b border-slate-200">
      {/* Background Grid Pattern for Technical Feel */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.03]" 
        style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '24px 24px' }}
      ></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 flex flex-col items-center text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-blue-600 font-bold uppercase tracking-[0.3em] text-[10px] mb-4 flex items-center justify-center gap-2"
        >
          <PenTool size={14} />
          <span>Professional CAD Tutoring & Consulting</span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 leading-none mb-6 uppercase tracking-tight max-w-4xl"
        >
          Master CAD with precision. <br className="hidden md:block"/> 
          <span className="text-slate-500">Accelerate your design career.</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl"
        >
          Don't let complex software hold your ideas back. Gain complete mastery over AutoCAD, SolidWorks, and Revit with targeted, 1-on-1 expert tutoring.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <a href="#booking" className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-4 text-xs font-bold uppercase tracking-widest border border-blue-600 hover:bg-blue-700 transition-colors duration-200 group">
            Book a Session
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#portfolio" className="inline-flex items-center justify-center gap-2 border border-slate-300 text-slate-700 px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-slate-50 transition-colors duration-200">
            View Portfolio
          </a>
        </motion.div>
      </div>
    </section>
  );
}
