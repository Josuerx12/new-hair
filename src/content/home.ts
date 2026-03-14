import {
  CalendarSearch,
  ChartLine,
  Clock,
  FileText,
  Heart,
  Search,
  Map,
} from "lucide-react";

export const siteMenu = [
  { label: "Início", href: "#inicio" },
  { label: "Serviços", href: "#servicos" },
  { label: "Resultados", href: "#resultados" },
  { label: "Equipe", href: "#equipe" },
  { label: "FAQ", href: "#faq" },
  { label: "Contato", href: "#contato" },
];

export const highlights = [
  {
    description: "Mais de trinta anos de história e consistência.",
    icon: CalendarSearch,
  },
  {
    description: "Pontualidade e organização no atendimento.",
    icon: Clock,
  },
  {
    description: "Excelência técnica como padrão.",
    icon: ChartLine,
  },
  {
    description: "Ambiente acolhedor, do começo ao fim.",
    icon: Heart,
  },
  {
    description: "Cabelos, unhas e maquiagem com padrão elevado.",
    svgPath: "/assets/union.svg",
  },
];

export const serviceFilters = [
  "Cabelos",
  "Unhas",
  "Maquiagem",
  "Cor e correção de cor",
  "Gloss Express",
  "Liso perfeito",
];

export const references = [
  {
    title: "Técnica com responsabilidade",
    description: "foco em beleza, segurança e resultado consistente.",
  },
  {
    title: "Ritmo inteligente",
    description: "organização e eficiência, sem comprometer o acabamento.",
  },
  {
    title: "Padrão de entrega",
    description:
      "equipe treinada, atendimento pontual e experiência acolhedora.",
  },
];

export const services = [
  {
    title: "Cabelos",
    description:
      "Corte feminino, escova, finalização e tratamentos capilares com técnica e acabamento impecável, para brilho, leveza e saúde dos fios em Campos dos Goytacazes.",
    cta: "AGENDAR CABELO",
    image: "/assets/cabelos.png",
  },
  {
    title: "Unhas",
    description:
      "Manicure e pedicure com acabamento preciso e cuidado em cada etapa, para um resultado elegante no dia a dia ou em ocasiões especiais.",
    cta: "AGENDAR MANICURE E PEDICURE",
    image: "/assets/unhas.jpg",
  },
  {
    title: "Maquiagem",
    description:
      "Maquiagem social com acabamento profissional, equilíbrio e durabilidade, ideal para eventos, formaturas e produções especiais.",
    cta: "AGENDAR MAQUIAGEM",
    image: "/assets/maquiagem.jpg",
  },
  {
    title: "Correção de cor",
    description:
      "Correção de cor com avaliação técnica e condução responsável, indicada para ajustar manchas, tons indesejados e resultados anteriores, com foco em uniformidade e segurança dos fios.",
    cta: "SOLICITAR AVALIAÇÃO NO WHATSAPP",
    image: "/assets/correcao-de-cor.jpg",
  },
  {
    title: "Experiência completa no New Hange Hair",
    description:
      "Para quem deseja cuidar de si por inteiro com organização e padrão elevado. Montamos uma sequência inteligente para cabelo, unhas e maquiagem no mesmo dia, com tranquilidade e acabamento impecável.",
    cta: "SOLICITAR EXPERIÊNCIA NEW HANGE HAIR ",
    image: "/assets/experiencia.jpg",
  },
];

export const glossExpressBenefit = [
  {
    title: "Cobertura rápida de fios brancos",
    description:
      "Cobertura rápida em até 3 minutos, não altera o fundo natural do cabelo.",
  },
  {
    title: "Brilho e aspecto de cabelo tratado",
    description:
      "Além de uniformizar, entrega brilho sem ressecamento. Hipoalergênica, pessoas com tratamento de CA ou que já passaram, podem utilizar sem medo.",
  },
  {
    title: "Eficiência com padrão premium",
    description:
      "Efeito camuflagem, cobertura total dos brancos, trazendo naturalidade",
  },
];
export const lisoPerfeitoBenefit = [
  {
    title: "Personalização real do resultado",
    description:
      "Não é um alisamento padrão. Não é um produto pronto. Utilizamos um software excluivo que analisa profundamente a estrutura do fio, hitórico químico e saúde do cabelo, com o objetivo de entregar um liso saudável.",
  },
  {
    title: "Acabamento elegante: brilho, leveza e naturalidade",
    description:
      "O resultado não é apenas ficar liso. É ficar alinhado, com movimento, e sem afinamento de pontas.",
  },
  {
    title: "Segurança e previsibilidade no processo",
    description:
      "Com avaliação e direção técnica, o procedimento possui garantia vitalícia, oferecendo maior garantia e transparência a cliente. Assim reduzindo surpresas e aumentando a confiança dos clientes, antes, durante e depois.",
  },
];

export const lisoPerfeitoProcess = [
  {
    title: "Avaliação com Angélica",
    description:
      "análise do fio, histórico e objetivo para definir a proposta adequada.",
    icon: Search,
  },
  {
    title: "Plano e execução",
    description:
      "personalização do procedimento com direção técnica e padrão de etapas.",
    icon: FileText,
  },
  {
    title: "Finalização e orientações pós procedimento",
    description:
      "Ao final, você recebe a finalização e orientações objetivas para manter o resultado bonito por mais tempo, com cuidado e consistência.",
    icon: Map,
  },
];

export const galleryItems = [
  {
    title: "Transformação em destaque",
    caption: "Espaço para caso principal com foto de maior impacto.",
  },
  {
    title: "Resultado 01",
    caption: "Placeholder para imagem de prova visual.",
  },
  { title: "Resultado 02", caption: "Área preparada para antes e depois." },
  { title: "Resultado 03", caption: "Pode virar depoimento com foto." },
  {
    title: "Resultado 04",
    caption: "Bloco flexível para feed, reels ou portfólio.",
  },
];

export const processSteps = [
  {
    title: "Avaliação inicial",
    description:
      "Entendimento do objetivo, espessura, rotina e histórico para definir o melhor caminho.",
  },
  {
    title: "Plano personalizado",
    description:
      "Escolha de técnica, quantidade, tonalidade e cronograma com expectativa de manutenção.",
  },
  {
    title: "Aplicação e acabamento",
    description:
      "Execução do procedimento com foco em conforto, naturalidade e integração do resultado.",
  },
  {
    title: "Acompanhamento",
    description:
      "Orientações de cuidado e retorno para manutenção estruturada ao longo do tempo.",
  },
];

export const faqs = [
  {
    question: "Como funciona a avaliação inicial?",
    answer:
      "A base da página já prepara esse bloco para explicar diagnóstico, análise de fio, indicação técnica e proposta personalizada.",
  },
  {
    question: "Quanto tempo dura a manutenção?",
    answer:
      "Você poderá ajustar esse texto depois com a regra real do salão, mas a seção já comporta frequência e cuidados entre visitas.",
  },
  {
    question: "É possível adaptar para diferentes técnicas?",
    answer:
      "Sim. Os cards de serviço foram montados para você trocar títulos, descrições e CTAs sem alterar a estrutura.",
  },
  {
    question: "Essa landing suporta novas campanhas?",
    answer:
      "Sim. A composição foi desenhada em blocos reutilizáveis para evoluir com novas ofertas, fotos e provas sociais.",
  },
];
