import { Link, createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/sections/PageHero";
import { Button } from "@/components/ui/button";
import { clients } from "@/lib/site";

export const Route = createFileRoute("/referenzen")({
  component: ReferenzenPage,
  head: () => ({
    meta: [
      { title: "Referenzen — Baumfäller24" },
      {
        name: "description",
        content:
          "Auftraggeber von Baumfäller24: Strabag, Goldbeck, degewo, Botschaften, Wohnungswirtschaft.",
      },
    ],
  }),
});

const groups = [
  {
    title: "Bau & Infrastruktur",
    text: "Baufeldfreimachung, Rodung, Termindruck. Genau das Geschäft, das eine Keyword-Seite nicht erzählt.",
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
        title="Zwölf Jahre Arbeit lassen sich an den Auftraggebern ablesen."
        lead="Keine erfundenen Sterne. Die Namen stehen auf der bestehenden Website — hier nach Branchen geordnet."
      />
      <section className="mx-auto max-w-6xl space-y-14 px-4 py-16 sm:px-6">
        {groups.map((g) => (
          <div key={g.title}>
            <h2 className="font-display text-2xl font-medium">{g.title}</h2>
            <p className="mt-2 max-w-2xl text-muted">{g.text}</p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {g.names.map((n) => (
                <li
                  key={n}
                  className="rounded-lg bg-cream px-4 py-4 text-[0.9375rem] shadow-[var(--shadow-border)]"
                >
                  {n}
                </li>
              ))}
            </ul>
          </div>
        ))}
        <p className="text-sm text-muted">
          Weitere Auftraggeber: {clients.filter((c) => !groups.some((g) => g.names.includes(c))).join(", ")}.
        </p>
      </section>
      <section className="border-t border-line bg-cream">
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
