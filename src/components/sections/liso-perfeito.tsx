/** biome-ignore-all lint/complexity/noUselessFragments: <explanation> */
/** biome-ignore-all lint/suspicious/noArrayIndexKey: <explanation> */
import Image from "next/image";
import { ButtonLink, Section } from "../landing/section";
import { FramedImage, SplitSection } from "../landing/media";
import { lisoPerfeitoBenefit, lisoPerfeitoProcess } from "@/content/home";
import { BenefitCard } from "../landing/cards";
import { CtaBanner } from "../landing/chrome";
import LisoPerfeitoVideo from "./videos/liso-perfeito";

const LisoPerfeito = () => {
  return (
    <>
      <Section className="" contentClassName="space-y-16">
        <SplitSection
          eyebrow="LISO PERFEITO"
          title="Liso Perfeito com Angélica Oliveira, habilitada no Norte e Noroeste Fluminense"
          description="No New Hange Hair, o Liso Perfeito é conduzido com avaliação e critério técnico. O plano é definido a partir das características do fio, do histórico capilar e do resultado desejado, priorizando alinhamento, brilho e naturalidade com acabamento elegante. Angélica conduz pessoalmente a avaliação e orienta com clareza o caminho mais adequado antes de iniciar o procedimento."
          cta={
            <ButtonLink href="#contato">AGENDAR AVALIAÇÃO GRATUITA</ButtonLink>
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
            title="Três benefícios do Liso Perfeito"
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
            media={<LisoPerfeitoVideo />}
            reverse
            mediaStyle={false}
          />

          <div>
            <h3 className="font-display font-bold text-center text-3xl text-stone-900">
              Como funciona o Liso Perfeito
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
            <div className="relative z-10 overflow-hidden rounded-xl lg:min-w-4xl!">
              <CtaBanner
                eyebrow="COMO AGENDAR"
                title="Agende seu horário para o Liso Perfeito"
                description="envie no WhatsApp “Avaliação do Liso Perfeito” para confirmar o horário."
                buttonLabel="AGENDE SEU LISO PERFEITO!"
                withBg
                buttonHref="#contato"
              />
            </div>
          </div>
        </Section>
      </Section>
    </>
  );
};

export default LisoPerfeito;
