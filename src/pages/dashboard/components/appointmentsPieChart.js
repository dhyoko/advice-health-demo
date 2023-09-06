import React from "react";
import { PieChart } from "../../../components";
import { get } from "lodash";
import { mapAppointmentsData, filterAppointmentsByDay } from "../utils";

const AppointmentPieChart = (props) => {
  const appointments = get(props, "appointments", []);
  const now = new Date();
  const filteredAppointments = filterAppointmentsByDay(appointments, now);

  return (
    <PieChart
      data={mapAppointmentsData(filteredAppointments)}
      total={get(filteredAppointments, "length")}
      customColors
    />
  );
};

export default AppointmentPieChart;
