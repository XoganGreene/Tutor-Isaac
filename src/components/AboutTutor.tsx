import { motion } from 'motion/react';

export default function AboutTutor() {
  return (
    <section id="about" className="py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Image side */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative aspect-square md:aspect-[4/5] bg-white border border-slate-200 p-2 shadow-sm">
              <img 
                src={`${import.meta.env.BASE_URL}tutor-isaac.png`} 
                alt="Tutor Isaac" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500 bg-slate-100"
              />
              <div className="absolute -bottom-4 -right-4 bg-blue-600 text-white text-[10px] font-bold uppercase tracking-widest px-4 py-2 border border-blue-700 shadow-sm z-10">
                Lead Instructor
              </div>
            </div>
          </motion.div>
          
          {/* Content side */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] mb-3 text-slate-400 flex items-center gap-2">
              <span className="w-8 h-[1px] bg-blue-600"></span> About Your Instructor
            </h2>
            <h3 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight uppercase leading-none mb-6">
              Meet Isaac.
            </h3>
            
            <div className="space-y-6 text-slate-500 text-sm leading-relaxed mb-10">
              <p>
                With years of hands-on experience in drafting, 3D modeling, and engineering design, my goal is simple: to bridge the gap between academic theory and real-world execution. I've helped countless students and professionals turn their software bottlenecks into competitive advantages.
              </p>
              <p>
                I don't just teach you where the buttons are. I teach you the most efficient workflows, industry standards, and the critical shortcuts that will save you hundreds of hours on your final projects and in your future career.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://wa.me/256705381618" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-[#25D366] text-white px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-[#128C7E] transition-colors duration-200 border border-[#25D366] hover:border-[#128C7E] shadow-sm"
              >
                <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                Chat on WhatsApp
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
