import { FiGlobe } from 'react-icons/fi';
import { FaLinkedinIn, FaGithub, FaInstagram } from 'react-icons/fa6';

function TeamCard({ member }) {
  const { name, role, bio, photo, portfolio, linkedin, github, instagram } = member;

  return (
    <article className="group relative h-full flex flex-col overflow-hidden bg-white/80 backdrop-blur rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 w-full border border-slate-100/80">
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-sky-500 via-violet-500 to-sky-400 opacity-80" />
      <div className="flex flex-col flex-1 items-center px-3 sm:px-5 pt-9 pb-6">
        <div className="relative mb-4">
          <div className="h-24 w-24 rounded-full overflow-hidden border-4 border-white shadow-md">
            <img
              src={photo}
              alt={name}
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="absolute -bottom-1 -right-1 h-6 w-6 rounded-full bg-gradient-to-br from-sky-500 to-violet-500 border-2 border-white" />
        </div>
        <h3 className="text-lg font-semibold text-slate-900 mb-1 text-center">{name}</h3>
        <p className="text-sm font-medium text-sky-600 mb-3 text-center">{role}</p>
        <p className="text-sm text-slate-600 mb-6 text-center leading-relaxed">{bio}</p>
        <div className="flex items-center justify-center space-x-2 sm:space-x-3 xl:space-x-2 mt-auto w-full pt-2">
          {portfolio && (
            <a
              href={portfolio}
              target="_blank"
              rel="noreferrer"
              className="group flex flex-col items-center gap-1 text-[10px] xl:text-[9px] 2xl:text-[11px] sm:text-[11px] font-medium text-slate-500 hover:text-sky-600 transition-colors"
              aria-label={`${name} portfolio`}
            >
              <span className="h-8 w-8 sm:h-9 sm:w-9 xl:h-8 xl:w-8 2xl:h-9 2xl:w-9 rounded-full flex items-center justify-center bg-slate-50 text-slate-500 shadow-sm transition-colors group-hover:bg-sky-500 group-hover:text-white">
                <FiGlobe className="text-base sm:text-lg xl:text-base 2xl:text-lg" />
              </span>
              <span>Portfolio</span>
            </a>
          )}
          {linkedin && (
            <a
              href={linkedin}
              target="_blank"
              rel="noreferrer"
              className="group flex flex-col items-center gap-1 text-[10px] xl:text-[9px] 2xl:text-[11px] sm:text-[11px] font-medium text-slate-500 hover:text-sky-600 transition-colors"
              aria-label={`${name} LinkedIn`}
            >
              <span className="h-8 w-8 sm:h-9 sm:w-9 xl:h-8 xl:w-8 2xl:h-9 2xl:w-9 rounded-full flex items-center justify-center bg-slate-50 text-slate-500 shadow-sm transition-colors group-hover:bg-sky-500 group-hover:text-white">
                <FaLinkedinIn className="text-base sm:text-lg xl:text-base 2xl:text-lg" />
              </span>
              <span>LinkedIn</span>
            </a>
          )}
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noreferrer"
              className="group flex flex-col items-center gap-1 text-[10px] xl:text-[9px] 2xl:text-[11px] sm:text-[11px] font-medium text-slate-500 hover:text-sky-600 transition-colors"
              aria-label={`${name} GitHub`}
            >
              <span className="h-8 w-8 sm:h-9 sm:w-9 xl:h-8 xl:w-8 2xl:h-9 2xl:w-9 rounded-full flex items-center justify-center bg-slate-50 text-slate-500 shadow-sm transition-colors group-hover:bg-sky-500 group-hover:text-white">
                <FaGithub className="text-base sm:text-lg xl:text-base 2xl:text-lg" />
              </span>
              <span>GitHub</span>
            </a>
          )}
          {instagram && (
            <a
              href={instagram}
              target="_blank"
              rel="noreferrer"
              className="group flex flex-col items-center gap-1 text-[10px] xl:text-[9px] 2xl:text-[11px] sm:text-[11px] font-medium text-slate-500 hover:text-sky-600 transition-colors"
              aria-label={`${name} Instagram`}
            >
              <span className="h-8 w-8 sm:h-9 sm:w-9 xl:h-8 xl:w-8 2xl:h-9 2xl:w-9 rounded-full flex items-center justify-center bg-slate-50 text-slate-500 shadow-sm transition-colors group-hover:bg-sky-500 group-hover:text-white">
                <FaInstagram className="text-base sm:text-lg xl:text-base 2xl:text-lg" />
              </span>
              <span>Instagram</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default TeamCard;
