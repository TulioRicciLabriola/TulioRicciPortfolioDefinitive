
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
      p1: 'Mais de 10 anos de expertise em finalização de áudio publicitário, com foco em agilidade, consistência e fidelidade ao conceito criativo.',
      p2: 'Atuo em sintonia com os ritmos e exigências das grandes agências, compreendendo o que realmente funciona no fluxo de aprovação. Minha prioridade é o resultado final: som limpo, impactante e tecnicamente impecável.',
      item1Title: 'Prazos de Agência',
      item1Desc: 'Domínio total do cronograma publicitário, sem atrasos ou surpresas.',
      item2Title: 'Comunicação Direta',
      item2Desc: 'Alinhamento objetivo com produtoras e criativos, eliminando ruídos.',
      item3Title: 'Excelência Técnica',
      item3Desc: 'Loudness e mixagem otimizados para todos os meios (TV, Rádio e Web).',
      quote: '"Não entrego apenas áudio; projeto a clareza sonora que a sua mensagem exige."'
    },
    contact: {
      title: 'CONTATO',
      subtitle: 'Faça seu orçamento',
      whatsappLabel: '',
      emailLabel: '',
      linkedinLabel: '',
      footerRights: '© 2025 • Tulio Ricci',
      floatCta: 'Vamos conversar?'
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
      p1: 'Over 10 years of expertise in advertising audio finishing, focused on agility, consistency and respect for the creative concept.',
      p2: 'I work in sync with the high-pressure environment of top agencies, understanding what truly works in the approval workflow. My priority is the final result: clean, impactful and technically flawless sound.',
      item1Title: 'Agency Deadlines',
      item1Desc: 'Complete mastery of the advertising schedule, without delays or surprises.',
      item2Title: 'Direct Communication',
      item2Desc: 'Objective alignment with production houses and creatives, eliminating noise.',
      item3Title: 'Technical Excellence',
      item3Desc: 'Optimized loudness and mixing for all media (TV, Radio and Web).',
      quote: '"I don\'t just deliver audio; I project the sonic clarity your message demands."'
    },
    contact: {
      title: 'CONTACT',
      subtitle: 'Get a quote',
      whatsappLabel: '',
      emailLabel: '',
      linkedinLabel: '',
      footerRights: '© 2025 • Tulio Ricci',
      floatCta: 'Let\'s talk?'
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
      description: 'Mixagem, tratamento de som direto com IA e sound design para o filme de Carnaval com Ivete Sangalo. Clima de rua, percussão quente e voz em destaque para broadcast.', 
      mp4Url: `${BASE_URL}/videos/ITAIPAVA%20CARNAVAL%202025.mp4`, 
      thumbnail: `${BASE_URL}/thumbnails/THUMB_ITAIPAVA%20CARNAVAL%202025.png`
    },
    { 
      id: '3', 
      title: 'Mycon – Consórcio', 
      description: 'Tratamento de som direto, sound design e finalização para campanha nacional. Tom confiante, discurso direto e presença para varejo financeiro.', 
      mp4Url: `${BASE_URL}/videos/MYCON%20CONSORCIO.mp4`, 
      thumbnail: `${BASE_URL}/thumbnails/THUMB_MYCON%20CONSORCIO.png`
    },
    { 
      id: '4', 
      title: 'Santander – SMusic', 
      description: 'Sound design e mixagem para a plataforma musical do Santander. Estética pop, dinâmica musical e identidade jovem de marca.', 
      mp4Url: `${BASE_URL}/videos/SANTANDER%20SMUSIC.mp4`, 
      thumbnail: `${BASE_URL}/thumbnails/THUMB_SANTANDER%20SMUSIC.png`
    },
    { 
      id: '5', 
      title: 'Magazine Luiza – Parceiro Magalu', 
      description: 'Finalização técnica para campanha nacional de varejo. Comunicação próxima, ritmo ágil e clareza total de mensagem.', 
      mp4Url: `${BASE_URL}/videos/MAGAZINE%20LUIZA%20PARCEIRO%20MAGALU.mp4`, 
      thumbnail: `${BASE_URL}/thumbnails/THUMB_MAGAZINE%20LUIZA%20PARCEIRO%20MAGALU.png`
    },
    { 
      id: '6', 
      title: 'Shopee – 11.11 Terry Crews', 
      description: 'Mixagem e finalização para campanha promocional massiva. Humor, punch e impacto pensados para conversão.', 
      mp4Url: `${BASE_URL}/videos/SHOPEE%201111%20TERRY%20CREWS.mp4`, 
      thumbnail: `${BASE_URL}/thumbnails/THUMB_SHOPEE%201111%20TERRY%20CREWS.png`
    },
    { 
      id: '7', 
      title: 'Vivo – 5G Case Study', 
      description: 'Processo técnico de finalização de áudio publicitário.', 
      mp4Url: `${BASE_URL}/videos/VIVO%20ANA%20CASTELA%205G%20CASE.mp4`, 
      thumbnail: `${BASE_URL}/thumbnails/THUMB_VIVO%20ANA%20CASTELA%205G%20CASE.png`
    },
    { 
      id: '8', 
      title: 'Itaipava – Mix de Carnaval', 
      description: 'Ajuste de loudness e planos sonoros para broadcast.', 
      mp4Url: `${BASE_URL}/videos/ITAIPAVA%20CARNAVAL%202025.mp4`, 
      thumbnail: `${BASE_URL}/thumbnails/THUMB_ITAIPAVA%20CARNAVAL%202025.png`
    },
    { 
      id: '9', 
      title: 'Mycon – Audio Finishing', 
      description: 'Excelência técnica em spots e vídeos digitais.', 
      mp4Url: `${BASE_URL}/videos/MYCON%20CONSORCIO.mp4`, 
      thumbnail: `${BASE_URL}/thumbnails/THUMB_MYCON%20CONSORCIO.png`
    }
  ],
  en: [
    { 
      id: '1', 
      title: 'Vivo – Ana Castela', 
      description: 'Audio finishing and mixing for the "A Um 5G de Você" campaign. Pop country, youthful energy, and sharp musical timing for TV and digital.', 
      mp4Url: `${BASE_URL}/videos/VIVO%20ANA%20CASTELA%205G%20CASE.mp4`, 
      thumbnail: `${BASE_URL}/thumbnails/THUMB_VIVO%20ANA%20CASTELA%205G%20CASE.png`
    },
    { 
      id: '2', 
      title: 'Itaipava – Carnival 2025', 
      description: 'Mixing, AI-powered field sound treatment, and sound design for the Carnival film with Ivete Sangalo. Street vibe, warm percussion, and highlighted vocals for broadcast.', 
      mp4Url: `${BASE_URL}/videos/ITAIPAVA%20CARNAVAL%202025.mp4`, 
      thumbnail: `${BASE_URL}/thumbnails/THUMB_ITAIPAVA%20CARNAVAL%202025.png`
    },
    { 
      id: '3', 
      title: 'Mycon – Consortium', 
      description: 'Field sound treatment, sound design, and finishing for a national campaign. Confident tone, direct speech, and presence for financial retail.', 
      mp4Url: `${BASE_URL}/videos/MYCON%20CONSORCIO.mp4`, 
      thumbnail: `${BASE_URL}/thumbnails/THUMB_MYCON%20CONSORCIO.png`
    },
    { 
      id: '4', 
      title: 'Santander – SMusic', 
      description: "Sound design and mixing for Santander's music platform. Pop aesthetics, musical dynamics, and youthful brand identity.", 
      mp4Url: `${BASE_URL}/videos/SANTANDER%20SMUSIC.mp4`, 
      thumbnail: `${BASE_URL}/thumbnails/THUMB_SANTANDER%20SMUSIC.png`
    },
    { 
      id: '5', 
      title: 'Magazine Luiza – Partner Magalu', 
      description: 'Technical finishing for a national retail campaign. Close communication, agile pace, and total message clarity.', 
      mp4Url: `${BASE_URL}/videos/MAGAZINE%20LUIZA%20PARCEIRO%20MAGALU.mp4`, 
      thumbnail: `${BASE_URL}/thumbnails/THUMB_MAGAZINE%20LUIZA%20PARCEIRO%20MAGALU.png`
    },
    { 
      id: '6', 
      title: 'Shopee – 11.11 Terry Crews', 
      description: 'Mixing and finishing for a massive promotional campaign. Humor, punch, and impact designed for conversion.', 
      mp4Url: `${BASE_URL}/videos/SHOPEE%201111%20TERRY%20CREWS.mp4`, 
      thumbnail: `${BASE_URL}/thumbnails/THUMB_SHOPEE%201111%20TERRY%20CREWS.png`
    },
    { 
      id: '7', 
      title: 'Vivo – 5G Case Study', 
      description: 'Detailed analysis of professional audio finishing.', 
      mp4Url: `${BASE_URL}/videos/VIVO%20ANA%20CASTELA%205G%20CASE.mp4`, 
      thumbnail: `${BASE_URL}/thumbnails/THUMB_VIVO%20ANA%20CASTELA%205G%20CASE.png`
    },
    { 
      id: '8', 
      title: 'Itaipava – Broadcast Mix', 
      description: 'Loudness control and sound staging for national TV.', 
      mp4Url: `${BASE_URL}/videos/ITAIPAVA%20CARNAVAL%202025.mp4`, 
      thumbnail: `${BASE_URL}/thumbnails/THUMB_ITAIPAVA%20CARNAVAL%202025.png`
    },
    { 
      id: '9', 
      title: 'Mycon – Voice Post', 
      description: 'Dialog cleanup and vocal restoration.', 
      mp4Url: `${BASE_URL}/videos/MYCON%20CONSORCIO.mp4`, 
      thumbnail: `${BASE_URL}/thumbnails/THUMB_MYCON%20CONSORCIO.png`
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
