
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { LanguageProvider, useLanguage } from './LanguageContext';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import About from './components/About';
import Contact from './components/Contact';

const BrazilFlag = () => (
  <svg className="w-3 h-3 md:w-3.5 md:h-3.5 mr-1 md:mr-1.5 shrink-0" viewBox="0 0 640 480">
    <path fill="#009b3a" d="M0 0h640v480H0z"/>
    <path fill="#fedf00" d="M320 54.8L54.8 240 320 425.2 585.2 240z"/>
    <circle fill="#002776" cx="320" cy="240" r="101.4"/>
    <path fill="#fff" d="M222.8 214.3c15.7-1.4 33.6-1.7 54.1-.3 20.6 1.3 41.5 4.3 62 8.7 20.6 4.5 40 10.6 57.6 18.1 3.2 1.4 6.2 2.8 9.1 4.2.3.1 1.4.7 1.4.7l-4.5 11s-1.1-.6-1.4-.7c-2.9-1.3-5.9-2.7-9.1-4-17.5-7.4-36.7-13.4-57.2-17.9-20.4-4.4-41.2-7.3-61.6-8.6-20.3-1.3-38.1-1-53.7.4l3.3-11.6z"/>
  </svg>
);

const USAFlag = () => (
  <svg className="w-3 h-3 md:w-3.5 md:h-3.5 mr-1 md:mr-1.5 shrink-0" viewBox="0 0 640 480">
    <path fill="#bd3d44" d="M0 0h640v480H0z"/>
    <path stroke="#fff" strokeWidth="37" d="M0 55.4h640M0 129.2h640M0 203h640M0 277h640M0 350.8h640M0 424.6h640"/>
    <path fill="#192f5d" d="M0 0h256v258.5H0z"/>
    <g fill="#fff">
      <g id="s">
        <g id="t">
          <path id="u" d="M30 33l4 12-10-7h12l-10 7z"/>
          <use xlinkHref="#u" x="40"/>
          <use xlinkHref="#u" x="80"/>
          <use xlinkHref="#u" x="120"/>
          <use xlinkHref="#u" x="160"/>
          <use xlinkHref="#u" x="200"/>
        </g>
        <use xlinkHref="#t" y="44"/>
        <use xlinkHref="#t" y="88"/>
        <use xlinkHref="#t" y="132"/>
        <use xlinkHref="#t" y="176"/>
      </g>
      <use xlinkHref="#s" x="20" y="22"/>
    </g>
  </svg>
);

