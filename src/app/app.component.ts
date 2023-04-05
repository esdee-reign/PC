import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  date: string;
  entities: number;
  actions: string;
  description: any;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    date: '',
    name: 'Competitive Intelligence',
    entities: 0,
    actions: 'H',
    description: [],
  },
  { date: '02 Apr', name: 'My Vendors', entities: 24, actions: 'He', description: [
    'Bundi Technologies Private Limited (Swiggy)',
    'Puma Sports Private Limited',
    'Tesla',
    'Hector Beverages Private Limited',
    'Adidas Sports Private Limited',
    'Dewan Housing Finance Corporation Ltd.',
    'Hero Motorcorp Ltd.',
    'Zomato',
    'Bundi Technologies Private Limited (Swiggy)',
    'Puma Sports Private Limited',
    'Tesla',
    'Hector Beverages Private Limited',
    'Adidas Sports Private Limited',
    'Dewan Housing Finance Corporation Ltd.',
    'Hero Motorcorp Ltd.',
    'Zomato',
    'Bundi Technologies Private Limited (Swiggy)',
    'Puma Sports Private Limited',
    'Tesla',
    'Hector Beverages Private Limited',
    'Adidas Sports Private Limited',
    'Dewan Housing Finance Corporation Ltd.',
    'Hero Motorcorp Ltd.',
    'Zomato',
  ], },
  {
    date: '',
    name: 'My Customers',
    entities: 0,
    actions: 'Li',
    description: [],
  },
  {
    date: 'Apr 05',
    name: 'Test_30_results',
    entities: 24,
    actions: 'Be',
    description: [
      'Bundi Technologies Private Limited (Swiggy)',
      'Puma Sports Private Limited',
      'Tesla',
      'Hector Beverages Private Limited',
      'Adidas Sports Private Limited',
      'Dewan Housing Finance Corporation Ltd.',
      'Hero Motorcorp Ltd.',
      'Zomato',
      'Bundi Technologies Private Limited (Swiggy)',
      'Puma Sports Private Limited',
      'Tesla',
      'Hector Beverages Private Limited',
      'Adidas Sports Private Limited',
      'Dewan Housing Finance Corporation Ltd.',
      'Hero Motorcorp Ltd.',
      'Zomato',
      'Bundi Technologies Private Limited (Swiggy)',
      'Puma Sports Private Limited',
      'Tesla',
      'Hector Beverages Private Limited',
      'Adidas Sports Private Limited',
      'Dewan Housing Finance Corporation Ltd.',
      'Hero Motorcorp Ltd.',
      'Zomato',
    ],
  },
  {
    date: 'Apr 05',
    name: 'HDFC Bank',
    entities: 0,
    actions: 'B',
    description: [],
  },
  {
    date: 'Apr 05',
    name: 'Tata Motors',
    entities: 0,
    actions: 'C',
    description: [],
  },
  {
    date: 'Apr 05',
    name: 'To_index',
    entities: 0,
    actions: 'N',
    description: [],
  },
  {
    date: 'Apr 05',
    name: 'Asian Paints',
    entities: 0,
    actions: 'O',
    description: [],
  },
  {
    date: 'Apr 05',
    name: 'KPMG Requested Companies - Listed Set_Prasada Kumar',
    entities: 24,
    actions: 'F',
    description: [
      'Bundi Technologies Private Limited (Swiggy)',
      'Puma Sports Private Limited',
      'Tesla',
      'Hector Beverages Private Limited',
      'Adidas Sports Private Limited',
      'Dewan Housing Finance Corporation Ltd.',
      'Hero Motorcorp Ltd.',
      'Zomato',
      'Bundi Technologies Private Limited (Swiggy)',
      'Puma Sports Private Limited',
      'Tesla',
      'Hector Beverages Private Limited',
      'Adidas Sports Private Limited',
      'Dewan Housing Finance Corporation Ltd.',
      'Hero Motorcorp Ltd.',
      'Zomato',
      'Bundi Technologies Private Limited (Swiggy)',
      'Puma Sports Private Limited',
      'Tesla',
      'Hector Beverages Private Limited',
      'Adidas Sports Private Limited',
      'Dewan Housing Finance Corporation Ltd.',
      'Hero Motorcorp Ltd.',
      'Zomato',
    ],
  },
  {
    date: 'Apr 05',
    name: 'The Maroon Door',
    entities: 0,
    actions: 'Ne',
    description: [],
  },
  {
    date: 'Apr 05',
    name: 'Unchained Carrot ',
    entities: 24,
    actions: 'Ne',
    description: [
      'Bundi Technologies Private Limited (Swiggy)',
      'Puma Sports Private Limited',
      'Tesla',
      'Hector Beverages Private Limited',
      'Adidas Sports Private Limited',
      'Dewan Housing Finance Corporation Ltd.',
      'Hero Motorcorp Ltd.',
      'Zomato',
      'Bundi Technologies Private Limited (Swiggy)',
      'Puma Sports Private Limited',
      'Tesla',
      'Hector Beverages Private Limited',
      'Adidas Sports Private Limited',
      'Dewan Housing Finance Corporation Ltd.',
      'Hero Motorcorp Ltd.',
      'Zomato',
      'Bundi Technologies Private Limited (Swiggy)',
      'Puma Sports Private Limited',
      'Tesla',
      'Hector Beverages Private Limited',
      'Adidas Sports Private Limited',
      'Dewan Housing Finance Corporation Ltd.',
      'Hero Motorcorp Ltd.',
      'Zomato',
    ],
  },
  {
    date: 'Apr 05',
    name: 'The Orange Goat',
    entities: 24,
    actions: 'Ne',
    description: [
      'Bundi Technologies Private Limited (Swiggy)',
      'Puma Sports Private Limited',
      'Tesla',
      'Hector Beverages Private Limited',
      'Adidas Sports Private Limited',
      'Dewan Housing Finance Corporation Ltd.',
      'Hero Motorcorp Ltd.',
      'Zomato',
      'Bundi Technologies Private Limited (Swiggy)',
      'Puma Sports Private Limited',
      'Tesla',
      'Hector Beverages Private Limited',
      'Adidas Sports Private Limited',
      'Dewan Housing Finance Corporation Ltd.',
      'Hero Motorcorp Ltd.',
      'Zomato',
      'Bundi Technologies Private Limited (Swiggy)',
      'Puma Sports Private Limited',
      'Tesla',
      'Hector Beverages Private Limited',
      'Adidas Sports Private Limited',
      'Dewan Housing Finance Corporation Ltd.',
      'Hero Motorcorp Ltd.',
      'Zomato',
    ],
  },
  {
    date: 'Apr 05',
    name: 'Arctic Wolf Neworks, Inc',
    entities: 24,
    actions: 'Ne',
    description: [
      'Bundi Technologies Private Limited (Swiggy)',
      'Puma Sports Private Limited',
      'Tesla',
      'Hector Beverages Private Limited',
      'Adidas Sports Private Limited',
      'Dewan Housing Finance Corporation Ltd.',
      'Hero Motorcorp Ltd.',
      'Zomato',
      'Bundi Technologies Private Limited (Swiggy)',
      'Puma Sports Private Limited',
      'Tesla',
      'Hector Beverages Private Limited',
      'Adidas Sports Private Limited',
      'Dewan Housing Finance Corporation Ltd.',
      'Hero Motorcorp Ltd.',
      'Zomato',
      'Bundi Technologies Private Limited (Swiggy)',
      'Puma Sports Private Limited',
      'Tesla',
      'Hector Beverages Private Limited',
      'Adidas Sports Private Limited',
      'Dewan Housing Finance Corporation Ltd.',
      'Hero Motorcorp Ltd.',
      'Zomato',
    ],
  },
];

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
