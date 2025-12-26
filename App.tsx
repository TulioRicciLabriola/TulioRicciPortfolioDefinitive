
import React, { useState, useEffect, useCallback } from 'react';
import { LanguageProvider, useLanguage } from './LanguageContext';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import About from './components/About';
import Contact from './components/Contact';

const AppContent: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = useCallback((e: React.MouseEvent<HTMLAnchorElement> | React.MouseEvent<HTMLButtonElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }, []);

  return (
    <div className="min-h-screen selection:bg-white selection:text-black scroll-smooth bg-[#16161A] text-[#F1F1F1] overflow-x-hidden font-inter">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 px-6 md:px-12 py-6 flex flex-wrap justify-between items-center gap-y-4 ${isScrolled ? 'bg-[#16161A]/95 backdrop-blur-xl border-b border-white/10 py-4 shadow-2xl' : 'bg-transparent py-10'}`}>
        <div className="flex items-center gap-4 min-w-[150px]">
           <div className={`w-10 h-10 flex items-center justify-center transition-all duration-500 ${isScrolled ? 'bg-white shadow-[0_0_20px_rgba(255,255,255,0.3)]' : 'bg-white/10 border border-white/20'}`}>
              <span className={`font-bold heading-font italic text-sm tracking-tighter transition-colors duration-500 ${isScrolled ? 'text-black' : 'text-white'}`}>TR</span>
           </div>
           <div className="flex flex-col">
              <span className="font-bold tracking-[0.3em] text-[10px] uppercase hidden sm:inline leading-none">Tulio Ricci</span>
              <span className={`text-[8px] uppercase tracking-[0.2em] hidden sm:inline mt-1.5 transition-colors ${isScrolled ? 'text-white/30' : 'text-white/50'}`}>Audio Engineering</span>
           </div>
        </div>

        <div className="order-3 md:order-2 w-full md:w-auto flex justify-center">
          <div className="relative flex items-center p-1 border border-white/10 rounded-full h-9 overflow-hidden w-[120px] bg-white/5 shadow-inner" role="group" aria-label="Language Switcher">
             <div 
               className="absolute h-[calc(100%-8px)] bg-white rounded-full transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] z-0 shadow-lg"
               style={{ 
                 width: 'calc(50% - 4px)',
                 transform: `translateX(${language === 'en' ? '100%' : '0%'})`,
                 left: '4px'
               }}
             />
             <button 
               type="button"
               onClick={() => setLanguage('pt')}
               aria-label="Português"
               className={`flex-1 relative z-10 text-[9px] h-full font-bold uppercase tracking-[0.15em] transition-colors duration-500 flex items-center justify-center ${language === 'pt' ? 'text-black' : 'text-white/40'}`}
             >
               PT
             </button>
             <button 
               type="button"
               onClick={() => setLanguage('en')}
               aria-label="English"
               className={`flex-1 relative z-10 text-[9px] h-full font-bold uppercase tracking-[0.15em] transition-colors duration-500 flex items-center justify-center ${language === 'en' ? 'text-black' : 'text-white/40'}`}
             >
               EN
             </button>
          </div>
        </div>
        
        <div className="order-2 md:order-3 flex gap-8 md:gap-10 text-[9px] font-bold uppercase tracking-[0.4em] min-w-[150px] justify-end items-center">
           <a href="#portfolio" onClick={(e) => handleNavClick(e, 'portfolio')} className="transition-colors text-white/40 hover:text-white">{t.nav.work}</a>
           <a href="#about" onClick={(e) => handleNavClick(e, 'about')} className="transition-colors text-white/40 hover:text-white">{t.nav.about}</a>
           <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className="transition-colors text-white/40 hover:text-white">{t.nav.contact}</a>
        </div>
      </nav>

      <main>
        <Hero onNavClick={handleNavClick} />
        <Portfolio />
        <Process />
        <Testimonials />
        <About />
        <Contact />
      </main>

      <a 
        href="https://wa.me/5511956022200" 
        target="_blank" 
        rel="noopener noreferrer"
        aria-label="Contact via WhatsApp"
        className="fixed bottom-8 right-8 z-40 w-14 h-14 bg-white text-black rounded-full flex items-center justify-center shadow-[0_20px_50px_rgba(0,0,0,0.5)] hover:scale-110 active:scale-95 transition-all group border border-white/20"
      >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.484 8.412-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.309 1.656zm6.29-4.143c1.565.933 3.176 1.423 4.842 1.425 5.463 0 9.908-4.447 9.911-9.91.001-2.646-1.033-5.132-2.908-7.01-1.875-1.878-4.361-2.912-7.012-2.912-5.462 0-9.907 4.448-9.91 9.909 0 1.745.462 3.448 1.335 4.931l-1.028 3.757 3.847-1.01zm11.366-7.412c-.302-.15-.1.79-.441-.15-.05-.138-.282-.201-.583-.35-.301-.15-1.779-.877-2.056-.976-.278-.1-.481-.15-.683.15-.204.302-.79.977-.968 1.178-.178.201-.356.226-.658.075-.301-.15-1.274-.47-2.426-1.502-.897-.8-1.502-1.79-1.678-2.09-.178-.302-.019-.465.132-.614.135-.134.301-.35.452-.525.15-.176.2-.301.301-.502.101-.201.05-.376-.025-.526-.075-.15-.683-1.656-.935-2.258-.247-.588-.501-.508-.683-.518-.175-.01-.376-.012-.578-.012-.201 0-.526.075-.802.376-.277.301-1.053 1.028-1.053 2.507 0 1.478 1.077 2.909 1.228 3.11.15.201 2.122 3.241 5.141 4.542.718.311 1.277.496 1.714.634.721.23 1.378.197 1.897.12.579-.085 1.779-.726 2.031-1.43.252-.703.252-1.303.176-1.43-.075-.126-.277-.201-.579-.351z"/></svg>
        <span className="absolute right-full mr-4 bg-[#F1F1F1] text-black py-2 px-5 rounded-full text-[9px] font-bold uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none translate-x-4 group-hover:translate-x-0 whitespace-nowrap shadow-2xl border border-black/5">
          {t.contact.floatCta}
        </span>
      </a>
    </div>
  );
};

const App: React.FC = () => (
  <LanguageProvider>
    <AppContent />
  </LanguageProvider>
);

export default App;
