import {
  cristinaLopesProfile,
  eduardoOlivaProfile,
  michelAntonioProfile,
} from "./doctor";
import {
  clinicalMedicalConsultation,
  cardiologyConsultation,
  electrocardiogram,
  pulmonologyConsultation,
  pulmonaryFunctionTest,
  neurologyConsultation,
  electroencephalography,
  brainMapping,
  clinicalNeurophysiology,
} from "./services";
import {
  DATE_ACTION,
  formatDateToISO,
  manipulateDate,
  mapAppointments,
} from "./utils";

const now = new Date();

const appointments = [
  {
    doctor: cristinaLopesProfile,
    appointmentDate: manipulateDate(now, 2, DATE_ACTION.SUBTRACT),
    appointmentTime: "16:30:00",
    requestedServices: [clinicalMedicalConsultation],
  },
  {
    doctor: eduardoOlivaProfile,
    appointmentDate: manipulateDate(now, 1, DATE_ACTION.SUBTRACT),
    appointmentTime: "10:30:00",
    requestedServices: [clinicalMedicalConsultation],
  },
  {
    doctor: michelAntonioProfile,
    appointmentDate: manipulateDate(now, 1, DATE_ACTION.SUBTRACT),
    appointmentTime: "09:30:00",
    requestedServices: [neurologyConsultation],
  },
  {
    doctor: cristinaLopesProfile,
    appointmentDate: formatDateToISO(now),
    appointmentTime: "09:00:00",
    requestedServices: [cardiologyConsultation],
  },
  {
    doctor: cristinaLopesProfile,
    appointmentDate: formatDateToISO(now),
    appointmentTime: "16:30:00",
    requestedServices: [clinicalMedicalConsultation],
  },
  {
    doctor: cristinaLopesProfile,
    appointmentDate: manipulateDate(now, 5, DATE_ACTION.ADD),
    appointmentTime: "16:30:00",
    requestedServices: [clinicalMedicalConsultation],
  },
  {
    doctor: cristinaLopesProfile,
    appointmentDate: formatDateToISO(now),
    appointmentTime: "10:00:00",
    requestedServices: [electrocardiogram],
  },
  {
    doctor: eduardoOlivaProfile,
    appointmentDate: formatDateToISO(now),
    appointmentTime: "09:00:00",
    requestedServices: [pulmonologyConsultation, pulmonaryFunctionTest],
  },
  {
    doctor: eduardoOlivaProfile,
    appointmentDate: formatDateToISO(now),
    appointmentTime: "10:30:00",
    requestedServices: [clinicalMedicalConsultation],
  },
  {
    doctor: eduardoOlivaProfile,
    appointmentDate: manipulateDate(now, 2, DATE_ACTION.ADD),
    appointmentTime: "10:30:00",
    requestedServices: [clinicalMedicalConsultation],
  },
  {
    doctor: eduardoOlivaProfile,
    appointmentDate: formatDateToISO(now),
    appointmentTime: "11:00:00",
    requestedServices: [clinicalMedicalConsultation],
  },
  {
    doctor: michelAntonioProfile,
    appointmentDate: formatDateToISO(now),
    appointmentTime: "09:30:00",
    requestedServices: [neurologyConsultation],
  },
  {
    doctor: michelAntonioProfile,
    appointmentDate: formatDateToISO(now),
    appointmentTime: "15:00:00",
    requestedServices: [brainMapping, clinicalNeurophysiology],
  },
  {
    doctor: michelAntonioProfile,
    appointmentDate: formatDateToISO(now),
    appointmentTime: "11:30:00",
    requestedServices: [neurologyConsultation],
  },
  {
    doctor: michelAntonioProfile,
    appointmentDate: manipulateDate(now, 17, DATE_ACTION.ADD),
    appointmentTime: "11:30:00",
    requestedServices: [neurologyConsultation],
  },
  {
    doctor: michelAntonioProfile,
    appointmentDate: formatDateToISO(now),
    appointmentTime: "10:30:00",
    requestedServices: [electroencephalography],
  },
];

const mappedAppointments = mapAppointments(appointments, now);

export default mappedAppointments;
