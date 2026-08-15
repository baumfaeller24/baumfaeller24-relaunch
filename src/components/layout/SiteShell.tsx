import type { ReactNode } from "react";
import { MobileBar } from "./MobileBar";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-svh flex-col">
      <SiteHeader />
      <main className="flex-1 pb-20 lg:pb-0">{children}</main>
      <SiteFooter />
      <MobileBar />
    </div>
  );
}
