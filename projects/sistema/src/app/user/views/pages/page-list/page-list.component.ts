import { Component } from '@angular/core';

@Component({
  selector: 'amb-page-list',
  templateUrl: './page-list.component.html',
  styleUrl: './page-list.component.scss',
})
export class PageListComponent {
  listFields: string[] = ['id', 'name', 'lastname', 'cmp'];
  dataSource = [
    { id: 1, name: 'Carlos', lastname: 'Ojeda', cmp: 123 },
    { id: 2, name: 'Carlos2', lastname: 'Ojeda2', cmp: 223 },
    { id: 1, name: 'Carlos', lastname: 'Ojeda', cmp: 123 },
    { id: 2, name: 'Carlos2', lastname: 'Ojeda2', cmp: 223 },
    { id: 1, name: 'Carlos', lastname: 'Ojeda', cmp: 123 },
    { id: 2, name: 'Carlos2', lastname: 'Ojeda2', cmp: 223 },
    { id: 1, name: 'Carlos', lastname: 'Ojeda', cmp: 123 },
    { id: 2, name: 'Carlos2', lastname: 'Ojeda2', cmp: 223 },
    { id: 1, name: 'Carlos', lastname: 'Ojeda', cmp: 123 },
    { id: 2, name: 'Carlos2', lastname: 'Ojeda2', cmp: 223 },
    { id: 1, name: 'Carlos', lastname: 'Ojeda', cmp: 123 },
    { id: 2, name: 'Carlos2', lastname: 'Ojeda2', cmp: 223 },
    { id: 1, name: 'Carlos', lastname: 'Ojeda', cmp: 123 },
    { id: 2, name: 'Carlos2', lastname: 'Ojeda2', cmp: 223 },
  ];
}
