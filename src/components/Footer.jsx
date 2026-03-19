function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-100 bg-white/70 backdrop-blur py-4 mt-10">
      <div className="container-page text-center text-xs sm:text-sm text-slate-500">
        © {year} NusaLingua BizChat AI. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
