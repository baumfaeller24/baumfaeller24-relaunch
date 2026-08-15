export const site = {
  name: "Baumfäller24",
  legalName: "Baumfäller24 — Alexander Seidler",
  tagline: "Baumfällung Berlin & Brandenburg",
  owner: "Alexander Seidler",
  legalForm: "Einzelunternehmer",
  taxId: "36/532/64100",
  address: {
    street: "Tongrubenweg 13",
    zip: "12559",
    city: "Berlin",
    district: "Müggelheim / Köpenick",
  },
  phone: {
    display: "030 65 94 00 49",
    href: "tel:+493065940049",
  },
  fax: "030 65 94 00 48",
  mobile: {
    display: "0163 96 59 847",
    href: "tel:+491639659847",
    wa: "https://wa.me/491639659847",
  },
  emergency: {
    display: "0170 84 57 017",
    href: "tel:+491708457017",
  },
  email: "info@baumfaeller24.de",
  years: 12,
} as const;

export const nav = [
  { to: "/leistungen", label: "Leistungen" },
  { to: "/preise", label: "Preise" },
  { to: "/baumschutz", label: "Baumschutz" },
  { to: "/referenzen", label: "Referenzen" },
  { to: "/kontakt", label: "Kontakt" },
] as const;

export const services = [
  {
    slug: "seilklettertechnik",
    title: "Seilklettertechnik & Rigging",
    short: "Stückweise Abtragung auf engstem Raum — ohne schweren Maschineneinsatz im Garten.",
    body: "Wenn der Baum nicht frei fallen darf, tragen wir ihn kontrolliert ab. Mit Seilklettertechnik erreichen wir jede Krone, auch zwischen Häusern, über Wintergärten oder in Hinterhöfen. Äste und Stammstücke werden per Rigging abgeseilt — der Rasen bleibt, wo er ist.",
    image: "/images/service-skt.jpg",
    points: [
      "Zugang ohne Hebebühne und ohne Zufahrt",
      "Kontrolliertes Abseilen (Rigging)",
      "Schonung von Fassade, Dach und Beet",
    ],
  },
  {
    slug: "hebebuehne",
    title: "Fällung mit Hebebühne",
    short: "Schnelle, sichere Arbeiten an Straßenbäumen und auf großen Grundstücken.",
    body: "Wo die Zufahrt es zulässt, arbeiten wir mit Hubarbeitsbühne. Das ist oft die effizienteste Methode für Alleebäume, Vorgärten und Gewerbeflächen — weniger Kletterzeit, präziser Schnitt, saubere Baustelle.",
    image: "/images/service-lift.jpg",
    points: [
      "Straßen- und Vorgartenbäume",
      "Schneller als reines Klettern",
      "Abstimmung mit Verkehrssicherung",
    ],
  },
  {
    slug: "rodung",
    title: "Rodung & Baufeldfreimachung",
    short: "Verwilderte Flächen werden in wenigen Tagen bebaubar.",
    body: "Für Bauträger, Hausverwaltungen und Kommunen räumen wir Grundstücke: Fällung, Rodung, Schreddern, Abfuhr. Im Innenstadtbereich mit Spezialgeräten, auf der Fläche mit Bagger und Großschredder. Wo kein Platz ist, mit Seilwinde und Säge.",
    image: "/images/service-clearance.jpg",
    points: [
      "Baufeldfreimachung inkl. Entsorgung",
      "Bagger, Schredder, Seilwinden",
      "Erfahrung mit Strabag, Goldbeck, degewo",
    ],
  },
  {
    slug: "stubben",
    title: "Stubben fräsen",
    short: "Der Stumpf ist weg — der Platz wieder nutzbar.",
    body: "Nach der Fällung bleibt der Stubben. Wir fräsen ihn bodenschonend aus, damit neu gepflanzt, gepflastert oder gemäht werden kann. Die Späne können als Mulch liegen bleiben oder werden abgefahren.",
    image: "/images/service-stump.jpg",
    points: [
      "Bodenschonende Fräsung",
      "Vorbereitung für Neubepflanzung",
      "Optional: Abfuhr der Späne",
    ],
  },
  {
    slug: "garten",
    title: "Gartenpflege & GaLaBau",
    short: "Saison-, Jahres- oder Zweijahresvertrag. Steuerlich absetzbar.",
    body: "Unter Gartendachs übernehmen wir die laufende Pflege: Schnitt, Beete, Rasen, Hecken. Dazu Wege, Zäune, Pflanzungen und Ersatzbäume. Haushalte können die Leistung als haushaltsnahe Dienstleistung steuerlich geltend machen.",
    image: "/images/service-garden.jpg",
    points: [
      "Pflegeverträge für Privat und Verwaltung",
      "Neupflanzung und Großbaumverpflanzung",
      "Wege, Zäune, Mulch, Mutterboden",
    ],
  },
  {
    slug: "notfall",
    title: "Notfällung & Sturmschaden",
    short: "Wenn der Baum nicht warten kann.",
    body: "Verkehrssicherheit geht vor Vogelschutzfrist. Bei Bruch, Pilz, Sturmschaden oder akuter Gefahr rücken wir auch außerhalb der Fällsaison aus. Ein Anruf genügt — wir sichern, fällen, räumen.",
    image: "/images/service-storm.jpg",
    points: [
      "Unwetter- und Bruchholz",
      "Sicherung von Straßen und Dächern",
      "Direkt erreichbar unter 0170 84 57 017",
    ],
  },
] as const;

