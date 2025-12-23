import Link from "next/link";
import { Button } from "@/components/ui/button";

interface HeaderProps {
  logo: string;
  ctaText?: string;
  ctaHref?: string;
}

export function SiteHeader({ logo, ctaText, ctaHref }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        <Link href="/" className="text-xl font-bold">
          {logo}
        </Link>
        {ctaText && ctaHref && (
          <Button asChild>
            <Link href={ctaHref}>{ctaText}</Link>
          </Button>
        )}
      </div>
    </header>
  );
}

