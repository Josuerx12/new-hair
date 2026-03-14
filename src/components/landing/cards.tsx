import { Info, LucideIcon } from "lucide-react";
import { ButtonLink } from "./section";

type InfoCardProps = {
  description: string;
  icon?: LucideIcon;
  svgPath?: string;
};

type ServiceCardProps = {
  title: string;
  description: string;
  cta: string;
  media: React.ReactNode;
};

type BenefitCardProps = {
  icon?: LucideIcon;
  title: string;
  description: string;
  index: number;
};

export function InfoCard({ description, icon: Icon, svgPath }: InfoCardProps) {
  return (
    <article className="rounded-3xl border border-stone-200 bg-white p-6 shadow-[0_12px_40px_rgba(28,25,23,0.06)]">
      <div className="flex w-10 h-10 items-center justify-center rounded-full border border-[#D2AE6D] ">
        <div className="bg-linear-to-br from-[#D2AE6D] h-8 w-8 flex justify-center items-center rounded-full text-center to-[#E9D8B9]  text-[#61491E]">
          {Icon ? (
            <Icon />
          ) : svgPath ? (
            <img src={svgPath} alt="Icon" />
          ) : (
            <Info />
          )}{" "}
          {}
        </div>
      </div>

      <p className="mt-3 text-sm leading-6 text-stone-600">{description}</p>
    </article>
  );
}

export function ServiceCard({
  title,
  description,
  cta,
  media,
}: ServiceCardProps) {
  return (
    <article className="flex flex-wrap-reverse overflow-hidden rounded-4xl border border-stone-200 bg-white shadow-[0_20px_55px_rgba(28,25,23,0.07)]">
      <div className="flex flex-col justify-between p-7">
        <div>
          <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-stone-500">
            Serviço New Hair
          </span>
          <h3 className="mt-4 font-display text-3xl text-stone-900">{title}</h3>
          <p className="mt-4 max-w-xl text-sm leading-7 text-stone-600">
            {description}
          </p>
        </div>
        <div className="mt-8">
          <ButtonLink href="#contato" variant="secondary">
            {cta}
          </ButtonLink>
        </div>
      </div>
      <div className="min-h-72 flex-1 border-t border-stone-200 lg:min-h-full lg:border-t-0 lg:border-l">
        {media}
      </div>
    </article>
  );
}

export function BenefitCard({
  title,
  description,
  index,
  icon: Icon,
}: BenefitCardProps) {
  return (
    <article className="rounded-3xl border border-stone-200 space-y-2 bg-white p-6">
      <div className="flex text-xl font-display font-medium  w-10 h-10 items-center justify-center rounded-full border border-[#D2AE6D] ">
        <div className="bg-linear-to-br flex justify-center items-center from-[#D2AE6D] h-8 w-8 rounded-full text-center to-[#E9D8B9]  text-[#61491E]">
          {Icon ? <Icon /> : <span>{index + 1}</span>}
        </div>
      </div>
      <h3 className="font-display text-2xl text-stone-900">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-stone-600">{description}</p>
    </article>
  );
}
