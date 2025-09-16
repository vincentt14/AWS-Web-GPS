import { useEffect, useState } from "react";

import { FiSearch } from "react-icons/fi";
import { MdNavigateBefore } from "react-icons/md";

import CardMobil from "./CardMobil";
import { AktivitasMobil } from "../../../data/tracking_dummy";

type TrackingListProps = {
  onToggleLeftShown: () => void;
};

type DataTrackingDummy = {
  kodeMobil: string;
  tanggal: string;
  status: string;
};

export default function TrackingList({ onToggleLeftShown }: TrackingListProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState<DataTrackingDummy[]>(AktivitasMobil);

  useEffect(() => {
    const filtered = AktivitasMobil.filter((item) => Object.values(item).some((value) => value.toLowerCase().includes(searchTerm.toLowerCase())));
    setFilteredData(filtered);
  }, [searchTerm, AktivitasMobil]);

  return (
    <div className="px-6 py-4 bg-white rounded-xl shadow-md w-full h-full space-y-4">
      <div className="text-center flex justify-between items-center">
        <h1 className="font-bold text-gray-700 text-xl">Aktivitas Mobil</h1>

        <button className="transition hover:text-blue-500 cursor-pointer" onClick={onToggleLeftShown}>
          <MdNavigateBefore className="w-8 h-8" />
        </button>
      </div>

      <div className="relative">
        <span className="absolute left-3 top-2.5 text-gray-400">
          <FiSearch />
        </span>
        <input
          type="text"
          placeholder="Search"
          className="pl-10 pr-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full text-sm"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="w-[350px] h-[calc(90vh-150px)] space-y-3 overflow-y-auto pr-2">
        {filteredData.map((mobil, idx) => {
          const validStatus = mobil.status === "Active" || mobil.status === "Deactive" ? mobil.status : "Deactive";
          return <CardMobil key={idx} kodeMobil={mobil.kodeMobil} tanggal={mobil.tanggal} status={validStatus} />;
        })}
      </div>
    </div>
  );
}
