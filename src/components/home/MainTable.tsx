type MobilSupir = {
  kodeMobil: string;
  noPolisi: string;
  supir: string;
};

type MainTableProps = {
  data: MobilSupir[];
};

export default function MainTable({ data }: MainTableProps){
    return (
    <div className="p-4 rounded-xl shadow-md w-full h-[381px] border border-gray-300 bg-white">
      <h1 className="font-bold text-gray-700 text-xl mb-4">
        LIST MOBIL DAN SUPIR AKTIF
      </h1>

      <div className="overflow-y-auto max-h-[260px] pr-2">
        <table className="w-full text-left border-separate border-spacing-y-2">
          <thead className="sticky top-0 bg-white z-10">
            <tr>
              <th className="px-4 py-2 text-gray-800 font-semibold">Kode Mobil</th>
              <th className="px-4 py-2 text-gray-800 font-semibold">No Polisi</th>
              <th className="px-4 py-2 text-gray-800 font-semibold">Supir</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, i) => (
              <tr key={i} className="bg-[#f9f8ff] rounded-md">
                <td className="px-4 py-3 rounded-l-md">{row.kodeMobil}</td>
                <td className="px-4 py-3">{row.noPolisi}</td>
                <td className="px-4 py-3 rounded-r-md">{row.supir}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}