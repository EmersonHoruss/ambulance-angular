import { Inject, Injectable } from '@angular/core';
import { User } from '../domain/user';
import { UserInfrastructure } from '../infrastructure/user.infrastructure';
import { UserRepository } from '../domain/user.repository';
import { BaseApplication } from './base.application';

@Injectable()
export class UserApplication extends BaseApplication<User, UserRepository> {
  constructor(
    @Inject(UserInfrastructure) private readonly userRepository: UserRepository
  ) {
    super(userRepository);
  }

  override insert(entity: User): void {
    alert('executing');
    this.userRepository.insert(entity);
  }

  reports() {
    this.userRepository.reports();
  }
}
