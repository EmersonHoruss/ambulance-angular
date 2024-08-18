// data model

export interface UserRequired {
  name: string;
  email: string;
  password: string;
  roles: any;
}

export interface UserOptional {
  id: number;
  active: boolean;
}

export type UserUpdate = Partial<{
  name: string;
  password: string;
  roles: any;
}>;

export type UserProperties = Required<UserRequired> & Partial<UserOptional>;

export class User {
  private readonly id: number;
  private name: string;
  private readonly email: string;
  private password: string;
  private active: boolean;
  private roles: any;

  constructor(properties: UserProperties) {
    this.active = true;
    Object.assign(this, properties);
  }

  properties(): UserProperties {
    return {
      id: this.id,
      name: this.name,
      email: this.email,
      password: this.password,
      active: this.active,
      roles: this.roles,
    };
  }

  update(fields: UserUpdate) {
    Object.assign(this, fields);
  }

  delete() {
    this.active = false;
  }
}
