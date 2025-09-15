import { useState } from "react";
import { TrackingBarleft, TrackingBarUp } from "../../../data/tracking_dummy";

export default function TrackingSidebar() {
  const [activeButtons, setActiveButtons] = useState<number[]>([]);

  const toggleButton = (idx: number, noToggle?: boolean) => {
    if (!noToggle) {
      setActiveButtons((prev) => (prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]));
    }
  };

  return (
    <div className="absolute right-4 z-10 flex flex-row items-start space-x-3">
      {/* Kiri */}
      <div className="flex flex-row space-x-3">
        {TrackingBarUp.map((menu, idx) => (
          <button key={idx} title={menu.title} onClick={() => menu.action && menu.action()} className={`px-7 py-3 rounded-xl shadow-md transition text-sm font-medium bg-white hover:bg-gray-100 cursor-pointer`}>
            {menu.title}
          </button>
        ))}
      </div>

      {/* Kanan */}
      <div className="flex flex-col space-y-3">
        {TrackingBarleft.map((menu, idx) => {
          const isActive = activeButtons.includes(idx);

          return (
            <button
              key={idx}
              title={menu.title}
              onClick={() => {
                toggleButton(idx, menu.noToggle);
                menu.action && menu.action();
              }}
              className={`w-14 h-14 p-2 flex items-center justify-center rounded-xl shadow-md transition
                ${isActive && !menu.noToggle ? "text-blue-500 shadow-lg bg-blue-100" : "bg-white hover:bg-gray-100"} cursor-pointer`}
            >
              <menu.icon className="w-8 h-8" />
            </button>
          );
        })}
      </div>
    </div>
  );
}
