"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 inset-x-0 z-40 px-2 pt-2 sm:px-4">
      <div className="mx-auto flex h-25 w-full items-center justify-between gap-6 rounded border border-[#E5DDD2] bg-white/85 px-4 py-4 backdrop-blur sm:px-6 lg:max-w-6xl lg:gap-26 lg:px-8">
        <a href="#inicio" className="flex items-center -translate-y-2">
          <Image
            src="/assets/logo.png"
            alt="Logo New Hair"
            width={190}
            height={53}
            priority
          />
        </a>

        <nav className="hidden flex-1 items-center justify-around gap-6 lg:flex">
          {menu.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-stone-600 text-sm lg:text-[17px] transition-colors hover:text-stone-900"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          className="inline-flex items-center justify-center rounded-md border border-[#D8C7A8] bg-white/90 p-2 text-stone-700 transition-colors hover:bg-[#F6EFE3] lg:hidden"
        >
          {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <nav
          id="mobile-menu"
          className="mx-4 mt-3 rounded-xl border border-[#E5DDD2] bg-white/95 p-4 shadow-[0_16px_35px_rgba(15,18,21,0.12)] backdrop-blur lg:hidden"
        >
          <div className="flex flex-col gap-2">
            {menu.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMobileMenu}
                className="rounded-md px-3 py-2 text-base text-stone-700 transition-colors hover:bg-[#F6EFE3] hover:text-stone-900"
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      )}
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
      className={`overflow-hidden z-20 relative isolate ${rounded ? "rounded-xl " : ""} bg-[radial-gradient(circle_at_top,#484A4C,transparent_35%),linear-gradient(135deg,#252627_0%,#252627_100%)] min-h-91.75 px-6 py-10 text-white sm:px-10 lg:px-14 lg:py-14`}
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
