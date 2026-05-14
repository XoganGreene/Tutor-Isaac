import { PenTool } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white py-12 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 flex items-center justify-center text-white font-bold text-xs">TI</div>
          <span className="font-bold tracking-tighter text-xl text-slate-800 uppercase">Tutor Isaac<span className="text-blue-600">.</span></span>
        </div>

        <div className="flex gap-8 text-xs font-semibold uppercase tracking-widest text-slate-500">
          <a href="#about" className="hover:text-blue-600 transition-colors">About</a>
          <a href="#portfolio" className="hover:text-blue-600 transition-colors">Portfolio</a>
          <a href="#booking" className="hover:text-blue-600 transition-colors">Booking</a>
          <a href="#" className="hover:text-blue-600 transition-colors">Contact</a>
        </div>

        <div className="text-slate-400 text-[10px] text-center md:text-right font-bold uppercase tracking-wider">
          &copy; {new Date().getFullYear()} Tutor Isaac.<br/>
          <span className="mt-1 block text-blue-600">Precision CAD Tutoring.</span>
        </div>

      </div>
    </footer>
  );
}
