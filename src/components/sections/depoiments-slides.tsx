"use client";

import { Section, SectionHeading } from "../landing/section";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const testimonialVideos = [
  {
    id: "Z3A2nSdOCBA",
    title: "Depoimento New Hange Hair 1",
  },
  {
    id: "Z3A2nSdOCBA",
    title: "Depoimento New Hange Hair 1",
  },
  {
    id: "Z3A2nSdOCBA",
    title: "Depoimento New Hange Hair 1",
  },
  {
    id: "Z3A2nSdOCBA",
    title: "Depoimento New Hange Hair 1",
  },
];

const DepoimentSlides = () => {
  return (
    <Section className="overflow-hidden" contentClassName="space-y-10">
      <SectionHeading
        eyebrow="DEPOIMENTOS"
        title="O que as clientes dizem depois"
        description="Nós valorizamos técnica, acabamento e cuidado em cada detalhe. Mas a confirmação mais forte não vem de nós. Vem de quem viveu a experiência. Assista aos depoimentos e entenda o padrão New Hange Hair."
        align="center"
      />

      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={50}
        loop
        centerInsufficientSlides
        speed={650}
        autoplay={{
          delay: 4200,
          disableOnInteraction: true,
          pauseOnMouseEnter: true,
        }}
        pagination={{ clickable: true }}
        breakpoints={{
          0: { slidesPerView: 1 },
          480: { slidesPerView: 1.25 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
        className="overflow-visible!"
      >
        {testimonialVideos.map((video, index) => (
          <SwiperSlide key={`${video.id}-${index}`}>
            <article className="overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-[0_12px_30px_rgba(28,25,23,0.08)]">
              <div className="aspect-9/16 w-full bg-stone-100">
                <iframe
                  className="h-full w-full"
                  src={`https://www.youtube-nocookie.com/embed/${video.id}?rel=0&modestbranding=1`}
                  title={video.title}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
    </Section>
  );
};

export default DepoimentSlides;
