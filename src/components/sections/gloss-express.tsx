/** biome-ignore-all lint/suspicious/noArrayIndexKey: <explanation> */
/** biome-ignore-all lint/a11y/useButtonType: <explanation> */
import { glossExpressBenefit } from "@/content/home";
import Image from "next/image";
import { BenefitCard } from "../landing/cards";
import { CtaBanner } from "../landing/chrome";
import { SplitSection, FramedImage } from "../landing/media";
import { ButtonLink, Section, SectionHeading } from "../landing/section";
import GlossExpressVideo from "./videos/gloss-express";

const GlossExpress = () => {
  return (
    <>
      <Section
        id="resultados"
        className="relative isolate"
        contentClassName="space-y-16"
      >
        <SplitSection
          eyebrow="GLOSS EXPRESS"
          title="Gloss Express em Campos dos Goytacazes cobertura de fios brancos com rapidez e acabamento natural"
          description=" Para quem precisa manter a cor em dia sem permanência prolongada no salão. A Gloss Express entrega cobertura de fios brancos, renovação do tom e brilho imediato, com aparência bem cuidada e padrão elevado."
          cta={<ButtonLink href="#contato">Quero avaliar meu caso</ButtonLink>}
          mediaStyle={false}
          media={<GlossExpressVideo />}
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
        </div>
      </Section>
      <section className=" overflow-hidden">
        {/* <div className="pointer-events-none absolute inset-0 z-10! overflow-hidden">
                <div className="absolute inset-0  scale-115 bg-[url('/assets/fundo.png')] bg-cover bg-center" />
              </div> */}

        <div className="max-w-3xl lg:min-w-4xl! px-4 mx-auto relative z-20">
          <CtaBanner
            eyebrow="COMO AGENDAR"
            title="Agende seu horário e experimente o poder da Gloss Express!"
            description="envie uma mensagem no WhatsApp com “Gloss Express” para confirmar o melhor horário disponível."
            buttonLabel="AGENDE SEU GLOSS EXPRESS!"
            buttonHref="#contato"
          />
        </div>
      </section>
    </>
  );
};

export default GlossExpress;
