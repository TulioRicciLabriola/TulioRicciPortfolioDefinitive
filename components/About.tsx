
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
      // Quanto mais longe (ex: 500px), menos saturação (0%)
      const maxDistance = 600; 
      const rawSaturation = 1 - Math.min(distanceFromCenter / maxDistance, 1);
      
      // Aplicar uma curva para suavizar a transição (opcional)
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
      className="py-12 md:py-16 px-6 md:px-12 lg:px-24 bg-[#0E0E11] border-b border-white/5 relative overflow-hidden"
    >
      {/* Background Decor Minimalista */}
      <div className="absolute top-0 right-[15%] w-[1px] h-full bg-white/[0.02] hidden lg:block"></div>
      
      {/* Content wrapper com largura estendida para achatar */}
      <div className="max-w-[1440px] mx-auto relative z-10">
        
        {/* Header Compacto */}
        <div className="mb-10 md:mb-14 relative">
          <h2 className="text-6xl md:text-9xl font-bold tracking-tighter text-white uppercase leading-none mb-4">{t.about.title}</h2>
          <div className="flex items-center gap-6">
            <div className="w-12 h-[2px] bg-white"></div>
            <span className="text-[10px] md:text-[14px] font-bold uppercase tracking-[0.3em] text-white/70 block max-w-3xl leading-tight">
              {t.about.subtitle}
            </span>
          </div>
        </div>

        {/* Layout Principal: Otimização horizontal máxima */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Coluna 1: Imagem com Reação à Centralização */}
          <div className="lg:col-span-3">
            <div 
              ref={imageRef}
              className="relative aspect-[4/5] overflow-hidden bg-[#16161A] border border-white/10 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.8)]"
            >
              <img 
                src="https://raw.githubusercontent.com/TulioRicciLabriola/TulioRicciPortfolio/main/profile/linkedin.jpg" 
                alt="Tulio Ricci Labriola" 
                className="w-full h-full object-cover transition-all duration-300 ease-out"
                style={{ 
                  filter: `grayscale(${100 - saturation * 100}%) brightness(${0.5 + saturation * 0.5})`,
                  opacity: 0.5 + saturation * 0.5
                }}
                loading="lazy"
              />
              <div 
                className="absolute inset-0 bg-gradient-to-t from-[#0E0E11] via-transparent to-transparent pointer-events-none"
                style={{ opacity: 1 - saturation }}
              ></div>
            </div>
          </div>

          {/* Coluna 2: Biografia (Texto Clean e Fluido) */}
          <div className="lg:col-span-5 flex flex-col pt-2">
            <div className="text-[15px] md:text-[18px] text-white/85 font-light leading-relaxed tracking-wide border-l border-white/20 pl-8 md:pl-12 whitespace-pre-line italic">
              {t.about.intro}
            </div>
          </div>

          {/* Coluna 3: Prêmios (Organização horizontal interna) */}
          <div className="lg:col-span-4 flex flex-col">
            <div className="mb-8">
              <h3 className="text-[12px] font-bold uppercase tracking-[0.4em] text-white mb-4 heading-font">
                {t.about.awardsTitle}
              </h3>
              <div className="w-full h-[1px] bg-white/20"></div>
            </div>

            <div className="space-y-8">
              {t.about.awards.map((award, idx) => (
                <div key={idx} className="group">
                  <span className="text-[11px] font-bold text-white/40 uppercase tracking-[0.2em] block mb-2 heading-font transition-colors group-hover:text-white/80">
                    {award.label}
                  </span>
                  <p className="text-[13px] md:text-[15px] text-white/95 font-light leading-snug tracking-tight">
                    {award.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Manifesto Final - Achatado na base */}
        <div className="mt-14 md:mt-20 pt-10 border-t border-white/5 text-center">
          <blockquote className="text-2xl md:text-4xl lg:text-5xl font-bold text-white/90 italic tracking-tighter leading-tight max-w-5xl mx-auto">
            {t.about.quote}
          </blockquote>
        </div>

      </div>
    </section>
  );
};

export default About;
