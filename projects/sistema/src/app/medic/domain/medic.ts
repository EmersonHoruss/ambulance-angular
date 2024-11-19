export interface MedicRequired {
  name: string;
  surname: string;
  second_name: string;
  cmp: string;
  email: string;
  dni: string;
  photo: string;
}

export interface MedicOptional {
  id: number;
  active: boolean;
}

export type MedicProperties = Required<MedicRequired> & Partial<MedicOptional>;

export type MedicUpdate = Partial<{
  name: string;
  surname: string;
  second_name: string;
  cmp: string;
  email: string;
  dni: string;
  photo: string;
}>;

export class Medic {
  private readonly id: number;
  private name: string;
  private surname: string;
  private second_name: string;
  private cmp: string;
  private email: string;
  private dni: string;
  private photo: string;
  private active: boolean;

  constructor(properties: MedicProperties) {
    this.active = true;
    Object.assign(this, properties);
  }

  properties(): MedicProperties {
    return {
      id: this.id,
      name: this.name,
      surname: this.surname,
      second_name: this.second_name,
      cmp: this.cmp,
      email: this.email,
      dni: this.dni,
      photo: this.photo,
      active: this.active,
    };
  }

  update(fields: MedicUpdate) {
    Object.assign(this, fields);
  }

  delete() {
    this.active = false;
  }
}
