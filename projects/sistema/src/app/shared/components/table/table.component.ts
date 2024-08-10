import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'amb-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
})
export class TableComponent implements OnInit {
  @Input() listFields: string[] = ['id', 'name', 'lastName'];
  @Input() dataSource: any[] = [];

  constructor() {}

  ngOnInit(): void {}

  selectRow(row:any){
    
  }
}
