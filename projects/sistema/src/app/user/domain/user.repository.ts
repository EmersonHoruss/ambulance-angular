import { User } from './user';

export interface UserRepository {
  insert(user: User): any;

  list(): any;

  listOne(id: number): any;

  update(id: number, user: User): any;

  delete(id: number): any;
}
