/** biome-ignore-all lint/suspicious/noArrayIndexKey: <explanation> */
import Image from "next/image";

import {
  BenefitCard,
  FaqItem,
  InfoCard,
  ServiceCard,
} from "@/components/landing/cards";
import { CtaBanner, SiteFooter, SiteHeader } from "@/components/landing/chrome";
import {
  FramedImage,
  GalleryPlaceholder,
  PlaceholderMedia,
  SplitSection,
} from "@/components/landing/media";
import {
  ButtonLink,
  Section,
  SectionHeading,
  TagPill,
} from "@/components/landing/section";
import {
  benefits,
  faqs,
  galleryItems,
  glossExpressBenefit,
  highlights,
  processSteps,
  references,
  serviceFilters,
  services,
  siteMenu,
} from "@/content/home";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader menu={siteMenu} />
      <main>
        <section
          id="inicio"
          className="section-shell relative isolate overflow-hidden px-4 py-10 sm:px-6 lg:px-8 lg:py-16"
        >
          <div className="absolute inset-0 -z-10">
            <Image
              src="/assets/hero-bg.jpg"
              alt="Ambiente da New Hair"
              fill
              priority
              className="object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,250,245,0.98),rgba(245,239,231,0.82))]" />
          </div>
          <div className="mx-auto grid w-full max-w-6xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="space-y-8">
              <div className="space-y-5">
                <div>
                  <h1 className="max-w-2xl font-display text-2xl font-bold text-[#0F1215] sm:text-3xl lg:text-4xl">
                    Salão de beleza em Campos dos Goytacazes/RJ com
                  </h1>
                  <p className="text-[#D2AE6D] text-2xl sm:text-3xl lg:text-4xl font-display italic font-bold">
                    técnica, cuidado e resultado impecável
                  </p>
                </div>
                <p className="max-w-xl text-base leading-8 text-stone-700 sm:text-md">
                  Cabelos, unhas e maquiagem com organização, pontualidade e
                  padrão elevado. Agende pelo WhatsApp e viva uma experiência
                  única, segura e com autoestima renovada.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <ButtonLink href="#servicos" variant="secondary">
                  Agendar Horário
                </ButtonLink>
                <ButtonLink href="#contato" variant="ghost">
                  Ver Resultados
                </ButtonLink>
              </div>
              <p className="max-w-xl text-base text-[#737373] sm:text-sm">
                Corte, escova, coloração, correção de cor, manicure, pedicure e
                maquiagem em Campos dos Goytacazes.
              </p>
            </div>
            <div className="relative">
              <div className="overflow-hidden rounded-[36px] border border-white/70 bg-white shadow-[0_30px_80px_rgba(28,25,23,0.15)]">
                <FramedImage
                  src="/assets/who-iam.jpg"
                  alt="Profissional da New Hair"
                  priority
                  className="aspect-4/5 min-h-120"
                />
              </div>
            </div>
          </div>
        </section>

        <Section contentClassName="space-y-12">
          <div className="grid col-span-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 justify-center">
            {highlights.map((item) => (
              <InfoCard
                key={item.description}
                description={item.description}
                icon={item.icon}
              />
            ))}
          </div>

          <h2 className="text-2xl text-center lg:text-3xl xl:text-4xl font-display text-stone-900">
            Escolha o que você quer resolver hoje:
          </h2>

          <div className="grid text-center col-span-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 justify-center">
            {serviceFilters.map((filter, index) => (
              <TagPill key={filter} label={filter} active={index === 0} />
            ))}
          </div>
        </Section>

        <Section>
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div className="overflow-hidden rounded-4xl border border-stone-200 bg-white shadow-[0_18px_50px_rgba(28,25,23,0.08)]">
              <FramedImage
                src="/assets/equipe.png"
                alt="Equipe New Hair"
                className="aspect-4/5"
              />
            </div>
            <div className="space-y-4">
              <SectionHeading
                eyebrow="Diferencias"
                title="Uma equipe preparada para entrega tecnica, acolhimento e resultado impecavel"
                description="Profissionais alinhados em atendimento, organização e padrão elevado para que voce viva uma experiencia segura, pontual e com a confianca de estar em boas maos do inicio ao fim."
              />
              <div className="grid gap-4">
                {references.map((item, index) => (
                  <article
                    key={item.title}
                    className="rounded-3xl border border-stone-200 bg-[#efe3d1] px-5 py-5"
                  >
                    <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-stone-500">
                      Diferencial {String(index + 1).padStart(2, "0")}
                    </p>
                    <h3 className="mt-2 font-bold text-lg text-stone-900">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-stone-700">
                      {item.description}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </Section>

        <Section
          id="servicos"
          eyebrow="Serviços New Hange Hair"
          title="Serviços oferecidos pela New Hange Hair"
          contentClassName="space-y-6"
        >
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              cta={service.cta}
              media={
                <div className={"min-h-80 relative overflow-hidden"}>
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              }
            />
          ))}
        </Section>

        <Section
          id="resultados"
          className="bg-white/55"
          contentClassName="space-y-16"
        >
          <SplitSection
            eyebrow="GLOSS EXPRESS"
            title="Gloss Express em Campos dos Goytacazes cobertura de fios brancos com rapidez e acabamento natural"
            description=" Para quem precisa manter a cor em dia sem permanência prolongada no salão. A Gloss Express entrega cobertura de fios brancos, renovação do tom e brilho imediato, com aparência bem cuidada e padrão elevado."
            cta={
              <ButtonLink href="#contato" variant="secondary">
                Quero avaliar meu caso
              </ButtonLink>
            }
            media={
              <div className="grid gap-3 p-4 sm:grid-cols-2">
                <PlaceholderMedia
                  label="Antes"
                  caption="Imagem inicial"
                  ratio="portrait"
                  imageSrc="/assets/gloss-ex-1.png"
                  imageAlt="Antes"
                />
                <PlaceholderMedia
                  label="Depois"
                  caption="Resultado final"
                  ratio="portrait"
                  imageSrc="/assets/gloss-ex-2.png"
                  imageAlt="Depois"
                />
              </div>
            }
          />

          <div className="space-y-8">
            <SectionHeading
              eyebrow="Beneficios"
              title="Três benefícios do gloss express"
              align="center"
            />
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {glossExpressBenefit.map((item, index) => (
                <BenefitCard
                  key={index}
                  index={index}
                  title={item.title}
                  description={item.description}
                />
              ))}
            </div>
          </div>

          <div className="rounded-3xl flex flex-wrap md:flex-nowrap border border-stone-200 p-6 md:py-12 bg-white md:px-6">
            <div className="flex flex-col items-start gap-4">
              <h2 className="font-display font-bold text-3xl text-stone-900">
                Como funciona
              </h2>
              <p className="text-stone-700">
                Com uma ampla gama de tonalidades, colore do loura claríssimo ao
                castanho escuro, em uma única bisnaga. Nossa avaliação é o
                diferencial, para alinhamento de expectativas do cliente
              </p>
            </div>

            <div className="flex flex-wrap sm:grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <h4 className="font-bold text-lg">Aplicação e finalização</h4>
                <p className="text-stone-700">
                  serviço objetivo, com foco em uniformidade, brilho e
                  acabamento.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-bold text-lg">Avaliação rápida do tom</h4>
                <p className="text-stone-700">
                  alinhamos o objetivo, o tom atual e o nível de cobertura
                  desejado.
                </p>
              </div>
            </div>
          </div>
        </Section>

        <Section>
          <CtaBanner
            eyebrow="COMO AGENDAR"
            title="Agende seu horário e experimente o poder da Gloss Express!"
            description="envie uma mensagem no WhatsApp com “Gloss Express” para confirmar o melhor horário disponível."
            buttonLabel="AGENDE SEU GLOSS EXPRESS!"
            buttonHref="#contato"
          />
        </Section>

        <Section className="bg-white/45" contentClassName="space-y-16">
          <SplitSection
            eyebrow="Sobre a profissional"
            title="Uma secao institucional para contar a historia por tras do atendimento"
            description="Este bloco combina uma imagem real com texto de autoridade. Ele foi pensado para voce ajustar biografia, metodologia e proposta de valor sem refazer a composicao."
            reverse
            cta={
              <ButtonLink href="#equipe" variant="secondary">
                Conhecer equipe
              </ButtonLink>
            }
            media={
              <FramedImage
                src="/assets/who-iam.jpg"
                alt="Profissional New Hair em destaque"
                className="aspect-4/5"
              />
            }
          />

          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="space-y-5">
              <SectionHeading
                eyebrow="Antes e depois"
                title="Bloco editorial para prova visual com texto de suporte"
                description="No wireframe essa area reforca resultados reais. Aqui ela fica pronta para receber fotos futuras sem alterar a malha da pagina."
              />
              <div className="space-y-4 text-sm leading-7 text-stone-600">
                <p>
                  O layout sustenta comparativos, legendas e explicacoes sobre
                  tecnica usada, indicacao e manutencao.
                </p>
                <p>
                  A ordem dos elementos foi pensada para continuar forte tanto
                  em desktop quanto no mobile, onde a midia sobe e o texto
                  permanece legivel.
                </p>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <PlaceholderMedia
                label="Resultado A"
                caption="Imagem reservada"
                ratio="portrait"
              />
              <PlaceholderMedia
                label="Resultado B"
                caption="Imagem reservada"
                ratio="portrait"
              />
            </div>
          </div>
        </Section>

        <Section
          eyebrow="Diferenciais do processo"
          title="Cada etapa importante pode virar um argumento objetivo"
          description="Essa grade foi pensada para espelhar o bloco do wireframe com icones e frases curtas, deixando a pagina clara para quem esta comparando opcoes."
          contentClassName="grid gap-5 md:grid-cols-2 xl:grid-cols-4"
        >
          {processSteps.map((step, index) => (
            <article
              key={step.title}
              className="rounded-3xl border border-stone-200 bg-white p-6 text-center shadow-[0_16px_40px_rgba(28,25,23,0.06)]"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#efe3d1] text-sm font-semibold tracking-[0.14em] text-stone-700">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 font-display text-2xl text-stone-900">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-stone-600">
                {step.description}
              </p>
            </article>
          ))}
        </Section>

        <Section>
          <CtaBanner
            eyebrow="Faixa estrategica"
            title="Segundo CTA pronto para fechar a pagina antes de galeria, equipe e FAQ"
            description="Voce consegue usar esse bloco para campanha, agenda limitada, oferta sazonal ou qualquer chamada mais forte no meio do funil."
            buttonLabel="Reservar horario"
            buttonHref="#contato"
          />
        </Section>

        <Section
          eyebrow="Galeria e depoimentos"
          title="Placeholder estrutural para voce plugar imagens e provas sociais depois"
          description="Em vez de travar o layout esperando novos assets, a secao ja ocupa o espaco correto e mantem o ritmo visual do wireframe."
          contentClassName="space-y-16"
        >
          <GalleryPlaceholder items={galleryItems} />
          <SplitSection
            eyebrow="Quem esta por tras"
            title="Uma segunda secao autoral para reforcar assinatura, metodo e posicionamento"
            description="No wireframe existe um novo ponto de apresentacao da proprietaria. Aqui ele entra como um bloco adicional, mais curto, para reforcar autoridade perto do fim da pagina."
            media={
              <FramedImage
                src="/assets/who-iam.jpg"
                alt="Retrato da proprietaria da New Hair"
                className="aspect-4/5"
              />
            }
          />
        </Section>

        <Section
          id="equipe"
          className="bg-white/50"
          contentClassName="space-y-12"
        >
          <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
            <div className="overflow-hidden rounded-4xl border border-stone-200 bg-white shadow-[0_20px_50px_rgba(28,25,23,0.08)]">
              <FramedImage
                src="/assets/equipe.png"
                alt="Equipe reunida da New Hair"
                className="aspect-4/3"
              />
            </div>
            <div className="space-y-5">
              <SectionHeading
                eyebrow="Equipe"
                title="Uma secao institucional dedicada ao time"
                description="O bloco da equipe combina imagem ampla e texto de apoio para contar cultura, atendimento e especialidades sem precisar recorrer a cards individuais agora."
              />
              <div className="grid gap-4 sm:grid-cols-2">
                <article className="rounded-3xl border border-stone-200 bg-white p-5">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-stone-500">
                    Atendimento
                  </p>
                  <p className="mt-2 text-sm leading-6 text-stone-600">
                    Espaco para reforcar acolhimento, reserva de horario e
                    experiencia personalizada.
                  </p>
                </article>
                <article className="rounded-3xl border border-stone-200 bg-white p-5">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-stone-500">
                    Especialidades
                  </p>
                  <p className="mt-2 text-sm leading-6 text-stone-600">
                    Area ideal para listar tecnicas principais, acabamento,
                    coloracao e suporte de manutencao.
                  </p>
                </article>
              </div>
            </div>
          </div>
        </Section>

        <Section>
          <CtaBanner
            eyebrow="Banner final"
            title="Encerramento pensado para manter a decisao quente ate o ultimo scroll"
            description="O wireframe termina com uma chamada forte. Aqui ela fica pronta para receber sua oferta principal, urgencia ou chamada para WhatsApp."
            buttonLabel="Falar agora"
            buttonHref="#contato"
          />
        </Section>

        <Section
          id="faq"
          eyebrow="Perguntas frequentes"
          title="FAQ estatico pronto para virar accordion depois"
          description="Nesta primeira entrega, a estrutura prioriza leitura rapida e organizacao. Depois voce pode transformar esse bloco em interativo sem refatorar a pagina inteira."
          contentClassName="grid gap-4"
        >
          {faqs.map((item) => (
            <FaqItem
              key={item.question}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </Section>

        <Section
          id="contato"
          eyebrow="Localizacao e contato"
          title="Ultimo bloco preparado para endereco, horarios e mapa"
          description="A estrutura respeita o wireframe com texto de apoio em um lado e um placeholder de mapa no outro, pronta para trocar depois por um embed real."
          contentClassName="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-start"
        >
          <div className="space-y-5 rounded-4xl border border-stone-200 bg-white p-8 shadow-[0_18px_50px_rgba(28,25,23,0.06)]">
            <p className="text-sm leading-7 text-stone-600">
              Campinas, SP. Atendimento com horario marcado e suporte para
              orientacao inicial via WhatsApp.
            </p>
            <div className="space-y-2 text-sm text-stone-700">
              <p>Seg a Sex: 09h as 18h</p>
              <p>Sabado: sob consulta</p>
            </div>
            <ButtonLink href="https://wa.me/5500000000000" variant="secondary">
              Abrir conversa
            </ButtonLink>
          </div>
          <div className="overflow-hidden rounded-4xl border border-stone-200 bg-white p-4 shadow-[0_18px_50px_rgba(28,25,23,0.06)]">
            <PlaceholderMedia
              label="Mapa da regiao"
              caption="Substitua por iframe ou imagem do mapa quando quiser finalizar o bloco de localizacao."
              ratio="wide"
              className="min-h-80"
            />
          </div>
        </Section>
      </main>
      <SiteFooter menu={siteMenu} />
    </div>
  );
}
