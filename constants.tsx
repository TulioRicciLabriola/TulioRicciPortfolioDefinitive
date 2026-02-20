
import { PortfolioItem, ProcessStep, Testimonial } from './types';

export const TRANSLATIONS = {
  pt: {
    nav: { work: 'TRABALHOS', about: 'SOBRE', contact: 'CONTATO' },
    hero: {
      title1: 'Finalização de',
      titleHighlight: 'áudio profissional',
      title2: 'para publicidade.',
      subtitle: 'Filmes, spots e conteúdo digital. Finalização profissional com foco em agilidade criativa e padrão internacional.',
      ctaWork: 'Ver trabalhos',
      ctaContact: 'FAÇA SEU ORÇAMENTO'
    },
    portfolio: {
      title: 'TRABALHOS',
      subtitle: 'Assista ao showcase de projetos selecionados do meu portfólio',
      preview: 'Clique para assistir',
      showMore: 'Exibir Mais',
      showLess: 'Exibir Menos'
    },
    process: {
      title: 'COMO FUNCIONA',
      subtitle: 'Transparência, celeridade e maturidade técnica em cada entrega'
    },
    about: {
      title: 'SOBRE',
      label: 'A Mente por Trás do Som',
      subtitle: 'Finalizador de Áudio, Coordenador e Arquiteto de Inovação em IA.',
      intro: 'Com mais de uma década de atuação estratégica no mercado de publicidade, sou peça-chave na finalização técnica de campanhas globais para marcas como Samsung, Volkswagen e Magazine Luiza. Minha expertise une a engenharia de som clássica às tecnologias emergentes, garantindo agilidade e precisão em mixagem e masterização para broadcast.\n\nComo pioneiro na integração de IA Generativa (Síntese Neural, Voice Cloning e DSP), viabilizo projetos de alta com plexidade que desafiam os limites do áudio tradicional — como o resgate vocal do case Fizemos História (Betano).',
      awardsTitle: 'RECONHECIMENTO & PRÊMIOS',
      awards: [
        { label: 'INOVAÇÃO (2024)', text: '🏅 Destaque Meio & Mensagem pelo Case Cartola (IA).' },
        { label: 'CANNES LIONS', text: '🏆 Leão de Ouro com "Lu From Magalu".' },
        { label: 'PROFISSIONAIS DO ANO (GLOBO)', text: '🏆 Vencedor Nacional e finalizador de 4 edições do jingle de Final de Ano.' },
        { label: 'EL OJO DE IBEROAMÉRICA', text: '🥉 Bronze com "Faces of Carnival".' }
      ],
      quote: 'Áudio não é sobre preencher o silêncio. É sobre contar histórias com a assinatura sonora que elas precisam para serem lembradas.'
    },
    contact: {
      title: 'CONTATO',
      subtitle: 'Faça seu orçamento',
      whatsappLabel: '',
      emailLabel: '',
      linkedinLabel: '',
      footerRights: '© 2025 • Tulio Ricci',
      floatCta: 'Vamos conversar?'
    },
    slider: {
      title: 'A restauração de áudio não é mágica,',
      titleHighlight: 'é técnica.',
      subtitle: 'Arraste e veja como salvamos um set impossível.',
      raw: 'Raw (Original)',
      treated: 'Treated (Final)',
      crossfade: 'Crossfade'
    }
  },
  en: {
    nav: { work: 'WORK', about: 'ABOUT', contact: 'CONTACT' },
    hero: {
      title1: 'Professional',
      titleHighlight: 'audio finishing',
      title2: 'for advertising.',
      subtitle: 'Films, spots and digital content. Professional finishing focused on creative agility and international standards.',
      ctaWork: 'Watch films',
      ctaContact: 'GET A QUOTE'
    },
    portfolio: {
      title: 'WORK',
      subtitle: 'Watch the showcase of selected projects from my portfolio',
      preview: 'Click to play',
      showMore: 'Show More',
      showLess: 'Show Less'
    },
    process: {
      title: 'HOW IT WORKS',
      subtitle: 'Transparency, speed, and technical maturity in every delivery'
    },
    about: {
      title: 'ABOUT',
      label: 'The Mind Behind the Sound',
      subtitle: 'Audio Finisher, Coordinator and AI Innovation Architect.',
      intro: 'With over a decade of strategic performance in the advertising market, I am a key player in the technical finishing of global campaigns for brands like Samsung, Volkswagen, and Magazine Luiza. My expertise blends classic sound engineering with emerging technologies, ensuring agility and precision in mixing and mastering for broadcast.\n\nAs a pioneer in Generative AI integration (Neural Synthesis, Voice Cloning, and DSP), I enable high-complexity projects that push the boundaries of traditional audio — such as the vocal restoration for the "Fizemos História" (Betano) case.',
      awardsTitle: 'RECOGNITION & AWARDS',
      awards: [
        { label: 'INNOVATION (2024)', text: '🏅 Meio & Mensagem Highlight for Case Cartola (AI).' },
        { label: 'CANNES LIONS', text: '🏆 Gold Lion for "Lu From Magalu".' },
        { label: 'PROFISSIONAIS DO ANO (GLOBO)', text: '🏆 National Winner and audio finisher for 4 Year-End jingle editions.' },
        { label: 'EL OJO DE IBEROAMÉRICA', text: '🥉 Bronze for "Faces of Carnival".' }
      ],
      quote: 'Audio is not about filling silence. It is about telling stories with the sonic signature they need to be remembered.'
    },
    contact: {
      title: 'CONTACT',
      subtitle: 'Get a quote',
      whatsappLabel: '',
      emailLabel: '',
      linkedinLabel: '',
      footerRights: '© 2025 • Tulio Ricci',
      floatCta: 'Let\'s talk?'
    },
    slider: {
      title: 'Audio restoration is not magic,',
      titleHighlight: 'it\'s technique.',
      subtitle: 'Drag and see how we saved an impossible set.',
      raw: 'Raw (Original)',
      treated: 'Treated (Final)',
      crossfade: 'Crossfade'
    }
  }
};

