import { Outlet } from "react-router-dom";

import MainHeader from "../MainHeader";
import MainSidebar from "../MainSidebar";

export default function RootLayout() {
  return (
    <div className="min-h-screen">
      <MainHeader />
      <div className="m-4 flex">
        <div className="mr-2">
          <MainSidebar />
        </div>
        <div className="ml-2">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
