import React from "react";
import { get } from "lodash";
import { BarChart } from "../../../components";
import { filterAppointmentsByDay, mapAppointmentsByServices } from "../utils";
import { TooltipWrapper } from "./style";

const customTooltip = (props) => {
  const id = get(props, "indexValue");
  const value = get(props, "value");

  return (
    <TooltipWrapper>
      <strong>{`${id}: ${value}`}</strong>
    </TooltipWrapper>
  );
};

const ServicesBarChart = (props) => {
  const appointments = get(props, "appointments", []);
  const now = new Date();

  const filteredAppointments = filterAppointmentsByDay(appointments, now);

  return (
    <BarChart
      data={mapAppointmentsByServices(filteredAppointments)}
      keys={["value"]}
      aaxisLeftLabel="Número de consultas"
      axisBottomLabel="Serviço"
      horizontal
      customTooltip={customTooltip}
    />
  );
};

export default ServicesBarChart;
