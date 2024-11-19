import { Injectable } from '@angular/core';
import { User } from '../domain/user';
import { UserRepository } from '../domain/user.repository';
import { HttpClient } from '@angular/common/http';
import { BaseInfrastructure } from '../../shared/infrastructure/base.infrastructure';

@Injectable()
export class UserInfrastructure
  extends BaseInfrastructure<User>
  implements UserRepository
{
  constructor(protected readonly httpClient: HttpClient) {
    super(httpClient, '/users');
  }
}