export const processSteps = [
  {
    n: "01",
    title: "Fotos & Umfang",
    text: "WhatsApp oder Mail: Bilder des Baums, Stammumfang in 1,30 m Höhe, kurze Lagebeschreibung.",
  },
  {
    n: "02",
    title: "Angebot",
    text: "Wir kalkulieren Technik, Zugang und Entsorgung. In der Regel innerhalb eines Werktags.",
  },
  {
    n: "03",
    title: "Genehmigung",
    text: "Falls nötig, unterstützen wir beim Antrag an die Untere Naturschutzbehörde.",
  },
  {
    n: "04",
    title: "Fällung & Abfuhr",
    text: "Wir kommen, arbeiten, räumen. Holz, Häcksel oder Stubben — wie vereinbart.",
  },
] as const;

export const prices = [
  { item: "Entsorgung Selbstlader", unit: "ab 10 m³", price: "19,00 € / m³" },
  { item: "Anlieferung Schüttgüter", unit: "pro m³", price: "11,00 € / m³" },
  { item: "Strauch- und Astwerk", unit: "ab 2 cm Ø", price: "25,00 € / m³" },
  { item: "Stammholz", unit: "pro m³", price: "22,00 € / m³" },
  { item: "Baumstümpfe / Stubben", unit: "pro m³", price: "33,00 € / m³" },
  { item: "Rindenmulch 10–40 mm", unit: "pro m³", price: "58,00 € / m³" },
] as const;

export const clients = [
  "Strabag AG",
  "Goldbeck",
  "degewo",
  "Eurovia",
  "allod Immobilien",
  "Bauwert Investment",
  "Hentschke Bau",
  "FEZ Wuhlheide",
  "Justizvollzugsanstalt Tegel",
  "Liechtensteinische Botschaft",
  "Botschaft von Usbekistan",
  "Die Heilsarmee",
  "Achat Hausverwaltung",
  "BWK Bildungswerk Kreuzberg",
  "Freudenberg",
  "Profi-CONCEPT Bauträger",
  "hit Hanseatische Immobilien Treuhand",
  "Trend Immobilien Schneider",
] as const;

export type District = {
  name: string;
  region: "Berlin" | "Brandenburg";
  authority: string;
  address: string;
  phone: string;
  email?: string;
  note?: string;
};

