import { HeadContent, Link, Outlet, Scripts, createRootRoute } from "@tanstack/react-router";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import { SiteShell } from "@/components/layout/SiteShell";
import { AuthProvider } from "@/lib/auth/provider";
import appCss from "../styles.css?url";

const APP_NAME = "Baumfäller24";
const host = import.meta.env.VITE_PUBLIC_HOSTNAME;
const ogImage = host ? `https://${host}/og.jpg` : undefined;

function NotFound() {
  return (
    <section className="mx-auto max-w-xl px-4 pb-24 pt-32 text-center">
      <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted">404</p>
      <h1 className="mt-3 font-display text-4xl font-medium">Diese Seite gibt es nicht.</h1>
      <p className="mt-4 text-muted">Zurück zur Startseite oder direkt zum Angebot.</p>
      <div className="mt-8 flex justify-center gap-3">
        <Link to="/" className="inline-flex h-11 items-center rounded-md bg-ink px-4 text-paper">
          Startseite
        </Link>
        <Link
          to="/kontakt"
          className="inline-flex h-11 items-center rounded-md px-4 shadow-[var(--shadow-border)]"
        >
          Kontakt
        </Link>
      </div>
    </section>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Baumfäller24 — Baumfällung Berlin & Brandenburg" },
      {
        name: "description",
        content:
          "Fachbetrieb für Baumfällung, Seilklettertechnik, Rodung und Stubbenfräsen in Berlin und Brandenburg. Angebot in 24 Stunden. Inhaber Alexander Seidler.",
      },
      { name: "apple-mobile-web-app-title", content: APP_NAME },
      { name: "theme-color", content: "#121410" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "Baumfäller24 — Baumfällung Berlin & Brandenburg" },
      {
        property: "og:description",
        content:
          "Seilklettertechnik, Hebebühne, Rodung. Seit zwölf Jahren für Privatgrundstücke, Verwaltungen und Baustellen.",
      },
      ...(ogImage
        ? [
            { property: "og:image", content: ogImage },
            { property: "og:image:width", content: "1200" },
            { property: "og:image:height", content: "630" },
          ]
        : []),
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "stylesheet", href: appCss },
      { rel: "manifest", href: "/__grok/manifest.webmanifest" },
      { rel: "apple-touch-icon", href: "/__grok/icon-180.png" },
    ],
  }),
  notFoundComponent: NotFound,
  component: () => (
    <html lang="de" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body>
        <PreviewHostBridge />
        <AuthProvider>
          <SiteShell>
            <Outlet />
          </SiteShell>
        </AuthProvider>
        <Scripts />
      </body>
    </html>
  ),
});
