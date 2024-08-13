import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { MetaColumn } from '../../interfaces/metacolumn.interface';

@Component({
  selector: 'amb-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
})
export class TableComponent implements OnInit {
  listFields: string[] = [];
  @Input() metaColumns: MetaColumn[] = [];
  @Input() dataSource : any[] = [];

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['metaColumns']) {
      this.listFields = this.metaColumns.map((item) => item.field);
    }
  }

  selectRow(row: any) {}
}
