import { Link } from "@tanstack/react-router";
import { Logo } from "@/components/brand/Logo";
import { nav, site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="bg-bark text-bone">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-12">
        <div className="md:col-span-5">
          <Logo inverse />
          <p className="mt-5 max-w-sm text-[0.9375rem] leading-relaxed text-bone-muted">
            Fachbetrieb für Baumfällung, Seilklettertechnik und Baufeldfreimachung.
            Inhabergeführt in Berlin-Müggelheim, im Einsatz in ganz Berlin und Brandenburg.
          </p>
        </div>
        <div className="md:col-span-3">
          <p className="text-xs font-medium uppercase tracking-[0.14em] text-bone-muted">
            Seiten
          </p>
          <ul className="mt-4 space-y-2.5 text-[0.9375rem]">
            {nav.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="hover:text-paper">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-4">
          <p className="text-xs font-medium uppercase tracking-[0.14em] text-bone-muted">
            Kontakt
          </p>
          <ul className="mt-4 space-y-2.5 text-[0.9375rem]">
            <li>
              {site.address.street}
              <br />
              {site.address.zip} {site.address.city}
              <span className="text-bone-muted"> · {site.address.district}</span>
            </li>
            <li>
              <a className="hover:text-paper" href={site.phone.href}>
                {site.phone.display}
              </a>
            </li>
            <li>
              WhatsApp{" "}
              <a className="hover:text-paper" href={site.mobile.wa}>
                {site.mobile.display}
              </a>
            </li>
            <li>
              <a className="hover:text-paper" href={`mailto:${site.email}`}>
                {site.email}
              </a>
            </li>
            <li className="text-bone-muted">
              Notfall:{" "}
              <a className="text-bone hover:text-paper" href={site.emergency.href}>
                {site.emergency.display}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-bone/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-5 text-sm text-bone-muted sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>
            © {new Date().getFullYear()} {site.legalName}
          </p>
          <div className="flex gap-5">
            <Link to="/impressum" className="hover:text-bone">
              Impressum
            </Link>
            <Link to="/datenschutz" className="hover:text-bone">
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
