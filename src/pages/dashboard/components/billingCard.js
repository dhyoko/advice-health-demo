import React from "react";
import { get, filter, reduce } from "lodash";
import { filterAppointmentsByDay } from "../utils";
import { BillingCardWrapper } from "./style";

const BillingCard = (props) => {
  const appointments = get(props, "appointments", []);
  const now = new Date();
  const filteredAppointments = filterAppointmentsByDay(appointments, now);
  const completedAppointments = filter(filteredAppointments, (appointment) =>
    get(appointment, "completed")
  );

  const billingServices = reduce(
    completedAppointments,
    (total, appointment) => total + Number(get(appointment, "totalPrice")),
    0
  )
    .toFixed(2)
    .replace(".", ",");

  return (
    <BillingCardWrapper>
      <h5>R$</h5>
      <h1>{billingServices}</h1>
    </BillingCardWrapper>
  );
};

export default BillingCard;
