import { Inject } from '@angular/core';
import { User } from '../domain/user';
import { UserInfraestructure } from '../infraestructure/user.infraestructure';
import { UserRepository } from '../domain/user.repository';

export class UserApplication {
  constructor(
    @Inject(UserInfraestructure) private readonly userRepository: UserRepository
  ) {}

  insert(user: User) {
    this.userRepository.insert(user);
  }

  list() {
    this.userRepository.list();
  }

  listOne(id: number) {
    this.userRepository.listOne(id);
  }

  update(id: number, user: User) {
    this.userRepository.update(id, user);
  }

  delete(id: number) {
    this.userRepository.delete(id);
  }
}
