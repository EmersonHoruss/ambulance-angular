import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LayoutService } from '../../../../config/injections/layout/services/layout.service';

@Component({
  selector: 'amb-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  constructor(
    private readonly router: Router,
    private readonly layoutService: LayoutService
  ) {}

  login() {
    this.router.navigate(['user']);
  }

  ngOnDestroy(): void {
    this.layoutService.setConfiguration({
      headerHidden: false,
      menuHidden: false,
    });
  }
}
