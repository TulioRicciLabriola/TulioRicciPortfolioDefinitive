
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { TRANSLATIONS } from './constants';

type Language = 'pt' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: typeof TRANSLATIONS.en; // Mudamos a referência para 'en'
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // AQUI É A CHAVE: Mudamos de 'pt' para 'en' para o site já nascer em inglês
  const [language, setLanguage] = useState<Language>('en'); 
  const t = TRANSLATIONS[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};