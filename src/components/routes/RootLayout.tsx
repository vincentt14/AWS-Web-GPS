import { Outlet, useLocation } from "react-router-dom";
import { useState } from "react";

import MainHeader from "../MainHeader";
import MainSidebar from "../MainSidebar";

export default function RootLayout() {
  const location = useLocation();
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggleExpand = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <div className="min-h-screen">
      {!isExpanded && <MainHeader />}
      <div className="m-4 flex">
        {!isExpanded && <MainSidebar />}
        <div className="flex-1">
          <Outlet context={{ isExpanded, handleToggleExpand }} />
        </div>
      </div>
    </div>
  );
}
