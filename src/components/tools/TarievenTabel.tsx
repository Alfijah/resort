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
      <thead>
        <tr className="border-b border-gray-400">
          <th className="py-3 font-medium">
            {t("reserverenPage.tarievenTable.persons")}
          </th>
          <th className="py-3 font-medium">
            {t("reserverenPage.tarievenTable.price")}
          </th>
        </tr>
      </thead>
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
