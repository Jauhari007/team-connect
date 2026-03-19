import { motion } from 'framer-motion';
import TeamCard from '../components/TeamCard.jsx';
import { teamMembers } from '../data/teamData.js';

function Home() {
  return (
    <section id="home" className="py-10 sm:py-14 md:py-16">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="max-w-2xl mx-auto text-center mb-10 sm:mb-12 md:mb-14"
        >
          <div className="relative inline-flex items-center gap-2.5 rounded-full bg-white px-4 py-1.5 text-xs sm:text-sm font-semibold shadow-[0_8px_20px_-6px_rgba(14,165,233,0.25)] border border-sky-100 mb-6 overflow-hidden group hover:-translate-y-0.5 transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-r from-sky-50 to-violet-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-gradient-to-r from-sky-500 to-violet-500"></span>
            </span>
            <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-sky-800 via-violet-800 to-sky-800">
              Kolaboratif <span className="text-sky-300 mx-1.5 font-normal">•</span> Penuh Semangat <span className="text-sky-300 mx-1.5 font-normal">•</span> Dapat Diandalkan
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-3">
            Tim Kami
          </h1>
          <p className="text-base sm:text-lg text-slate-600 mb-2">
            Kenali orang-orang hebat di balik NusaLingua.
          </p>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-3xl mx-auto">
            NusaLingua adalah jembatan komunikasi real-time antara UMKM Indonesia dan pembeli global. UMKM cukup mengetik dalam bahasa Indonesia — AI secara otomatis menerjemahkan, menyesuaikan dengan nada bisnis, dan mengirimkan balasan dalam bahasa pembeli. Pembeli dari Arab Saudi, Tiongkok, Jepang, dan Amerika Serikat dapat dilayani secara bersamaan dari satu dasbor.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15, duration: 0.5 }}
          className="grid gap-6 sm:gap-7 md:gap-8 grid-cols-1 sm:grid-cols-2 xl:grid-cols-4"
        >
          {teamMembers.map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Home;
