export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-12 py-16 grid gap-10 md:grid-cols-3">
        <div>
          <div className="font-display text-3xl">dr Katarzyna Sanocka-Szulc</div>
          <p className="mt-3 text-sm text-muted-foreground max-w-xs">
            Przestrzeń na rozmowę, rozwój i zmianę na lepsze.
          </p>
        </div>
        <div className="text-sm">
          <h4 className="font-display text-xl mb-3">Kontakt</h4>
          <p className="text-muted-foreground leading-relaxed">
            sanocka.szulc@gmail.com
          </p>
        </div>
        <div className="text-sm">
          <h4 className="font-display text-xl mb-3">Formy pracy</h4>
          <p className="text-muted-foreground leading-relaxed">
            online na WhatsApp<br />
            stacjonarnie w gabinecie
          </p>
        </div>

      </div>

      <div className="border-t border-border/60 py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} dr Katarzyna Sanocka-Szulc Psychoterapia. Gabinet psychoterapeutyczny.
      </div>
    </footer>
  );
}
