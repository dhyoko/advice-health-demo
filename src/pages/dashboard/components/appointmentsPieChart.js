import React from "react";
import { PieChart } from "../../../components";
import { isSameDay, parseISO } from "date-fns";
import { get, filter } from "lodash";
import { mapAppointmentsData } from "../utils";

const AppointmentPieChart = (props) => {
  const appointments = get(props, "appointments", []);
  const now = new Date();

  const filteredAppointments = filter(appointments, (appointment) =>
    isSameDay(parseISO(get(appointment, "appointmentDate")), now)
  );

  return (
    <PieChart
      data={mapAppointmentsData(filteredAppointments)}
      total={get(filteredAppointments, "length")}
      customColors
    />
  );
};

export default AppointmentPieChart;
