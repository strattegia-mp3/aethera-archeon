import {
  Award,
  Compass,
  Building2,
  Clock,
  MapPin,
  Phone,
  Mail,
  ShieldCheck,
  Star,
  Home,
  Briefcase,
  Palette,
  Map as MapIcon,
  Layers,
} from "lucide-react";
import { InstagramIcon, LinkedInIcon } from "@/components/ui/SocialIcons";
import {
  type HeaderContent,
  type HeroContent,
  type ServicesContent,
  type AboutContent,
  type TestimonialsContent,
  type LocationContent,
  type FooterContent,
  type WhatsAppFabContent,
} from "@/types";

/* ==========================================================================
   HEADER & NAVIGATION
   ========================================================================== */

/**
 * @description Dados de navegação global, logotipo e chamadas de ação do cabeçalho.
 */
export const HEADER_CONTENT: HeaderContent = {
  logo: {
    name: "Aethera",
    tagline: "Archeon",
    ariaLabel: "Aethera Archeon — Página inicial",
  },
  navLinks: [
    { label: "Serviços", href: "#servicos" },
    { label: "Nossa Essência", href: "#sobre" },
    { label: "Depoimentos", href: "#depoimentos" },
    { label: "Localização", href: "#localizacao" },
  ],
  cta: {
    label: "Realize uma Visita",
    href: "#localizacao",
  },
  contact: {
    phone: "(00) 00000-0000",
    phoneLink: "tel:+5500000000000",
    ariaLabel: "Ligar para o escritório",
  },
};

/* ==========================================================================
   HERO SECTION
   ========================================================================== */

/**
 * @description Conteúdo da primeira dobra (Above the Fold). Focado em conversão e impacto visual.
 */
export const HERO_CONTENT: HeroContent = {
  badge: {
    highLevel: "Arquitetura de Alto Padrão",
  },
  headline: {
    start: "Arquitetura que transcende o ",
    highlight: "tempo,",
    end: " em cada detalhe.",
  },
  subheadline:
    "Projetos residenciais de luxo e espaços corporativos desenhados para inspirar. Mais de 150 obras materializadas com exclusividade, técnica e rigor estético.",
  cta: {
    primaryLabel: "Agendar Consultoria",
    primaryHref: "#localizacao",
    secondaryLabel: "(00) 00000-0000",
    secondaryHref: "tel:+5500000000000",
  },
  trustBadges: [
    { icon: ShieldCheck, text: "Registro CAU Ativo" },
    { icon: Star, text: "5.0 no Google (48 avaliações)" },
  ],
  stats: [
    { value: "12+", label: "Anos de Legado" },
    { value: "150+", label: "Projetos Entregues" },
    { value: "100%", label: "Exclusividade" },
  ],
  scrollText: "Role para explorar",
};

/* ==========================================================================
   SERVICES & EXPERTISE
   ========================================================================== */

/**
 * @description Catálogo de especialidades do estúdio. Utiliza a tipagem global `Service`.
 */
