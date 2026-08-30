import { Link } from "@tanstack/react-router";

import logoWings from "@/assets/logo-wings-mask.png";

export function SiteHeader() {
  return (
    <header className="pointer-events-none absolute top-0 left-0 right-0 z-30">
      <div className="mx-auto max-w-7xl px-6 lg:px-12 py-6 flex items-center justify-between">
        <Link to="/" className="pointer-events-auto flex items-end gap-3 group">
          <span
            aria-hidden="true"
            className="h-20 w-32 bg-primary/70 transition-colors group-hover:bg-primary"
            style={{
              maskImage: `url(${logoWings})`,
              WebkitMaskImage: `url(${logoWings})`,
              maskSize: "contain",
              WebkitMaskSize: "contain",
              maskRepeat: "no-repeat",
              WebkitMaskRepeat: "no-repeat",
              maskPosition: "bottom",
              WebkitMaskPosition: "bottom",
            }}
          />

          <span className="font-display text-2xl tracking-tight">dr Katarzyna Sanocka-Szulc</span>
        </Link>
      </div>
    </header>
  );
}
