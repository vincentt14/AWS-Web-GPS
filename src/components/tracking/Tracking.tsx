import { useState } from "react";
import { useOutletContext } from "react-router-dom";

import TrackingSidebar from "./modal/TrackingSidebar";
import TrackingUpperLayer from "./UpperLayer/TrackingUpperLayer";

type RootLayoutContext = {
  isExpanded: boolean;
  handleToggleExpand: () => void;
};

export default function Tracking() {
  const { handleToggleExpand } = useOutletContext<RootLayoutContext>();

  const [isUpperLayer, setIsUpperLayer] = useState(false);
  const [activeButtons, setActiveButtons] = useState<number[]>([]);

  const handleToggleUpperLayer = () => {
    setIsUpperLayer((prev) => !prev);
  };

  const handleToggleButton = (idx: number, noToggle?: boolean) => {
    if (!noToggle) {
      setActiveButtons((prev) => (prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]));
    }
  };

  const sidebar = <TrackingSidebar onToggleExpand={handleToggleExpand} onToggleUpperLayer={handleToggleUpperLayer} activeButtons={activeButtons} onToggleButton={handleToggleButton} />;

  return (
    <>
      <div className="relative w-full h-[calc(100vh-110px)]">
        {/* MAP / konten utama */}
        <div className="w-full h-full">
          <p className="text-center">Maps</p>
        </div>

        {!isUpperLayer && <div className="absolute top-0 right-0 z-20">{sidebar}</div>}

        {/* UPPER LAYER: full overlay yang menata left / center / right */}
        {isUpperLayer && <TrackingUpperLayer>{sidebar}</TrackingUpperLayer>}
      </div>
    </>
  );
}
