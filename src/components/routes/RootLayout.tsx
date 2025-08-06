import { Outlet } from "react-router-dom";

import MainHeader from "../MainHeader";
import MainSidebar from "../MainSidebar";

export default function RootLayout() {
  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      <MainHeader />
      <MainSidebar />
      <Outlet />
    </div>
  );
}
