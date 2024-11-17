import { Component, HostListener, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { LayoutService } from '../../../../config/injections/layout/services/layout.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthApplication } from '../../../application/auth.application';
import { Auth } from '../../../domain/auth';
import { AuthFactory } from '../../../domain/auth-factory';
import { ITokens } from '../../../domain/token.interface';
import { StorageApplication } from '../../../application/storage.application';

@Component({
  selector: 'amb-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  group: FormGroup;

  constructor(
    private readonly router: Router,
    private readonly layoutService: LayoutService,
    private readonly authApplication: AuthApplication,
    private readonly storageApplication: StorageApplication
  ) {
    this.group = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required]),
    });
  }

  login() {
    if (this.group.invalid) return;

    const values = this.group.value;
    const auth = AuthFactory.create(values.email, values.password);
    this.authApplication.login(auth).subscribe({
      next: this.userAuthenticated.bind(this),
      error: console.warn,
    });
  }

  userAuthenticated(response: ITokens) {
    console.log(response);
    this.storageApplication.setField('accessToken', response.accessToken);
    this.router.navigate(['user']);
  }

  ngOnDestroy(): void {
    this.layoutService.setConfiguration({
      headerHidden: false,
      menuHidden: false,
    });
  }
}
