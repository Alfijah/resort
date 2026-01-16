import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "../../animations/Varianten";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa6";
import { useTranslation } from "react-i18next";

type NoteKey = "oneCabana" | "twoCabanas" | "threeCabanas";

type Result = {
  cabanas: number;
  split: number[];
  noteKey: NoteKey;

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

  const pricePerPersonUsd = getGroupPricePerPersonUsd(adults6plus);
  const totalUsd =
    pricePerPersonUsd == null ? null : adults6plus * pricePerPersonUsd;

  // 1–7 => 1 cabana
  if (adults6plus <= 7) {
    return {
      cabanas: 1,
      split: [adults6plus],
      noteKey: "oneCabana",
      pricePerPersonUsd,
      totalAdults: adults6plus,
      totalUsd,
    };
  }

  // 8–14 => 2 cabanas
  if (adults6plus <= 14) {
    const a = Math.ceil(adults6plus / 2);
    const b = adults6plus - a;

    return {
      cabanas: 2,
      split: [a, b].sort((x, y) => y - x),
      noteKey: "twoCabanas",
      pricePerPersonUsd,
      totalAdults: adults6plus,
      totalUsd,
    };
  }

  // 15+ => 3 cabanas
  const base = Math.floor(adults6plus / 3);
  const rest = adults6plus % 3;
  const split = [base, base, base].map((v, i) => v + (i < rest ? 1 : 0));

  return {
    cabanas: 3,
    split: split.sort((x, y) => y - x),
    noteKey: "threeCabanas",
    pricePerPersonUsd,
    totalAdults: adults6plus,
    totalUsd,
  };
}

function formatUsd(n: number) {
  return `USD ${Math.round(n)}`;
}

export default function CabanaCalculator() {
  const { t } = useTranslation();
  const [adults6plus, setAdults6plus] = useState<number>(5);

  const result = useMemo(() => calcCabanaPlan(adults6plus), [adults6plus]);

  return (
    <section className="w-full">
      {/* Inputs */}
      <motion.div variants={fadeInUp} className="flex flex-col mt-4 gap-4">
        <label className="max-w-screen-sm flex flex-wrap items-center justify-between body-text text-left gap-2">
          <span>
            {t("reserverenPage.calculator.labelAdults")} <br />
            {t("reserverenPage.calculator.labelAdultsHint")}
          </span>

          <div className="flex items-center justify-start border border-gray-300">
            <button
              type="button"
              onClick={() => setAdults6plus((g) => Math.max(1, g - 1))}
              className="px-2 hover:bg-gray-100"
              aria-label="minus"
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
              aria-label="plus"
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
            title={t("reserverenPage.calculator.cards.card1Title")}
            subtitle={t("reserverenPage.calculator.cards.card1Subtitle")}
          />
        </motion.div>

        <motion.div variants={fadeInUp}>
          <CabanaRuleCard
            active={!!result && adults6plus >= 8 && adults6plus <= 14}
            title={t("reserverenPage.calculator.cards.card2Title")}
            subtitle={t("reserverenPage.calculator.cards.card2Subtitle")}
          />
        </motion.div>

        <motion.div variants={fadeInUp}>
          <CabanaRuleCard
            active={!!result && adults6plus >= 15}
            title={t("reserverenPage.calculator.cards.card3Title")}
            subtitle={t("reserverenPage.calculator.cards.card3Subtitle")}
          />
        </motion.div>
      </div>

      {/* Result */}
      {result && (
        <div className="mt-8 border border-gray-300 p-6 body-text text-left">
          <motion.div variants={fadeInUp} className="flex flex-col sm:justify-between">
            <p className="tracking-widest">
              {t("reserverenPage.calculator.result.adviceLabel")}
            </p>

            <p className="font-semibold">
              {t("reserverenPage.calculator.result.adviceLine", {
                cabanas: result.cabanas,
                plural: result.cabanas > 1 ? "s" : "",
                people: result.totalAdults,
              })}
            </p>

            <p className="mt-6 tracking-widest text-gray-500">
              {t("reserverenPage.calculator.result.importantLabel")}
            </p>
            <p className="mt-1">
              {t(`reserverenPage.calculator.notes.${result.noteKey}`)}
            </p>
          </motion.div>

          {/* Indicatie tarief */}
          <motion.div variants={fadeInUp} className="mt-6 border-t border-gray-300 pt-4">
            <p className="tracking-widest text-gray-500">
              {t("reserverenPage.calculator.result.priceBlockTitle")}
            </p>

            {result.pricePerPersonUsd == null ? (
              <p className="mt-2 font-semibold">
                {t("reserverenPage.calculator.result.priceOnRequest")}
              </p>
            ) : (
              <>
                <p className="mt-1 font-semibold">
                  {t("reserverenPage.calculator.result.pricePerPerson")}{" "}
                  <span>{formatUsd(result.pricePerPersonUsd)}</span>
                </p>

                <p className="font-semibold">
                  {t("reserverenPage.calculator.result.total")}{" "}
                  <span>{formatUsd(result.totalUsd as number)}</span>
                </p>

                <p className="mt-6 tracking-widest text-gray-500">
                  {t("reserverenPage.calculator.result.importantLabel")}
                </p>
                <p className="mt-1 text-gray-600">
                  {t("reserverenPage.calculator.result.priceImportantText")}
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
  const { t } = useTranslation();

  return (
    <div
      className={`border p-5 body-text text-left transition min-h-30 md:min-h-38 ${
        active ? "border-textGreen bg-sky-900/5" : "border-gray-300 bg-white"
      }`}
    >
      <p className="body-text tracking-widest text-gray-500">{subtitle}</p>
      <p className="mt-2 body-text font-semibold text-gray-900">{title}</p>

      {active && (
        <p className="mt-2 body-text textGreen font-semibold">
          {t("reserverenPage.calculator.cards.activeLabel")}
        </p>
      )}
    </div>
  );
}
