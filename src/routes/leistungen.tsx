import { Link, createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/sections/PageHero";
import { Button } from "@/components/ui/button";
import { services } from "@/lib/site";

export const Route = createFileRoute("/leistungen")({
  component: LeistungenPage,
  head: () => ({
    meta: [
      { title: "Leistungen — Baumfäller24" },
      {
        name: "description",
        content:
          "Baufeldfreimachung, Rodung mit schwerer Technik, Seilklettertechnik, Sturmschadenbeseitigung und Stubbenfräsen in Berlin und Brandenburg.",
      },
    ],
  }),
});

function LeistungenPage() {
  return (
    <>
      <PageHero
        eyebrow="Leistungen"
        title="Was wir tun — und wofür wir geholt werden."
        lead="Große Flächen und enge Höfe. Schwere Technik und Seilklettertechnik. Bauablauf und Privatgrundstück. Die Arbeit, nach der Auftraggeber tatsächlich fragen."
      />
      <div className="mx-auto max-w-6xl space-y-20 px-4 py-16 sm:px-6">
        {services.map((s, i) => (
          <article
            key={s.slug}
            id={s.slug}
            className="scroll-mt-24 grid items-center gap-8 lg:grid-cols-12"
          >
            <div className={i % 2 === 1 ? "lg:col-span-6 lg:order-2" : "lg:col-span-6"}>
              <div className="overflow-hidden rounded-xl">
                <img src={s.image} alt="" className="aspect-[4/3] w-full object-cover" />
              </div>
            </div>
            <div className="lg:col-span-6">
              <h2 className="font-display text-3xl font-medium tracking-tight">{s.title}</h2>
              <p className="mt-4 leading-relaxed text-muted">{s.body}</p>
              <ul className="mt-5 space-y-2">
                {s.points.map((p) => (
                  <li key={p} className="flex gap-3 text-[0.9375rem]">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-moss" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
      <section className="border-t border-line bg-cream">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-4 py-14 sm:flex-row sm:items-center sm:px-6">
          <div>
            <h2 className="font-display text-2xl font-medium">
              Nächster Schritt: Pläne, Fotos oder Flächenangabe.
            </h2>
            <p className="mt-2 text-muted">
              Wir kalkulieren Technik und Entsorgung — ohne unnötigen Vor-Ort-Zwang.
            </p>
          </div>
          <Button asChild>
            <Link to="/kontakt">Anfrage stellen</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
