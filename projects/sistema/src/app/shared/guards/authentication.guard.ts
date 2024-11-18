import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthApplication } from '../../core/application/auth.application';

@Injectable({ providedIn: 'root' })
export class AuthenticationGuard implements CanActivate {
  constructor(private readonly auth: AuthApplication) {}

  canActivate(): boolean | Promise<boolean> | Observable<boolean> {
    return this.auth.isUserLogged;
  }
}
