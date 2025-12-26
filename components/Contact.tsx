
import React from 'react';
import { useLanguage } from '../LanguageContext';

const Contact: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-24 px-6 md:px-12 lg:px-24 bg-white text-black min-h-[70vh] flex flex-col justify-center">
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-6xl md:text-9xl font-bold mb-12">{t.contact.title}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          <a 
            href="https://wa.me/5511956022200" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex items-center justify-between p-8 border border-black/10 hover:bg-black hover:text-white transition-all duration-300"
          >
            <div>
              <p className="text-xs uppercase tracking-widest mb-1 opacity-60">{t.contact.whatsappLabel}</p>
              <h3 className="text-2xl font-bold uppercase">WhatsApp</h3>
            </div>
            <div className="flex items-center gap-4">
              <svg className="w-8 h-8 transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.484 8.412-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.309 1.656zm6.29-4.143c1.565.933 3.176 1.423 4.842 1.425 5.463 0 9.908-4.447 9.911-9.91.001-2.646-1.033-5.132-2.908-7.01-1.875-1.878-4.361-2.912-7.012-2.912-5.462 0-9.907 4.448-9.91 9.909 0 1.745.462 3.448 1.335 4.931l-1.028 3.757 3.847-1.01zm11.366-7.412c-.302-.15-.1.79-.441-.15-.05-.138-.282-.201-.583-.35-.301-.15-1.779-.877-2.056-.976-.278-.1-.481-.15-.683.15-.204.302-.79.977-.968 1.178-.178.201-.356.226-.658.075-.301-.15-1.274-.47-2.426-1.502-.897-.8-1.502-1.79-1.678-2.09-.178-.302-.019-.465.132-.614.135-.134.301-.35.452-.525.15-.176.2-.301.301-.502.101-.201.05-.376-.025-.526-.075-.15-.683-1.656-.935-2.258-.247-.588-.501-.508-.683-.518-.175-.01-.376-.012-.578-.012-.201 0-.526.075-.802.376-.277.301-1.053 1.028-1.053 2.507 0 1.478 1.077 2.909 1.228 3.11.15.201 2.122 3.241 5.141 4.542.718.311 1.277.496 1.714.634.721.23 1.378.197 1.897.12.579-.085 1.779-.726 2.031-1.43.252-.703.252-1.303.176-1.43-.075-.126-.277-.201-.579-.351z"/>
              </svg>
            </div>
          </a>

          <a 
            href="mailto:tulioriccilabriola7@gmail.com" 
            className="group flex items-center justify-between p-8 border border-black/10 hover:bg-black hover:text-white transition-all duration-300"
          >
            <div>
              <p className="text-xs uppercase tracking-widest mb-1 opacity-60">{t.contact.emailLabel}</p>
              <h3 className="text-2xl font-bold uppercase">E-mail</h3>
            </div>
            <div className="flex items-center gap-4">
              <svg className="w-8 h-8 transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l1.324 1.073c.447.362 1.01.543 1.574.543.564 0 1.128-.181 1.575-.543l1.323-1.072 4.619 5.712h-15.034l4.619-5.712zm6.201-3.442l4.623-3.746v9.458l-4.623-5.712z"/>
              </svg>
            </div>
          </a>

          <a 
            href="https://www.linkedin.com/in/tulio-ricci-labriola/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex items-center justify-between p-8 border border-black/10 hover:bg-black hover:text-white transition-all duration-300"
          >
            <div>
              <p className="text-xs uppercase tracking-widest mb-1 opacity-60">{t.contact.linkedinLabel}</p>
              <h3 className="text-2xl font-bold uppercase">LinkedIn</h3>
            </div>
            <div className="flex items-center gap-4">
              <svg className="w-8 h-8 transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </div>
          </a>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-black/10 gap-6">
          <div className="flex items-center gap-3">
             <div className="w-10 h-10 bg-black flex items-center justify-center">
                <span className="text-white font-bold heading-font italic">TR</span>
             </div>
             <span className="font-bold text-sm tracking-widest uppercase">Tulio Ricci Portfolio</span>
          </div>
          <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold">
            {t.contact.footerRights}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
