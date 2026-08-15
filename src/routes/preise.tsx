import { Link, createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/sections/PageHero";
import { Button } from "@/components/ui/button";
import { prices } from "@/lib/site";

export const Route = createFileRoute("/preise")({
  component: PreisePage,
  head: () => ({
    meta: [
      { title: "Preise — Baumfäller24" },
      {
        name: "description",
        content:
          "Feste Entsorgungspreise und individuelles Angebot für Baumfällung in Berlin und Brandenburg.",
      },
    ],
  }),
});

function PreisePage() {
  return (
    <>
      <PageHero
        eyebrow="Preise"
        title="Die Fällung ist individuell. Die Entsorgung ist es nicht."
        lead="Keine Fantasie-Pauschalen aus dem Internet. Für die Säge brauchen wir Bilder. Für Holz, Häcksel und Mulch stehen die Sätze fest."
      />
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 className="font-display text-2xl font-medium">So entsteht das Angebot</h2>
            <ol className="mt-6 space-y-4 text-[0.9375rem] leading-relaxed text-muted">
              <li>
                <span className="font-medium text-ink">1. Bilder.</span> Baum von zwei Seiten, Umgebung, Dach und Leitungen.
              </li>
              <li>
                <span className="font-medium text-ink">2. Stammumfang</span> in 1,30 m Höhe — entscheidend für Genehmigung und Aufwand.
              </li>
              <li>
                <span className="font-medium text-ink">3. Zugang.</span> Hofeinfahrt, Hinterhaus, keine Hebebühne möglich?
              </li>
              <li>
                <span className="font-medium text-ink">4. Entsorgung.</span> Mitnehmen, häckseln, als Brennholz lassen.
              </li>
            </ol>
            <Button asChild className="mt-8">
              <Link to="/kontakt">Unverbindlich anfragen</Link>
            </Button>
          </div>
          <div className="overflow-hidden rounded-xl bg-cream shadow-[var(--shadow-border)] lg:col-span-7">
            <table className="w-full text-left text-[0.9375rem]">
              <caption className="sr-only">Entsorgungs- und Lieferpreise</caption>
              <thead className="border-b border-line text-sm text-muted">
                <tr>
                  <th className="px-5 py-3 font-medium">Position</th>
                  <th className="px-5 py-3 font-medium">Einheit</th>
                  <th className="px-5 py-3 font-medium">Preis</th>
                </tr>
              </thead>
              <tbody>
                {prices.map((row) => (
                  <tr key={row.item} className="border-b border-line last:border-0">
                    <td className="px-5 py-4">{row.item}</td>
                    <td className="px-5 py-4 text-muted">{row.unit}</td>
                    <td className="px-5 py-4 font-medium tabular-nums">{row.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="border-t border-line px-5 py-4 text-sm text-muted">
              Containerstellung auf Anfrage. Altholzklassen und Böden nach Absprache. Alle Preise netto, zzgl. gesetzlicher MwSt., sofern ausgewiesen.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
