import { createFileRoute, redirect } from "@tanstack/react-router";

const EXTERNAL_URL =
  "https://www.znanylekarz.pl/katarzyna-sanocka-szulc/psycholog-psychoterapeuta/tczew";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "O mnie — dr Katarzyna Sanocka-Szulc" },
      { name: "description", content: "Profil dr Katarzyny Sanockiej-Szulc na ZnanyLekarz." },
      { name: "robots", content: "noindex" },
    ],
  }),
  beforeLoad: () => {
    throw redirect({ href: EXTERNAL_URL });
  },
  component: AboutRedirect,
});

function AboutRedirect() {
  return (
    <div className="min-h-screen grid place-items-center bg-background px-6 text-center">
      <p className="text-muted-foreground">
        Przekierowuję do profilu…{" "}
        <a href={EXTERNAL_URL} className="underline">
          Kliknij tutaj, jeśli nie nastąpi automatycznie.
        </a>
      </p>
    </div>
  );
}
