import { Outlet, useLocation } from "react-router-dom";

import MainHeader from "../MainHeader";
import MainSidebar from "../MainSidebar";
import TrackingSidebar from "../tracking/Navigation/TrackingSidebar";

export default function RootLayout() {
  const location = useLocation();

  return (
    <div className="min-h-screen">
      <MainHeader />
      <div className="m-4 flex">
        <div className="mr-2">
          <MainSidebar />
        </div>
        <div className="mx-2">
          <Outlet />
        </div>
        {location.pathname === "/tracking" && (
          <div className="ml-2">
            <TrackingSidebar />
          </div>
        )}
      </div>
    </div>
  );
}
