import { CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

const competencies = [
  {
    name: "AutoCAD",
    description: "Industry-standard 2D drafting, complex floor plans, and technical documentation mastery.",
    level: "Expert"
  },
  {
    name: "SolidWorks",
    description: "Advanced 3D modeling, mechanical assemblies, and finite element analysis (FEA).",
    level: "Expert"
  },
  {
    name: "Revit",
    description: "Building Information Modeling (BIM), parametric families, and structural detailing.",
    level: "Expert"
  }
];

export default function Competencies() {
  return (
    <section className="py-24 bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          <div className="lg:col-span-4 self-stretch flex flex-col justify-between">
            <div>
              <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] mb-3 text-slate-400 flex items-center gap-2">
                <span className="w-8 h-[1px] bg-blue-600"></span> Software Mastery
              </h2>
              <h3 className="text-3xl md:text-4xl font-black text-slate-900 uppercase leading-none">
                Deep expertise in industry standards.
              </h3>
            </div>
            
            <p className="text-slate-500 mt-6 lg:mt-0 max-w-sm text-sm">
              We focus exclusively on the big three. No generic advice—just deep, technical mastery of the tools you need to succeed.
            </p>
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {competencies.map((comp, index) => (
              <motion.div 
                key={comp.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 border border-slate-200 hover:border-blue-600 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-6">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900">{comp.name}</h4>
                  <CheckCircle2 size={16} className="text-blue-600" />
                </div>
                
                <p className="text-slate-500 text-xs leading-relaxed mb-6 min-h-[60px]">
                  {comp.description}
                </p>
                
                <div className="inline-block px-2 py-1 bg-blue-50 text-blue-600 text-[10px] font-bold border border-blue-100 uppercase tracking-widest">
                  {comp.level}
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
