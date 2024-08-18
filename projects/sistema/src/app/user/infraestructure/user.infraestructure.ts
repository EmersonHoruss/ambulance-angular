import { Injectable } from '@angular/core';
import { User } from '../domain/user';
import { UserRepository } from '../domain/user.repository';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserInfraestructure implements UserRepository {
  constructor(private readonly http: HttpClient) {}

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

  page(page: number) {
    this.http
      .get(`https://api-cursoangular.cursos-dev.com/users/page/${page}/10`)
      .subscribe((response) => {
        console.log(response);
      });
  }
}
