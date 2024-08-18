import { Injectable } from '@angular/core';
import { User } from '../domain/user';
import { UserRepository } from '../domain/user.repository';

@Injectable()
export class UserInfraestructure implements UserRepository {
  insert(user: User) {}

  list() {}

  listOne() {}

  update(id: number, user: User) {}

  delete(id: number) {}
}
