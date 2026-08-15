import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/sections/PageHero";
import { site } from "@/lib/site";

export const Route = createFileRoute("/impressum")({
  component: ImpressumPage,
  head: () => ({
    meta: [{ title: "Impressum — Baumfäller24" }],
  }),
});

function ImpressumPage() {
  return (
    <>
      <PageHero eyebrow="Rechtliches" title="Impressum" />
      <article className="mx-auto max-w-3xl px-4 py-16 text-[0.9375rem] leading-relaxed sm:px-6">
        <h2 className="font-display text-2xl font-medium">Angaben gemäß § 5 DDG</h2>
        <p className="mt-4">
          {site.owner}
          <br />
          {site.legalForm}
          <br />
          {site.address.street}
          <br />
          {site.address.zip} {site.address.city}
        </p>
        <h3 className="mt-8 font-medium">Kontakt</h3>
        <p className="mt-2">
          Telefon: {site.phone.display}
          <br />
          Fax: {site.fax}
          <br />
          Mobil: {site.mobile.display}
          <br />
          E-Mail: {site.email}
        </p>
        <h3 className="mt-8 font-medium">Umsatzsteuer / Steuernummer</h3>
        <p className="mt-2">Steuernummer: {site.taxId}</p>
        <h3 className="mt-8 font-medium">Verantwortlich für den Inhalt</h3>
        <p className="mt-2">
          {site.owner}, {site.address.street}, {site.address.zip} {site.address.city}
        </p>
        <p className="mt-8 text-sm text-muted">
          Streitbeilegung: Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit. Wir sind nicht verpflichtet und nicht bereit, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
        </p>
      </article>
    </>
  );
}
