import { useState } from "react";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";

import TrackingList from "../modal/TrackingList";
import TrackMobil from "../modal/TrackMobil";

type TrackingUpperLayerProps = {
  children: React.ReactNode;
};

export default function TrackingUpperLayer({ children }: TrackingUpperLayerProps) {
  const [isLeftShown, setIsLeftShown] = useState(true);
  const [isRightShown, setIsRightShown] = useState(true);

  const handleLeftShown = () => {
    setIsLeftShown(!isLeftShown);
  };

  const handleRightShown = () => {
    setIsRightShown(!isRightShown);
  };

  return (
    <div className="absolute inset-0 z-30 pointer-events-none">
      <div className="flex h-full items-start">
        {/* LEFT: TrackingList (fixed width) */}
        <div className="flex-shrink-0 pointer-events-auto">
          {isLeftShown ? (
            <TrackingList onToggleLeftShown={handleLeftShown} />
          ) : (
            <div className="flex items-center h-full">
              <button onClick={handleLeftShown} className="w-14 h-14 p-2 flex items-center justify-center rounded-xl shadow-md transition bg-white border border-gray-300 hover:text-blue-500 hover:shadow-lg hover:bg-blue-100 cursor-pointer">
                <MdNavigateNext className="w-6 h-6" />
              </button>
            </div>
          )}
        </div>

        <div className="flex-1" />

        <div className="flex-shrink-0 pointer-events-auto flex items-start space-x-4">
          {children}

          {/* TrackMobil (panel) atau tombol collapse */}
          <div>
            {isRightShown ? (
              <TrackMobil onToggleRightShown={handleRightShown} />
            ) : (
              <div className="flex items-center h-full">
                <button
                  onClick={handleRightShown}
                  className="w-14 h-14 p-2 flex items-center justify-center rounded-xl shadow-md transition bg-white border border-gray-300 hover:text-blue-500 hover:shadow-lg hover:bg-blue-100 cursor-pointer"
                >
                  <MdNavigateBefore className="w-6 h-6" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
