import {
  cardiology,
  generalPractitioner,
  neurology,
  pneumology,
} from "./speciality";

export const clinicalMedicalConsultation = {
  id: 1,
  name: "Consulta Clínica Médica",
  price: "200",
  speciality: generalPractitioner.id,
};

export const cardiologyConsultation = {
  id: 2,
  name: "Consulta Cardiologia",
  price: "250",
  speciality: cardiology.id,
};

export const electrocardiogram = {
  id: 3,
  name: "Eletrocardiograma",
  price: "400",
  speciality: cardiology.id,
};

export const pulmonologyConsultation = {
  id: 4,
  name: "Consulta Pneumologia",
  price: "250",
  speciality: pneumology.id,
};

export const pulmonaryFunctionTest = {
  id: 5,
  name: "Prova de Função Pulmonar",
  price: "350",
  speciality: pneumology.id,
};

export const neurologyConsultation = {
  id: 6,
  name: "Consulta Neurologia",
  price: "250",
  speciality: neurology.id,
};

export const electroencephalography = {
  id: 7,
  name: "Eletroencefalografia",
  price: "400",
  speciality: neurology.id,
};

export const electroneuromyography = {
  id: 8,
  name: "Eletroneuromiografia",
  price: "500",
  speciality: neurology.id,
};

export const brainMapping = {
  id: 9,
  name: "Mapeamento Cerebral",
  price: "750",
  speciality: neurology.id,
};

export const clinicalNeurophysiology = {
  id: 10,
  name: "Neurofisiologia Clinica",
  price: "350",
  speciality: neurology.id,
};

const services = [
  clinicalMedicalConsultation,
  cardiologyConsultation,
  electrocardiogram,
  pulmonologyConsultation,
  pulmonaryFunctionTest,
  neurologyConsultation,
  electroencephalography,
  electroneuromyography,
  brainMapping,
  clinicalNeurophysiology,
];

export default services;
