
import React, { useState } from 'react';
import { useLanguage } from '../LanguageContext';

const About: React.FC = () => {
  const { t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);

  const items = [
    { title: t.about.item1Title, desc: t.about.item1Desc },
    { title: t.about.item2Title, desc: t.about.item2Desc },
    { title: t.about.item3Title, desc: t.about.item3Desc }
  ];

  return (
    <section id="about" className="py-32 px-6 md:px-12 lg:px-24 bg-[#141418] border-b border-white/10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
        <div>
          <h2 className="text-6xl md:text-8xl font-bold leading-none mb-10 tracking-tighter">{t.about.title}</h2>
          <div className="w-24 h-1.5 bg-white mb-16 shadow-[0_0_20px_rgba(255,255,255,0.2)]"></div>
          
          <div className="space-y-8 text-lg md:text-xl text-gray-300 leading-relaxed font-light">
            <p>{t.about.p1}</p>
            <p>{t.about.p2}</p>
          </div>
        </div>

        <div className="lg:pt-28">
          <ul className="space-y-12">
            {items.map((item, idx) => (
              <li 
                key={idx} 
                className="flex items-start gap-6 group cursor-default"
                onMouseEnter={() => setActiveIndex(idx)}
              >
                <div 
                  className={`w-2.5 h-2.5 mt-2 rounded-full flex-shrink-0 transition-all duration-500 ${
                    activeIndex === idx 
                    ? 'bg-white shadow-[0_0_15px_rgba(255,255,255,0.8)] scale-125' 
                    : 'bg-white/20 scale-100 group-hover:bg-white/40'
                  }`}
                ></div>
                <div>
                  <h4 className={`font-bold uppercase tracking-[0.2em] text-sm mb-2 transition-colors duration-300 ${
                    activeIndex === idx ? 'text-white' : 'text-white/40'
                  }`}>
                    {item.title}
                  </h4>
                  <p className={`text-[14px] leading-relaxed font-light transition-colors duration-300 ${
                    activeIndex === idx ? 'text-gray-300' : 'text-gray-500'
                  }`}>
                    {item.desc}
                  </p>
                </div>
              </li>
            ))}
          </ul>
          
          <div className="mt-20 p-10 bg-white/[0.03] border border-white/10 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-1 h-full bg-white opacity-40 group-hover:opacity-100 transition-opacity"></div>
            <p className="italic text-gray-300 text-base leading-relaxed font-light relative z-10">
              {t.about.quote}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
