import { Component, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'amb-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  @Output() onToggleMenu: EventEmitter<void> = new EventEmitter();
  userName = 'David Perales';

  toggleMenu() {
    this.onToggleMenu.emit();
  }
}
