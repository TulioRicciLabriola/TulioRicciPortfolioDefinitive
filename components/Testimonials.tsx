
import React, { memo } from 'react';
import { TESTIMONIALS_DATA } from '../constants';
import { useLanguage } from '../LanguageContext';

const Testimonials: React.FC = () => {
  const { language } = useLanguage();
  const currentTestimonials = TESTIMONIALS_DATA[language];

  return (
    <section className="pb-16 pt-0 px-6 md:px-12 lg:px-24 bg-[#1A1A1F] border-b border-white/10 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none grayscale brightness-0">
          <img 
            src="https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?q=80&w=2070&auto=format&fit=crop" 
            className="w-full h-full object-cover object-bottom" 
            alt="" 
            loading="lazy"
          />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-24 items-start">
          {currentTestimonials.map((t) => (
            <div key={t.id} className="group">
              <p className="text-gray-300 text-sm md:text-[15px] leading-relaxed italic mb-6 font-light border-l border-white/10 pl-5 group-hover:border-white/40 transition-all duration-500">
                "{t.text}"
              </p>
              <div className="pl-5">
                <h4 className="text-[11px] font-bold uppercase tracking-[0.3em] text-white">
                  {t.author}
                </h4>
                <p className="text-[10px] uppercase tracking-widest text-gray-500 mt-2 font-bold">
                  {t.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(Testimonials);
