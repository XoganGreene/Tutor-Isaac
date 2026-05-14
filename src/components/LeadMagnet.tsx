import { Download } from 'lucide-react';

export default function LeadMagnet() {
  return (
    <section className="bg-white border-y border-slate-200 py-24 relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-[0.03]">
         {/* Subtle blueprint lines background */}
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#2563eb" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-[10px] font-bold text-blue-600 uppercase tracking-widest mb-4">Free Resource</h2>
        <h3 className="text-3xl md:text-4xl font-black text-slate-900 mb-6 uppercase tracking-tight">
          Not ready for a session yet?
        </h3>
        <p className="text-slate-500 mb-10 text-sm max-w-2xl mx-auto leading-relaxed">
          Get my free comprehensive guide: <strong className="text-slate-900">"The Top 50 AutoCAD Keyboard Shortcuts"</strong>. Designed to immediately speed up your drafting workflow.
        </p>

        <form className="flex flex-col sm:flex-row max-w-xl mx-auto border border-slate-300 shadow-sm" onSubmit={(e) => e.preventDefault()}>
          <input 
            type="email" 
            placeholder="Enter your email address" 
            className="flex-1 bg-white text-slate-900 px-6 py-4 text-sm focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-blue-600 transition-colors"
            required
          />
          <button 
            type="submit"
            className="bg-slate-900 text-white px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-blue-600 transition-colors flex items-center justify-center gap-2 whitespace-nowrap"
          >
            <Download size={14} />
            Get PDF
          </button>
        </form>
        <p className="text-slate-400 text-xs mt-4 font-mono font-bold uppercase tracking-wider text-center">No spam. Unsubscribe at any time.</p>
      </div>
    </section>
  );
}