export const districts: District[] = [
  {
    name: "Charlottenburg-Wilmersdorf",
    region: "Berlin",
    authority: "Umwelt- und Naturschutzamt",
    address: "Rudolf-Mosse-Str. 9, 14197 Berlin",
    phone: "030 9029 18801",
    email: "baumschutz@charlottenburg-wilmersdorf.de",
  },
  {
    name: "Friedrichshain-Kreuzberg",
    region: "Berlin",
    authority: "Ordnungsamt",
    address: "Yorckstraße 4–11, 10965 Berlin",
    phone: "030 90298 8068",
    email: "ordnungsamt@ba-fk.verwalt-berlin.de",
  },
  {
    name: "Lichtenberg",
    region: "Berlin",
    authority: "Naturschutz- und Grünflächenamt",
    address: "Bornitzstr. 92, 10365 Berlin",
    phone: "030 90296 0",
  },
  {
    name: "Marzahn-Hellersdorf",
    region: "Berlin",
    authority: "Natur- und Umweltamt",
    address: "Premnitzer Straße 13, 12681 Berlin",
    phone: "030 90293 2600",
  },
  {
    name: "Mitte",
    region: "Berlin",
    authority: "Tiefbau- und Landschaftsplanungsamt",
    address: "Karl-Marx-Allee 31, 10178 Berlin",
    phone: "030 9018 22748",
  },
  {
    name: "Neukölln",
    region: "Berlin",
    authority: "Tiefbau- und Landschaftsplanungsamt",
    address: "Karl-Marx-Str. 83, 12040 Berlin",
    phone: "030 90239 0",
  },
  {
    name: "Pankow",
    region: "Berlin",
    authority: "Tiefbau- und Landschaftsplanungsamt",
    address: "Prenzlauer Berg, 13062 Berlin",
    phone: "030 90295 8550",
    email: "tiefbauamt@ba-pankow.verwalt-berlin.de",
  },
  {
    name: "Reinickendorf",
    region: "Berlin",
    authority: "Bezirksamt Reinickendorf",
    address: "Eichborndamm 238, 13437 Berlin",
    phone: "030 9029 43157",
  },
  {
    name: "Spandau",
    region: "Berlin",
    authority: "Naturschutz- und Grünflächenamt",
    address: "Carl-Schurz-Straße 2–6, 13597 Berlin",
    phone: "030 90279 0",
  },
  {
    name: "Steglitz-Zehlendorf",
    region: "Berlin",
    authority: "Naturschutz- und Grünflächenamt",
    address: "Fischerhüttenstraße 39, 14163 Berlin",
    phone: "030 90299 0",
    email: "ng@ba-sz.berlin.de",
  },
  {
    name: "Tempelhof-Schöneberg",
    region: "Berlin",
    authority: "Amt für Umwelt und Natur",
    address: "Manteuffelstr. 63, 12103 Berlin",
    phone: "030 90277 3801",
  },
  {
    name: "Treptow-Köpenick",
    region: "Berlin",
    authority: "Amt für Umwelt und Natur",
    address: "Rinkartstr. 13, 12437 Berlin",
    phone: "030 90297 0",
    note: "Unser Standort liegt in diesem Bezirk.",
  },
  {
    name: "Cottbus",
    region: "Brandenburg",
    authority: "Untere Naturschutzbehörde",
    address: "Neumarkt 5, 03046 Cottbus",
    phone: "0355 612 2720",
    email: "Umweltamt@cottbus.de",
    note: "Eigene Baumschutzsatzung.",
  },
  {
    name: "Dahme-Spreewald",
    region: "Brandenburg",
    authority: "Umweltamt",
    address: "Beethovenweg 14, 15907 Lübben",
    phone: "03546 202301",
    email: "umweltamt@dahme-spreewald.de",
    note: "Eigene Baumschutzverordnung.",
  },
  {
    name: "Elbe-Elster",
    region: "Brandenburg",
    authority: "Untere Naturschutzbehörde",
    address: "Nordpromenade 4a, 04916 Herzberg/Elster",
    phone: "03535 46 9306",
    email: "udo.winde@lkee.de",
  },
  {
    name: "Havelland",
    region: "Brandenburg",
    authority: "Untere Naturschutzbehörde",
    address: "Landkreis Havelland",
    phone: "03321 4030",
  },
  {
    name: "Märkisch-Oderland",
    region: "Brandenburg",
    authority: "Untere Naturschutzbehörde",
    address: "Puschkinplatz 12, 15306 Seelow",
    phone: "03346 8507328",
    email: "naturschutz@landkreismol.de",
  },
  {
    name: "Oberhavel",
    region: "Brandenburg",
    authority: "Untere Naturschutzbehörde",
    address: "Adolf-Dechert-Straße 1, 16515 Oranienburg",
    phone: "03301 6013686",
    note: "Keine eigene Kreisverordnung — örtliche Satzungen prüfen.",
  },
  {
    name: "Oder-Spree",
    region: "Brandenburg",
    authority: "Untere Naturschutzbehörde",
    address: "Breitscheidstr. 5, 15848 Beeskow",
    phone: "03366 35 1687",
    note: "Eigene Satzungen u. a. in Beeskow, Erkner, Fürstenwalde, Eisenhüttenstadt.",
  },
  {
    name: "Potsdam-Mittelmark",
    region: "Brandenburg",
    authority: "Fachdienst Naturschutz",
    address: "Niemöllerstr. 1, 14806 Bad Belzig",
    phone: "033841 91 125",
    email: "naturschutz@potsdam-mittelmark.de",
  },
  {
    name: "Uckermark",
    region: "Brandenburg",
    authority: "Untere Naturschutzbehörde",
    address: "Karl-Marx-Str. 1, 17291 Prenzlau",
    phone: "03984 70 1668",
    note: "Keine eigene Kreisverordnung.",
  },
];