export const SERVICES_CONTENT: ServicesContent = {
  badge: "Áreas de Atuação",
  heading: {
    start: "A materialização da sua ",
    highlight: "visão",
  },
  description:
    "Da concepção volumétrica ao detalhamento de interiores, nosso estúdio orquestra todas as fases do projeto para garantir uma entrega impecável e autoral.",
  services: [
    {
      id: "residencial",
      icon: Home,
      title: "Residencial de Luxo",
      description:
        "Casas de alto padrão desenhadas para refletir a identidade dos moradores. Foco em iluminação natural, integração de ambientes e atemporalidade.",
      highlight: "Projetos Exclusivos",
      featured: true,
      tag: "Assinatura",
    },
    {
      id: "comercial",
      icon: Briefcase,
      title: "Comercial & Corporativo",
      description:
        "Espaços de trabalho e varejo que comunicam o valor da sua marca. Unimos estética imponente com alta funcionalidade e fluxo inteligente.",
      highlight: "Arquitetura de Marca",
    },
    {
      id: "interiores",
      icon: Palette,
      title: "Design de Interiores",
      description:
        "Curadoria minuciosa de materiais nobres, mobiliário autoral e texturas. O refinamento do espaço de dentro para fora.",
      highlight: "Materiais Nobres",
    },
    {
      id: "masterplan",
      icon: MapIcon, // Usando o alias definido no import
      title: "Masterplan & Urbanismo",
      description:
        "Planejamento de condomínios fechados e complexos multiuso. Criação de ecossistemas urbanos com respeito à topografia e à natureza.",
      highlight: "Larga Escala",
      tag: "Novo",
    },
    {
      id: "bim",
      icon: Layers,
      title: "Tecnologia BIM & 3D",
      description:
        "Modelagem virtual precisa para compatibilização de engenharias, eliminando retrabalhos na obra e garantindo previsibilidade orçamentária.",
      highlight: "Precisão Milimétrica",
    },
    {
      id: "consultoria",
      icon: Compass,
      title: "Consultoria de Viabilidade",
      description:
        "Análise técnica de terrenos, potencial construtivo e estudos de massa para investidores e incorporadoras antes da tomada de decisão.",
      highlight: "Inteligência Imobiliária",
    },
  ],
  footer: {
    text: "Demandas específicas ou projetos especiais?",
    linkText: "Consulte nossos arquitetos parceiros",
    href: "https://wa.me/5500000000000?text=Olá!%20Gostaria%20de%20falar%20sobre%20um%20projeto%20específico.",
  },
};

/* ==========================================================================
   ABOUT & STUDIO
   ========================================================================== */

/**
 * @description História do estúdio, autoridade do arquiteto principal e métricas de sucesso.
 */
export const ABOUT_CONTENT: AboutContent = {
  label: "Nossa Essência",
  heading: {
    start: "Moldando o atemporal através da ",
    highlight: "arquitetura contemporânea",
  },
  paragraphs: [
    "A Aethera Archeon nasceu do desejo de elevar o padrão arquitetônico, trazendo sofisticação internacional e ancestralidade para o cenário local.",
    "Nosso estúdio une a herança do design clássico com a inovação contemporânea. Trabalhamos com materiais nobres, estudos de volumetria precisos e uma curadoria minuciosa para criar espaços que transcendem modismos.",
    "Sob a direção de nossos arquitetos principais, transformamos terrenos e ambientes em verdadeiras obras de arte habitáveis, refletindo a identidade e a confiança de quem os vivencia.",
  ],
  stats: {
    rating: "5.0★",
    source: "Google Maps",
    reviews: "48 avaliações de clientes",
  },
  architect: {
    name: "Aurelius & Equipe",
    role: "Arquitetura & Design de Interiores · CAU A0000-0",
    experience: "12",
    experienceText: "anos de legado",
  },
  badges: [
    {
      icon: Award,
      title: "Prêmio ArchDesign",
      subtitle: "Destaque Anual",
    },
    {
      icon: Compass,
      title: "Design Autoral",
      subtitle: "Especialistas",
    },
    {
      icon: Building2,
      title: "150+ Projetos",
      subtitle: "Materializados",
    },
    {
      icon: Clock,
      title: "12 anos",
      subtitle: "De excelência",
    },
  ],
};

/* ==========================================================================
   TESTIMONIALS & SOCIAL PROOF
   ========================================================================== */

/**
 * @description Prova social rigorosa, com depoimentos de alto padrão e logotipos de parceiros.
 */
