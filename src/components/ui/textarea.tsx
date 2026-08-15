import * as React from "react";
import { cn } from "@/lib/utils";

export const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ className, ...props }, ref) => (
  <textarea
    className={cn(
      "flex min-h-32 w-full rounded-md border border-line bg-paper px-3.5 py-3 text-[0.9375rem] text-ink placeholder:text-muted/80 outline-none transition-[box-shadow,border-color] duration-150 focus-visible:border-moss/50 focus-visible:ring-2 focus-visible:ring-moss/25",
      className,
    )}
    ref={ref}
    {...props}
  />
));
Textarea.displayName = "Textarea";
