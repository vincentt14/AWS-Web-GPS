import { useState } from "react";

import { MdNavigateNext } from "react-icons/md";
import TrackingList from "./modal/TrackingList";

export default function Tracking() {
  const [isLeftShown, setIsLeftShown] = useState(true);

  const handleLeftShown = () => {
    setIsLeftShown(!isLeftShown);
  };

  return (
    <>
      {!isLeftShown && (
        <div className="h-[calc(100vh-110px)] flex items-center">
          <button className="w-14 h-14 p-2 flex items-center justify-center rounded-xl shadow-md transition bg-white border border-gray-300 hover:text-blue-500 hover:shadow-lg hover:bg-blue-100 cursor-pointer" onClick={handleLeftShown}>
            <MdNavigateNext className="w-8 h-8" />
          </button>
        </div>
      )}

      {isLeftShown && <TrackingList onToggleLeftShown={handleLeftShown} />}
    </>
  );
}
