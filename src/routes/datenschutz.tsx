import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/sections/PageHero";
import { site } from "@/lib/site";

export const Route = createFileRoute("/datenschutz")({
  component: DatenschutzPage,
  head: () => ({
    meta: [{ title: "Datenschutz — Baumfäller24" }],
  }),
});

function DatenschutzPage() {
  return (
    <>
      <PageHero eyebrow="Rechtliches" title="Datenschutzerklärung" />
      <article className="mx-auto max-w-3xl space-y-6 px-4 py-16 text-[0.9375rem] leading-relaxed sm:px-6">
        <p>
          Verantwortlicher im Sinne der DSGVO: {site.owner}, {site.address.street},{" "}
          {site.address.zip} {site.address.city}, {site.email}, Tel. {site.phone.display}.
        </p>
        <h2 className="font-display text-2xl font-medium">Anfragen</h2>
        <p>
          Wenn Sie das Formular nutzen, öffnet sich WhatsApp oder Ihr E-Mail-Programm. Die Nachricht wird nicht auf diesem Server gespeichert. Es gelten die Datenschutzhinweise von WhatsApp bzw. Ihres Mailanbieters. Pflichtangaben dienen der Angebotserstellung.
        </p>
        <h2 className="font-display text-2xl font-medium">Hosting und Protokolle</h2>
        <p>
          Beim Aufruf der Seite fallen technisch notwendige Verbindungsdaten an (IP-Adresse, Zeitpunkt, aufgerufene Datei). Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (Betrieb und Sicherheit der Website).
        </p>
        <h2 className="font-display text-2xl font-medium">Karten</h2>
        <p>
          Auf der Kontaktseite kann eine Karte von Google Maps eingebunden sein. Dabei kann Google Daten erheben. Nutzen Sie die Karte nur, wenn Sie damit einverstanden sind.
        </p>
        <h2 className="font-display text-2xl font-medium">Ihre Rechte</h2>
        <p>
          Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung, Datenübertragbarkeit und Widerspruch sowie das Beschwerderecht bei einer Aufsichtsbehörde.
        </p>
      </article>
    </>
  );
}
