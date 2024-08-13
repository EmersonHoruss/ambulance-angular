import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CoreModule } from './core/core.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { IconService } from './shared/services/icon.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'amb-root',
  standalone: true,
  imports: [RouterOutlet, CoreModule, MatSidenavModule, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  isOpened = true;

  constructor(private readonly iconService: IconService) {}
}
