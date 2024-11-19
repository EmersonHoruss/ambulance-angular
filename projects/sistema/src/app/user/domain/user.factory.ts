// domain model

import { User, UserProperties } from './user';

export class UserFactory {
  create(name: string, email: string, password: string, roles: any): User {
    const userProperties: UserProperties = {
      name,
      email,
      password,
      roles,
      id: new Date().getTime(),
    };

    if (name.trim() === '') throw new Error('name should not be empty');
    if (email.trim() === '') throw new Error('email should not be empty');
    if (roles.length === 0)
      throw new Error('user should has at least one role');

    return new User(userProperties);
  }
}
