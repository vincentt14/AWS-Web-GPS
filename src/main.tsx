import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import "./index.css";
import RootLayout from "./components/routes/RootLayout";
import Home from "./components/home/Home";
import Report, { action as ReportAction } from "./components/report/Report";
import ReportMobil, { action as ReportMobilAction } from "./components/report/ReportMobil/ReportMobil";
import Tracking from "./components/tracking/Tracking";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/tracking",
        element: <Tracking />,
      },
      {
        path: "/report",
        element: <Report />,
        action:  ReportAction
      },
      {
        path: "/reportMobil",
        element: <ReportMobil />,
        action:  ReportMobilAction
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
