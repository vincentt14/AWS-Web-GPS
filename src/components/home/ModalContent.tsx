import { useEffect, useState } from "react";

import { IoCloseOutline } from "react-icons/io5";
import { FiSearch } from "react-icons/fi";

import SemuaTable from "./ModalTables/SemuaTable";

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

type ModalContentProps = {
  title: string;
  content: string;
  data: SemuaData[];
  onClose: () => void;
};

export default function ModalContent({ title, content, data, onClose }: ModalContentProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState<SemuaData[]>(data);

  useEffect(() => {
    const filtered = data.filter((item) => Object.values(item).some((value) => value.toLowerCase().includes(searchTerm.toLowerCase())));
    setFilteredData(filtered);
  }, [searchTerm, data]);

  return (
    <>
      <header className="py-4 text-center flex justify-between items-center">
        <h1 className="font-bold text-gray-700 text-xl mb-4">{title}</h1>

        <div className="flex items-center space-x-6">
          <div className="relative">
            <span className="absolute left-3 top-2.5 text-gray-400">
              <FiSearch />
            </span>
            <input
              type="text"
              placeholder="Search"
              className="pl-10 pr-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 w-[250px] text-sm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <p className="text-gray-700 hover:text-blue-500 text-4xl cursor-pointer" onClick={onClose}>
            <IoCloseOutline />
          </p>
        </div>
      </header>
      <main>{content === "Semua" ? <SemuaTable data={filteredData} /> : null}</main>
    </>
  );
}
