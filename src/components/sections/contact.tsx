import { ButtonLink, Section } from "../landing/section";
import { Instagram, MapPin, Phone } from "lucide-react";

const Contact = () => {
  return (
    <Section
      id="contato"
      title="Localização e contato"
      contentClassName="grid gap-8 lg:min-h-[500px] lg:grid-cols-[0.72fr_1.28fr] lg:items-start"
    >
      <div className="space-y-5 rounded-4xl border border-stone-200 bg-white p-8 shadow-[0_18px_50px_rgba(28,25,23,0.06)]">
        <div className="flex gap-4">
          <MapPin />
          <a
            href="https://www.google.com/maps/place/New+Hange+Hair+%7C+Sal%C3%A3o+de+Beleza+em+Campos+dos+Goytacazes/@-21.7676254,-41.3300742,14.75z/data=!4m22!1m15!4m14!1m6!1m2!1s0xbdd44e1708815d:0x1d65978c85ac56bb!2sNew+Hange+Hair+%7C+Sal%C3%A3o+de+Beleza+em+Campos+dos+Goytacazes,+R.+Durval+de+Souza,+90+-+Parque+Joao+Maria,+Campos+dos+Goytacazes+-+RJ,+28093-044!2m2!1d-41.3164947!2d-21.7780375!1m6!1m2!1s0xbdd44e1708815d:0x1d65978c85ac56bb!2sNew+Hange+Hair+%7C+Sal%C3%A3o+de+Beleza+em+Campos+dos+Goytacazes,+R.+Durval+de+Souza,+90+-+Parque+Joao+Maria,+Campos+dos+Goytacazes+-+RJ,+28093-044!2m2!1d-41.3164947!2d-21.7780375!3m5!1s0xbdd44e1708815d:0x1d65978c85ac56bb!8m2!3d-21.7780375!4d-41.3164947!16s%2Fg%2F11bw41qth7?entry=ttu&g_ep=EgoyMDI2MDMxMS4wIKXMDSoASAFQAw%3D%3D"
            className="font-bold text-sm flex-1"
          >
            Rua Durval de Souza, 90, Campos dos Goytacazes, RJ
          </a>
        </div>
        <div className="flex gap-4">
          <Phone />
          <p className="text-sm flex-1">
            Whatsapp:{" "}
            <a
              href="https://wa.me/5522998198120?text=Ol%C3%A1!%20Venho%20atrav%C3%A9s%20do%20site%20e%20gostaria%20de%20agendar%20um%20hor%C3%A1rio%2C%20meu%20nome%20%C3%A9%3A"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold"
            >
              (22) 99819-8120
            </a>
          </p>
        </div>
        <div className="flex gap-4">
          <Instagram />
          <p className="text-sm flex-1">
            Instagram:
            <a
              href="https://www.instagram.com/newhangehair?utm_source=site"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold"
            >
              @newhangehair
            </a>
          </p>
        </div>
        <ButtonLink href="https://wa.me/5522998198120?text=Ol%C3%A1!%20Venho%20atrav%C3%A9s%20do%20site%20e%20gostaria%20de%20agendar%20um%20hor%C3%A1rio%2C%20meu%20nome%20%C3%A9%3A">
          CHAMAR NO WHATSAPP
        </ButtonLink>
      </div>

      <iframe
        title="Mapa"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17586.801254738337!2d-41.33007420450613!3d-21.76762540082871!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xbdd44e1708815d%3A0x1d65978c85ac56bb!2sNew%20Hange%20Hair%20%7C%20Sal%C3%A3o%20de%20Beleza%20em%20Campos%20dos%20Goytacazes!5e0!3m2!1spt-BR!2sbr!4v1773516868059!5m2!1spt-BR!2sbr"
        className="h-full w-full"
        loading="lazy"
      ></iframe>
    </Section>
  );
};

export default Contact;
