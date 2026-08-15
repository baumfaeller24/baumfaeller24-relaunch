import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { PageHero } from "@/components/sections/PageHero";
import { Input } from "@/components/ui/input";
import { districts, seasonCopy } from "@/lib/site";

export const Route = createFileRoute("/baumschutz")({
  component: BaumschutzPage,
  head: () => ({
    meta: [
      { title: "Baumschutz & Genehmigung — Baumfäller24" },
      {
        name: "description",
        content:
          "Wann darf gefällt werden? Berliner Baumschutzverordnung und Untere Naturschutzbehörden in Brandenburg — übersichtlich.",
      },
    ],
  }),
});

function BaumschutzPage() {
  const [q, setQ] = useState("");
  const [region, setRegion] = useState<"Alle" | "Berlin" | "Brandenburg">("Alle");
  const season = seasonCopy();

  const filtered = useMemo(() => {
    const needle = q.trim().toLowerCase();
    return districts.filter((d) => {
      if (region !== "Alle" && d.region !== region) return false;
      if (!needle) return true;
      return `${d.name} ${d.authority} ${d.address}`.toLowerCase().includes(needle);
    });
  }, [q, region]);

  return (
    <>
      <PageHero
        eyebrow="Baumschutz"
        title="Die Genehmigung entscheidet — nicht die Säge."
        lead="Auf der alten Seite lag das als 15 Unterseiten mit Behördentelefonen. Hier an einer Stelle: Frist, Berliner Regel, Behördenfinder."
      />

      <section className="mx-auto grid max-w-6xl gap-6 px-4 py-16 sm:px-6 lg:grid-cols-3">
        <article className="rounded-xl bg-cream p-6 shadow-[var(--shadow-border)]">
          <p className="text-xs font-medium uppercase tracking-[0.14em] text-muted">
            {season.label}
          </p>
          <h2 className="mt-3 font-display text-2xl font-medium">1. März – 30. September</h2>
          <p className="mt-3 text-[0.9375rem] leading-relaxed text-muted">
            {season.text} Gefahrbäume und genehmigte Fällungen sind die Ausnahme.
          </p>
        </article>
        <article className="rounded-xl bg-cream p-6 shadow-[var(--shadow-border)]">
          <p className="text-xs font-medium uppercase tracking-[0.14em] text-muted">Berlin</p>
          <h2 className="mt-3 font-display text-2xl font-medium">Ab 80 cm Umfang</h2>
          <p className="mt-3 text-[0.9375rem] leading-relaxed text-muted">
            Einstämmige Bäume mit mindestens 80 cm Stammumfang in 1,30 m Höhe fallen unter die Berliner Baumschutzverordnung. Mehrstämmige früher. Antrag beim jeweiligen Bezirksamt.
          </p>
        </article>
        <article className="rounded-xl bg-cream p-6 shadow-[var(--shadow-border)]">
          <p className="text-xs font-medium uppercase tracking-[0.14em] text-muted">
            Brandenburg
          </p>
          <h2 className="mt-3 font-display text-2xl font-medium">Kreis oder Kommune</h2>
          <p className="mt-3 text-[0.9375rem] leading-relaxed text-muted">
            Manche Landkreise haben eigene Verordnungen, manche Städte eigene Satzungen. Wir prüfen das mit, bevor die Säge angesetzt wird.
          </p>
        </article>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <Input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Bezirk oder Landkreis suchen…"
            aria-label="Behörde suchen"
            className="sm:max-w-sm"
          />
          <div className="flex gap-2">
            {(["Alle", "Berlin", "Brandenburg"] as const).map((r) => (
              <button
                key={r}
                type="button"
                onClick={() => setRegion(r)}
                className={
                  region === r
                    ? "h-11 rounded-md bg-ink px-3.5 text-sm font-medium text-paper"
                    : "h-11 rounded-md px-3.5 text-sm font-medium text-ink shadow-[var(--shadow-border)]"
                }
              >
                {r}
              </button>
            ))}
          </div>
        </div>

        <ul className="mt-8 divide-y divide-line border-t border-line">
          {filtered.map((d) => (
            <li key={d.name} className="grid gap-2 py-5 sm:grid-cols-12 sm:gap-4">
              <div className="sm:col-span-4">
                <p className="font-medium">{d.name}</p>
                <p className="text-sm text-muted">{d.region}</p>
              </div>
              <div className="text-[0.9375rem] sm:col-span-5">
                <p>{d.authority}</p>
                <p className="text-muted">{d.address}</p>
                {d.note ? <p className="mt-1 text-sm text-moss">{d.note}</p> : null}
              </div>
              <div className="text-[0.9375rem] sm:col-span-3 sm:text-right">
                <a className="text-ink underline-offset-4 hover:underline" href={`tel:${d.phone.replace(/\s/g, "")}`}>
                  {d.phone}
                </a>
                {d.email ? (
                  <p>
                    <a
                      className="text-sm text-muted underline-offset-4 hover:underline"
                      href={`mailto:${d.email}`}
                    >
                      {d.email}
                    </a>
                  </p>
                ) : null}
              </div>
            </li>
          ))}
          {filtered.length === 0 ? (
            <li className="py-10 text-muted">Kein Treffer. Anderen Ortsnamen versuchen.</li>
          ) : null}
        </ul>
        <p className="mt-6 max-w-3xl text-sm text-muted">
          Angaben dienen der Orientierung und können sich ändern. Verbindlich ist die Untere Naturschutzbehörde vor Ort. Wir übernehmen keine Amtshandlung — wir helfen beim Antrag und der Dokumentation.
        </p>
      </section>
    </>
  );
}
