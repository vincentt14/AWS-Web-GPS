import { Outlet, useLocation } from "react-router-dom";
import { useState } from "react";

import MainHeader from "../MainHeader";
import MainSidebar from "../MainSidebar";
import TrackingSidebar from "../tracking/Navigation/TrackingSidebar";

export default function RootLayout() {
  const location = useLocation();
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="min-h-screen">
      {!isExpanded && <MainHeader />}
      <div className="m-4 flex">
        {!isExpanded && (
          <div className="mr-2">
            <MainSidebar />
          </div>
        )}
        <div className="mx-2">
          <Outlet />
        </div>
        {location.pathname === "/tracking" && (
          <div className="ml-2">
            <TrackingSidebar onToggleExpand={handleToggleExpand} />
          </div>
        )}
      </div>
    </div>
  );
}
