import { FaRegCompass, FaEye, FaCirclePlus, FaCircleMinus, FaExpand } from "react-icons/fa6";

export const TrackingBarUp = [
  {
    title: "SOS",
    action: () => console.log("SOS"),
  },
  {
    title: "Event",
    action: () => console.log("Event"),
  },
];

export const TrackingBarleft = [
  {
    id: "tracking",
    title: "Tracking aktifitas mobil",
    icon: FaRegCompass,
    action: () => console.log("Tracking aktifitas mobil"),
  },
  {
    id: "showHide",
    title: "Show/hide indomaret logo",
    icon: FaEye,
    action: () => console.log("Toggle indomaret logo"),
  },
  {
    id: "zoomIn",
    title: "Zoom in Map",
    icon: FaCirclePlus,
    action: () => console.log("Zoom in Map"),
    noToggle: true,
  },
  {
    id: "zoomOut",
    title: "Zoom out Map",
    icon: FaCircleMinus,
    action: () => console.log("Zoom out Map"),
    noToggle: true,
  },
  {
    id: "maximize",
    title: "Maximize Full Map on screen",
    icon: FaExpand,
    action: undefined
  },
];