const AppContent: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showWhatsappTooltip, setShowWhatsappTooltip] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  
  const tooltipActivated = useRef(false);
  const appearanceTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const triggerTooltipWithDelay = useCallback(() => {
    if (!tooltipActivated.current) {
      tooltipActivated.current = true;
      appearanceTimeoutRef.current = window.setTimeout(() => {
        setShowWhatsappTooltip(true);
      }, 3000);
    }
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      triggerTooltipWithDelay();
    }, 30000);
    return () => clearTimeout(timer);
  }, [triggerTooltipWithDelay]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      threshold: 0.1, 
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          triggerTooltipWithDelay();
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    
    const sectionsToObserve = ['process', 'about', 'contact'];
    sectionsToObserve.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [triggerTooltipWithDelay]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  const handleNavClick = useCallback((e: React.MouseEvent<HTMLAnchorElement> | React.MouseEvent<HTMLButtonElement>, id: string) => {
    e.preventDefault();
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    const header = document.querySelector('nav');
    
    if (element) {
      const headerHeight = header ? header.offsetHeight : 0;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight + 45;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }, []);

  const handleWhatsAppMouseEnter = () => {
    if (appearanceTimeoutRef.current) {
      window.clearTimeout(appearanceTimeoutRef.current);
    }
  };

  const handleWhatsAppMouseLeave = () => {
    setShowWhatsappTooltip(false);
    tooltipActivated.current = false;
    if (appearanceTimeoutRef.current) {
      window.clearTimeout(appearanceTimeoutRef.current);
    }
  };

  return (
    <div className="min-h-screen selection:bg-white selection:text-black scroll-smooth bg-[#16161A] text-[#F1F1F1] overflow-x-hidden font-inter">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 px-4 md:px-12 flex items-center justify-between gap-4 md:gap-0 ${isScrolled ? 'bg-[#16161A]/95 backdrop-blur-xl border-b border-white/10 py-3 shadow-2xl' : 'bg-transparent py-4 md:py-10'}`}>
        
        <div className="flex items-center gap-3 shrink-0">
           <div className={`w-8 h-8 md:w-10 md:h-10 flex items-center justify-center transition-all duration-500 ${isScrolled ? 'bg-white shadow-[0_0_20px_rgba(255,255,255,0.3)]' : 'bg-white/10 border border-white/20'}`}>
              <span className={`font-bold heading-font italic text-[10px] md:text-sm tracking-tighter transition-colors duration-500 ${isScrolled ? 'text-black' : 'text-white'}`}>TR</span>
           </div>
           <div className="flex flex-col">
              <span className="font-bold tracking-[0.15em] md:tracking-[0.3em] text-[8px] md:text-[10px] uppercase leading-none">Tulio Ricci</span>
              <span className={`text-[6px] md:text-[8px] uppercase tracking-[0.15em] mt-1 transition-colors ${isScrolled ? 'text-white/30' : 'text-white/50'}`}>Audio Engineering</span>
           </div>
        </div>

        <div className="flex md:absolute md:left-1/2 md:-translate-x-1/2 justify-center shrink-0">
          <div className="relative flex items-center p-0.5 border border-white/10 rounded-full h-8 md:h-10 overflow-hidden w-[110px] md:w-[150px] bg-white/5 shadow-inner" role="group" aria-label="Language Switcher">
             <div 
               className="absolute h-[calc(100%-4px)] bg-white rounded-full transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] z-0 shadow-lg"
               style={{ 
                 width: 'calc(50% - 2px)',
                 transform: `translateX(${language === 'en' ? '100%' : '0%'})`,
                 left: '2px'
               }}
             />
             <button type="button" onClick={() => setLanguage('pt')} className={`flex-1 relative z-10 text-[8px] md:text-[10px] h-full font-bold uppercase transition-colors duration-500 flex items-center justify-center ${language === 'pt' ? 'text-black' : 'text-white/40'}`}>
               <BrazilFlag />
               PT
             </button>
             <button type="button" onClick={() => setLanguage('en')} className={`flex-1 relative z-10 text-[8px] md:text-[10px] h-full font-bold uppercase transition-colors duration-500 flex items-center justify-center ${language === 'en' ? 'text-black' : 'text-white/40'}`}>
               <USAFlag />
               EN
             </button>
          </div>
        </div>
        
        <div className="flex items-center shrink-0">
           <div className="hidden md:flex gap-8 lg:gap-10 text-[9px] font-bold uppercase tracking-[0.4em] justify-end items-center">
              <a href="#portfolio" onClick={(e) => handleNavClick(e, 'portfolio')} className="transition-colors text-white/40 hover:text-white">{t.nav.work}</a>
              <a href="#about" onClick={(e) => handleNavClick(e, 'about')} className="transition-colors text-white/40 hover:text-white">{t.nav.about}</a>
              <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className="transition-colors text-white/40 hover:text-white">{t.nav.contact}</a>
           </div>

           <button type="button" onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden w-8 h-8 flex flex-col items-center justify-center gap-1.2 z-[60]" aria-label="Toggle menu">
              <span className={`w-5 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
              <span className={`w-5 h-0.5 bg-white transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`w-5 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
           </button>
        </div>
      </nav>

      <div className={`fixed inset-0 z-[55] bg-[#0E0E11] transition-all duration-500 flex flex-col items-center justify-center gap-12 ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
         <a href="#portfolio" onClick={(e) => handleNavClick(e, 'portfolio')} className="text-3xl font-bold tracking-[0.3em] uppercase transition-colors hover:text-white/60">{t.nav.work}</a>
         <a href="#about" onClick={(e) => handleNavClick(e, 'about')} className="text-3xl font-bold tracking-[0.3em] uppercase transition-colors hover:text-white/60">{t.nav.about}</a>
         <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className="text-3xl font-bold tracking-[0.3em] uppercase transition-colors hover:text-white/60">{t.nav.contact}</a>
      </div>

      <main>
        <Hero onNavClick={handleNavClick} />
        <Portfolio />
        <Process />
        <Testimonials />
        <About />
        <Contact />
      </main>

      <div className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-40 flex items-center">
        <span className={`mr-4 bg-[#F1F1F1] text-black py-2.5 px-6 rounded-full text-[11px] md:text-[12px] font-bold uppercase tracking-[0.2em] transition-all duration-700 whitespace-nowrap shadow-2xl border border-black/5 ${showWhatsappTooltip ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4 pointer-events-none'}`}>
          {t.contact.floatCta}
        </span>
        <a 
          href="https://wa.me/5511956022200" 
          target="_blank" 
          rel="noopener noreferrer"
          onMouseEnter={handleWhatsAppMouseEnter}
          onMouseLeave={handleWhatsAppMouseLeave}
          className="w-14 h-14 md:w-16 md:h-16 bg-white text-black rounded-full flex items-center justify-center shadow-[0_20px_50px_rgba(0,0,0,0.5)] hover:scale-110 active:scale-95 transition-all border border-white/20"
        >
          <svg className="w-6 h-6 md:w-7 md:h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.484 8.412-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.309 1.656zm6.29-4.143c1.565.933 3.176 1.423 4.842 1.425 5.463 0 9.908-4.447 9.911-9.91.001-2.646-1.033-5.132-2.908-7.01-1.875-1.878-4.361-2.912-7.012-2.912-5.462 0-9.907 4.448-9.91 9.909 0 1.745.462 3.448 1.335 4.931l-1.028 3.757 3.847-1.01zm11.366-7.412c-.302-.15-.1.79-.441-.15-.05-.138-.282-.201-.583-.35-.301-.15-1.779-.877-2.056-.976-.278-.1-.481-.15-.683.15-.204.302-.79.977-.968 1.178-.178.201-.356.226-.658.075-.301-.15-1.274-.47-2.426-1.502-.897-.8-1.502-1.79-1.678-2.09-.178-.302-.019-.465.132-.614.135-.134.301-.35.452-.525.15-.176.2-.301.301-.502.101-.201.05-.376-.025-.526-.075-.15-.683-1.656-.935-2.258-.247-.588-.501-.508-.683-.518-.175-.01-.376-.012-.578-.012-.201 0-.526.075-.802.376-.277.301-1.053 1.028-1.053 2.507 0 1.478 1.077 2.909 1.228 3.11.15.201 2.122 3.241 5.141 4.542.718.311 1.277.496 1.714.634.721.23 1.378.197 1.897.12.579-.085 1.779-.726 2.031-1.43.252-.703.252-1.303.176-1.43-.075-.126-.277-.201-.579-.351z"/></svg>
        </a>
      </div>
    </div>
  );
};

const App: React.FC = () => (
  <LanguageProvider>
    <AppContent />
  </LanguageProvider>
);

export default App;
