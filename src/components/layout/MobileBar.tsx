import { MessageCircle, Phone } from "lucide-react";
import { site } from "@/lib/site";

export function MobileBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-paper/96 px-3 py-2 backdrop-blur-md lg:hidden pb-[max(0.5rem,env(safe-area-inset-bottom))]">
      <div className="mx-auto grid max-w-lg grid-cols-2 gap-2">
        <a
          href={site.phone.href}
          className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-ink text-paper"
        >
          <Phone className="size-4" />
          Anrufen
        </a>
        <a
          href={site.mobile.wa}
          className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-moss text-paper"
        >
          <MessageCircle className="size-4" />
          WhatsApp
        </a>
      </div>
    </div>
  );
}
