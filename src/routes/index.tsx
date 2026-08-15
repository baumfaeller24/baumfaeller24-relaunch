import { Link, createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Clock3,
  MapPin,
  MessageCircle,
  ShieldCheck,
  Trees,
} from "lucide-react";
import { QuoteForm } from "@/components/forms/QuoteForm";
import { Button } from "@/components/ui/button";
import {
  clients,
  faqs,
  photos,
  processSteps,
  seasonCopy,
  services,
  site,
} from "@/lib/site";

export const Route = createFileRoute("/")({
  component: HomePage,
  head: () => ({
    meta: [{ title: "Baumfäller24 — Baumfällung Berlin & Brandenburg" }],
  }),
});

function HomePage() {
  const season = seasonCopy();

  return (
    <>
      <section className="relative min-h-[92svh] bg-bark text-bone">
        <img
          src={photos.hero}
          alt="Baumkletterer in der Krone einer großen Eiche bei Morgendämmerung"
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgb(18_20_16/0.35)_0%,rgb(18_20_16/0.15)_32%,rgb(18_20_16/0.72)_72%,rgb(18_20_16/0.92)_100%)]" />
        <div className="relative mx-auto flex min-h-[92svh] max-w-6xl flex-col justify-end px-4 pb-16 pt-28 sm:px-6 sm:pb-20">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-bone-muted">
            Seit {site.years} Jahren · inhabergeführt
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-[2.35rem] font-medium leading-[1.08] tracking-tight sm:text-6xl">
            Bäume fällen, wenn Platz, Zeit und Sicherheit zählen.
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-bone/90">
            Seilklettertechnik, Hebebühne und Rodung — für Privatgrundstücke,
            Hausverwaltungen und Baustellen. Angebot in der Regel innerhalb eines Werktags.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" variant="inverse">
              <Link to="/kontakt">
                Angebot anfordern
                <ArrowRight />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-0 text-bone shadow-[0_0_0_1px_rgb(239_236_227/0.28)] hover:bg-bone/10 hover:shadow-[0_0_0_1px_rgb(239_236_227/0.45)]"
            >
              <a href={site.mobile.wa}>
                <MessageCircle />
                WhatsApp {site.mobile.display}
              </a>
            </Button>
          </div>
          <p
            className="mt-8 inline-flex max-w-xl items-start gap-2 rounded-md bg-bark/50 px-3 py-2 text-sm text-bone-muted"
          >
            <span className="mt-0.5 inline-block size-1.5 shrink-0 rounded-full bg-bone" />
            <span>
              <span className="font-medium text-bone">{season.label}.</span> {season.text}
            </span>
          </p>
        </div>
      </section>

      <section className="border-b border-line bg-cream">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-8 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
          {[
            { icon: Trees, label: `${site.years} Jahre`, text: "inhabergeführt in Müggelheim" },
            { icon: MapPin, label: "Berlin & Brandenburg", text: "von Köpenick bis ins Umland" },
            { icon: Clock3, label: "Angebot in 24 h", text: "Fotos und Stammumfang genügen" },
            { icon: ShieldCheck, label: "B2B-Referenzen", text: "Strabag, Goldbeck, degewo" },
          ].map((item) => (
            <div key={item.label} className="flex gap-3">
              <item.icon className="mt-0.5 size-5 shrink-0 text-moss" />
              <div>
                <p className="font-medium">{item.label}</p>
                <p className="text-sm text-muted">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted">
              Leistungen
            </p>
            <h2 className="mt-3 font-display text-3xl font-medium tracking-tight sm:text-4xl">
              Vom einzelnen Hofbaum bis zur Baufeldfreimachung.
            </h2>
          </div>
          <Button asChild variant="outline">
            <Link to="/leistungen">
              Alle Leistungen
              <ArrowRight />
            </Link>
          </Button>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <Link
              key={s.slug}
              to="/leistungen"
              hash={s.slug}
              className="group overflow-hidden rounded-xl bg-cream shadow-[var(--shadow-border)] transition-[box-shadow] duration-150 hover:shadow-[var(--shadow-border-hover)]"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={s.image}
                  alt=""
                  className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <div className="p-5">
                <h3 className="font-display text-xl font-medium">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{s.short}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-cream">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted">
              Ablauf
            </p>
            <h2 className="mt-3 font-display text-3xl font-medium tracking-tight sm:text-4xl">
              Kein Formular-Marathon. Fotos, Umfang, Angebot.
            </h2>
            <p className="mt-4 max-w-md text-muted">
              Die Konkurrenz verkauft Beratungstermine. Wir kalkulieren oft aus der Ferne — und kommen, wenn die Säge nötig ist.
            </p>
          </div>
          <ol className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
            {processSteps.map((step) => (
              <li key={step.n} className="rounded-xl bg-paper p-5 shadow-[var(--shadow-border)]">
                <p className="font-display text-2xl text-moss">{step.n}</p>
                <h3 className="mt-2 font-medium">{step.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted">
          Auftraggeber
        </p>
        <h2 className="mt-3 max-w-2xl font-display text-3xl font-medium tracking-tight sm:text-4xl">
          Wer uns wiederholt holt.
        </h2>
        <p className="mt-4 max-w-xl text-muted">
          Bau, Wohnungswirtschaft, Botschaften, soziale Träger. Die Liste steht so auf der bestehenden Seite — wir haben sie nur lesbar gemacht.
        </p>
        <ul className="mt-10 grid grid-cols-2 gap-x-6 gap-y-3 sm:grid-cols-3 lg:grid-cols-4">
          {clients.map((c) => (
            <li key={c} className="border-t border-line pt-3 text-[0.9375rem]">
              {c}
            </li>
          ))}
        </ul>
      </section>

      <section className="relative overflow-hidden bg-bark text-bone">
        <img
          src={photos.bark}
          alt=""
          className="absolute inset-0 size-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-bark/70" />
        <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-4 py-16 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-bone-muted">
              Notfall
            </p>
            <h2 className="mt-3 font-display text-3xl font-medium">
              Sturm, Bruch, gesperrte Straße.
            </h2>
            <p className="mt-3 max-w-lg text-bone-muted">
              Verkehrssicherheit wartet nicht auf den 1. Oktober. Wir sichern und räumen — auch nachts.
            </p>
          </div>
          <Button asChild size="lg" variant="inverse">
            <a href={site.emergency.href}>Notfall {site.emergency.display}</a>
          </Button>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted">
            Fragen
          </p>
          <h2 className="mt-3 font-display text-3xl font-medium tracking-tight">
            Was Auftraggeber zuerst wissen wollen.
          </h2>
        </div>
        <div className="divide-y divide-line lg:col-span-7">
          {faqs.map((item) => (
            <details key={item.q} className="group py-5">
              <summary className="cursor-pointer list-none font-medium marker:content-none [&::-webkit-details-marker]:hidden">
                <span className="flex items-start justify-between gap-4">
                  {item.q}
                  <span className="text-muted transition-transform duration-150 group-open:rotate-45">
                    +
                  </span>
                </span>
              </summary>
              <p className="mt-3 max-w-prose text-[0.9375rem] leading-relaxed text-muted">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </section>

      <section className="bg-cream" id="angebot">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted">
              Angebot
            </p>
            <h2 className="mt-3 font-display text-3xl font-medium tracking-tight">
              Fotos schicken. Rückmeldung am Werktag.
            </h2>
            <p className="mt-4 text-muted">
              Formular ausfüllen — wir öffnen WhatsApp mit dem fertigen Text. Alternativ per Mail an{" "}
              <a className="text-ink underline underline-offset-4" href={`mailto:${site.email}`}>
                {site.email}
              </a>
              .
            </p>
          </div>
          <div className="rounded-xl bg-paper p-5 shadow-[var(--shadow-border)] sm:p-7 lg:col-span-7">
            <QuoteForm />
          </div>
        </div>
      </section>
    </>
  );
}
