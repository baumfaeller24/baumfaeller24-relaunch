import { useMemo, useState, type ChangeEvent, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { site } from "@/lib/site";

const jobs = [
  "Baumfällung / Abtragung",
  "Stubben fräsen",
  "Rodung / Baufeldfreimachung",
  "Sturmschaden / Notfall",
  "Gartenpflege",
  "Sonstiges",
];

type Fields = {
  name: string;
  phone: string;
  email: string;
  place: string;
  job: string;
  girth: string;
  message: string;
};

const empty: Fields = {
  name: "",
  phone: "",
  email: "",
  place: "",
  job: jobs[0],
  girth: "",
  message: "",
};

function compose(f: Fields) {
  return [
    `Anfrage Baumfäller24`,
    ``,
    `Name: ${f.name}`,
    `Telefon: ${f.phone}`,
    `E-Mail: ${f.email}`,
    `Ort: ${f.place}`,
    `Leistung: ${f.job}`,
    `Stammumfang: ${f.girth || "—"}`,
    ``,
    f.message || "Bitte um Rückruf / Angebot.",
  ].join("\n");
}

export function QuoteForm({ compact = false }: { compact?: boolean }) {
  const [fields, setFields] = useState<Fields>(empty);
  const text = useMemo(() => compose(fields), [fields]);

  const set =
    (key: keyof Fields) =>
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setFields((prev) => ({ ...prev, [key]: e.target.value }));

  const wa = `${site.mobile.wa}?text=${encodeURIComponent(text)}`;
  const mail = `mailto:${site.email}?subject=${encodeURIComponent("Anfrage Baumfäller24")}&body=${encodeURIComponent(text)}`;

  return (
    <form
      className="grid gap-4"
      onSubmit={(e) => {
        e.preventDefault();
        window.open(wa, "_blank", "noopener,noreferrer");
      }}
    >
      <div className={compact ? "grid gap-4" : "grid gap-4 sm:grid-cols-2"}>
        <Field label="Name" htmlFor="q-name">
          <Input id="q-name" required value={fields.name} onChange={set("name")} autoComplete="name" />
        </Field>
        <Field label="Telefon" htmlFor="q-phone">
          <Input
            id="q-phone"
            required
            type="tel"
            value={fields.phone}
            onChange={set("phone")}
            autoComplete="tel"
          />
        </Field>
      </div>
      <div className={compact ? "grid gap-4" : "grid gap-4 sm:grid-cols-2"}>
        <Field label="E-Mail" htmlFor="q-email">
          <Input
            id="q-email"
            type="email"
            value={fields.email}
            onChange={set("email")}
            autoComplete="email"
          />
        </Field>
        <Field label="Ort / Bezirk" htmlFor="q-place">
          <Input
            id="q-place"
            required
            value={fields.place}
            onChange={set("place")}
            placeholder="z. B. Köpenick"
          />
        </Field>
      </div>
      <div className={compact ? "grid gap-4" : "grid gap-4 sm:grid-cols-2"}>
        <Field label="Leistung" htmlFor="q-job">
          <select
            id="q-job"
            value={fields.job}
            onChange={set("job")}
            className="flex h-11 w-full rounded-md border border-line bg-paper px-3.5 text-[0.9375rem] text-ink outline-none focus-visible:border-moss/50 focus-visible:ring-2 focus-visible:ring-moss/25"
          >
            {jobs.map((j) => (
              <option key={j}>{j}</option>
            ))}
          </select>
        </Field>
        <Field label="Stammumfang in 1,30 m" htmlFor="q-girth">
          <Input
            id="q-girth"
            value={fields.girth}
            onChange={set("girth")}
            placeholder="z. B. 95 cm"
          />
        </Field>
      </div>
      <Field label="Kurzbeschreibung" htmlFor="q-msg">
        <Textarea
          id="q-msg"
          value={fields.message}
          onChange={set("message")}
          placeholder="Art des Baums, Zugang, Nachbarbebauung…"
        />
      </Field>
      <p className="text-sm text-muted">
        Fotos schicken Sie am besten direkt per WhatsApp. So können wir in der Regel am selben Werktag kalkulieren.
      </p>
      <div className="flex flex-col gap-2 sm:flex-row">
        <Button type="submit" className="sm:flex-1">
          Per WhatsApp senden
        </Button>
        <Button type="button" variant="outline" className="sm:flex-1" asChild>
          <a href={mail}>Per E-Mail senden</a>
        </Button>
      </div>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: ReactNode;
}) {
  return (
    <div className="grid gap-1.5">
      <Label htmlFor={htmlFor}>{label}</Label>
      {children}
    </div>
  );
}
