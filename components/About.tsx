
import React, { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../LanguageContext';

const About: React.FC = () => {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const [saturation, setSaturation] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!imageRef.current) return;
      
      const rect = imageRef.current.getBoundingClientRect();
      const viewportCenter = window.innerHeight / 2;
      const elementCenter = rect.top + rect.height / 2;
      
      const distanceFromCenter = Math.abs(viewportCenter - elementCenter);
      const maxDistance = 600; 
      const rawSaturation = 1 - Math.min(distanceFromCenter / maxDistance, 1);
      const easedSaturation = Math.pow(rawSaturation, 1.5);
      
      setSaturation(easedSaturation);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      ref={sectionRef} 
      id="about" 
      className="py-12 md:py-16 px-6 md:px-12 lg:px-24 bg-[#0E0E11] border-b border-white/5 relative overflow-hidden"
    >
      {/* Background Decorativo */}
      <div className="absolute top-0 right-[18%] w-[1px] h-full bg-white/[0.02] hidden lg:block"></div>
      
      <div className="max-w-[1440px] mx-auto relative z-10">
        
        {/* Header Principal */}
        <header className="mb-12 md:mb-16 relative">
          <span className="text-[10px] md:text-[12px] font-bold uppercase tracking-[0.5em] text-white/40 block mb-4">
            {t.about.label}
          </span>
          <h2 className="text-6xl md:text-9xl font-bold tracking-tighter text-white uppercase leading-none mb-6">
            {t.about.title}
          </h2>
          <div className="flex items-center gap-6">
            <div className="w-20 h-[2px] bg-white"></div>
            <p className="text-[11px] md:text-[14px] font-medium uppercase tracking-[0.2em] text-white/70 block max-w-2xl leading-relaxed">
              {t.about.subtitle}
            </p>
          </div>
        </header>

        {/* Layout de Conteúdo */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* Coluna 1: Imagem de Perfil */}
          <div className="lg:col-span-3">
            <div 
              ref={imageRef}
              className="relative aspect-square md:aspect-[4/5] overflow-hidden bg-[#16161A] border border-white/10 shadow-2xl transition-transform duration-500 max-w-[280px] mx-auto lg:mx-0"
            >
              <img 
                src="https://raw.githubusercontent.com/TulioRicciLabriola/TulioRicciPortfolio/main/profile/linkedin.jpg" 
                alt="Tulio Ricci - Engenheiro de Som e Especialista em Inovação em IA" 
                className="w-full h-full object-cover transition-all duration-300"
                style={{ 
                  filter: `grayscale(${100 - saturation * 100}%) brightness(${0.7 + saturation * 0.3})`,
                  opacity: 0.7 + saturation * 0.3
                }}
                loading="lazy"
              />
            </div>
          </div>

          {/* Coluna 2: Biografia Profissional */}
          <div className="lg:col-span-5 flex flex-col">
            <article className="text-[12px] md:text-[13.5px] text-white/90 font-light leading-relaxed tracking-wide border-l-2 border-white/10 pl-8 md:pl-12 whitespace-pre-line">
              {t.about.intro}
            </article>
          </div>

          {/* Coluna 3: Reconhecimento e Prêmios */}
          <div className="lg:col-span-4 flex flex-col bg-white/[0.02] p-8 border border-white/5">
            <div className="mb-8 flex items-center justify-between">
              <h3 className="text-[11px] font-bold uppercase tracking-[0.3em] text-white">
                {t.about.awardsTitle}
              </h3>
              <span className="text-[10px] text-white/20 font-mono">EST. 2015</span>
            </div>

            <div className="space-y-8">
              {t.about.awards.map((award, idx) => (
                <div key={idx} className="group">
                  <span className="text-[10px] font-bold text-white/40 uppercase tracking-[0.2em] block mb-2 group-hover:text-white transition-colors">
                    {award.label}
                  </span>
                  <p className="text-[14px] text-white/80 font-medium leading-snug tracking-tight">
                    {award.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Manifesto Final e Assinatura - Altura reduzida e sem risquinho */}
        <div className="mt-12 md:mt-16 pt-8 border-t border-white/10 text-center relative">
          <blockquote className="text-base md:text-xl lg:text-2xl font-bold text-white italic tracking-tighter leading-tight max-w-5xl mx-auto mb-8">
            "{t.about.quote}"
          </blockquote>
          
          <div className="flex flex-col items-center">
             <p className="text-[10px] md:text-[12px] uppercase tracking-[0.6em] text-white/30 font-black">
                Tulio Ricci &bull; Audio Post-Production &bull; AI Innovation
             </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
