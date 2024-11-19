import { Inject, Injectable } from '@angular/core';
import { User } from '../domain/user';
import { UserInfrastructure } from '../infrastructure/user.infrastructure';
import { UserRepository } from '../domain/user.repository';
import { BaseApplication } from '../../shared/application/base.application';

@Injectable()
export class UserApplication extends BaseApplication<User, UserRepository> {
  constructor(
    @Inject(UserInfrastructure) private readonly userRepository: UserRepository
  ) {
    super(userRepository);
  }
}
