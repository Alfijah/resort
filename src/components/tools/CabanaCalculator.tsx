import { useMemo, useState } from "react";

type Result = {
    cabanas: number;
    split: number[]; // personen per cabana
    note: string;
};

function calcCabanaPlan(guests: number): Result | null {
    if (!Number.isFinite(guests) || guests <= 0) return null;

    // Regels volgens jouw input:
    // 1-7 => 1 cabana
    // 8-14 => 2 cabanas, verdelen over 2
    // 15+ => 3 cabanas (of afhuur) - we tonen verdeling over 3 als advies
    if (guests <= 7) {
        return {
            cabanas: 1,
            split: [guests],
            note: "Tot en met 7 personen reserveren we 1 cabana.",
        };
    }

    if (guests <= 14) {
        const a = Math.ceil(guests / 2);
        const b = guests - a;
        return {
            cabanas: 2,
            split: [a, b].sort((x, y) => y - x),
            note: "We reserveren 2 cabanas (dichtbij elkaar) voor rust en ruimte.",
        };
    }

    // 15+ -> 3 cabanas (of afhuur)
    // Verdeling zo gelijk mogelijk:
    const base = Math.floor(guests / 3);
    const rest = guests % 3;
    const split = [base, base, base].map((v, i) => v + (i < rest ? 1 : 0));

    return {
        cabanas: 3,
        split: split.sort((x, y) => y - x),
        note: "Vanaf 15 personen reserveren we 3 cabanas (of in overleg exclusieve afhuur) om de rust te bewaken.",
    };
}

export default function CabanaCalculator() {
    const [guests, setGuests] = useState<number>(5);

    const result = useMemo(() => calcCabanaPlan(guests), [guests]);

    const splitText =
        result?.split.length
            ? result.split.join(" + ") + ` (${guests} totaal)`
            : "";

    // const whatsappNumber = "5978592337";
    // const waMessage = result
    //     ? `Hoi! We zijn met ${guests} personen. Volgens de website zijn dat ${result.cabanas} cabana(s), verdeling: ${result.split.join(
    //         " + "
    //     )}. Kunnen jullie de beschikbaarheid checken?`
    //     : "Hoi! Kunnen jullie de beschikbaarheid checken?";

    // const waLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    //     waMessage
    // )}`;

    return (
        <section className="w-full">
            {/* <div className="text-center">
        <h2 className="heading-primary text-left">Bereken je cabanas</h2>
        <p className="body-text mt-2">
          Vul het aantal gasten in. We tonen direct hoeveel cabanas we adviseren
          én hoe we de groep verdelen voor rust en privacy.
        </p>
      </div> */}

            {/* Input */}
            <div className="flex flex-col mt-4 sm:flex-row gap-4">
                <label className="flex items-center body-text text-left gap-2">
                    Aantal personen
                    <button
                        type="button"
                        onClick={() => setGuests((g) => Math.max(1, g - 1))}
                        className="ml-4 h-10 w-10 border border-gray-300 text-lg hover:bg-gray-100"
                    >
                        −
                    </button>

                    <input
                        type="number"
                        min={1}
                        max={20}
                        value={guests}
                        onChange={(e) => setGuests(Number(e.target.value))}
                        className="w-20 border border-gray-300 px-4 py-2 text-base focus:outline-none focus:ring-2 focus:ring-sky-900"
                    />

                    <button
                        type="button"
                        onClick={() => setGuests((g) => Math.min(20, g + 1))}
                        className="h-10 w-10 border border-gray-300 text-lg hover:bg-gray-100"
                    >
                        +
                    </button>
                </label>

                {/* <a
          href={waLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 sm:mt-8 inline-flex items-center justify-center rounded-md bg-sky-900 px-5 py-3 text-xs uppercase tracking-widest text-white hover:bg-red-400 transition"
        >
          Vraag beschikbaarheid
        </a> */}
            </div>

            {/* Result */}
            {result && (
                <div className="mt-8 border border-gray-200 bg-white/70 p-6 body-text text-left">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                        <div>
                            <p className="tracking-widest text-gray-500">
                                Advies
                            </p>
                            <p className="font-semibold textGreen">
                                {result.cabanas} cabana{result.cabanas > 1 ? "s" : ""}
                            </p>
                        </div>

                        <div className="sm:text-right">
                            <p className="tracking-widest text-gray-500">
                                Verdeling personen per cabana
                            </p>
                            <p className="font-semibold text-gray-900">
                                {splitText}
                            </p>
                        </div>
                    </div>

                    <p className="mt-4">{result.note}</p>
                </div>
            )}

            {/* Cards (optioneel maar UX-top) */}
            <div className="body-text mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
                <CabanaRuleCard
                    active={!!result && guests <= 7}
                    title="1 cabana"
                    subtitle="1 t/m 7 personen"
                />
                <CabanaRuleCard
                    active={!!result && guests >= 8 && guests <= 14}
                    title="2 cabanas"
                    subtitle="8 t/m 14 personen"
                />
                <CabanaRuleCard
                    active={!!result && guests >= 15}
                    title="3 cabanas"
                    subtitle="15+ personen"
                />
            </div>

            <p className="mt-6 body-text text-gray-500">
                *Groepen worden verdeeld om de stilte, ruimte en beleving van het resort
                te behouden.
            </p>
        </section>
    );
}

function CabanaRuleCard({
    title,
    subtitle,
    active,
}: {
    title: string;
    subtitle: string;
    active?: boolean;
}) {
    return (
        <div
            className={`border p-5 body-text text-left transition ${active
                ? "border-textGreen bg-sky-900/5"
                : "border-gray-200 bg-white"
                }`}
        >
            <p className="body-text tracking-widest text-gray-500">
                {subtitle}
            </p>
            <p className="mt-2 body-text font-semibold text-gray-900">{title}</p>
            {active && (
                <p className="mt-2 body-text textGreen font-semibold">
                    ✓ Geselecteerd
                </p>
            )}
        </div>
    );
}
