type SemuaData = {
  kodeMobil: string;
  noPolisi: string;
  supir: string;
  noSj: string;
  updateTerakhir: string;
  spd: string;
  sin: string;
  vol: string;
  sat: string;
  slp: string;
};

type SemuaTableProps = {
  data: SemuaData[];
};

export default function SemuaTable({ data }: SemuaTableProps) {
  return (
    <div className="overflow-y-auto max-h-[260px] pr-2">
      <table className="w-full text-left border-separate border-spacing-y-2">
        <thead className="sticky top-0 bg-white z-10">
          <tr>
            <th className="px-4 py-2 text-gray-800 font-semibold">Kode Mobil</th>
            <th className="px-4 py-2 text-gray-800 font-semibold">No Polisi</th>
            <th className="px-4 py-2 text-gray-800 font-semibold">Supir</th>
            <th className="px-4 py-2 text-gray-800 font-semibold">Nomor SJ</th>
            <th className="px-4 py-2 text-gray-800 font-semibold">Update Terakhir</th>
            <th className="px-4 py-2 text-gray-800 font-semibold">SPD</th>
            <th className="px-4 py-2 text-gray-800 font-semibold">SIN</th>
            <th className="px-4 py-2 text-gray-800 font-semibold">VOL</th>
            <th className="px-4 py-2 text-gray-800 font-semibold">SAT</th>
            <th className="px-4 py-2 text-gray-800 font-semibold">SLP</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} className="bg-[#f9f8ff] rounded-md">
              <td className="px-4 py-3 rounded-l-md">{row.kodeMobil}</td>
              <td className="px-4 py-3">{row.noPolisi}</td>
              <td className="px-4 py-3 rounded-r-md">{row.supir}</td>
              <td className="px-4 py-3 rounded-r-md">{row.noSj}</td>
              <td className="px-4 py-3 rounded-r-md">{row.updateTerakhir}</td>
              <td className="px-4 py-3 rounded-r-md">{row.spd}</td>
              <td className="px-4 py-3 rounded-r-md">{row.sin}</td>
              <td className="px-4 py-3 rounded-r-md">{row.vol}</td>
              <td className="px-4 py-3 rounded-r-md">{row.sat}</td>
              <td className="px-4 py-3 rounded-r-md">{row.slp}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
