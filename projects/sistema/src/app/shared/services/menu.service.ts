import { Injectable } from '@angular/core';

export interface Menu {
  title: string;
  url: string;
  icon: string;
}

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  private menu: Menu[];

  constructor() {
    this.menu = [
      { title: 'User', url: '/user', icon: 'user' },
      { title: 'Medic', url: '/medic', icon: 'medic' },
      { title: 'Driver', url: '/driver', icon: 'driver' },
      { title: 'History', url: '/history', icon: 'history' },
    ];
  }

  getItems(): Menu[] {
    return [...this.menu];
  }

  getDataPath(currentPath: string): Menu {
    const menu = this.menu.find((el: Menu) => el.url === currentPath);
    return menu as Menu;
  }
}
