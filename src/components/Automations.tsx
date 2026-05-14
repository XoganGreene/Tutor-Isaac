import { useState } from 'react';
import { motion } from 'motion/react';
import { Calendar, MessageSquare, ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "What are your hourly rates?",
    answer: "Rates start at $75/hour for 1-on-1 tutoring. For bulk packages (10+ hours), the rate is discounted. Payment is handled securely before the session via our booking portal."
  },
  {
    question: "Do I need to own the software?",
    answer: "Yes, you must have an active license or student version of AutoCAD, SolidWorks, or Revit installed on your machine prior to our session. We do not provide software licenses."
  },
  {
    question: "How do the remote sessions work?",
    answer: "Sessions are conducted via Zoom. We utilize screen share and remote control capabilities so I can guide you precisely through your CAD interface."
  }
];

export default function Automations() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <section id="booking" className="py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-[10px] font-bold text-slate-400 mb-3 uppercase tracking-[0.2em]">Frictionless Process</h2>
          <h3 className="text-3xl md:text-4xl font-black text-slate-900 uppercase mb-4">
            Skip the back-and-forth.
          </h3>
          <p className="text-slate-500 max-w-2xl text-sm leading-relaxed">
            Book a time, tell me what you need, and let's get straight to work. No wasted emails.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Smart Intake Form */}
          <div className="bg-slate-900 text-white p-8 border-l-4 border-blue-600 flex flex-col space-y-6">
            <h4 className="text-xs font-bold uppercase tracking-widest flex items-center gap-2 mb-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              Smart Intake Form
            </h4>
            
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-[9px] uppercase text-slate-400 font-bold mb-1 block">Name</label>
                  <input type="text" className="w-full bg-slate-800 border border-slate-700 p-3 text-sm text-white focus:outline-none focus:border-blue-500" placeholder="Magezi Blessings" />
                </div>
                <div>
                  <label className="text-[9px] uppercase text-slate-400 font-bold mb-1 block">Email</label>
                  <input type="email" className="w-full bg-slate-800 border border-slate-700 p-3 text-sm text-white focus:outline-none focus:border-blue-500" placeholder="mageziblessings019@gmail.com" />
                </div>
              </div>

              <div>
                <label className="text-[9px] uppercase text-slate-400 font-bold mb-1 block">Primary Software</label>
                <select className="w-full bg-slate-800 border border-slate-700 p-3 text-sm text-white focus:outline-none focus:border-blue-500">
                  <option value="" disabled selected>Select Software</option>
                  <option value="autocad">AutoCAD</option>
                  <option value="solidworks">SolidWorks</option>
                  <option value="revit">Revit</option>
                </select>
              </div>

              <div>
                <label className="text-[9px] uppercase text-slate-400 font-bold mb-1 block">Current Skill Level</label>
                <div className="grid grid-cols-3 gap-2">
                  <label className="bg-blue-600 text-center text-[10px] py-3 uppercase font-bold cursor-pointer hover:bg-blue-500 transition-colors">
                    <input type="radio" name="level" value="beginner" className="hidden" />
                    <span>Novice</span>
                  </label>
                  <label className="bg-slate-800 text-center text-[10px] py-3 uppercase font-bold cursor-pointer hover:bg-slate-700 transition-colors border border-slate-700">
                    <input type="radio" name="level" value="intermediate" className="hidden" />
                    <span>Inter</span>
                  </label>
                  <label className="bg-slate-800 text-center text-[10px] py-3 uppercase font-bold cursor-pointer hover:bg-slate-700 transition-colors border border-slate-700">
                    <input type="radio" name="level" value="advanced" className="hidden" />
                    <span>Adv</span>
                  </label>
                </div>
              </div>

              <div>
                <label className="text-[9px] uppercase text-slate-400 font-bold mb-1 block">Primary Goal / Topic</label>
                <textarea rows={3} className="w-full bg-slate-800 border border-slate-700 p-3 text-sm text-white resize-none focus:outline-none focus:border-blue-500" placeholder="e.g. I need help preparing for the CSWA exam..."></textarea>
              </div>

              <div className="bg-slate-800 p-4 border border-slate-700">
                <p className="text-[10px] text-slate-400 uppercase font-bold mb-2">Available Slots Today</p>
                <div className="flex justify-between items-center">
                  <span className="text-xs font-mono text-white">14:00 — 17:30 EST</span>
                  <span className="text-[9px] bg-green-500/20 text-green-400 px-2 py-0.5 uppercase font-bold">Live</span>
                </div>
              </div>

              <button type="button" className="w-full bg-white text-slate-900 py-4 text-xs font-black uppercase tracking-widest hover:bg-slate-200 transition-colors">
                Continue to Booking
              </button>
            </form>
          </div>

          {/* Booking & FAQ */}
          <div className="space-y-8 flex flex-col">
            
            {/* Calendar Placeholder */}
            <div className="bg-white border border-slate-200 p-6 flex flex-col items-center justify-center text-center min-h-[250px]">
              <Calendar size={32} className="text-blue-600 mb-4" />
              <h5 className="text-xs font-bold uppercase tracking-widest text-slate-900 mb-2">Calendly Integration Setup (Phase 2)</h5>
              <p className="text-sm text-slate-500 max-w-sm leading-relaxed">
                Once connected, a real-time calendar will output here. Students can view availability, book, and pay instantly.
              </p>
            </div>

            {/* FAQ */}
            <div className="bg-white border border-slate-200 p-6 flex-grow">
              <h4 className="text-xs font-bold uppercase tracking-widest mb-6 text-slate-400 border-b border-slate-100 pb-3">Frequently Asked Questions</h4>
              <div className="space-y-3">
                {faqs.map((faq, idx) => (
                  <div key={idx} className="border border-slate-100 bg-slate-50">
                    <button 
                      onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                      className="flex items-center justify-between w-full p-4 text-left text-xs font-bold uppercase tracking-wider text-slate-900 hover:text-blue-600 transition-colors"
                    >
                      {faq.question}
                      {openFaq === idx ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </button>
                    {openFaq === idx && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        className="px-4 pb-4 text-slate-600 text-sm leading-relaxed"
                      >
                        {faq.answer}
                      </motion.div>
                    )}
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
