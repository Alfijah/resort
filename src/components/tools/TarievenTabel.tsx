import { useTranslation } from "react-i18next";

export default function TarievenTable() {
  const { t } = useTranslation();
  type Tarief = {
  personen: string;
  prijs: string;
};

  const tarieven = t("reserverenPage.tarieven", { returnObjects: true }) as Tarief[];

  return (
    <table className="w-full border-collapse text-left body-text">
      <tbody>
        {tarieven.map((row: any, i: number) => (
          <tr key={i} className="border-b border-gray-300">
            <td className="py-3">{row.personen}</td>
            <td className="py-3 font-semibold">{row.prijs}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
