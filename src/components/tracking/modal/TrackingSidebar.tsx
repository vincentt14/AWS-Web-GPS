import { TrackingBarleft, TrackingBarUp } from "../../../functions/trackingFunctions";

type TrackingSidebarProps = {
  onToggleExpand: () => void;
  onToggleUpperLayer: () => void;
  activeButtons: number[];
  onToggleButton: (idx: number, noToggle?: boolean) => void;
};

export default function TrackingSidebar({ onToggleExpand, onToggleUpperLayer, activeButtons, onToggleButton }: TrackingSidebarProps) {
  return (
    <div className="flex flex-row items-start space-x-3">
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
                onToggleButton(idx, menu.noToggle);
                if (menu.id === "maximize") {
                  onToggleExpand();
                } else if (menu.id === "tracking") {
                  onToggleUpperLayer();
                } else {
                  menu.action && menu.action();
                }
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
