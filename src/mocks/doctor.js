import { get, map, filter } from "lodash";
import cristinaLopesPortrait from "./portraits/cristina_lopes.webp";
import eduardoOlivaPortrait from "./portraits/eduardo_oliva.jpg";
import michelAntonioPortrait from "./portraits/michel_antonio.webp";
import {
  cardiology,
  generalPractitioner,
  neurology,
  pneumology,
} from "./speciality";
import services from "./services";

export const filterServices = (specialities) => {
  const mappedSpeciality = map(specialities, (speciality) =>
    get(speciality, "id")
  );
  return filter(services, (service) =>
    mappedSpeciality.includes(get(service, "speciality"))
  );
};

export const cristinaLopesProfile = {
  id: 1,
  name: "Cristina Lopes",
  portrait: cristinaLopesPortrait,
  specialities: [generalPractitioner, pneumology],
};

export const eduardoOlivaProfile = {
  id: 2,
  name: "Eduardo Oliva",
  portrait: eduardoOlivaPortrait,
  specialities: [generalPractitioner, cardiology],
};

export const michelAntonioProfile = {
  id: 3,
  name: "Michel Antonio",
  portrait: michelAntonioPortrait,
  specialities: [neurology],
};

const doctors = [
  cristinaLopesProfile,
  eduardoOlivaProfile,
  michelAntonioProfile,
];

export default doctors.map((doctor) => ({
  ...doctor,
  services: filterServices(get(doctor, "specialities")),
}));