export const TESTIMONIALS_CONTENT: TestimonialsContent = {
  badge: "Reconhecimento",
  heading: {
    start: "A confiança de quem ",
    highlight: "vivencia",
    end: " nossa arte",
  },
  stats: {
    rating: "5.0",
    text: "· Excelência comprovada em projetos entregues",
  },
  testimonials: [
    {
      id: "t1",
      name: "Mariana e Roberto Assis",
      role: "Empresários",
      avatar: "MR",
      rating: 5,
      text: "A Aethera transformou nossa residência em um verdadeiro refúgio. O domínio que possuem sobre luz natural e a escolha rigorosa dos acabamentos criaram uma atmosfera de luxo que não abre mão do conforto. Acompanhamento de obra impecável.",
      service: "Residência de Alto Padrão",
      date: "Março 2024",
    },
    {
      id: "t2",
      name: "Carlos Mendonça",
      role: "CEO, Vértice Holding",
      avatar: "CM",
      rating: 5,
      text: "Precisávamos que nossa sede corporativa transmitisse solidez e vanguarda tecnológica. O projeto desenhado pelo estúdio mudou a dinâmica da nossa empresa, melhorando o fluxo de trabalho e impressionando nossos investidores.",
      service: "Sede Corporativa",
      date: "Janeiro 2024",
    },
    {
      id: "t3",
      name: "Fernanda Vasconcelos",
      role: "Médica Cirurgiã",
      avatar: "FV",
      rating: 5,
      text: "Entreguei as chaves da minha cobertura nas mãos da Aethera e o resultado superou todas as expectativas. O detalhamento da marcenaria e a curadoria do mobiliário autoral são de um bom gosto indiscutível.",
      service: "Cobertura Urbana",
      date: "Novembro 2023",
    },
    {
      id: "t4",
      name: "Luciana Torres",
      role: "Diretora de Arte",
      avatar: "LT",
      rating: 5,
      text: "Como alguém que trabalha com estética, sou extremamente criteriosa. A Aethera conseguiu unir herança clássica com um frescor contemporâneo na minha boutique. O fluxo da loja é perfeito e os clientes sempre elogiam o espaço.",
      service: "Boutique de Luxo",
      date: "Agosto 2023",
    },
    {
      id: "t5",
      name: "Grupo Reserva",
      role: "Incorporadora",
      avatar: "GR",
      rating: 5,
      text: "O Masterplan do nosso novo condomínio fechado foi brilhantemente executado. Respeitaram a topografia local e criaram um ecossistema urbano que elevou o VGV do empreendimento muito acima da média da região.",
      service: "Masterplan Reserva",
      date: "Julho 2023",
    },
    {
      id: "t6",
      name: "André Sousa",
      role: "Advogado Sênior",
      avatar: "AS",
      rating: 5,
      text: "O projeto de interiores do nosso escritório de advocacia conseguiu equilibrar sobriedade e modernidade. O trabalho acústico nas salas de reunião e a iluminação cênica tornaram o ambiente incrivelmente produtivo e elegante.",
      service: "Escritório de Advocacia",
      date: "Maio 2023",
    },
  ],
  partners: {
    label: "Marcas Parceiras & Destaques",
    list: [
      { name: "CASACOR", initials: "CSC" },
      { name: "Artefacto", initials: "ART" },
      { name: "Ornare", initials: "ORN" },
      { name: "Portobello", initials: "PTB" },
      { name: "ArchDaily", initials: "ARC" },
    ],
  },
};

/* ==========================================================================
   LOCATION & CONTACT
   ========================================================================== */

/**
 * @description Informações geográficas, mapa, horários de funcionamento e canais de atendimento.
 */
