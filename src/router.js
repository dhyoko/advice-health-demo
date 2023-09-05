import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { Dashboard, Scheduling, Appointments, NotFound404 } from "./pages";
import { PATHS } from "./utils/paths";

const router = createBrowserRouter([
  {
    path: PATHS.DASHBOARD,
    element: <Dashboard />,
  },
  {
    path: PATHS.SCHEDULING,
    element: <Scheduling />,
  },
  {
    path: PATHS.APPOINTMENTS,
    element: <Appointments />,
  },
  {
    path: PATHS.NOTFOUND404,
    element: <NotFound404 />,
  },
]);

export default router;
