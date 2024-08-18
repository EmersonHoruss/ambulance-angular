import { Component } from '@angular/core';
import { MetaColumn } from '../../../../shared/interfaces/metacolumn.interface';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FormComponent } from '../../components/form/form.component';
import { UtilsService } from '../../../../shared/services/utils.service';

@Component({
  selector: 'amb-page-list',
  templateUrl: './page-list.component.html',
  styleUrl: './page-list.component.scss',
})
export class PageListComponent {
  listFields: string[] = ['id', 'name', 'surname', 'cmp'];
  metaColumns: MetaColumn[] = [
    { field: 'id', title: 'ID' },
    { field: 'name', title: 'Name' },
    { field: 'surname', title: 'Last Name' },
  ];
  dataSource: Array<any> = [];
  dataOriginal = [
    { id: 1, name: 'John', surname: 'Smith' },
    { id: 2, name: 'Emily', surname: 'Johnson' },
    { id: 3, name: 'Michael', surname: 'Williams' },
    { id: 4, name: 'Sarah', surname: 'Brown' },
    { id: 5, name: 'David', surname: 'Jones' },
    { id: 6, name: 'Olivia', surname: 'Garcia' },
    { id: 7, name: 'Daniel', surname: 'Martinez' },
    { id: 8, name: 'Sophia', surname: 'Rodriguez' },
    { id: 9, name: 'James', surname: 'Lopez' },
    { id: 10, name: 'Isabella', surname: 'Gonzalez' },
    { id: 11, name: 'Henry', surname: 'Perez' },
    { id: 12, name: 'Mia', surname: 'Taylor' },
    { id: 13, name: 'Alexander', surname: 'Harris' },
    { id: 14, name: 'Ava', surname: 'Clark' },
    { id: 15, name: 'Ethan', surname: 'Lewis' },
    { id: 16, name: 'Sophia', surname: 'Young' },
    { id: 17, name: 'Benjamin', surname: 'Hall' },
    { id: 18, name: 'Emma', surname: 'Allen' },
    { id: 19, name: 'William', surname: 'King' },
    { id: 20, name: 'Amelia', surname: 'Wright' },
    { id: 21, name: 'Noah', surname: 'Scott' },
    { id: 22, name: 'Charlotte', surname: 'Torres' },
    { id: 23, name: 'Liam', surname: 'Nguyen' },
    { id: 24, name: 'Mia', surname: 'Robinson' },
    { id: 25, name: 'Elijah', surname: 'Walker' },
    { id: 26, name: 'Harper', surname: 'Hill' },
    { id: 27, name: 'Mason', surname: 'Flores' },
    { id: 28, name: 'Evelyn', surname: 'Green' },
    { id: 29, name: 'Logan', surname: 'Adams' },
    { id: 30, name: 'Ella', surname: 'Nelson' },
    { id: 31, name: 'Lucas', surname: 'Baker' },
    { id: 32, name: 'Avery', surname: 'Hall' },
    { id: 33, name: 'Jack', surname: 'Rivera' },
    { id: 34, name: 'Scarlett', surname: 'Campbell' },
    { id: 35, name: 'Sebastian', surname: 'Mitchell' },
    { id: 36, name: 'Grace', surname: 'Carter' },
    { id: 37, name: 'Aiden', surname: 'Roberts' },
    { id: 38, name: 'Chloe', surname: 'Gomez' },
    { id: 39, name: 'Matthew', surname: 'Phillips' },
    { id: 40, name: 'Victoria', surname: 'Evans' },
    { id: 41, name: 'Samuel', surname: 'Turner' },
    { id: 42, name: 'Madison', surname: 'Perez' },
    { id: 43, name: 'Joseph', surname: 'Parker' },
    { id: 44, name: 'Lily', surname: 'Edwards' },
    { id: 45, name: 'Owen', surname: 'Collins' },
    { id: 46, name: 'Hannah', surname: 'Stewart' },
    { id: 47, name: 'Caleb', surname: 'Sanchez' },
    { id: 48, name: 'Zoe', surname: 'Morris' },
    { id: 49, name: 'Nathan', surname: 'Rogers' },
    { id: 50, name: 'Layla', surname: 'Reed' },
  ];
  pageSize = 5;
  currentPage = 0;
  quantityRecords = this.dataOriginal.length;

  constructor(private readonly utilsService: UtilsService) {
    this.getRecordsBypage(this.currentPage);
  }

  getRecordsBypage(page: number) {
    this.currentPage = page;
    this.dataSource = [
      ...this.dataOriginal.slice(
        page * this.pageSize,
        page * this.pageSize + this.pageSize
      ),
    ];
  }

  showModalWindow(row: any = null) {
    const dialogRef: MatDialogRef<FormComponent> =
      this.utilsService.showModalWindow(FormComponent, {
        width: '400px',
        disableClose: true,
        data: row,
      });

    dialogRef.afterClosed().subscribe((response) => {
      if (!response) return;

      if (response.id) {
        const record: any = this.dataOriginal.find(
          (data) => data.id === response.id
        );
        record.name = response.name;
        record.surname = response.surname;
        this.getRecordsBypage(this.currentPage);
      } else {
        response.id = this.dataOriginal.length + 1;
        this.dataOriginal.push(response);
      }

      this.getRecordsBypage(this.currentPage);
      this.quantityRecords = this.dataOriginal.length;
    });
  }

  delete(id: number) {
    this.utilsService.showConfirm().subscribe((response) => {
      if (!response) return;

      const index = this.dataOriginal.findIndex((record) => record.id === id);
      this.dataOriginal.splice(index, 1);
      this.getRecordsBypage(this.currentPage);
      this.quantityRecords = this.dataOriginal.length;
    });
  }
}
