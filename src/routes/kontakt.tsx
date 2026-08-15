import { createFileRoute } from "@tanstack/react-router";
import { QuoteForm } from "@/components/forms/QuoteForm";
import { PageHero } from "@/components/sections/PageHero";
import { site } from "@/lib/site";

export const Route = createFileRoute("/kontakt")({
  component: KontaktPage,
  head: () => ({
    meta: [
      { title: "Kontakt — Baumfäller24" },
      {
        name: "description",
        content:
          "Angebot für Baumfällung in Berlin und Brandenburg: WhatsApp, Telefon oder Formular. Tongrubenweg 13, 12559 Berlin.",
      },
    ],
  }),
});

function KontaktPage() {
  return (
    <>
      <PageHero
        eyebrow="Kontakt"
        title="Bilder schicken. Wir rufen zurück."
        lead="Werktags erreichbar. Notfälle auch außerhalb. Kein Callcenter — der Betrieb sitzt in Müggelheim."
      />
      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-12">
        <aside className="space-y-8 lg:col-span-4">
          <div>
            <h2 className="font-display text-xl font-medium">Direkt</h2>
            <ul className="mt-3 space-y-2 text-[0.9375rem]">
              <li>
                Telefon{" "}
                <a className="font-medium underline-offset-4 hover:underline" href={site.phone.href}>
                  {site.phone.display}
                </a>
              </li>
              <li>
                WhatsApp{" "}
                <a className="font-medium underline-offset-4 hover:underline" href={site.mobile.wa}>
                  {site.mobile.display}
                </a>
              </li>
              <li>
                Mail{" "}
                <a
                  className="font-medium underline-offset-4 hover:underline"
                  href={`mailto:${site.email}`}
                >
                  {site.email}
                </a>
              </li>
              <li>
                Notfall{" "}
                <a
                  className="font-medium underline-offset-4 hover:underline"
                  href={site.emergency.href}
                >
                  {site.emergency.display}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="font-display text-xl font-medium">Betrieb</h2>
            <p className="mt-3 text-[0.9375rem] leading-relaxed text-muted">
              {site.owner}
              <br />
              {site.address.street}
              <br />
              {site.address.zip} {site.address.city}
              <br />
              {site.address.district}
            </p>
            <p className="mt-3 text-sm text-muted">
              Einsatzgebiet: alle Berliner Bezirke und das brandenburgische Umland.
            </p>
          </div>
          <div className="overflow-hidden rounded-xl">
            <iframe
              title="Karte Tongrubenweg 13, Berlin-Müggelheim"
              className="h-56 w-full border-0 grayscale"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://maps.google.com/maps?q=Tongrubenweg%2013%2012559%20Berlin&z=13&output=embed"
            />
          </div>
        </aside>
        <div className="rounded-xl bg-cream p-5 shadow-[var(--shadow-border)] sm:p-7 lg:col-span-8">
          <h2 className="font-display text-2xl font-medium">Anfrage</h2>
          <p className="mt-2 mb-6 text-sm text-muted">
            Pflichtfelder: Name, Telefon, Ort. Fotos anschließend in denselben WhatsApp-Chat.
          </p>
          <QuoteForm />
        </div>
      </section>
    </>
  );
}
