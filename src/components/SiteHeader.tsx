import { Link } from "@tanstack/react-router";

export function SiteHeader() {
  return (
    <header className="pointer-events-none absolute top-0 left-0 right-0 z-30">
      <div className="mx-auto max-w-7xl px-6 lg:px-12 py-6 flex items-center justify-between">
        <Link to="/" className="pointer-events-auto group">
          <span className="font-display text-2xl tracking-tight">dr Katarzyna Sanocka-Szulc</span>
        </Link>
      </div>
    </header>
  );
}
