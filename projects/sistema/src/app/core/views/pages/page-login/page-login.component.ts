import { Component } from '@angular/core';
import { LayoutService } from '../../../../config/injections/layout/services/layout.service';

@Component({
  selector: 'amb-page-login',
  templateUrl: './page-login.component.html',
  styleUrl: './page-login.component.scss',
})
export class PageLoginComponent {
  constructor(private readonly layoutService: LayoutService) {
    this.layoutService.setConfiguration({
      headerHidden: true,
      menuHidden: true,
    });
  }
}
