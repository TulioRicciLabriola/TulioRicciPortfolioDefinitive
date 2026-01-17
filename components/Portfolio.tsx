// Substitua seu componente Portfolio por este:
import React, { useState, useCallback, memo, useEffect, useMemo } from 'react';
import { PORTFOLIO_DATA } from '../constants';
import { useLanguage } from '../LanguageContext';

const Portfolio: React.FC = () => {
  const { language, t } = useLanguage();
  const [showAll, setShowAll] = useState(false);
  const [playingId, setPlayingId] = useState<string | null>(null);
  
  const currentData = useMemo(() => PORTFOLIO_DATA[language], [language]);
  const itemsPerPage = 6;
  
  const displayedItems = showAll ? currentData : currentData.slice(0, itemsPerPage);
  const hasMore = currentData.length > itemsPerPage;

  useEffect(() => {
    const handleStopMedia = (e: any) => {
      if (e.detail?.source !== playingId) {
        setPlayingId(null);
      }
    };
    window.addEventListener('app:stop-media', handleStopMedia as EventListener);
    return () => window.removeEventListener('app:stop-media', handleStopMedia as EventListener);
  }, [playingId]);

  const handlePlay = useCallback((id: string) => {
    window.dispatchEvent(new CustomEvent('app:stop-media', { 
      detail: { source: id } 
    }));
    setPlayingId(id);
  }, []);

  const toggleShowAll = useCallback(() => {
    setPlayingId(null);
    setShowAll(prev => !prev);
  }, []);

  return (
    <section id="portfolio" className="relative py-32 px-6 md:px-12 lg:px-24 bg-[#1C1C22] overflow-hidden border-t border-white/5">
      {/* Background decorativo mantido */}
      <div className="absolute inset-0 z-0 pointer-events-none">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(circle_at_center,_rgba(100,120,255,0.04)_0%,_transparent_60%)]"></div>
         <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-[#0E0E11] to-transparent opacity-40"></div>
      </div>

      <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
        <div className="relative">
          <span className="absolute -top-10 left-0 text-[10px] font-bold uppercase tracking-[0.6em] text-white/40">Premium Sound Design</span>
          <h2 className="text-6xl md:text-8xl font-bold mb-4 tracking-tighter text-white">{t.portfolio.title}</h2>
          <div className="w-32 h-2 bg-white shadow-[0_0_30px_rgba(255,255,255,0.5)]"></div>
        </div>
        <div className="flex flex-col md:items-end">
          <p className="text-gray-300 uppercase tracking-[0.25em] text-[11px] max-w-xs md:text-right font-medium leading-loose mb-2">
            {t.portfolio.subtitle}
          </p>
        </div>
      </div>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-20">
        {displayedItems.map((item, index) => {
          const uniqueId = `video-${item.id}-${index}-${language}`;
          const isPlaying = playingId === uniqueId;

          return (
            <article key={uniqueId} className="group flex flex-col animate-[fadeIn_0.8s_ease-out_forwards]" style={{ animationDelay: `${(index % itemsPerPage) * 0.15}s` }}>
              <div 
                className="relative aspect-video overflow-hidden mb-8 bg-black border border-white/10 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.8)] cursor-pointer group-hover:border-white/30 transition-all duration-700"
                onClick={() => !isPlaying && handlePlay(uniqueId)}
              >
                {isPlaying ? (
                  <div className="w-full h-full bg-black">
                    <video 
                      src={item.mp4Url} 
                      poster={item.thumbnail} 
                      controls 
                      autoPlay 
                      className="w-full h-full object-contain"
                    >
                      Vídeo de Portfólio - {item.title} - Tulio Ricci Audio Engineering.
                    </video>
                  </div>
                ) : (
                  <div className="w-full h-full relative group">
                    <img 
                      src={item.thumbnail} 
                      alt={`Case de Áudio e Sound Design: ${item.title} | Finalização por Tulio Ricci`} 
                      loading="lazy" 
                      className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-all duration-1000" 
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                       <div className="w-16 h-16 rounded-full bg-white text-black flex items-center justify-center scale-90 group-hover:scale-100 transition-transform duration-500 shadow-2xl">
                          <svg className="w-6 h-6 ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                       </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="flex flex-col">
                <header>
                  <span className="text-[10px] text-white/30 font-mono mb-2 tracking-[0.4em] uppercase block">Selected Case Study</span>
                  <h3 className="text-2xl font-bold tracking-tight text-white mb-3 uppercase leading-tight">{item.title}</h3>
                </header>
                <p className="text-gray-400 text-[14px] leading-relaxed font-light border-l border-white/20 pl-5">{item.description}</p>
              </div>
            </article>
          );
        })}
      </div>
      
      {hasMore && (
        <div className="relative z-10 mt-32 flex justify-center">
          <button onClick={toggleShowAll} className="group relative px-20 py-6 border border-white/10 bg-white/5 text-[11px] font-bold uppercase tracking-[0.5em] hover:border-white transition-all rounded-full overflow-hidden">
            <span className="relative z-10 group-hover:text-black">{showAll ? t.portfolio.showLess : t.portfolio.showMore}</span>
            <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
          </button>
        </div>
      )}
    </section>
  );
};

export default memo(Portfolio);