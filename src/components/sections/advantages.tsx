/** biome-ignore-all lint/suspicious/noArrayIndexKey: <explanation> */
import React from "react";
import { Section, SectionHeading, TagPill } from "../landing/section";
import { highlights, references, serviceFilters } from "@/content/home";
import { FramedImage } from "../landing/media";
import { InfoCard } from "../landing/cards";
import { Info } from "lucide-react";

const Advantages = () => {
  return (
    <>
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
          <div className="relative">
            <div className="overflow-hidden rounded-4xl border border-stone-200 bg-white shadow-[0_18px_50px_rgba(28,25,23,0.08)]">
              <FramedImage
                src="/assets/equipe-diferenciais.JPEG"
                alt="Equipe New Hair"
                className="aspect-5/4 object-contain w-full h-full"
              />
            </div>
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
                  <p className="mt-2 leading-6 text-stone-700">{description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Advantages;
