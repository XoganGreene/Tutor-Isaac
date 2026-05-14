import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    quote: "Isaac helped me master SolidWorks assemblies right before my final project deadline. Clear, precise, and cut out the fluff. My grade went from a C to an A.",
    author: "James T.",
    role: "Engineering Student",
    software: "SolidWorks"
  },
  {
    id: 2,
    quote: "I needed to transition to Revit for a new architecture role. The practical examples and workflow tips saved me hundreds of hours of frustration.",
    author: "Sarah M.",
    role: "Junior Architect",
    software: "Revit"
  },
  {
    id: 3,
    quote: "The AutoCAD drafting shortcuts and best practices Isaac taught me have completely revolutionized my daily workflow. Worth every penny.",
    author: "Michael R.",
    role: "Drafting Technician",
    software: "AutoCAD"
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-[10px] font-bold text-slate-400 mb-3 uppercase tracking-[0.2em] text-center">Social Proof</h2>
          <h3 className="text-3xl md:text-4xl font-black text-slate-900 uppercase">
            Results that speak for themselves.
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={testimonial.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-blue-50 p-8 border border-blue-100 flex flex-col justify-center relative transition-all duration-300"
            >
              <div className="text-blue-200 absolute top-4 left-4 z-0">
                <Quote size={40} className="fill-current" strokeWidth={0} />
              </div>
              <div className="relative z-10">
                <p className="italic text-blue-900 text-sm leading-relaxed mb-8">
                  "{testimonial.quote}"
                </p>
              </div>
              
              <div className="pt-6 border-t border-blue-200 flex items-center justify-between mt-auto">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-200"></div>
                  <div>
                    <div className="text-xs font-bold text-blue-900">{testimonial.author}</div>
                    <div className="text-[9px] text-blue-600 uppercase font-semibold tracking-wider">{testimonial.role}</div>
                  </div>
                </div>
                <div className="text-[8px] font-bold text-blue-600 uppercase tracking-widest border border-blue-200 px-2 py-1 bg-white">
                  {testimonial.software}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
