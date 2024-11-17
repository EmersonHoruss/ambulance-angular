import { Inject, Injectable } from '@angular/core';
import { AuthRepository } from '../domain/auth.repository';
import { AuthInfrastructure } from '../infrastructure/auth.infrastructure';
import { Auth } from '../domain/auth';
import { Observable } from 'rxjs';

@Injectable()
export class AuthApplication {
  constructor(
    @Inject(AuthInfrastructure) private readonly authRepository: AuthRepository
  ) {}

  login(auth: Auth): Observable<any> {
    return this.authRepository.login(auth);
    // .subscribe({
    //   next: console.log,
    //   error: console.log,
    // });
  }
}
