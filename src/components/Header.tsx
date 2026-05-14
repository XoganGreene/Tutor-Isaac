export default function Header() {
  return (
    <header className="flex justify-between items-center px-6 lg:px-8 py-4 bg-white border-b border-slate-200">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-blue-600 flex items-center justify-center text-white font-bold text-xs">TI</div>
        <span className="font-bold tracking-tighter text-xl text-slate-800 uppercase">Tutor Isaac<span className="text-blue-600">.</span></span>
      </div>
      <nav className="hidden md:flex gap-8 text-xs font-semibold uppercase tracking-widest text-slate-500">
        <a href="#about" className="hover:text-blue-600 transition-colors">About</a>
        <a href="#portfolio" className="hover:text-blue-600 transition-colors">Portfolio</a>
        <a href="#booking" className="hover:text-blue-600 transition-colors">Booking</a>
      </nav>
      <a href="#booking" className="bg-slate-900 text-white px-5 py-2 text-xs font-bold uppercase tracking-wider hover:bg-blue-600 transition-colors">
        Book a Session
      </a>
    </header>
  );
}
