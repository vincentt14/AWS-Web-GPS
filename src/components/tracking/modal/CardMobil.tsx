import { FaTruck } from "react-icons/fa6";

type CardMobilProps = {
  kodeMobil: string;
  tanggal: string;
  status: "Active" | "Deactive";
};

export default function CardMobil({ kodeMobil, tanggal, status }: CardMobilProps) {
  const isActive = status === "Active";

  return (
    <div className="flex items-center space-x-4 p-4 bg-white rounded-xl shadow-md transition border border-gray-300 hover:bg-gray-100 cursor-pointer">
      <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gray-300">
        <FaTruck className="text-gray-700 w-9 h-9" />
      </div>

      <div className="flex flex-col">
        <span className="font-semibold text-lg">{kodeMobil}</span>
        <span className="text-gray-500 text-sm">{tanggal}</span>
        <div className="flex items-center space-x-2 mt-1">
          <span className={`w-3 h-3 rounded-full ${isActive ? "bg-green-400" : "bg-red-400"}`}></span>
          <span className="text-sm">{isActive ? "Aktif" : "Nonaktif"}</span>
        </div>
      </div>
    </div>
  );
}
