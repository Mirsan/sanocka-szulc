import { createFileRoute } from "@tanstack/react-router";
import { Youtube, BookOpen, Music, HeartHandshake } from "lucide-react";
import heroImg from "@/assets/hero-therapy.jpg";
import orchidImg from "@/assets/orchid.jpg";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";



export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "dr Katarzyna Sanocka-Szulc Psychoterapia — Uważna pomoc psychologiczna online" },
      { name: "description", content: "Psychoterapia indywidualna, par i rodzinna online. Ciepła, oparta na badaniach praktyka — wsparcie w lęku, relacjach i życiowych zmianach." },
      { property: "og:title", content: "dr Katarzyna Sanocka-Szulc Psychoterapia" },
      { property: "og:description", content: "Spokojna przestrzeń na rozmowę i zmianę na lepsze." },
    ],
  }),
  component: Home,
});

const socialLinks = [
  {
    Icon: BookOpen,
    label: "Książki",
    href: "https://sensus.pl/ksiazki/kiedy-gasnie-dziecieca-radosc-jak-pomoc-dziecku-pokonac-depresje-katarzyna-sanocka-szulc,japodz.htm?srsltid=AfmBOooJ7cc2fw2KnM8zkm4cMCpQ3wJDHpl355racjWHMCIbAjx6aS74#format/d",
  },
  {
    Icon: Music,
    label: "Spotify",
    href: "https://open.spotify.com/show/2ZunVOMkhByS6jrzHR9XUy?si=C7c7QNNJR8GRhRyltzhK6Q&utm_source=whatsapp",
  },
  { Icon: Youtube, label: "YouTube", href: "#" },
  { Icon: HeartHandshake, label: "Fundacja KzB", href: "https://kobietazbrzuszkiem.pl/" },
];

const services = [
  {
    name: "Terapia indywidualna",
    unit: "50 min",
    desc: "Praca jeden na jeden dla dorosłych i młodzieży. Większość klientów zaczyna właśnie tutaj. Lęk, depresja, relacje, zmiany życiowe.",
    bullets: ["Cotygodniowe spotkania", "W gabinecie lub online"],
  },
  {
    name: "Terapia par",
    unit: "60 min",
    desc: "Dla dwojga osób, które chcą lepiej się zrozumieć. Czerpię z IFS i podejścia systemowego.",
    bullets: ["Co dwa lub trzy tygodnie", "Oboje partnerzy obecni"],
  },
  {
    name: "Terapia rodzinna",
    unit: "60 min",
    desc: "Praca z całą rodziną lub jej członkami, którzy chcą się lepiej rozumieć i wspierać, a tym samym wzmacniać więź.",
    bullets: ["Co dwa lub trzy tygodnie", "Pomoc w trudnościach dzieci"],
  },
];

const faqs: [string, string][] = [
  ["Jak wygląda pierwsza sesja?", "To głównie Twoja historia, Twoimi słowami. Zadam kilka pytań porządkujących i porozmawiamy o tym, co Cię przyprowadza i co chciał(a)byś zmienić."],
  ["Jak długo trwa terapia?", "Pierwsze efekty psychoterapii są widoczne po około pół roku do roku, średnio procesy trwają 2-3 lata. Sesje coachingowe skupiające się na konkretnym problemie trwają kilka spotkań."],
  ["Czy oferujesz sesje online?", "Tak — spotykamy się na WhatsApp. Około połowa mojej praktyki odbywa się zdalnie."],
];

