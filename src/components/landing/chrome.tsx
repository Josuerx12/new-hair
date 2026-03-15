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
  description?: string;
  buttonLabel: string;
  buttonHref: string;
  withBg?: boolean;
  rounded?: boolean;
};

export function SiteHeader({ menu }: SiteHeaderProps) {
  return (
    <header className="md:fixed inset-x-0 md:top-2 z-30">
      <div className="mx-auto flex w-full md:max-w-7xl border backdrop-blur border-[#E5DDD2] bg-white/80 rounded items-center justify-between gap-6 px-4 py-4 sm:px-6 lg:px-8">
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
          <p className="text-sm text-stone-600">
            Todos os direitos reservados. New Hair - Salão de Beleza em Campos
            dos Goytacazes, RJ. CNPJ: 44.071.657/0001-15.
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
          <p>Rua Durval de Souza, 90, Campos dos Goytacazes, RJ</p>
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
  rounded = true,
  withBg = false,
}: CtaBannerProps) {
  return (
    <div
      className={`overflow-hidden relative isolate ${rounded ? "rounded-xl " : ""} bg-[radial-gradient(circle_at_top,#484A4C,transparent_35%),linear-gradient(135deg,#252627_0%,#252627_100%)] min-h-91.75 px-6 py-10 text-white sm:px-10 lg:px-14 lg:py-14`}
    >
      <div className="relative z-10 mx-auto flex max-w-2xl flex-col items-center justify-center gap-6">
        <span className="uppercase text-xl">{eyebrow}</span>
        <h3 className="font-display text-center font-bold text-3xl sm:text-[40px]">
          {title}
        </h3>
        {description && (
          <p className="text-sm leading-7 text-stone-300 sm:text-base">
            {description}
          </p>
        )}
        <ButtonLink href={buttonHref}>{buttonLabel}</ButtonLink>
      </div>
      {withBg && (
        <Image
          src="/assets/fundo-cta.png"
          width={491}
          height={301}
          alt="Background decorativo do banner de chamada para ação"
          className="pointer-events-none absolute left-1/2 top-0 z-0 -translate-x-1/2 object-cover opacity-50"
        />
      )}
    </div>
  );
}
