import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

interface Icon {
  name: string;
  path: string;
}

@Injectable({
  providedIn: 'root',
})
export class IconService {
  private listIcons: Icon[] = [
    { name: 'user', path: 'assets/icons/user.svg' },
    { name: 'medic', path: 'assets/icons/medic.svg' },
    { name: 'driver', path: 'assets/icons/driver.svg' },
    { name: 'history', path: 'assets/icons/history.svg' },
    { name: 'dashboard', path: 'assets/icons/dashboard.svg' },
    { name: 'logo', path: 'assets/icons/logo.svg' },
  ];

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    this.listIcons.forEach(({ name, path }) => {
      const sanitizedPath =
        this.domSanitizer.bypassSecurityTrustResourceUrl(path);
      this.matIconRegistry.addSvgIcon(name, sanitizedPath);
    });
  }
}
