import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteContent } from "@/content/site-content";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled ? "bg-crem/95 shadow-soft backdrop-blur" : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#top" className="flex items-center gap-3 rounded-lg focus-visible:outline-2">
          {/* Placeholder logo — înlocuiește public/logo.png cu logo-ul real */}
          <img
            src={siteContent.brand.logo}
            alt={siteContent.brand.logoAlt}
            className="h-14 w-auto sm:h-16"
          />
          <span
            className={cn(
              "hidden font-serif text-lg font-semibold sm:block",
              "text-verde",
            )}
          >
            {siteContent.brand.fundatie}
          </span>
        </a>

        <nav aria-label="Navigare principală" className="hidden items-center gap-8 md:flex">
          {siteContent.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-ocru",
                "text-carbune",
              )}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild className="hidden sm:inline-flex">
            <a href="#locatie">Vezi locația</a>
          </Button>
          <button
            type="button"
            aria-label="Deschide meniul"
            aria-expanded={open}
            onClick={() => setOpen(true)}
            className={cn(
              "inline-flex h-11 w-11 items-center justify-center rounded-lg md:hidden",
              "text-carbune",
            )}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

    </header>

      {/* Drawer full-screen pe mobil — în afara header-ului, ca backdrop-blur să nu îl limiteze */}
      {open && (
        <div className="fixed inset-0 z-[60] flex flex-col bg-crem md:hidden">
          <div className="flex h-20 items-center justify-between px-4">
            <span className="font-serif text-lg font-semibold text-verde">
              {siteContent.brand.fundatie}
            </span>
            <button
              type="button"
              aria-label="Închide meniul"
              onClick={() => setOpen(false)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-lg text-carbune"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          <nav
            aria-label="Navigare mobilă"
            className="flex flex-1 flex-col items-center justify-center gap-8"
          >
            {siteContent.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="font-serif text-3xl text-carbune transition-colors hover:text-brand"
              >
                {item.label}
              </a>
            ))}
            <Button asChild size="lg" className="mt-4">
              <a href="#locatie" onClick={() => setOpen(false)}>
                Vezi locația
              </a>
            </Button>
          </nav>
        </div>
      )}
    </>
  );
}
