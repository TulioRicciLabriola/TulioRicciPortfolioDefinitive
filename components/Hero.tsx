import React, { memo, useState, useEffect, useMemo } from 'react';
import { useLanguage } from '../LanguageContext';
import { PORTFOLIO_DATA } from '../constants';

interface HeroProps {
  onNavClick: (e: React.MouseEvent<HTMLAnchorElement> | React.MouseEvent<HTMLButtonElement>, id: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavClick }) => {
  const { t, language } = useLanguage();
  const [currentThumbIndex, setCurrentThumbIndex] = useState(0);

  const thumbnails = useMemo(() => {
    return PORTFOLIO_DATA[language].map(item => item.thumbnail);
  }, [language]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentThumbIndex((prev) => (prev + 1) % thumbnails.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [thumbnails.length]);

  return (
    <section className="relative min-h-screen md:min-h-screen lg:min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 pt-28 md:pt-32 overflow-hidden bg-[#0E0E11]" style={{ minHeight: '100dvh' }}>
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        
        {/* CAMADA 1: Floresta Estática (Fundo Base) */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=2000&auto=format&fit=crop" 
            alt="Fundo ambiental Tulio Ricci Audio Post" 
            className="w-full h-full object-cover opacity-20 brightness-[0.3] saturate-[0.3] scale-110"
          />
        </div>

        {/* CAMADA 2: Showreel de Thumbnails (Sincronizado e Sem Resets) */}
        <div className="absolute inset-0 z-10 overflow-hidden">
          {thumbnails.map((thumb, idx) => (
            <div 
              key={idx}
              className={`absolute inset-0 transition-opacity duration-[2500ms] ease-in-out ${
                idx === currentThumbIndex ? 'opacity-70' : 'opacity-0'
              }`}
            >
              <img 
                src={thumb} 
                alt={`Trabalho de Áudio Publicitário ${idx + 1}`} 
                className="w-full h-full object-cover mix-blend-lighten brightness-[0.7] saturate-[0.9] animate-kenburns-constant"
                style={{ 
                  willChange: 'transform, opacity',
                  backfaceVisibility: 'hidden',
                  transform: 'translate3d(0,0,0)'
                }}
              />
            </div>
          ))}
        </div>

        {/* CAMADA 3: Overlays de Design para Contraste */}
        <div className="absolute inset-0 z-20 bg-[radial-gradient(circle_at_60%_50%,_transparent_0%,_#0E0E11_95%)]"></div>
        <div className="absolute inset-0 z-20 bg-gradient-to-t from-[#0E0E11] via-transparent to-transparent opacity-95"></div>
        
        <div className="absolute -top-[10%] -left-[5%] w-[60%] h-[70%] bg-[radial-gradient(circle,_rgba(100,120,180,0.12)_0%,_transparent_70%)] blur-[120px] animate-pulse pointer-events-none z-20" style={{ animationDuration: '10s' }}></div>
        <div className="absolute inset-0 z-25 opacity-[0.05] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      </div>

      {/* Conteúdo Principal (Letreiro Superior) */}
      <div className="relative z-30 max-w-4xl">
        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05] mb-6 md:mb-8 tracking-tighter text-[#F1F1F1] drop-shadow-[0_10px_40px_rgba(0,0,0,1)]">
          {t.hero.title1} <br />
          <span className="text-white/40">{t.hero.titleHighlight}</span> <br />
          {t.hero.title2}
        </h1>
        
        <p className="text-sm md:text-xl text-[#F1F1F1]/95 font-light mb-8 md:mb-12 max-w-xl leading-relaxed drop-shadow-[0_5px_20px_rgba(0,0,0,1)]">
          {t.hero.subtitle}
        </p>
        
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 md:gap-10">
          <button 
            type="button"
            onClick={(e) => onNavClick(e, 'portfolio')}
            className="w-full sm:w-auto px-10 md:px-14 py-4 md:py-5 bg-[#F1F1F1] text-black text-center font-bold uppercase tracking-[0.2em] text-[9px] md:text-[10px] hover:bg-white transition-all active:scale-95 shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
          >
            {t.hero.ctaWork}
          </button>
          <button 
            type="button"
            onClick={(e) => onNavClick(e, 'contact')}
            className="w-full sm:w-auto text-[#F1F1F1]/80 hover:text-white transition-all font-bold uppercase tracking-[0.3em] text-[9px] md:text-[10px] border-b border-transparent hover:border-white/20 pb-1 text-center"
          >
            {t.hero.ctaContact}
          </button>
        </div>
      </div>
      
      {/* Indicador de Scroll */}
      <button 
        type="button"
        onClick={(e) => onNavClick(e, 'portfolio')}
        className="absolute bottom-8 md:bottom-12 left-6 md:left-12 lg:left-24 hidden xs:flex items-center gap-6 group cursor-pointer z-30 opacity-40 hover:opacity-100 transition-opacity"
      >
        <span className="text-[8px] uppercase tracking-[0.5em] font-bold text-[#F1F1F1]">Scroll</span>
        <div className="w-12 md:w-16 h-[1px] bg-white/20 relative overflow-hidden">
           <div className="absolute top-0 left-0 w-full h-full bg-white animate-[scrollLine_3s_infinite]"></div>
        </div>
      </button>

      <style>{`
        @keyframes scrollLine {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        @keyframes kenburns-constant {
          0% { transform: scale(1.05) translate(0, 0); }
          100% { transform: scale(1.2) translate(-1%, -0.5%); }
        }
        .animate-kenburns-constant {
          animation: kenburns-constant 12s linear infinite alternate;
        }
      `}</style>
    </section>
  );
};

export default memo(Hero);