import { MdOutlineNotificationsActive } from "react-icons/md";
import { LuCircleUserRound } from "react-icons/lu";
import { Link } from "react-router-dom";

import idmLogo from "../assets/idm_logo.png";

export default function MainHeader() {
  return (
    <header className="py-4 px-[5%] text-center flex justify-between items-center border-b-[2px] border-[#ece1fa] bg-white">
      <div>
        <img src={idmLogo} alt="Indomaret" className="h-10 w-auto" />
      </div>

      <div className="flex items-center space-x-6">
        <Link to="/notifications" className="text-gray-700 hover:text-blue-500 text-2xl">
          <MdOutlineNotificationsActive className="w-8 h-8" />
        </Link>

        <Link to="/profile" className="text-gray-700 hover:text-blue-500 text-2xl">
          <LuCircleUserRound className="w-8 h-8" />
        </Link>
      </div>
    </header>
  );
}
