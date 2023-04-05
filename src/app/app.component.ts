import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ELEMENT_DATA } from 'src/util/data';

export interface DetailsData {
  name: string;
  date: string;
  entities: number;
  actions: string;
  description: any;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'pc-project';
  displayedColumns: string[] = [
    'date',
    'name',
    'entities',
    'actions',
    'details',
  ];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  description: any;
  descriptionEmpty = false;

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  handleDetails(element: any) {
    if (element.description.length > 0) {
      this.descriptionEmpty = false;
      this.description = element.description;
    } else if (element.description.length == 0) {
      this.descriptionEmpty = true;
    }
  }
}