export const LOCATION_CONTENT: LocationContent = {
  badge: "Localização & Contato",
  heading: {
    start: "Onde o design toma ",
    highlight: "forma",
  },
  description:
    "Nosso estúdio está localizado em uma região privilegiada e de fácil acesso. Um espaço pensado para receber clientes exigentes com total privacidade e inspiração.",
  hours: {
    title: "Horário de Funcionamento",
    schedule: [
      { days: "Segunda — Sexta", hours: "09:00 – 18:00", open: true },
      { days: "Sábado", hours: "Mediante agendamento", open: true },
      { days: "Domingo e Feriados", hours: "Fechado", open: false },
    ],
  },
  contact: [
    {
      icon: MapPin,
      label: "Endereço",
      value: "Endereço do Escritório — Cobertura",
      sub: "Bairro Nobre, Cidade — Estado, 00000-000",
      href: "https://maps.google.com/?q=Endereço+do+Escritório",
    },
    {
      icon: Phone,
      label: "Telefone & Atendimento",
      value: "(00) 00000-0000",
      sub: "Linha direta exclusiva",
      href: "tel:+5500000000000",
    },
    {
      icon: Mail,
      label: "E-mail Corporativo",
      value: "contato@aetheraarcheon.com",
      sub: "Retorno executivo em até 24h",
      href: "mailto:contato@aetheraarcheon.com",
    },
  ],
  map: {
    pinTitle: "Aethera Archeon",
    pinSub: "Estúdio de Arquitetura",
    buttonLabel: "Abrir no Google Maps",
    placeholderNote: "Substitua por <iframe> do Google Maps com sua URL embed",
  },
  benefits: [
    "Estacionamento privativo",
    "Acessibilidade total (PCDs)",
    "Salas de reunião reservadas",
    "Ambiente climatizado",
  ],
  whatsapp: {
    href: "https://wa.me/5500000000000?text=Olá!%20Gostaria%20de%20agendar%20uma%20consultoria%20com%20a%20Aethera%20Archeon.",
    label: "Agendar via WhatsApp",
  },
};

/* ==========================================================================
   FOOTER
   ========================================================================== */

/**
 * @description Links úteis, informações legais de rodapé e redes sociais.
 */
export const FOOTER_CONTENT: FooterContent = {
  brand: {
    name: "Aethera Archeon",
    tagline: "Arquitetura & Interiores",
    description:
      "Materializando o atemporal. Projetos residenciais de luxo e espaços comerciais com assinatura única.",
  },
  socials: [
    {
      icon: InstagramIcon,
      href: "https://instagram.com/aetheraarcheon",
      label: "Instagram da Aethera Archeon",
    },
    {
      icon: LinkedInIcon,
      href: "https://linkedin.com/company/aetheraarcheon",
      label: "LinkedIn da Aethera Archeon",
    },
  ],
  links: {
    servicos: [
      { label: "Residencial de Luxo", href: "#servicos" },
      { label: "Design de Interiores", href: "#servicos" },
      { label: "Comercial & Corporativo", href: "#servicos" },
      { label: "Masterplan", href: "#servicos" },
      { label: "Consultoria Premium", href: "#servicos" },
    ],
    escritorio: [
      { label: "Nossa Essência", href: "#sobre" },
      { label: "O Arquiteto", href: "#sobre" },
      { label: "Depoimentos", href: "#depoimentos" },
      { label: "Prêmios", href: "#sobre" },
      { label: "Contato", href: "#localizacao" },
    ],
  },
  contact: {
    address: [
      "Endereço do Escritório — Cobertura",
      "Bairro Nobre, Cidade — Estado",
      "CEP 00000-000",
    ],
    phone: "(00) 00000-0000",
    phoneLink: "tel:+5500000000000",
    email: "contato@aetheraarcheon.com",
    emailLink: "mailto:contato@aetheraarcheon.com",
  },
  headings: {
    expertise: "Expertise",
    studio: "O Estúdio",
    contact: "Contato",
  },
  legal: {
    privacy: "Política de Privacidade",
    privacyHref: "#",
    terms: "Termos de Uso",
    termsHref: "#",
    credits: "Desenvolvido por",
    developer: "Victor Rocha",
  },
  copyright:
    "Aethera Archeon Arquitetura Ltda. · CAU PJ3000-1 · CNPJ 00.000.000/0001-00",
};

/* ==========================================================================
   WIDGETS & MISC
   ========================================================================== */

/**
 * @description Dados para o Floating Action Button (FAB) do WhatsApp.
 */
export const WHATSAPP_FAB_CONTENT: WhatsAppFabContent = {
  url: "https://wa.me/5500000000000?text=Olá!%20Gostaria%20de%20agendar%20uma%20consultoria%20com%20a%20Aethera%20Archeon.",
  tooltip: "Atendimento Exclusivo",
  ariaLabel: "Abrir conversa no WhatsApp com a Aethera Archeon",
  containerAriaLabel: "Botão de contato flutuante",
};
