import { Inject, Injectable } from '@angular/core';
import { AuthRepository } from '../domain/auth.repository';
import { AuthInfraestructure } from '../infraestructure/auth.infraestructure';
import { Auth } from '../domain/auth';
import { Observable } from 'rxjs';

@Injectable()
export class AuthApplication {
  constructor(
    @Inject(AuthInfraestructure) private readonly authRepository: AuthRepository
  ) {}

  login(auth: Auth): Observable<any> {
    return this.authRepository.login(auth);
    // .subscribe({
    //   next: console.log,
    //   error: console.log,
    // });
  }
}
