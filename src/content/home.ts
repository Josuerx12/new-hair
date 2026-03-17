/** biome-ignore-all assist/source/organizeImports: <explanation> */
import {
  CalendarSearch,
  ChartLine,
  Clock,
  FileText,
  Heart,
  Search,
  Map as MapIcon,
  Check,
  ChartNoAxesColumn,
  Compass,
} from "lucide-react";

export const siteMenu = [
  { label: "Serviços", href: "#servicos" },
  { label: "Resultados", href: "#resultados" },
  { label: "Sobre", href: "#" },
  { label: "Como funciona", href: "#" },
  { label: "Localização", href: "#contato" },
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
    icon: Check,
  },
  {
    title: "Ritmo inteligente",
    description: "organização e eficiência, sem comprometer o acabamento.",
    icon: ChartNoAxesColumn,
  },
  {
    title: "Padrão de entrega",
    description:
      "equipe treinada, atendimento pontual e experiência acolhedora.",
    icon: Compass,
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

export const howNewHangeAttendmentWorks = [
  "Você chama no WhatsApp e informa o serviço desejado.",
  "Em procedimentos técnicos, alinhamos histórico e objetivo antes de confirmar a agenda.",
  "Confirmamos o melhor horário disponível e organizamos o atendimento.",
  "Atendimento pontual, execução cuidadosa e acabamento impecável.",
  "Finalização e orientações objetivas para manter o resultado.",
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
      "Análise do fio, histórico e objetivo para definir a proposta adequada.",
    icon: Search,
  },
  {
    title: "Plano e execução",
    description:
      "Personalização do procedimento com direção técnica e padrão de etapas.",
    icon: FileText,
  },
  {
    title: "Finalização e orientações pós procedimento",
    description:
      "Ao final, você recebe a finalização e orientações objetivas para manter o resultado bonito por mais tempo, com cuidado e consistência.",
    icon: MapIcon,
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
    question: "⁠Eu preciso ser atendida pela fundadora?",
    answer:
      "Não necessariamente. A maioria dos serviços pode ser realizada pela equipe, seguindo o padrão de técnica, organização e acabamento do salão. No entanto, o Liso Perfeito e as mechas são realizados exclusivamente pela Angélica, mediante avaliação e agendamento.",
  },
  {
    question: "Vocês realizam correção de cor?",
    answer:
      "Sim. A correção de cor exige avaliação prévia e condução responsável. Por isso, a orientação começa no WhatsApp, para entendermos o histórico do cabelo e indicarmos o caminho mais seguro e coerente com o resultado desejado.",
  },
  {
    question: "Quais serviços o salão oferece?",
    answer:
      "O New Hange Hair atende cabelos, unhas e maquiagem, além de serviços técnicos como cor, correção de cor, Gloss Express, mechas e avaliação para o Liso Perfeito.",
  },
  {
    question: "Como faço para agendar?",
    answer:
      "O agendamento é realizado pelo WhatsApp. Envie uma mensagem informando o serviço desejado e a sua disponibilidade de dia e horário. A equipe confirma o melhor horário disponível e orienta os próximos passos.",
  },
  {
    question: "Como vocês informam valores?",
    answer:
      "Os valores são informados após a orientação do serviço e, quando necessário, após avaliação. Dessa forma, o orçamento fica alinhado ao seu objetivo, ao histórico do cabelo e ao tempo de atendimento previsto.",
  },
  {
    question: "Vocês atendem com horário marcado?",
    answer:
      "Sim. Trabalhamos com horário confirmado para garantir pontualidade, organização e um atendimento com atenção aos detalhes.",
  },
  {
    question: "É possível conseguir encaixe no mesmo dia?",
    answer:
      "Quando existe disponibilidade, sim. Recomendamos consultar pelo WhatsApp para verificarmos os horários livres e a viabilidade do encaixe.",
  },
  {
    question:
      "Como funciona a avaliação para cor, correção de cor, mechas e Liso Perfeito?",
    answer:
      "Nós analisamos o objetivo, o histórico do cabelo e a condição atual dos fios. Em seguida, orientamos a proposta mais segura e adequada ao resultado desejado. Para mechas e Liso Perfeito, a avaliação direciona o agendamento com a Angélica.",
  },
  {
    question: "Quais são as formas de pagamento?",
    answer:
      "As formas de pagamento são informadas no WhatsApp antes da confirmação do horário, para que tudo fique claro e organizado.",
  },
  {
    question: "Qual é a política de remarcação e atrasos?",
    answer:
      "Para manter a organização da agenda, remarcações e atrasos devem ser comunicados com antecedência pelo WhatsApp. A equipe orienta a melhor solução conforme a disponibilidade do dia.",
  },
];
