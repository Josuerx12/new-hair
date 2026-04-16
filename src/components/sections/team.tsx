/** biome-ignore-all lint/suspicious/noArrayIndexKey: <explanation> */
import { CtaBanner } from "../landing/chrome";
import { Section } from "../landing/section";
import { FramedImage, SplitSection } from "../landing/media";
import { howNewHangeAttendmentWorks } from "@/content/home";

const Team = () => {
  return (
    <>
      <Section id="sobre" className="bg-white/45" contentClassName="space-y-16">
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

        <div id="como-funciona" />

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
              src="/assets/equipe.JPG"
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
          buttonHref="https://wa.me/5522998198120?text=Ol%C3%A1!%20Venho%20atrav%C3%A9s%20do%20site%20e%20gostaria%20de%20agendar%20um%20hor%C3%A1rio%2C%20meu%20nome%20%C3%A9%3A"
          rounded={false}
          withBg
        />
      </section>
    </>
  );
};

export default Team;
