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
          <p className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-xs font-medium text-sky-700 shadow-sm border border-slate-100 mb-3">
            <span className="h-1.5 w-1.5 rounded-full bg-sky-500" />
            Collaborative • Passionate • Reliable
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-3">
            Our Team
          </h1>
          <p className="text-base sm:text-lg text-slate-600 mb-2">
            Meet the amazing people behind NusaLingua BizChat AI.
          </p>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-3xl mx-auto">
            NusaLingua BizChat AI adalah jembatan komunikasi real-time antara UMKM Indonesia dan buyer global. UMKM
            cukup mengetik dalam Bahasa Indonesia — AI otomatis menerjemahkan, menyesuaikan tone bisnis, dan mengirim
            balasan dalam bahasa buyer. Buyer dari Saudi Arabia, China, Jepang, dan Amerika bisa dilayani sekaligus
            dari satu dashboard.
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
