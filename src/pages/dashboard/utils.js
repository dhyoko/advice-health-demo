import { get, filter, map, flatMap, groupBy } from "lodash";
import { isSameDay, parseISO } from "date-fns";
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

export const filterAppointmentsByDay = (appointments, day) => {
  return filter(appointments, (appointment) =>
    isSameDay(parseISO(get(appointment, "appointmentDate")), day)
  );
};

export const mapAppointmentsByServices = (appointments) => {
  const requestedServices = flatMap(
    map(appointments, (appointment) => get(appointment, "requestedServices"))
  );
  const groupServicesById = groupBy(requestedServices, "id");

  return map(groupServicesById, (services) => {
    return {
      id: get(services, "[0].name"),
      value: get(services, "length"),
    };
  }).sort((a, b) => a.value - b.value);
};
