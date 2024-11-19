import { Component } from '@angular/core';
import { BaseComponent } from '../../../../shared/base/base.component';
import { MetaColumn } from '../../../../shared/interfaces/metacolumn.interface';
import { MedicApplication } from '../../../application/medic.application';
import { Medic } from '../../../domain/medic';

@Component({
  selector: 'amb-page-list',
  templateUrl: './page-list.component.html',
  styleUrl: './page-list.component.scss',
})
export class PageListComponent extends BaseComponent<Medic, MedicApplication> {
  listFields: string[] = ['id', 'name', 'surname', 'cmp'];
  metaColumns: MetaColumn[] = [
    { field: 'id', title: 'ID' },
    { field: 'name', title: 'Name' },
    { field: 'surname', title: 'Surname' },
    { field: 'cmp', title: 'CMP' },
  ];
  dataOriginal = [
    {
      id: 1,
      name: 'Carlos',
      lastname: 'Ojeda',
      cmp: 1234,
      marked: false,
    },
    {
      id: 2,
      name: 'Pedro',
      lastname: 'Martin',
      cmp: 2224,
      marked: true,
    },
  ];

  constructor(private readonly medicApplication: MedicApplication) {
    super(medicApplication);
  }
}
