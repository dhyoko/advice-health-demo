import { get, filter } from "lodash";
import { COLORS } from "../../utils/consts";

export const mapAppointmentsData = (appointments) => {
  const completedAppointmentsCount = filter(appointments, (appointment) =>
    get(appointment, "completed")
  ).length;

  return [
    {
      id: "Finalizado",
      label: "Finalizado",
      value: completedAppointmentsCount,
      color: COLORS.NAVY,
    },
    {
      id: "Agendados",
      label: "Agendados",
      value: get(appointments, "length", 0) - completedAppointmentsCount,
      color: COLORS.DARK_ORANGE,
    },
  ];
};
