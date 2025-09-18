import { MdNavigateNext } from "react-icons/md";

import Dropdown from "../../home/Dropdown";
import { AktivitasMobil } from "../../../data/tracking_dummy";

type TrackMobilProps = {
  onToggleRightShown: () => void;
};

const kodeMobilOptions = AktivitasMobil.map((item) => item.kodeMobil);

import { useState } from "react";

export default function TrackMobil({ onToggleRightShown }: TrackMobilProps) {
  const [tanggalAwal, setTanggalAwal] = useState<string>("");
  const [tanggalAkhir, setTanggalAkhir] = useState<string>("");

  const handleSelect = (selectedValue: string) => {
    console.log("Selected:", selectedValue);

    const matchedMobil = AktivitasMobil.find((item) => item.kodeMobil === selectedValue);

    setTanggalAwal(matchedMobil?.tanggal ?? "");
    setTanggalAkhir(matchedMobil?.tanggal ?? "");
  };

  return (
    <div className="h-[calc(100vh-130px)] w-[285px] px-6 py-4 bg-white rounded-xl shadow-md space-y-4">
      <button className="transition hover:text-blue-500 cursor-pointer" onClick={onToggleRightShown}>
        <MdNavigateNext className="w-8 h-8" />
      </button>

      <p className="font-bold text-gray-700 text-xl">Kode Mobil</p>
      <Dropdown placeholder="KODE MOBIL" options={kodeMobilOptions} onSelect={handleSelect} />

      <p className="font-semibold text-gray-700 text-l">Awal:</p>
      <input readOnly disabled placeholder="Pilih Kode Mobil" value={tanggalAwal} className="w-full px-3 py-2 rounded-md border border-gray-300 text-gray-400" />

      <p className="font-semibold text-gray-700 text-l">Akhir:</p>
      <input readOnly disabled placeholder="Pilih Kode Mobil" value={tanggalAkhir} className="w-full px-3 py-2 rounded-md border border-gray-300 text-gray-400" />

      <button type="submit" className="font-semibold px-10 py-3 rounded-xl bg-blue-500 text-white cursor-pointer">
        Lacak
      </button>
    </div>
  );
}
