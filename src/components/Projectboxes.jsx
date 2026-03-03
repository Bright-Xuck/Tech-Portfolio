import { Github, ExternalLink } from "lucide-react";

export default function ProjectBoxes({ id, name, description, image, tech, liveLink, githubLink, features }) {
  return (
    <div className="bg-black/40 backdrop-blur-sm border border-white/20 rounded-lg overflow-hidden hover:border-white/40 transition-all duration-300 hover:scale-105 flex flex-col">
      {/* Image Section */}
      <div className="w-full h-32 sm:h-40 md:h-48 overflow-hidden bg-black/60">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
        />
      </div>

      {/* Content Section */}
      <div className="p-4 md:p-6 flex flex-col grow">
        <h2 className="text-lg md:text-2xl font-bold text-white mb-2 md:mb-3">{name}</h2>
        
        <p className="text-white/80 text-xs md:text-sm mb-4 line-clamp-3">{description}</p>

        {/* Tech Stack */}
        <div className="mb-4">
          <h4 className="text-xs uppercase text-lime-300 font-semibold mb-2">Tech Stack</h4>
          <div className="flex flex-wrap gap-2">
            {tech && tech.map((t, index) => (
              <span key={index} className="px-2 md:px-3 py-1 bg-white/10 text-white text-xs rounded-full border border-white/20">
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Links */}
        <div className="flex gap-2 md:gap-3 pt-4 border-t border-white/10 mt-auto">
          {githubLink && (
            <a 
              href={githubLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 md:px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-all duration-300 text-xs md:text-sm"
            >
              <Github size={16} className="md:size-18" />
              <span className="hidden sm:inline">Code</span>
            </a>
          )}
          {liveLink && (
            <a 
              href={liveLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 md:px-4 py-2 bg-lime-300/20 hover:bg-lime-300/30 text-lime-300 rounded-lg transition-all duration-300 text-xs md:text-sm"
            >
              <ExternalLink size={16} className="md:size-18" />
              <span className="hidden sm:inline">Live</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
