/** biome-ignore-all lint/suspicious/noArrayIndexKey: <explanation> */
import Image from "next/image";

import { BenefitCard, InfoCard, ServiceCard } from "@/components/landing/cards";
import { FaqItem } from "@/components/faq-item";
import { CtaBanner, SiteFooter, SiteHeader } from "@/components/landing/chrome";
import { FramedImage, SplitSection } from "@/components/landing/media";
import {
  ButtonLink,
  Section,
  SectionHeading,
  TagPill,
} from "@/components/landing/section";
import {
  faqs,
  galleryItems,
  glossExpressBenefit,
  highlights,
  howNewHangeAttendmentWorks,
  lisoPerfeitoBenefit,
  lisoPerfeitoProcess,
  processSteps,
  references,
  serviceFilters,
  services,
  siteMenu,
} from "@/content/home";
import { ChevronsDown, Info, Instagram, MapPin, Phone } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen text-foreground">
      <SiteHeader menu={siteMenu} />
      <main>
        <section
          id="inicio"
          className="section-shell relative isolate z-10 min-h-screen overflow-hidden pt-30 lg:pt-10"
        >
          <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
            <div className="absolute inset-0 bg-[url('/assets/hero-bg.jpg')] bg-cover bg-center" />
          </div>

          <div className="relative z-20 px-4 mx-auto md:mt-20 grid w-full max-w-6xl gap-10 lg:grid-cols-[1.10fr_0.90fr]">
            <div className="space-y-8 lg:mt-25">
              <div className="space-y-5">
                <div>
                  <h1 className="max-w-2xl font-display leading-17 font-bold text-[#0F1215] text-3xl sm:text-4xl lg:text-5xl">
                    Salão de beleza em Campos dos Goytacazes/RJ com
                  </h1>
                  <p className="text-[#D2AE6D] text-3xl leading-17 sm:text-4xl lg:text-5xl font-display italic font-bold">
                    técnica, cuidado e resultado impecável
                  </p>
                </div>
                <p className="max-w-xl text-2xl leading-9 text-[#737373] sm:text-md">
                  Cabelos, unhas e maquiagem com organização, pontualidade e
                  padrão elevado. Agende pelo WhatsApp e viva uma experiência
                  única, segura e com autoestima renovada.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <ButtonLink href="#servicos" variant="primary">
                  Agendar Horário
                </ButtonLink>
                <ButtonLink href="#contato" variant="ghost">
                  Ver Resultados
                </ButtonLink>
              </div>

              <p className="max-w-xl leading-6 text-sm text-[#737373] sm:text-sm">
                Corte, escova, coloração, correção de cor, manicure, pedicure e
                maquiagem em Campos dos Goytacazes.
              </p>
            </div>

            <div className="relative">
              <div className="overflow-hidden">
                <FramedImage
                  src="/assets/hero.png"
                  alt="Profissional da New Hair"
                  priority
                  className="lg:aspect-4/6 object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <div className="relative flex justify-center">
          <div className="bg-[#D2AE6D] z-10 absolute bottom-0 w-full h-0.5" />
          <div className="absolute -top-5 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-[#B89045]/40 bg-linear-to-r from-[#D2AE6D] to-[#E9D8B9] shadow-[0_10px_24px_rgba(116,88,40,0.35)] animate-bounce">
            <ChevronsDown size={28} className="text-[#61491E]" />
          </div>
        </div>

        <Section contentClassName="space-y-12">
          <div className="flex justify-center gap-6 flex-wrap">
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

          <div className="flex flex-wrap justify-center gap-6 max-w-3xl mx-auto">
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
              <SectionHeading title="Diferenciais" />
              <div className="grid gap-4">
                {references.map(({ title, description, icon: Icon }, index) => (
                  <article
                    key={index}
                    className="rounded-lg border border-[#E5DDD2] bg-linear-to-br from-[#FAF6EF] to-[#E7D4B1] px-5 py-5"
                  >
                    <div className="flex text-xl font-display font-medium  w-10 h-10 items-center justify-center rounded-full border border-[#D2AE6D] ">
                      <div className="bg-linear-to-br flex justify-center items-center from-[#D2AE6D] h-8 w-8 rounded-full text-center to-[#E9D8B9]  text-[#61491E]">
                        {Icon ? <Icon /> : <Info />}
                      </div>
                    </div>
                    <h3 className="mt-2 text-2xl text-stone-900">{title}</h3>
                    <p className="mt-2 leading-6 text-stone-700">
                      {description}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </Section>

        <Section id="servicos" contentClassName="space-y-12">
          <h2 className="text-2xl text-center lg:text-3xl xl:text-4xl font-display text-stone-900">
            Serviços New Hange Hair
          </h2>

          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              cta={service.cta}
              media={
                <div className={"min-h-80 relative rounded-xl overflow-hidden"}>
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
          className="bg-white/55 z-0! relative isolate"
          contentClassName="space-y-16"
        >
          <SplitSection
            eyebrow="GLOSS EXPRESS"
            title="Gloss Express em Campos dos Goytacazes cobertura de fios brancos com rapidez e acabamento natural"
            description=" Para quem precisa manter a cor em dia sem permanência prolongada no salão. A Gloss Express entrega cobertura de fios brancos, renovação do tom e brilho imediato, com aparência bem cuidada e padrão elevado."
            cta={
              <ButtonLink href="#contato">Quero avaliar meu caso</ButtonLink>
            }
            mediaStyle={false}
            media={
              <div className="grid w-full max-w-full grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="w-full relative min-h-80 h-full rounded">
                  <Image
                    src="/assets/gloss-ex-1.png"
                    alt="liso perfeito"
                    width={1200}
                    height={1600}
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="lg:w-64 lg:h-80 lg:absolute -top-20 left-25 object-cover"
                    priority
                  />
                </div>

                <FramedImage
                  src="/assets/gloss-ex-2.png"
                  alt="liso perfeito"
                  priority
                  className="w-full min-h-64 z-20 rounded hidden sm:block"
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

            <div className="rounded-3xl z-10 relative isolate flex flex-wrap md:flex-nowrap border border-stone-200 p-6 md:py-12 bg-white md:px-6">
              <div className="flex flex-col items-start gap-4">
                <h2 className="font-display font-bold text-3xl text-stone-900">
                  Como funciona
                </h2>
                <p className="text-stone-700">
                  Com uma ampla gama de tonalidades, colore do loura claríssimo
                  ao castanho escuro, em uma única bisnaga. Nossa avaliação é o
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
          </div>
        </Section>
        <section className="bg-white/55 overflow-hidden">
          {/* <div className="pointer-events-none absolute inset-0 z-10! overflow-hidden">
            <div className="absolute inset-0  scale-115 bg-[url('/assets/fundo.png')] bg-cover bg-center" />
          </div> */}

          <div className="max-w-3xl px-4 mx-auto relative z-20">
            <CtaBanner
              eyebrow="COMO AGENDAR"
              title="Agende seu horário e experimente o poder da Gloss Express!"
              description="envie uma mensagem no WhatsApp com “Gloss Express” para confirmar o melhor horário disponível."
              buttonLabel="AGENDE SEU GLOSS EXPRESS!"
              buttonHref="#contato"
            />
          </div>
        </section>

        <Section className="bg-white/55" contentClassName="space-y-16">
          <SplitSection
            eyebrow="LISO PERFEITO"
            title="Liso Perfeito com Angélica Oliveira, habilitada no Norte e Noroeste Fluminense"
            description="No New Hange Hair, o Liso Perfeito é conduzido com avaliação e critério técnico. O plano é definido a partir das características do fio, do histórico capilar e do resultado desejado, priorizando alinhamento, brilho e naturalidade com acabamento elegante. Angélica conduz pessoalmente a avaliação e orienta com clareza o caminho mais adequado antes de iniciar o procedimento."
            cta={
              <ButtonLink href="#contato">
                AGENDAR AVALIAÇÃO GRATUITA
              </ButtonLink>
            }
            media={
              <div className=" gap-4 grid grid-cols-1 md:grid-cols-2 flex-1">
                <FramedImage
                  src="/assets/liso-perfeito.png"
                  alt="liso perfeito"
                  className="rounded-md aspect-auto min-h-120"
                />
                <FramedImage
                  src="/assets/angelica-1.jpg"
                  alt="Angelica"
                  className="rounded-md min-h-120 hidden sm:block "
                />
              </div>
            }
            mediaStyle={false}
          />

          <div className="space-y-8">
            <SplitSection
              eyebrow="Beneficios"
              title="Três benefícios do liso perfeito"
              cta={
                <ButtonLink href="#contato">
                  AGENDAR AVALIAÇÃO GRATUITA
                </ButtonLink>
              }
              content={
                <div>
                  {lisoPerfeitoBenefit.map((item, index) => (
                    <div key={index}>
                      <div className="space-y-3 pb-4" key={index}>
                        <h4 className="font-bold text-lg">{item.title}</h4>{" "}
                        <p className="text-stone-600 text-sm">
                          {item.description}
                        </p>
                      </div>

                      {index < lisoPerfeitoBenefit.length - 1 && (
                        <>
                          <hr className="border-[#D2AE6D]" />
                          <br />
                        </>
                      )}
                    </div>
                  ))}
                </div>
              }
              media={
                <div className="grid w-full max-w-full grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="w-full relative min-h-80 h-full rounded">
                    <Image
                      src="/assets/liso-perfeito-2.png"
                      alt="liso perfeito"
                      width={1200}
                      height={1600}
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="lg:w-64 lg:h-80 lg:absolute -top-20 left-25 object-cover"
                      priority
                    />
                  </div>

                  <FramedImage
                    src="/assets/liso-perfeito-3.png"
                    alt="liso perfeito"
                    priority
                    className="w-full min-h-64 rounded hidden sm:block"
                  />
                </div>
              }
              reverse
              mediaStyle={false}
            />

            <div>
              <h3 className="font-display font-bold text-center text-3xl text-stone-900">
                Como funciona o liso perfeito
              </h3>

              <div className="grid grid-template-columns-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                {lisoPerfeitoProcess.map((item, index) => (
                  <BenefitCard
                    key={index}
                    title={item.title}
                    icon={item.icon}
                    description={item.description}
                    index={index}
                  />
                ))}
              </div>
            </div>
          </div>

          <Section>
            <div className="relative isolate flex items-center justify-center mx-auto max-w-3xl">
              <Image
                src="/assets/fundo-2.png"
                width={1920}
                height={1080}
                alt="fundo02"
                className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-auto w-[80%] max-w-none -translate-x-1/2 -translate-y-1/2 opacity-55"
              />
              <div className="relative z-10 overflow-hidden rounded-xl">
                <CtaBanner
                  eyebrow="COMO AGENDAR"
                  title="Agende seu horário para o liso perfeito"
                  description="envie no WhatsApp “Avaliação do Liso Perfeito” para confirmar o horário."
                  buttonLabel="AGENDE SEU LISO PERFEITO!"
                  withBg
                  buttonHref="#contato"
                />
              </div>
            </div>
          </Section>
        </Section>

        <Section
          id="equipe"
          className="bg-white/45"
          contentClassName="space-y-16"
        >
          <SplitSection
            eyebrow="Quem esta por tras"
            title="Quem está por trás do padrão New Hange Hair"
            description="À frente do New Hange Hair, Angélica Oliveira acredita que beleza de alto padrão não é apenas estética, é cuidado, responsabilidade e confiança. Com mais de 30 anos de experiência em Campos dos Goytacazes, Angélica é além de cabeleireira, é: Visagista, Tricologista, Terapeuta Capilar, e também já atuou como instrutora em cursos."
            reverse
            media={
              <FramedImage
                src="/assets/angelica-about.jpg"
                alt="Profissional New Hair em destaque"
                className="aspect-square min-h-80 rounded"
              />
            }
          />

          <SplitSection
            eyebrow="Atendimento New Hange"
            title="Como funciona o atendimento no New Hange"
            content={
              <div>
                <ol className="relative flex flex-col gap-6">
                  <div className="w-0.5 rounded h-[90%] z-0 bg-[#a58a57] absolute bottom-5 left-5" />
                  {howNewHangeAttendmentWorks.map((step, index) => (
                    <li key={index} className="mb-3 z-10 relative">
                      <div className="flex items-center justify-start gap-4">
                        <div className="flex justify-center items-center bg-linear-to-b h-10 w-10 from-[#FBF9F3] to-[#E2CBA1] rounded-full">
                          <div className="font-bold text-lg font-display w-8 h-8 rounded-full text-center bg-linear-to-r from-[#D2AE6D] to-[#E9D8B9] text-[#61491E]">
                            <span className="text-[#61491E]">{index + 1}</span>
                          </div>
                        </div>
                        <p className="flex-1">{step}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            }
            media={
              <FramedImage
                src="/assets/equipe-2.png"
                alt="Profissional New Hair em destaque"
                className="aspect-square min-h-80 rounded"
              />
            }
          />
        </Section>

        <section>
          <CtaBanner
            eyebrow="COMO AGENDAR"
            title="Para agendar, envie “Quero agendar” no WhatsApp."
            buttonLabel="AGENDE AGORA!"
            buttonHref="#contato"
            rounded={false}
            withBg
          />
        </section>

        <Section
          id="faq"
          title="Perguntas frequentes"
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
          title="Localização e contato"
          contentClassName="grid gap-8 lg:min-h-[500px] lg:grid-cols-[0.72fr_1.28fr] lg:items-start"
        >
          <div className="space-y-5 rounded-4xl border border-stone-200 bg-white p-8 shadow-[0_18px_50px_rgba(28,25,23,0.06)]">
            <div className="flex gap-4">
              <MapPin />
              <a
                href="https://www.google.com/maps/place/New+Hange+Hair+%7C+Sal%C3%A3o+de+Beleza+em+Campos+dos+Goytacazes/@-21.7676254,-41.3300742,14.75z/data=!4m22!1m15!4m14!1m6!1m2!1s0xbdd44e1708815d:0x1d65978c85ac56bb!2sNew+Hange+Hair+%7C+Sal%C3%A3o+de+Beleza+em+Campos+dos+Goytacazes,+R.+Durval+de+Souza,+90+-+Parque+Joao+Maria,+Campos+dos+Goytacazes+-+RJ,+28093-044!2m2!1d-41.3164947!2d-21.7780375!1m6!1m2!1s0xbdd44e1708815d:0x1d65978c85ac56bb!2sNew+Hange+Hair+%7C+Sal%C3%A3o+de+Beleza+em+Campos+dos+Goytacazes,+R.+Durval+de+Souza,+90+-+Parque+Joao+Maria,+Campos+dos+Goytacazes+-+RJ,+28093-044!2m2!1d-41.3164947!2d-21.7780375!3m5!1s0xbdd44e1708815d:0x1d65978c85ac56bb!8m2!3d-21.7780375!4d-41.3164947!16s%2Fg%2F11bw41qth7?entry=ttu&g_ep=EgoyMDI2MDMxMS4wIKXMDSoASAFQAw%3D%3D"
                className="font-bold text-sm flex-1"
              >
                Rua Durval de Souza, 90, Campos dos Goytacazes, RJ
              </a>
            </div>
            <div className="flex gap-4">
              <Phone />
              <p className="text-sm flex-1">
                Whatsapp:{" "}
                <a
                  href="https://wa.me/5522992118380"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold"
                >
                  (22) 99211-8380
                </a>
              </p>
            </div>
            <div className="flex gap-4">
              <Instagram />
              <p className="text-sm flex-1">
                Instagram:
                <a
                  href="https://www.instagram.com/newhangehair?utm_source=site"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold"
                >
                  @newhangehair
                </a>
              </p>
            </div>
            <ButtonLink href="https://wa.me/5522992118380">
              CHAMAR NO WHATSAPP
            </ButtonLink>
          </div>

          <iframe
            title="Mapa"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17586.801254738337!2d-41.33007420450613!3d-21.76762540082871!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xbdd44e1708815d%3A0x1d65978c85ac56bb!2sNew%20Hange%20Hair%20%7C%20Sal%C3%A3o%20de%20Beleza%20em%20Campos%20dos%20Goytacazes!5e0!3m2!1spt-BR!2sbr!4v1773516868059!5m2!1spt-BR!2sbr"
            className="h-full w-full"
            loading="lazy"
          ></iframe>
        </Section>
      </main>
      <SiteFooter menu={siteMenu} />
    </div>
  );
}
