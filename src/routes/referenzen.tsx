import { Link, createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/sections/PageHero";
import { Button } from "@/components/ui/button";
import { clients, projectCases } from "@/lib/site";

export const Route = createFileRoute("/referenzen")({
  component: ReferenzenPage,
  head: () => ({
    meta: [
      { title: "Referenzen — Baumfäller24" },
      {
        name: "description",
        content:
          "Projekte und Auftraggeber von Baumfäller24: Baufeldfreimachung, Seilklettertechnik, Strabag, Goldbeck, degewo.",
      },
    ],
  }),
});

const groups = [
  {
    title: "Bau & Infrastruktur",
    text: "Baufeldfreimachung, Rodung, Termindruck. Schnittstelle zum Tiefbau und zum geplanten Baubeginn.",
    names: ["Strabag AG", "Goldbeck", "Eurovia", "Hentschke Bau", "Baresel GmbH", "Elsterbau GmbH"],
  },
  {
    title: "Wohnen & Bestand",
    text: "Hausverwaltungen brauchen saubere Höfe, keine Beschwerden und nachvollziehbare Angebote.",
    names: [
      "degewo",
      "allod Immobilien",
      "Achat Hausverwaltung",
      "Trend Immobilien Schneider",
      "hit Hanseatische Immobilien Treuhand",
      "Fidato Immobilien",
    ],
  },
  {
    title: "Öffentlich & diplomatisch",
    text: "Sicherheitszonen, Protokoll, enge Zeitfenster. Kein Platz für Probieren.",
    names: [
      "Liechtensteinische Botschaft",
      "Botschaft von Usbekistan",
      "Justizvollzugsanstalt Tegel",
      "FEZ Wuhlheide",
      "Die Heilsarmee",
      "BWK Bildungswerk Kreuzberg",
    ],
  },
];

function ReferenzenPage() {
  return (
    <>
      <PageHero
        eyebrow="Referenzen"
        title="Zwölf Jahre Arbeit — an Projekten und Auftraggebern ablesbar."
        lead="Keine erfundenen Sterne. Sachliche Projektbeschreibungen und die Namen, die auf der bestehenden Website stehen."
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="font-display text-2xl font-medium tracking-tight sm:text-3xl">
          Ausgeführte Projekte
        </h2>
        <p className="mt-3 max-w-2xl text-muted">
          Maßstab und Methode — ohne Verkaufsrhetorik. Die Zahlen stehen im Text, wo sie hingehören.
        </p>
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {projectCases.map((c) => (
            <article key={c.title} className="rounded-xl border border-line bg-paper p-6">
              <p className="text-xs font-medium uppercase tracking-[0.12em] text-muted">{c.tag}</p>
              <h3 className="mt-2 font-display text-xl font-medium">{c.title}</h3>
              <p className="mt-3 text-[0.9375rem] leading-relaxed text-muted">{c.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-line bg-cream">
        <div className="mx-auto max-w-6xl space-y-14 px-4 py-16 sm:px-6">
          {groups.map((g) => (
            <div key={g.title}>
              <h2 className="font-display text-2xl font-medium">{g.title}</h2>
              <p className="mt-2 max-w-2xl text-muted">{g.text}</p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {g.names.map((n) => (
                  <li key={n} className="rounded-lg bg-paper px-4 py-4 text-[0.9375rem] shadow-[var(--shadow-border)]">
                    {n}
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <p className="text-sm text-muted">
            Weitere Auftraggeber:{" "}
            {clients.filter((c) => !groups.some((g) => g.names.includes(c))).join(", ")}.
          </p>
        </div>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-4 py-14 sm:flex-row sm:items-center sm:px-6">
          <h2 className="font-display text-2xl font-medium">Nächster Auftrag: Ihrer.</h2>
          <Button asChild>
            <Link to="/kontakt">Anfrage stellen</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
