import React from "react";
import { get, maxBy } from "lodash";
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
  const mappedAppointmentsByServices =
    mapAppointmentsByServices(filteredAppointments);

  const maxValue = get(maxBy(mappedAppointmentsByServices, "value"), "value");
  const axisBottomTickValues = Array(maxValue + 1)
    .fill()
    .map((_, i) => i);

  return (
    <BarChart
      data={mappedAppointmentsByServices}
      keys={["value"]}
      aaxisLeftLabel="Número de consultas"
      axisBottomLabel="Serviço"
      horizontal
      customTooltip={customTooltip}
      axisBottomTickValues={axisBottomTickValues}
    />
  );
};

export default ServicesBarChart;
