
import React, { useState, useCallback, memo, useEffect } from 'react';
import { PORTFOLIO_DATA } from '../constants';
import { useLanguage } from '../LanguageContext';

const Portfolio: React.FC = () => {
  const { language, t } = useLanguage();
  const [showAll, setShowAll] = useState(false);
  const [playingId, setPlayingId] = useState<string | null>(null);
  
  const currentData = PORTFOLIO_DATA[language];
  const itemsPerPage = 6;
  
  const displayedItems = showAll ? currentData : currentData.slice(0, itemsPerPage);
  const hasMore = currentData.length > itemsPerPage;

  // Listen for global stop media event
  useEffect(() => {
    const handleStopMedia = (e: any) => {
      // If the event came from a different source, stop this video
      if (e.detail?.source !== playingId) {
        setPlayingId(null);
      }
    };

    window.addEventListener('app:stop-media', handleStopMedia as EventListener);
    return () => window.removeEventListener('app:stop-media', handleStopMedia as EventListener);
  }, [playingId]);

  const handlePlay = useCallback((id: string) => {
    // Notify others to stop, identifying this video as the current source
    window.dispatchEvent(new CustomEvent('app:stop-media', { 
      detail: { source: id } 
    }));
    setPlayingId(id);
  }, []);

  return (
    <section id="portfolio" className="relative py-32 px-6 md:px-12 lg:px-24 bg-[#1C1C22] overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 z-0 pointer-events-none">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(circle_at_center,_rgba(100,120,255,0.04)_0%,_transparent_60%)]"></div>
         <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-[#0E0E11] to-transparent opacity-40"></div>
         <div className="absolute inset-0 opacity-[0.02] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      </div>

      <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
        <div className="relative">
          <span className="absolute -top-10 left-0 text-[10px] font-bold uppercase tracking-[0.6em] text-white/40">Portfolio Showcase</span>
          <h2 className="text-6xl md:text-8xl font-bold mb-4 tracking-tighter text-white drop-shadow-lg">{t.portfolio.title}</h2>
          <div className="w-32 h-2 bg-white shadow-[0_0_30px_rgba(255,255,255,0.5)]"></div>
        </div>
        <div className="flex flex-col md:items-end">
          <p className="text-gray-300 uppercase tracking-[0.25em] text-[11px] max-w-xs md:text-right font-medium leading-loose mb-2">
            {t.portfolio.subtitle}
          </p>
          <div className="hidden md:block w-12 h-[1px] bg-white/20"></div>
        </div>
      </div>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-20">
        {displayedItems.map((item, index) => {
          const uniqueId = `video-${item.id}-${index}`;
          const isPlaying = playingId === uniqueId;

          return (
            <article 
              key={uniqueId} 
              className="group flex flex-col animate-[fadeIn_0.8s_ease-out_forwards]"
              style={{ animationDelay: `${(index % itemsPerPage) * 0.15}s` }}
            >
              <div 
                className="relative aspect-video overflow-hidden mb-8 bg-black border border-white/10 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.8)] cursor-pointer group-hover:border-white/30 transition-all duration-700"
                onClick={() => !isPlaying && handlePlay(uniqueId)}
              >
                {isPlaying ? (
                  <div className="w-full h-full bg-black animate-[videoFadeIn_0.5s_ease]">
                    <video 
                      src={item.mp4Url} 
                      poster={item.thumbnail}
                      controls 
                      autoPlay 
                      playsInline
                      preload="auto"
                      className="w-full h-full object-contain"
                      onPlay={() => {
                        window.dispatchEvent(new CustomEvent('app:stop-media', { 
                          detail: { source: uniqueId } 
                        }));
                      }}
                    >
                      Seu navegador não suporta a reprodução de vídeo.
                    </video>
                  </div>
                ) : (
                  <div className="w-full h-full relative overflow-hidden group">
                    <img 
                      src={item.thumbnail} 
                      alt={`${item.title} Preview`}
                      loading="lazy"
                      className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-700"></div>
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                       <div className="w-20 h-20 rounded-full border border-white/20 flex items-center justify-center bg-black/40 backdrop-blur-md group-hover:bg-white group-hover:border-white transition-all duration-500 scale-90 group-hover:scale-100 shadow-2xl">
                          <svg className="w-8 h-8 text-white group-hover:text-black ml-1.5 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                       </div>
                    </div>
                    <div className="absolute bottom-6 right-6 px-4 py-2 bg-black/60 backdrop-blur-md border border-white/10 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                      <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/90">{t.portfolio.preview}</span>
                    </div>
                  </div>
                )}
              </div>
              
              <div className="flex items-start justify-between mb-4">
                <div className="flex flex-col">
                  <span className="text-[11px] text-white/20 font-mono mb-2 tracking-[0.4em] uppercase group-hover:text-white/40 transition-colors">Project #0{index + 1}</span>
                  <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-white/90 group-hover:text-white transition-colors uppercase leading-tight">{item.title}</h3>
                </div>
              </div>
              
              <p className="text-gray-400 text-[14px] leading-relaxed line-clamp-2 font-light border-l border-white/10 pl-5 py-1 group-hover:border-white/30 transition-colors">
                {item.description}
              </p>
            </article>
          );
        })}
      </div>
      
      {hasMore && (
        <div className="relative z-10 mt-32 flex justify-center">
          <button 
            type="button"
            onClick={() => {
              if (showAll) {
                const portElement = document.getElementById('portfolio');
                if (portElement) portElement.scrollIntoView({ behavior: 'smooth' });
                setTimeout(() => setShowAll(false), 600);
              } else {
                setShowAll(true);
              }
            }}
            className="group relative px-20 py-6 border border-white/10 bg-white/5 text-[11px] font-bold uppercase tracking-[0.5em] hover:border-white transition-all min-w-[300px] rounded-full overflow-hidden active:scale-95 shadow-xl"
          >
            <span className="relative z-10 transition-colors group-hover:text-black">
              {showAll ? t.portfolio.showLess : t.portfolio.showMore}
            </span>
            <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]"></div>
          </button>
        </div>
      )}

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes videoFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </section>
  );
};

export default memo(Portfolio);
