import { useLocation, Link } from "react-router-dom";

import { RiHome6Fill } from "react-icons/ri";
import { IoMapSharp, IoPrint } from "react-icons/io5";

export default function () {
  const { pathname } = useLocation();

  const isActive = (path: string) => pathname === path;

  return (
    <header className="left-0 h-full w-fit z-10 bg-white rounded-xl shadow hover:shadow-md transition">
      <div className="flex flex-col items-center justify-start h-full w-20">
        <Link to="/">
          <div className={`m-4 w-14 h-14 md:w-16 md:h-16 flex items-center justify-center text-2xl ${isActive("/") ? "text-blue-500" : "text-gray-700 hover:text-blue-500"}`}>
            <RiHome6Fill className="w-8 h-8" />
          </div>
        </Link>

        <Link to="/tracking">
          <div className={`m-4 w-14 h-14 md:w-16 md:h-16 flex items-center justify-center text-2xl ${isActive("/tracking") ? "text-blue-500" : "text-gray-700 hover:text-blue-500"}`}>
            <IoMapSharp className="w-8 h-8" />
          </div>
        </Link>

        <Link to="/report">
          <div className={`m-4 w-14 h-14 md:w-16 md:h-16 flex items-center justify-center text-2xl ${isActive("/report") || isActive("/reportMobil") ? "text-blue-500" : "text-gray-700 hover:text-blue-500"}`}>
            <IoPrint className="w-8 h-8" />
          </div>
        </Link>
      </div>
    </header>
  );
}
