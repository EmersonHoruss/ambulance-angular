import { Injectable } from '@angular/core';
import { User } from '../domain/user';
import { UserRepository } from '../domain/user.repository';

@Injectable()
export class UserInfraestructure implements UserRepository {
  insert(user: User) {
    throw new Error('Method not implemented.');
  }

  list() {
    throw new Error('Method not implemented.');
  }

  listOne() {
    throw new Error('Method not implemented.');
  }

  update(id: number, user: User) {
    throw new Error('Method not implemented.');
  }

  delete(id: number) {
    throw new Error('Method not implemented.');
  }
}
