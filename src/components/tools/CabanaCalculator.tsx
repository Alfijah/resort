import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "../../animations/Varianten";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa6";

type Result = {
    cabanas: number;
    split: number[];
    note: string;

    pricePerPersonUsd: number | null;
    totalAdults: number;
    totalUsd: number | null;
};

function getGroupPricePerPersonUsd(groupSize: number): number | null {
    if (groupSize >= 5) return 95;

    const map: Record<number, number> = {
        4: 110,
        3: 135,
        2: 175,
        1: 295,
    };

    return map[groupSize] ?? null;
}

function calcCabanaPlan(adults6plus: number): Result | null {
    if (!Number.isFinite(adults6plus) || adults6plus <= 0) return null;

    // Cabana verdeling blijft gelijk aan regels
    if (adults6plus <= 7) {
        const pricePerPersonUsd = getGroupPricePerPersonUsd(adults6plus);
        const totalUsd =
            pricePerPersonUsd == null ? null : adults6plus * pricePerPersonUsd;

        return {
            cabanas: 1,
            split: [adults6plus],
            note: "Tot en met 7 personen reserveren we 1 cabana.",
            pricePerPersonUsd,
            totalAdults: adults6plus,
            totalUsd,
        };
    }

    if (adults6plus <= 14) {
        const a = Math.ceil(adults6plus / 2);
        const b = adults6plus - a;

        const pricePerPersonUsd = getGroupPricePerPersonUsd(adults6plus);
        const totalUsd =
            pricePerPersonUsd == null ? null : adults6plus * pricePerPersonUsd;

        return {
            cabanas: 2,
            split: [a, b].sort((x, y) => y - x),
            note: "Voor deze groep reserveren we twee cabanas dicht bij elkaar. Beide cabanas staan exclusief tot jullie beschikking, zodat jullie zelf bepalen hoe jullie de ruimte gebruiken — met behoud van rust en privacy.",
            pricePerPersonUsd,
            totalAdults: adults6plus,
            totalUsd,
        };
    }

    // 15+ -> 3 cabanas (of afhuur)
    const base = Math.floor(adults6plus / 3);
    const rest = adults6plus % 3;
    const split = [base, base, base].map((v, i) => v + (i < rest ? 1 : 0));

    const pricePerPersonUsd = getGroupPricePerPersonUsd(adults6plus);
    const totalUsd =
        pricePerPersonUsd == null ? null : adults6plus * pricePerPersonUsd;

    return {
        cabanas: 3,
        split: split.sort((x, y) => y - x),
        note: "Vanaf 15 personen reserveren we 3 cabanas. Deze cabanas staan exclusief tot jullie beschikking, zodat jullie zelf bepalen hoe jullie de ruimte gebruiken — met behoud van rust en privacy.",
        pricePerPersonUsd,
        totalAdults: adults6plus,
        totalUsd,
    };
}

function formatUsd(n: number) {
    return `USD ${Math.round(n)}`;
}

export default function CabanaCalculator() {
    const [adults6plus, setAdults6plus] = useState<number>(5);

    const result = useMemo(() => calcCabanaPlan(adults6plus), [adults6plus]);

    return (
        <section className="w-full">
            {/* Inputs */}
            <motion.div variants={fadeInUp} className="flex flex-col mt-4 gap-4">
                <label className="max-w-screen-sm flex flex-wrap items-center justify-between body-text text-left gap-2">
                    Aantal personen <br></br>(6 jaar en ouder)
                    <div className="flex items-center justify-start border border-gray-300">
                        <button
                            type="button"
                            onClick={() => setAdults6plus((g) => Math.max(1, g - 1))}
                            className="px-2 hover:bg-gray-100"
                        >
                            <FaMinus />
                        </button>

                        <input
                            type="number"
                            min={1}
                            max={20}
                            value={adults6plus}
                            readOnly
                            inputMode="none"
                            className="w-16 px-4 py-2 body-text font-semibold pointer-events-none select-none"
                        />

                        <button
                            type="button"
                            onClick={() => setAdults6plus((g) => Math.min(20, g + 1))}
                            className="px-2 hover:bg-gray-100"
                        >
                            <FaPlus />
                        </button>
                    </div>
                </label>
            </motion.div>

            {/* Cards */}
            <div className="body-text mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
                <motion.div variants={fadeInUp}>
                    <CabanaRuleCard
                        active={!!result && adults6plus <= 7}
                        title="1 cabana"
                        subtitle="1 t/m 7 personen" />
                </motion.div>

                <motion.div variants={fadeInUp}>
                    <CabanaRuleCard
                        active={!!result && adults6plus >= 8 && adults6plus <= 14}
                        title="2 cabanas"
                        subtitle="8 t/m 14 personen" />
                </motion.div>

                <motion.div variants={fadeInUp}>
                    <CabanaRuleCard
                        active={!!result && adults6plus >= 15}
                        title="3 cabanas"
                        subtitle="15+ personen" />
                </motion.div>
            </div>

            {/* Result */}
            {result && (
                <div className="mt-8 border border-gray-300 p-6 body-text text-left">
                    <motion.div variants={fadeInUp} className="flex flex-col sm:justify-between">
                        <p className="tracking-widest">Advies:</p>
                        <p className="font-semibold">
                            {result.cabanas} cabana{result.cabanas > 1 ? "s" : ""} voor {result.totalAdults} personen
                        </p>
                        <p className="mt-6 tracking-widest text-gray-500">Belangrijk:</p>
                        <p className="mt-1">{result.note}</p>
                    </motion.div>

                    {/* Indicatie tarief nu alleen op groepsgrootte */}
                    <motion.div variants={fadeInUp} className="mt-6 border-t border-gray-300 pt-4">
                        <p className="tracking-widest text-gray-500">Indicatie tarief</p>

                        {result.pricePerPersonUsd == null ? (
                            <p className="mt-2 font-semibold">Tarief: op aanvraag</p>
                        ) : (
                            <>
                                <p className="mt-1 font-semibold">
                                    Tarief per persoon:{" "}
                                    <span>{formatUsd(result.pricePerPersonUsd)}</span>
                                </p>
                                <p className="font-semibold">
                                    Totaal:{" "}
                                    <span >
                                        {formatUsd(result.totalUsd as number)}
                                    </span>
                                </p>
                                <p className="mt-6 tracking-widest text-gray-500">Belangrijk:</p>
                                <p className="mt-1 text-gray-600">
                                    Het tarief is gebaseerd op de totale groepsgrootte en blijft gelijk, ook bij toewijzing van meerdere cabanas.
                                </p>
                            </>
                        )}

                    </motion.div>
                </div>
            )}
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
            className={`border p-5 body-text text-left transition ${active ? "border-textGreen bg-sky-900/5" : "border-gray-300 bg-white"
                }`}
        >
            <p className="body-text tracking-widest text-gray-500">{subtitle}</p>
            <p className="mt-2 body-text font-semibold text-gray-900">{title}</p>
            {active && (
                <p className="mt-2 body-text textGreen font-semibold">✓ Ons advies</p>
            )}
        </div>
    );
}
