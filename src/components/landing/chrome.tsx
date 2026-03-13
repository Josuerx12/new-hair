import Image from "next/image";

import { ButtonLink } from "@/components/landing/section";

type SiteHeaderProps = {
  menu: Array<{ label: string; href: string }>;
};

type SiteFooterProps = {
  menu: Array<{ label: string; href: string }>;
};

type CtaBannerProps = {
  eyebrow: string;
  title: string;
  description: string;
  buttonLabel: string;
  buttonHref: string;
};

export function SiteHeader({ menu }: SiteHeaderProps) {
  return (
    <header className="sticky top-0 z-30 border-b border-stone-200/80 bg-[#f6f1ea]/90 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-6 px-4 py-4 sm:px-6 lg:px-8">
        <a href="#inicio" className="flex items-center gap-3">
          <Image
            src="/assets/logo.png"
            alt="Logo New Hair"
            width={132}
            height={36}
            priority
          />
        </a>
        <nav className="hidden items-center gap-6 lg:flex">
          {menu.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-stone-600 transition-colors hover:text-stone-900"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <ButtonLink
          href="#contato"
          variant="secondary"
          className="hidden sm:inline-flex"
        >
          Agendar avaliação
        </ButtonLink>
      </div>
    </header>
  );
}

export function SiteFooter({ menu }: SiteFooterProps) {
  return (
    <footer className="border-t border-stone-200 bg-white px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto grid w-full max-w-6xl gap-8 lg:grid-cols-[1.2fr_0.8fr_0.8fr] lg:items-start">
        <div className="space-y-4">
          <Image
            src="/assets/logo.png"
            alt="Logo New Hair"
            width={140}
            height={38}
          />
          <p className="max-w-md text-sm leading-6 text-stone-600">
            Estrutura base da landing New Hair pronta para receber seus ajustes
            finos de cor, fundos e novas imagens.
          </p>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-stone-500">
            Navegação
          </h3>
          <div className="mt-4 flex flex-col gap-3">
            {menu.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-stone-700 transition-colors hover:text-stone-900"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
        <div className="space-y-3 text-sm text-stone-600">
          <h3 className="font-semibold uppercase tracking-[0.18em] text-stone-500">
            Contato
          </h3>
          <p>Campinas, SP</p>
          <p>Atendimento com hora marcada</p>
          <p>WhatsApp e direct para avaliação</p>
        </div>
      </div>
    </footer>
  );
}

export function CtaBanner({
  eyebrow,
  title,
  description,
  buttonLabel,
  buttonHref,
}: CtaBannerProps) {
  return (
    <div className="overflow-hidden rounded-[36px] bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.1),transparent_35%),linear-gradient(135deg,#111827_0%,#1f2937_100%)] px-6 py-10 text-white sm:px-10 lg:px-14 lg:py-14">
      <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
        <div className="max-w-2xl space-y-3">
          <span className="inline-flex rounded-full border border-white/20 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-stone-200">
            {eyebrow}
          </span>
          <h3 className="font-display text-3xl leading-tight sm:text-4xl">
            {title}
          </h3>
          <p className="text-sm leading-7 text-stone-300 sm:text-base">
            {description}
          </p>
        </div>
        <ButtonLink href={buttonHref} variant="secondary">
          {buttonLabel}
        </ButtonLink>
      </div>
    </div>
  );
}
