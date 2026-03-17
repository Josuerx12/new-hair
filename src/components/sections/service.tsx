/** biome-ignore-all lint/suspicious/noArrayIndexKey: <explanation> */
import { ServiceCard } from "../landing/cards";
import { services } from "@/content/home";
import { Section } from "../landing/section";
import Image from "next/image";

const Services = () => {
  return (
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
  );
};

export default Services;
