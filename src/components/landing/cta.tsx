import { Button } from "@/components/ui/button";
import { Section } from "./section";

interface CTAProps {
  title: string;
  description: string;
  primaryCta: { text: string; href: string };
  secondaryCta?: { text: string; href: string };
}

export function CTA({ title, description, primaryCta, secondaryCta }: CTAProps) {
  return (
    <Section className="bg-muted/50">
      <div className="container px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
          <p className="mt-4 text-lg text-muted-foreground">{description}</p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <Button asChild size="lg">
              <a href={primaryCta.href}>{primaryCta.text}</a>
            </Button>
            {secondaryCta && (
              <Button asChild variant="outline" size="lg">
                <a href={secondaryCta.href}>{secondaryCta.text}</a>
              </Button>
            )}
          </div>
        </div>
      </div>
    </Section>
  );
}


