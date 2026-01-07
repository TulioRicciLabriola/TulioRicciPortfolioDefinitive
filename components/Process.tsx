
import React, { memo } from 'react';
import { PROCESS_STEPS } from '../constants';
import { useLanguage } from '../LanguageContext';

const Process: React.FC = () => {
  const { language, t } = useLanguage();
  const currentSteps = PROCESS_STEPS[language];

  return (
    <section id="process" className="py-16 md:py-20 px-6 md:px-12 lg:px-24 bg-[#1A1A1F] border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10 text-center flex flex-col items-center">
          <h2 className="text-6xl md:text-8xl font-bold mb-4 tracking-tighter text-white uppercase drop-shadow-lg">{t.process.title}</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-8">
          {currentSteps.map((step) => (
            <div key={step.id} className="relative p-8 bg-white/[0.02] border border-white/[0.05] group hover:border-white/40 transition-all duration-500">
              <span className="text-5xl md:text-6xl font-bold text-white/75 mb-6 block heading-font leading-none group-hover:text-white transition-colors">0{step.id}</span>
              <h3 className="text-xl md:text-2xl font-bold mb-4 tracking-tight uppercase text-white/75 group-hover:text-white transition-colors">{step.title}</h3>
              <p className="text-white/80 text-sm md:text-base leading-relaxed font-light transition-colors group-hover:text-white/95">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(Process);
