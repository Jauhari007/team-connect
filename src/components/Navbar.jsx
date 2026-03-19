function Navbar() {
  return (
    <header className="sticky top-0 z-20 bg-gradient-to-r from-white/80 via-sky-50/80 to-violet-50/80 backdrop-blur border-b border-slate-100">
      <nav className="container-page flex items-center justify-between py-4">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-2xl bg-gradient-to-br from-sky-500 to-violet-500 flex items-center justify-center text-white font-semibold shadow-md">
            NB
          </div>
          <span className="text-lg sm:text-xl font-semibold tracking-tight text-slate-900">
            NusaLingua BizChat AI
          </span>
        </div>
        <ul className="hidden sm:flex items-center gap-6 text-sm font-medium text-slate-600">
          <li>
            <a href="#home" className="hover:text-slate-900 transition-colors">
              Home
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
