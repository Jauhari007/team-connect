import { FiGlobe } from 'react-icons/fi';
import { FaLinkedinIn, FaGithub, FaInstagram } from 'react-icons/fa6';

function TeamCard({ member }) {
  const { name, role, bio, photo, portfolio, linkedin, github, instagram } = member;

  return (
    <article className="group bg-white/80 backdrop-blur rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-100/80">
      <div className="flex flex-col items-center px-6 pt-8 pb-6">
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
        <p className="text-sm text-slate-600 mb-4 text-center leading-relaxed">{bio}</p>
        <div className="flex items-center gap-3">
          {portfolio && (
            <a
              href={portfolio}
              target="_blank"
              rel="noreferrer"
              className="h-9 w-9 rounded-full flex items-center justify-center bg-slate-50 text-slate-500 hover:bg-sky-500 hover:text-white transition-colors shadow-sm"
              aria-label={`${name} portfolio`}
            >
              <FiGlobe className="text-lg" />
            </a>
          )}
          {linkedin && (
            <a
              href={linkedin}
              target="_blank"
              rel="noreferrer"
              className="h-9 w-9 rounded-full flex items-center justify-center bg-slate-50 text-slate-500 hover:bg-sky-500 hover:text-white transition-colors shadow-sm"
              aria-label={`${name} LinkedIn`}
            >
              <FaLinkedinIn className="text-lg" />
            </a>
          )}
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noreferrer"
              className="h-9 w-9 rounded-full flex items-center justify-center bg-slate-50 text-slate-500 hover:bg-sky-500 hover:text-white transition-colors shadow-sm"
              aria-label={`${name} GitHub`}
            >
              <FaGithub className="text-lg" />
            </a>
          )}
          {instagram && (
            <a
              href={instagram}
              target="_blank"
              rel="noreferrer"
              className="h-9 w-9 rounded-full flex items-center justify-center bg-slate-50 text-slate-500 hover:bg-sky-500 hover:text-white transition-colors shadow-sm"
              aria-label={`${name} Instagram`}
            >
              <FaInstagram className="text-lg" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default TeamCard;