function Home() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* Split hero */}
      <section id="start" className="relative min-h-screen grid lg:grid-cols-2">
        <div className="bg-gradient-hero flex items-center pt-28 lg:pt-0 px-6 lg:px-16 xl:px-24 py-16">
          <div className="max-w-xl">
            
            <h1 className="mt-6 font-display text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-balance">
              Łagodność jest formą <em className="text-primary not-italic font-light">siły</em>.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-md">
              Praktyka psychoterapeutyczna łącząca wiedzę naukową z holistycznym podejściem do dbania o dobrostan psycho-fizyczny.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="https://www.znanylekarz.pl/katarzyna-sanocka-szulc/psycholog-psychoterapeuta/tczew"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm font-medium text-foreground/80 hover:text-foreground transition border-b border-foreground/30 pb-0.5"
              >
                Poznaj mnie bliżej →
              </a>
            </div>

            <div className="mt-16 flex items-center gap-8 text-sm text-muted-foreground">
              <div>
                <div className="font-display text-3xl text-foreground">12+</div>
                <div>Lat praktyki</div>
              </div>
              <div className="h-10 w-px bg-border" />
              <div>
                <div className="font-display text-3xl text-foreground">5000+</div>
                <div>Godzin terapeutycznych</div>
              </div>
              <div className="h-10 w-px bg-border" />
              <div>
                <div className="font-display text-3xl text-foreground">Pn–Sob</div>
                <div>Sesje</div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative min-h-[60vh] lg:min-h-screen overflow-hidden">
          <img
            src={heroImg}
            alt="Kobieta siedząca przy oknie, zatopiona w spokojnej refleksji"
            className="absolute inset-0 h-full w-full object-cover"
            width={1280}
            height={1600}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-transparent" />
          <div className="absolute top-4 left-0 right-0 z-40 flex flex-wrap items-center justify-center gap-3 px-4">
            {socialLinks.map(({ Icon, label, href }) => (
              <a
                key={label}
                href={href}
                {...(href !== "#" ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                aria-label={label}
                title={label}
                className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-background/70 backdrop-blur px-3.5 py-2 text-xs text-primary hover:bg-background/90 hover:border-primary transition"
              >
                <Icon size={18} strokeWidth={1.5} />
                <span>{label}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section id="podejscie" className="py-28 px-6 lg:px-16 xl:px-24">
        <div className="mx-auto max-w-6xl grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <span className="text-xs uppercase tracking-[0.25em] text-primary/80">Moje podejście</span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl leading-tight text-balance">
              Terapia, która spotyka Cię tam, gdzie naprawdę jesteś.
            </h2>
          </div>
          <div className="lg:col-span-7 lg:pt-10">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Nowoczesna praktyka psychoterapeutyczna oparta na podejściu systemowym
              i poznawczo-behawioralnym oraz pracy z ciałem. Terapia oparta na aktualnej
              wiedzy naukowej, w tym neurobiologicznej. Procesy prowadzone pod stałą superwizją.
            </p>
            <div className="mt-10 grid sm:grid-cols-2 gap-8">
              {[
                { t: "Systemowe", d: "Patrzę na Ciebie w kontekście relacji, rodziny i środowiska — bo nie istniejemy w próżni." },
                { t: "Poznawczo-behawioralne", d: "Pracujemy nad myślami i funkcjonalnymi nawykami, które wspierają dobrostan psychofizyczny." },
                { t: "Praca z ciałem", d: "Słuchamy mądrości ciała — oddechu, doznań, prawd, do których słowa nie sięgają." },
                { t: "We własnym tempie", d: "Głębia bez presji. Ty wyznaczasz tempo, ja dbam o stałość." },
              ].map((i) => (
                <div key={i.t} className="border-t border-border pt-5">
                  <div className="font-display text-2xl">{i.t}</div>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{i.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="bg-gradient-soft py-28 px-6 lg:px-16">
        <div className="mx-auto max-w-5xl grid md:grid-cols-3 gap-12 items-center">
          <div className="md:col-span-1">
            <img
              src={orchidImg}
              alt="Pojedyncza biała orchidea"
              loading="lazy"
              width={1024}
              height={1280}
              className="rounded-sm shadow-soft aspect-[4/5] object-cover w-full"
            />
          </div>
          <blockquote className="md:col-span-2 font-display text-3xl md:text-4xl leading-snug text-balance">
            <span className="text-primary text-5xl leading-none">„</span>Między bodźcem a reakcją istnieje przestrzeń.
            W tej przestrzeni leży nasza moc wyboru reakcji, a w naszej reakcji — nasz rozwój.
            <footer className="mt-6 text-sm tracking-widest uppercase text-muted-foreground font-body">— Viktor E. Frankl</footer>
          </blockquote>
        </div>
      </section>

      {/* What we help with */}
      <section id="pomoc" className="py-28 px-6 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-end justify-between flex-wrap gap-6 mb-14">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-primary/80">Z czym najczęściej przychodzą klienci</span>
              <h2 className="mt-3 font-display text-4xl md:text-5xl text-balance max-w-2xl">
                Nie trzeba kryzysu, żeby zacząć.
              </h2>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-xl overflow-hidden">
            {[
              ["Lęk i przeciążenie", "Wyciszamy wewnętrzne alarmy, żebyś znów mógł myśleć, oddychać i decydować."],
              ["Depresja i brak motywacji", "Odzyskiwanie sił, gdy wszystko wydaje się ciężkie lub puste."],
              ["Relacje", "Schematy, przywiązanie, komunikacja — to, co boli między ludźmi."],
              ["Wsparcie w rodzicielstwie", "Byś mogła poczuć się wystarczajaco dobrym rodzicem."],
              ["Tożsamość i sens", "Wielkie pytania, zwroty w połowie życia, praca nad sobą."],
              ["Trauma i układ nerwowy", "Łagodna praca z tym, co ciało wciąż pamięta."],
            ].map(([t, d]) => (
              <div key={t} className="bg-card p-8 hover:bg-secondary/40 transition">
                <h3 className="font-display text-2xl">{t}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services / Cennik */}
      <section id="uslugi" className="py-28 px-6 lg:px-16 bg-gradient-hero">
        <div className="mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-end mb-14">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-primary/80">Usługi</span>
              <h2 className="mt-6 font-display text-4xl md:text-5xl leading-[1.05] text-balance">
                Formy pracy
              </h2>
            </div>
          </div>


          <div className="grid md:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden shadow-soft">
            {services.map((s) => (
              <div key={s.name} className="bg-card p-10 flex flex-col">
                <h3 className="font-display text-3xl">{s.name}</h3>
                <div className="mt-4 text-sm text-muted-foreground">{s.unit}</div>
                <p className="mt-5 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                <ul className="mt-8 space-y-2 text-sm">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-3">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary" /> {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>


        </div>
      </section>


      {/* FAQ */}
      <section id="faq" className="py-24 px-6 lg:px-16 bg-secondary/30">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-4xl md:text-5xl text-balance">Najczęstsze pytania.</h2>
          <div className="mt-12 divide-y divide-border">
            {faqs.map(([q, a]) => (
              <details key={q} className="group py-6">
                <summary className="flex justify-between items-center cursor-pointer list-none">
                  <span className="font-display text-2xl">{q}</span>
                  <span className="text-primary text-2xl group-open:rotate-45 transition">+</span>
                </summary>
                <p className="mt-3 text-muted-foreground leading-relaxed max-w-2xl">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="kontakt" className="py-28 px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-5xl md:text-6xl text-balance leading-tight">
            KONTAKT
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            sanocka.szulc@gmail.com
          </p>
          <p className="mt-4 text-lg text-muted-foreground">
            przyjmuję przez CPP Więź w Starogardzie Gdańskim (w gabinecie i online)
          </p>

          <p className="mt-6 text-sm">
            <a
              href="https://centrumwiez.pl/kontakt/"
              target="_blank"
              rel="noopener noreferrer"
              className="border-b border-foreground/40 pb-0.5 hover:border-foreground transition"
            >
              CPP Więź →
            </a>
          </p>

        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
