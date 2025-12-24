interface FooterProps {
  copyright: string;
  links?: Array<{ label: string; href: string }>;
}

export function SiteFooter({ copyright, links }: FooterProps) {
  return (
    <footer className="border-t bg-muted/50">
      <div className="container px-4 py-12">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-muted-foreground">{copyright}</p>
          {links && links.length > 0 && (
            <nav className="flex gap-6">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          )}
        </div>
      </div>
    </footer>
  );
}


