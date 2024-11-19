import { Medic, MedicProperties } from './medic';

export class MedicFactory {
  create(
    name: string,
    surname: string,
    second_name: string,
    cmp: string,
    email: string,
    dni: string,
    photo: string
  ) {
    const medicProperties: MedicProperties = {
      name,
      surname,
      second_name,
      cmp,
      email,
      dni,
      photo,
    };

    if (name.trim() === '') throw new Error('name should not be empty');
    if (surname.trim() === '') throw new Error('surname should not be empty');

    return new Medic(medicProperties);
  }
}
