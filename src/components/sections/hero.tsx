import { FramedImage } from "../landing/media";
import { ButtonLink } from "../landing/section";

const Hero = () => {
  return (
    <section
      id="inicio"
      className="section-shell relative isolate z-10 min-h-screen overflow-hidden pt-30 lg:pt-10"
    >
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/assets/hero-bg.jpg')] bg-cover bg-center" />
      </div>

      <div className="relative z-20 px-4 mx-auto md:mt-20 pb-8 grid w-full max-w-7xl gap-10 lg:grid-cols-[1.10fr_0.90fr]">
        <div className="space-y-8 lg:mt-25">
          <div className="space-y-5">
            <div>
              <h1 className="max-w-2xl font-display leading-10 md:leading-17 font-bold text-[#0F1215] text-3xl sm:text-4xl lg:text-5xl">
                Salão de beleza em Campos dos Goytacazes/RJ com
              </h1>
              <p className="text-[#D2AE6D] text-3xl leading-10 md:leading-17 sm:text-4xl lg:text-5xl font-display italic font-bold">
                técnica, cuidado e resultado impecável
              </p>
            </div>
            <p className="max-w-xl text-2xl leading-9 text-[#737373] sm:text-md">
              Cabelos, unhas e maquiagem com organização, pontualidade e padrão
              elevado. Agende pelo WhatsApp e viva uma experiência única, segura
              e com autoestima renovada.
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
  );
};

export default Hero;
