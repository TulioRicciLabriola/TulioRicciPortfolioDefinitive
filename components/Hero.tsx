import React, { memo } from 'react';
import { useLanguage } from '../LanguageContext';

interface HeroProps {
  onNavClick: (e: React.MouseEvent<HTMLAnchorElement> | React.MouseEvent<HTMLButtonElement>, id: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavClick }) => {
  const { t } = useLanguage();

  return (
    /* AJUSTE: pt-40 para mobile (abre espaço para o Header fixo) e md:pt-32 para desktop */
    <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 pt-40 md:pt-32 overflow-hidden bg-[#0E0E11]">
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=2000&auto=format&fit=crop" 
            alt="Dense Pine Forest Atmosphere" 
            loading="eager"
            className="w-full h-full object-cover opacity-50 brightness-[0.45] saturate-[0.8] scale-105 animate-[slowZoom_40s_infinite_alternate] ease-in-out"
          />
        </div>

        <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_60%_50%,_transparent_0%,_#0E0E11_90%)]"></div>
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#0E0E11] via-transparent to-transparent opacity-80"></div>
        <div className="absolute -top-[10%] -left-[5%] w-[60%] h-[70%] bg-[radial-gradient(circle,_rgba(100,120,180,0.08)_0%,_transparent_70%)] blur-[120px] animate-pulse pointer-events-none" style={{ animationDuration: '15s' }}></div>
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none z-20" 
             style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '120px 120px' }}>
        </div>
        <div className="absolute inset-0 z-20 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      </div>

      <div className="relative z-30 max-w-4xl">
        {/* AJUSTE: mb-6 no mobile para não empurrar os botões para fora da tela */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05] mb-6 md:mb-8 tracking-tighter text-[#F1F1F1] drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)]">
          {t.hero.title1} <br />
          <span className="text-white/40">{t.hero.titleHighlight}</span> <br />
          {t.hero.title2}
        </h1>
        
        {/* AJUSTE: mb-8 no mobile */}
        <p className="text-base md:text-xl text-[#F1F1F1]/90 font-light mb-8 md:mb-12 max-w-xl leading-relaxed drop-shadow-xl">
          {t.hero.subtitle}
        </p>
        
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 md:gap-10">
          <button 
            type="button"
            onClick={(e) => onNavClick(e, 'portfolio')}
            className="w-full sm:w-auto px-10 md:px-14 py-4 md:py-5 bg-[#F1F1F1] text-black text-center font-bold uppercase tracking-[0.2em] text-[9px] md:text-[10px] hover:bg-white transition-all active:scale-95 shadow-[0_20px_50px_rgba(0,0,0,0.6)]"
          >
            {t.hero.ctaWork}
          </button>
          <button 
            type="button"
            onClick={(e) => onNavClick(e, 'contact')}
            className="w-full sm:w-auto text-[#F1F1F1]/70 hover:text-white transition-all font-bold uppercase tracking-[0.3em] text-[9px] md:text-[10px] border-b border-transparent hover:border-white/20 pb-1 text-center"
          >
            {t.hero.ctaContact}
          </button>
        </div>
      </div>
      
      {/* Botão Scroll: Escondido em telas muito pequenas (h < 600px) para limpar o visual */}
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
        @keyframes slowZoom {
          0% { transform: scale(1.0); }
          100% { transform: scale(1.1); }
        }
      `}</style>
    </section>
  );
};

export default memo(Hero);