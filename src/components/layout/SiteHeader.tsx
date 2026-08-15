import * as Dialog from "@radix-ui/react-dialog";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Logo } from "@/components/brand/Logo";
import { Button } from "@/components/ui/button";
import { nav, site } from "@/lib/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const inverse = isHome && !scrolled;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,color] duration-200",
        inverse
          ? "bg-transparent text-bone"
          : "bg-paper text-ink shadow-[0_1px_0_0_var(--color-line)]",
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:h-[4.25rem] sm:px-6">
        <Link to="/" aria-label="Baumfäller24 Startseite">
          <Logo inverse={inverse} />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Hauptnavigation">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={cn(
                "text-[0.9375rem] font-medium transition-opacity duration-150 hover:opacity-70",
                pathname === item.to && "underline decoration-from-font underline-offset-8",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={site.phone.href}
            className="inline-flex h-11 items-center gap-2 text-sm font-medium"
          >
            <Phone className="size-4" />
            {site.phone.display}
          </a>
          <Button asChild size="sm" variant={inverse ? "inverse" : "primary"}>
            <Link to="/kontakt">Angebot anfordern</Link>
          </Button>
        </div>

        <Dialog.Root open={open} onOpenChange={setOpen}>
          <Dialog.Trigger asChild>
            <button
              type="button"
              className={cn(
                "inline-flex size-11 items-center justify-center rounded-md lg:hidden",
                inverse ? "text-bone" : "text-ink",
              )}
              aria-label="Menü öffnen"
            >
              <Menu className="size-6" />
            </button>
          </Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 z-50 bg-bark/50" />
            <Dialog.Content className="fixed inset-y-0 right-0 z-50 flex w-[min(100%,22rem)] flex-col bg-paper p-6 text-ink shadow-[var(--shadow-border)] outline-none">
              <div className="flex items-center justify-between">
                <Dialog.Title className="font-display text-xl">Menü</Dialog.Title>
                <Dialog.Close asChild>
                  <button
                    type="button"
                    className="inline-flex size-11 items-center justify-center rounded-md"
                    aria-label="Menü schließen"
                  >
                    <X className="size-5" />
                  </button>
                </Dialog.Close>
              </div>
              <nav className="mt-8 flex flex-col gap-1" aria-label="Mobilnavigation">
                {nav.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    className="rounded-md px-2 py-3 text-lg font-medium hover:bg-cream"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
              <div className="mt-auto flex flex-col gap-2">
                <Button asChild>
                  <Link to="/kontakt">Angebot anfordern</Link>
                </Button>
                <Button asChild variant="outline">
                  <a href={site.phone.href}>Anrufen</a>
                </Button>
              </div>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </div>
    </header>
  );
}
