
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
      
      // Distância do centro da viewport (0 = perfeitamente centralizado)
      const distanceFromCenter = Math.abs(viewportCenter - elementCenter);
      
      // Quanto mais perto do centro (distância 0), mais saturação (100%)
      const maxDistance = 600; 
      const rawSaturation = 1 - Math.min(distanceFromCenter / maxDistance, 1);
      
      // Aplicar uma curva para suavizar a transição
      const easedSaturation = Math.pow(rawSaturation, 1.5);
      
      setSaturation(easedSaturation);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Inicializar

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      ref={sectionRef} 
      id="about" 
      className="py-10 md:py-12 px-6 md:px-12 lg:px-24 bg-[#0E0E11] border-b border-white/5 relative overflow-hidden"
    >
      {/* Linha Decorativa Minimalista Vertical */}
      <div className="absolute top-0 right-[18%] w-[1px] h-full bg-white/[0.02] hidden lg:block"></div>
      
      <div className="max-w-[1440px] mx-auto relative z-10">
        
        {/* Header Compacto e Elegante */}
        <div className="mb-8 md:mb-12 relative">
          <h2 className="text-6xl md:text-9xl font-bold tracking-tighter text-white uppercase leading-none mb-3">{t.about.title}</h2>
          <div className="flex items-center gap-6">
            <div className="w-12 h-[1px] bg-white/30"></div>
            <span className="text-[10px] md:text-[13px] font-semibold uppercase tracking-[0.25em] text-white/60 block max-w-2xl leading-relaxed">
              {t.about.subtitle}
            </span>
          </div>
        </div>

        {/* Layout Principal - Imagem ajustada para ser ligeiramente menor */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Coluna 1: Imagem com Saturação Reativa ao Scroll - Ajustado max-width e aspect ratio */}
          <div className="lg:col-span-3">
            <div 
              ref={imageRef}
              className="relative aspect-square md:aspect-[4/4.5] overflow-hidden bg-[#16161A] border border-white/10 shadow-[0_30px_80px_-15px_rgba(0,0,0,0.9)] transition-transform duration-500 max-w-[280px] lg:max-w-full mx-auto lg:mx-0"
            >
              <img 
                src="https://raw.githubusercontent.com/TulioRicciLabriola/TulioRicciPortfolio/main/profile/linkedin.jpg" 
                alt="Tulio Ricci Labriola" 
                className="w-full h-full object-cover transition-all duration-300 ease-out"
                style={{ 
                  filter: `grayscale(${100 - saturation * 100}%) brightness(${0.6 + saturation * 0.4})`,
                  opacity: 0.6 + saturation * 0.4
                }}
                loading="lazy"
              />
              <div 
                className="absolute inset-0 bg-gradient-to-t from-[#0E0E11] via-transparent to-transparent pointer-events-none"
                style={{ opacity: 1 - saturation }}
              ></div>
            </div>
          </div>

          {/* Coluna 2: Biografia */}
          <div className="lg:col-span-5 flex flex-col pt-1">
            <div className="text-[14px] md:text-[16px] text-white/80 font-light leading-relaxed tracking-wide border-l border-white/20 pl-8 md:pl-10 whitespace-pre-line italic">
              {t.about.intro}
            </div>
          </div>

          {/* Coluna 3: Reconhecimento */}
          <div className="lg:col-span-4 flex flex-col">
            <div className="mb-6 flex items-center gap-4">
              <h3 className="text-[11px] font-bold uppercase tracking-[0.3em] text-white/90 whitespace-nowrap">
                {t.about.awardsTitle}
              </h3>
              <div className="flex-1 h-[1px] bg-white/30"></div>
            </div>

            <div className="space-y-7">
              {t.about.awards.map((award, idx) => (
                <div key={idx} className="group transition-all">
                  <span className="text-[10px] font-bold text-white/60 uppercase tracking-[0.15em] block mb-1.5 transition-colors duration-300 group-hover:text-white">
                    {award.label}
                  </span>
                  <p className="text-[13px] md:text-[14px] text-white/90 font-light leading-snug tracking-tight transition-colors duration-300 group-hover:text-white">
                    {award.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Manifesto Final */}
        <div className="mt-12 md:mt-14 pt-8 border-t border-white/5 text-center">
          <blockquote className="text-lg md:text-2xl lg:text-3xl font-bold text-white/90 italic tracking-tighter leading-snug max-w-4xl mx-auto">
            {t.about.quote}
          </blockquote>
        </div>

      </div>
    </section>
  );
};

export default About;
