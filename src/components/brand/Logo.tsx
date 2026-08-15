import { cn } from "@/lib/utils";

export function Logo({
  className,
  inverse = false,
}: {
  className?: string;
  inverse?: boolean;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2.5",
        inverse ? "text-bone" : "text-ink",
        className,
      )}
    >
      <svg
        viewBox="0 0 36 36"
        className="size-8 shrink-0"
        aria-hidden="true"
      >
        <rect
          width="36"
          height="36"
          rx="8"
          className={inverse ? "fill-bone/10" : "fill-ink"}
        />
        <path
          d="M18 7.5c-2.2 3.4-5.6 5.8-6.8 10.2 1.8-.4 3.4-1.1 4.8-2.1-.2 2.6-1.3 5-2.6 7.2 2.2-.6 4.1-1.8 5.4-3.5.9 2.4 1.4 5 1.4 7.7h1.6c0-2.8.5-5.4 1.4-7.7 1.3 1.7 3.2 2.9 5.4 3.5-1.3-2.2-2.4-4.6-2.6-7.2 1.4 1 3 1.7 4.8 2.1C23.6 13.3 20.2 10.9 18 7.5Z"
          className={inverse ? "fill-bone" : "fill-paper"}
        />
        <rect
          x="16.6"
          y="24.5"
          width="2.8"
          height="5"
          rx="0.6"
          className={inverse ? "fill-bone" : "fill-paper"}
        />
      </svg>
      <span className="leading-none">
        <span className="block font-display text-[1.15rem] font-medium tracking-tight">
          Baumfäller24
        </span>
        <span
          className={cn(
            "mt-0.5 block text-[0.68rem] font-medium uppercase tracking-[0.14em]",
            inverse ? "text-bone-muted" : "text-muted",
          )}
        >
          Berlin · Brandenburg
        </span>
      </span>
    </span>
  );
}