const BASE_URL = 'https://tulioriccilabriola.github.io/TulioRicciPortfolio';

export const PORTFOLIO_DATA: Record<'pt' | 'en', PortfolioItem[]> = {
  pt: [
    { 
      id: '1', 
      title: 'Vivo – Ana Castela', 
      description: 'Finalização e mixagem para a campanha “A Um 5G de Você”. Pop country, energia jovem e timing musical afinado para TV e digital.', 
      mp4Url: `${BASE_URL}/videos/VIVO%20ANA%20CASTELA%205G%20CASE.mp4`, 
      thumbnail: `${BASE_URL}/thumbnails/THUMB_VIVO%20ANA%20CASTELA%205G%20CASE.png`
    },
    { 
      id: '2', 
      title: 'Itaipava – Carnaval 2025', 
      description: 'Mixagem, tratamento de som direto com IA e sound design para o filme de Carnaval com Ivete Sangalo. Percussão quente e voz em destaque.', 
      mp4Url: `${BASE_URL}/videos/ITAIPAVA%20CARNAVAL%202025.mp4`, 
      thumbnail: `${BASE_URL}/thumbnails/THUMB_ITAIPAVA%20CARNAVAL%202025.png`
    },
    { 
      id: '11', 
      title: 'MAGAZINE LUIZA - LU FROM MAGALU', 
      description: 'Mixagem e Sound Design do filme vencedor do Festival Cannes levando Leão de Ouro na categoria Social & Influencer', 
      mp4Url: `${BASE_URL}/videos/LU%20FROM%20MAGALU.mp4`, 
      thumbnail: `${BASE_URL}/thumbnails/THUMB_LU%20FROM%20MAGALU.png`
    },
    { 
      id: '6', 
      title: 'Shopee – 11.11 Terry Crews', 
      description: 'Mixagem e finalização para campanha promocional massiva. Humor, punch e impacto pensados para conversão.', 
      mp4Url: `${BASE_URL}/videos/SHOPEE%201111%20TERRY%20CREWS.mp4`, 
      thumbnail: `${BASE_URL}/thumbnails/THUMB_SHOPEE%201111%20TERRY%20CREWS.png`
    },
    { 
      id: '10', 
      title: 'Betano – Fizemos História', 
      description: 'Destaque na categoria Inovação da Meio & Mensagem pela reconstrução da voz do Cartola através de IA.', 
      mp4Url: `${BASE_URL}/videos/BETANO%20FIZEMOS%20HISTORIA%20CARTOLA.mp4`, 
      thumbnail: `${BASE_URL}/thumbnails/THUMB_BETANO%20FIZEMOS%20HISTORIA%20CARTOLA.jpg`
    },
    { 
      id: '4', 
      title: 'Santander – SMusic', 
      description: 'Sound design e mixagem para a plataforma musical do Santander. Estética pop, dinâmica musical e identidade de marca.', 
      mp4Url: `${BASE_URL}/videos/SANTANDER%20SMUSIC.mp4`, 
      thumbnail: `${BASE_URL}/thumbnails/THUMB_SANTANDER%20SMUSIC.png`
    },
    { 
      id: '3', 
      title: 'Mycon – Consórcio', 
      description: 'Tratamento de som direto, sound design e finalização para campanha nacional. Tom confiante e clareza para varejo financeiro.', 
      mp4Url: `${BASE_URL}/videos/MYCON%20CONSORCIO.mp4`, 
      thumbnail: `${BASE_URL}/thumbnails/THUMB_MYCON%20CONSORCIO.png`
    },
    { 
      id: '5', 
      title: 'Magazine Luiza – Parceiro Magalu', 
      description: 'Finalização técnica para campanha nacional de varejo. Comunicação próxima, ritmo ágil e clareza total de mensagem.', 
      mp4Url: `${BASE_URL}/videos/MAGAZINE%20LUIZA%20PARCEIRO%20MAGALU.mp4`, 
      thumbnail: `${BASE_URL}/thumbnails/THUMB_MAGAZINE%20LUIZA%20PARCEIRO%20MAGALU.png`
    },
    { 
      id: '12', 
      title: 'Visa – Estilista', 
      description: 'Mixagem e sound design para o filme Visa Estilista. Foco em detalhes sonoros que complementam a estética visual e o ritmo da montagem.', 
      mp4Url: `${BASE_URL}/videos/VISA%20ESTILISTA.mp4`, 
      thumbnail: `${BASE_URL}/thumbnails/THUMB_VISA%20ESTILISTA.png`
    }
  ],
  en: [
    { 
      id: '1', 
      title: 'Vivo – Ana Castela', 
      description: 'Audio finishing and mixing for the "A Um 5G de Você" campaign. Pop country, youthful energy, and sharp musical timing.', 
      mp4Url: `${BASE_URL}/videos/VIVO%20ANA%20CASTELA%205G%20CASE.mp4`, 
      thumbnail: `${BASE_URL}/thumbnails/THUMB_VIVO%20ANA%20CASTELA%205G%20CASE.png`
    },
    { 
      id: '2', 
      title: 'Itaipava – Carnival 2025', 
      description: 'Mixing, AI-powered field sound treatment, and sound design. Warm percussion and highlighted vocals for broadcast.', 
      mp4Url: `${BASE_URL}/videos/ITAIPAVA%20CARNAVAL%202025.mp4`, 
      thumbnail: `${BASE_URL}/thumbnails/THUMB_ITAIPAVA%20CARNAVAL%202025.png`
    },
    { 
      id: '11', 
      title: 'MAGAZINE LUIZA - LU FROM MAGALU', 
      description: 'Mixing and Sound Design for the Cannes Lions winning film, receiving Gold Lion in the Social & Influencer category.', 
      mp4Url: `${BASE_URL}/videos/LU%20FROM%20MAGALU.mp4`, 
      thumbnail: `${BASE_URL}/thumbnails/THUMB_LU%20FROM%20MAGALU.png`
    },
    { 
      id: '6', 
      title: 'Shopee – 11.11 Terry Crews', 
      description: 'Mixing and finishing for a massive promotional campaign. Humor, punch, and impact designed for conversion.', 
      mp4Url: `${BASE_URL}/videos/SHOPEE%201111%20TERRY%20CREWS.mp4`, 
      thumbnail: `${BASE_URL}/thumbnails/THUMB_SHOPEE%201111%20TERRY%20CREWS.png`
    },
    { 
      id: '10', 
      title: 'Betano – We Made History', 
      description: 'Featured in the Innovation category of Meio & Mensagem for the reconstruction of Cartola\'s voice through AI.', 
      mp4Url: `${BASE_URL}/videos/BETANO%20FIZEMOS%20HISTORIA%20CARTOLA.mp4`, 
      thumbnail: `${BASE_URL}/thumbnails/THUMB_BETANO%20FIZEMOS%20HISTORIA%20CARTOLA.jpg`
    },
    { 
      id: '4', 
      title: 'Santander – SMusic', 
      description: 'Sound design and mixing for Santander\'s music platform. Pop aesthetics, musical dynamics, and brand identity.', 
      mp4Url: `${BASE_URL}/videos/SANTANDER%20SMUSIC.mp4`, 
      thumbnail: `${BASE_URL}/thumbnails/THUMB_SANTANDER%20SMUSIC.png`
    },
    { 
      id: '3', 
      title: 'Mycon – Financing', 
      description: 'Field sound treatment, sound design, and finishing for a national campaign. Confident tone and clarity for financial retail.', 
      mp4Url: `${BASE_URL}/videos/MYCON%20CONSORCIO.mp4`, 
      thumbnail: `${BASE_URL}/thumbnails/THUMB_MYCON%20CONSORCIO.png`
    },
    { 
      id: '5', 
      title: 'Magazine Luiza – Parceiro Magalu', 
      description: 'Technical finishing for a national retail campaign. Close communication, agile pace, and total message clarity.', 
      mp4Url: `${BASE_URL}/videos/MAGAZINE%20LUIZA%20PARCEIRO%20MAGALU.mp4`, 
      thumbnail: `${BASE_URL}/thumbnails/THUMB_MAGAZINE%20LUIZA%20PARCEIRO%20MAGALU.png`
    },
    { 
      id: '12', 
      title: 'Visa – Stylist', 
      description: 'Mixing and sound design for the Visa Stylist film. Focused on sonic details that complement the visual aesthetics and editing rhythm.', 
      mp4Url: `${BASE_URL}/videos/VISA%20ESTILISTA.mp4`, 
      thumbnail: `${BASE_URL}/thumbnails/THUMB_VISA%20ESTILISTA.png`
    }
  ]
};

