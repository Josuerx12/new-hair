/** biome-ignore-all assist/source/organizeImports: <explanation> */
import { SiteFooter, SiteHeader } from "@/components/landing/chrome";
import { siteMenu } from "@/content/home";
import { ChevronsDown } from "lucide-react";
import Hero from "@/components/sections/hero";
import Services from "@/components/sections/service";
import GlossExpress from "@/components/sections/gloss-express";
import LisoPerfeito from "@/components/sections/liso-perfeito";
import Team from "@/components/sections/team";
import Contact from "@/components/sections/contact";
import Faq from "@/components/sections/faq";
import Advantages from "@/components/sections/advantages";
import DepoimentSlides from "@/components/sections/depoiments-slides";

export default function Home() {
  return (
    <div className="min-h-screen text-foreground">
      <SiteHeader menu={siteMenu} />
      <main>
        <Hero />
        <div className="relative flex justify-center">
          <div className="bg-[#D2AE6D] z-10 absolute bottom-0 w-full h-0.5" />
          <div className="absolute -top-5 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-[#B89045]/40 bg-linear-to-r from-[#D2AE6D] to-[#E9D8B9] shadow-[0_10px_24px_rgba(116,88,40,0.35)] animate-bounce">
            <ChevronsDown size={28} className="text-[#61491E]" />
          </div>
        </div>

        <Advantages />
        <Services />
        <GlossExpress />
        <LisoPerfeito />
        <Team />
        <DepoimentSlides />
        <Faq />
        <Contact />
      </main>
      <SiteFooter menu={siteMenu} />
    </div>
  );
}
