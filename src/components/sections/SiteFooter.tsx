import { Facebook, Instagram, Music2 } from "lucide-react";
import { siteContent } from "@/content/site-content";

const socialIcons = { facebook: Facebook, instagram: Instagram, tiktok: Music2 };

export function SiteFooter() {
  return (
    <footer className="bg-carbune text-crem">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-12 text-center sm:px-6">
        <div className="flex items-center gap-3">
          {/* Placeholder logo — înlocuiește public/logo.png */}
          <img src={siteContent.brand.logo} alt={siteContent.brand.logoAlt} className="h-8 w-auto" />
          <span className="font-serif text-lg text-[oklch(0.75_0.09_141.6)]">{siteContent.brand.fundatie}</span>
        </div>

        <nav aria-label="Navigare footer" className="flex flex-wrap justify-center gap-x-6 gap-y-2">
          {siteContent.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-crem/80 transition-colors hover:text-ocru"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <ul className="flex gap-4">
          {siteContent.contact.social.map((s) => {
            const Icon = socialIcons[s.retea];
            return (
              <li key={s.retea}>
                <a
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-crem/25 transition-colors hover:border-ocru hover:text-ocru"
                >
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </a>
              </li>
            );
          })}
        </ul>

        <p className="text-xs text-crem/60">{siteContent.footer.copyright}</p>
      </div>
    </footer>
  );
}