export const PROCESS_STEPS: Record<'pt' | 'en', ProcessStep[]> = {
  pt: [
    { id: 1, title: 'BRIEFING', description: 'Você me passa sua intenção criativa e técnica para fechamos seu orçamento.' },
    { id: 2, title: 'PRODUÇÃO', description: 'Eu inicio o processo de produção: trilhas e jingles, edição, sound design, tratamento e mixagem através de ferramentas de topo de linha e recursos de IA.' },
    { id: 3, title: 'ENTREGA', description: 'Eu masterizo seus áudios para todos os formatos exigidos pelo mercado (TV/Rádio/Web).' }
  ],
  en: [
    { id: 1, title: 'BRIEFING', description: 'You provide your creative and technical intent so we can finalize your quote.' },
    { id: 2, title: 'PRODUCTION', description: 'I begin the production process: tracks and jingles, editing, sound design, treatment and mixing using top-of-the-line tools and AI features.' },
    { id: 3, title: 'DELIVERY', description: 'I master your audio for all market-required formats (TV/Radio/Web).' }
  ]
};

export const TESTIMONIALS_DATA: Record<'pt' | 'en', Testimonial[]> = {
  pt: [
    { id: 1, text: "Túlio é um finalizador que soma e agrega demais com a equipe. Obrigada por poder sempre contar com você.", author: "Elis Pedroso", role: "Atendimento, Produtora ComandoS Áudio" },
    { id: 2, text: "Agilidade impressionante nos ajustes finais. É o tipo de parceria que resolve o problema sem gerar novos rounds de discussão técnica.", author: "Carla Silveira", role: "RTV, Agência de Publicidade" },
    { id: 3, text: "Finalização consistente e segura para TV. Entrega limpa, com impacto e respeito total ao sound design original do projeto.", author: "Marcos Paulo", role: "Coordenador de Pós-Produção" }
  ],
  en: [
    { id: 1, text: "Túlio is a finisher who adds so much to the team. Thank you for always being someone we can count on.", author: "Elis Pedroso", role: "Account Manager, ComandoS Áudio" },
    { id: 2, text: "Impressive agility in the final adjustments. It's the kind of partnership that solves the problem without generating new technical rounds.", author: "Carla Silveira", role: "RTV, Advertising Agency" },
    { id: 3, text: "Consistent and safe finishing for TV. Clean delivery with impact and total respect for the project's original sound design.", author: "Marcos Paulo", role: "Post-Production Coordinator" }
  ]
};
