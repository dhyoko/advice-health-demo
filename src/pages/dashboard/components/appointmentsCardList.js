import React from "react";
import { Card, ListGroup } from "react-bootstrap";
import { filter, get, take } from "lodash";
import { filterAppointmentsByDay } from "../utils";
import { AppointmentCardWrapper } from "./style";

const SimpleAppointmentCard = (props) => {
  const doctorPortrait = get(props, "appointment.doctor.portrait");
  const appointmentDate = get(props, "appointment.appointmentDate");
  const appointmenttime = get(props, "appointment.appointmentTime");
  const patientName = get(props, "appointment.patient.name");

  return (
    <ListGroup.Item>
      <AppointmentCardWrapper>
        <img className="rounded-circle" src={doctorPortrait} alt="logo" />
        <div className="card-info">
          <span>{`Paciente: ${patientName}`}</span>
          <span>{`${appointmentDate} ${appointmenttime}`}</span>
        </div>
      </AppointmentCardWrapper>
    </ListGroup.Item>
  );
};

const AppointmentsCardList = (props) => {
  const appointments = get(props, "appointments", []);
  const now = new Date();
  const filteredAppointments = filterAppointmentsByDay(appointments, now);
  const scheduledAppointments = filter(
    filteredAppointments,
    (appointment) => !get(appointment, "completed")
  );

  const slicedAppointments = take(scheduledAppointments, 3);

  return (
    <Card>
      <ListGroup variant="flush">
        {slicedAppointments.map((appointment) => (
          <SimpleAppointmentCard
            appointment={appointment}
            key={get(appointment, "id")}
          />
        ))}
      </ListGroup>
    </Card>
  );
};

export default AppointmentsCardList;