export function isFellingSeason(date = new Date()) {
  const month = date.getMonth() + 1;
  return month >= 10 || month <= 2;
}

export function seasonCopy(date = new Date()) {
  if (isFellingSeason(date)) {
    return {
      open: true,
      label: "Fällsaison",
      text: "Seit dem 1. Oktober dürfen Bäume nach Bundesnaturschutzgesetz gefällt werden. Die Vogelschutzfrist beginnt wieder am 1. März.",
    };
  }
  return {
    open: false,
    label: "Vogelschutzfrist",
    text: "Vom 1. März bis 30. September gilt die gesetzliche Schonzeit. Notfällungen und genehmigte Arbeiten führen wir trotzdem aus.",
  };
}

export const faqs = [
  {
    q: "Wann darf ein Baum gefällt werden?",
    a: "Nach § 39 Bundesnaturschutzgesetz grundsätzlich vom 1. Oktober bis Ende Februar. Außerhalb dieser Zeit nur bei Gefahr, Verkehrssicherung oder mit Ausnahmegenehmigung.",
  },
  {
    q: "Brauche ich in Berlin eine Genehmigung?",
    a: "In Berlin gilt die Baumschutzverordnung: einstämmige Bäume ab 80 cm Stammumfang (gemessen in 1,30 m Höhe) sind in der Regel geschützt. Mehrstämmige Bäume schon früher. Wir prüfen das mit Ihnen und helfen beim Antrag.",
  },
  {
    q: "Wie bekomme ich ein Angebot?",
    a: "Am schnellsten per WhatsApp: Fotos des Baums und den Stammumfang. Wir antworten in der Regel am selben Werktag. Ein Vor-Ort-Termin nur, wenn die Lage unklar ist.",
  },
  {
    q: "Was kostet eine Baumfällung?",
    a: "Das hängt von Höhe, Neigung, Zugang, Nachbarbebauung und Entsorgung ab. Deshalb kein Pauschalpreis aus der Ferne. Die Entsorgungspreise sind fest — die Fällung kalkulieren wir individuell.",
  },
  {
    q: "Was passiert mit dem Holz?",
    a: "Abfuhr als Stammholz oder Häcksel, Verbleib als Brennholz, oder Schreddern vor Ort. Container stellen wir auf Anfrage.",
  },
];
