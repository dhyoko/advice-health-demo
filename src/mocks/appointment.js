import { compareDesc } from "date-fns";
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

export const appointments = [
  {
    id: 1,
    doctor: cristinaLopesProfile,
    appointmentDate: "2023-09-05 00:T09:00:00-03:00",
    requestedServices: [cardiologyConsultation],
    completed: true,
  },
  {
    id: 2,
    doctor: cristinaLopesProfile,
    appointmentDate: "2023-09-05 00:T16:30:00-03:00",
    requestedServices: [clinicalMedicalConsultation],
    completed: false,
  },
  {
    id: 3,
    doctor: cristinaLopesProfile,
    appointmentDate: "2023-09-05 00:T10:00:00-03:00",
    requestedServices: [electrocardiogram],
    completed: false,
  },
  {
    id: 4,
    doctor: eduardoOlivaProfile,
    appointmentDate: "2023-09-05 00:T09:00:00-03:00",
    requestedServices: [pulmonologyConsultation, pulmonaryFunctionTest],
    completed: true,
  },
  {
    id: 5,
    doctor: eduardoOlivaProfile,
    appointmentDate: "2023-09-05 00:T10:30:00-03:00",
    requestedServices: [clinicalMedicalConsultation],
    completed: false,
  },
  {
    id: 6,
    doctor: eduardoOlivaProfile,
    appointmentDate: "2023-09-05 00:T11:00:00-03:00",
    requestedServices: [clinicalMedicalConsultation],
    completed: false,
  },
  {
    id: 7,
    doctor: michelAntonioProfile,
    appointmentDate: "2023-09-05 00:T09:30:00-03:00",
    requestedServices: [neurologyConsultation],
    completed: true,
  },
  {
    id: 8,
    doctor: michelAntonioProfile,
    appointmentDate: "2023-09-05 00:T15:30:00-03:00",
    requestedServices: [brainMapping, clinicalNeurophysiology],
    completed: false,
  },
  {
    id: 9,
    doctor: michelAntonioProfile,
    appointmentDate: "2023-09-05 00:T11:30:00-03:00",
    requestedServices: [neurologyConsultation],
    completed: false,
  },
  {
    id: 10,
    doctor: michelAntonioProfile,
    appointmentDate: "2023-09-05 00:T10:30:00-03:00",
    requestedServices: [electroencephalography],
    completed: false,
  },
].sort((a, b) => compareDesc(a.appointmentDate, b.appointmentDate));
