import { motion } from 'motion/react';
import { Maximize2, Layers, Box } from 'lucide-react';

const portfolioItems = [
  {
    id: 1,
    title: "Mechanical Assembly",
    category: "3D Render",
    software: "SolidWorks",
    icon: Box,
    image: `${import.meta.env.BASE_URL}mechanical-assembly.jpg`  // ✅ no curly braces
  },
  {
    id: 2,
    title: "Architectural Floor Plan",
    category: "2D Draft",
    software: "AutoCAD",
    icon: Layers,
    image: `${import.meta.env.BASE_URL}architectural-floor-plan.jpg`  // ✅
  },
  {
    id: 3,
    title: "Structural Wireframe",
    category: "Wireframe",
    software: "Revit",
    icon: Maximize2,
    image: `${import.meta.env.BASE_URL}stttructural-wireframe.jpg`  // ✅
  }
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] mb-3 text-slate-400">Proof of Skill</h2>
            <h3 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight uppercase leading-none">
              Precision delivered, <br/> every single time.
            </h3>
          </div>
          <p className="text-slate-600 max-w-md">
            Your instructor should be a practitioner first. Explore a selection of professional-grade drafts, models, and assemblies created.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer bg-white border border-slate-200 p-4"
            >
              <div className="relative aspect-[4/3] mb-4 overflow-hidden bg-slate-100 border border-slate-200">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="object-cover w-full h-full grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500 ease-out opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-black/10"></div>
                
                <div className="absolute bottom-2 left-2 bg-white px-2 py-0.5 text-[8px] font-bold uppercase tracking-wider border border-slate-200 flex items-center gap-1 z-10">
                  <item.icon size={10} className="text-blue-600" />
                  {item.category}
                </div>
              </div>
              
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-1">{item.title}</h4>
                  <p className="text-[10px] text-slate-500 font-bold uppercase">{item.software}</p>
                </div>
                <div className="w-8 h-8 flex items-center justify-center text-slate-300 group-hover:text-blue-600 transition-colors duration-200">
                  <span className="font-mono text-lg leading-none transform -rotate-45 block">→</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
