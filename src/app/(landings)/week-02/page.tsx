import type { Metadata } from "next";
import { SiteHeader } from "@/components/landing/site-header";
import { Hero } from "@/components/landing/hero";
import { FeatureGrid } from "@/components/landing/feature-grid";
import { FAQ } from "@/components/landing/faq";
import { CTA } from "@/components/landing/cta";
import { SiteFooter } from "@/components/landing/site-footer";
import { content } from "./content";

export const metadata: Metadata = {
  title: `${content.header.logo} - ${content.hero.title}`,
  description: content.hero.description,
};

export default function Week02Page() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader
        logo={content.header.logo}
        ctaText={content.header.ctaText}
        ctaHref={content.header.ctaHref}
      />
      <main>
        <Hero
          title={content.hero.title}
          description={content.hero.description}
          primaryCta={content.hero.primaryCta}
          secondaryCta={content.hero.secondaryCta}
        />
        <FeatureGrid
          title={content.features.title}
          description={content.features.description}
          features={content.features.items}
        />
        <FAQ
          title={content.faq.title}
          description={content.faq.description}
          items={content.faq.items}
        />
        <div id="cta">
          <CTA
            title={content.cta.title}
            description={content.cta.description}
            primaryCta={content.cta.primaryCta}
            secondaryCta={content.cta.secondaryCta}
          />
        </div>
      </main>
      <SiteFooter
        copyright={content.footer.copyright}
        links={content.footer.links}
      />
    </div>
  );
}

