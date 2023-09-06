import {
  compareAsc,
  formatISO,
  addBusinessDays,
  subBusinessDays,
  isBefore,
} from "date-fns";
import { faker } from "@faker-js/faker";
import { get, reduce } from "lodash";

export const DATE_ACTION = {
  ADD: "add",
  SUBTRACT: "subtract",
};

export const formatDateToISO = (date) =>
  formatISO(date, { representation: "date" });

export const manipulateDate = (date, days, action) => {
  let newDate = null;

  if (action === DATE_ACTION.ADD) {
    newDate = addBusinessDays(date, days);
  } else {
    newDate = subBusinessDays(date, days);
  }

  return formatDateToISO(newDate);
};

export const parseAppointmentDate = (appointment) => {
  return new Date(
    `${appointment.appointmentDate} ${appointment.appointmentTime}`
  );
};

export const calcServiceTotalPrice = (services) => {
  const total = reduce(
    services,
    (total, service) => Number(get(service, "price", 0)) + total,
    0
  );
  return total.toFixed(2).toString();
};

export const checkTime = (appointment, now) => {
  return isBefore(parseAppointmentDate(appointment), now);
};

export const mapAppointments = (appointments, now) => {
  return appointments
    .map((appointment, index) => {
      const sexType = faker.person.sexType();

      return {
        ...appointment,
        id: index,
        totalPrice: calcServiceTotalPrice(
          get(appointment, "requestedServices")
        ),
        paymentCompleted: true,
        completed: checkTime(appointment, now),
        patient: {
          name: faker.person.fullName({ sex: sexType }),
          cpf: faker.string.numeric({ length: 11, allowLeadingZeros: false }),
          bornDate: formatISO(faker.date.birthdate(), {
            representation: "date",
          }),
          address: faker.location.streetAddress(true),
          city: faker.location.city(),
          country: faker.location.country(),
          contato: faker.phone.number("(##) 9####-####"),
          gender: faker.person.gender(),
          sexType,
        },
      };
    })
    .sort((a, b) => {
      const dateA = parseAppointmentDate(a);
      const dateB = parseAppointmentDate(b);
      return compareAsc(dateA, dateB);
    });
};
