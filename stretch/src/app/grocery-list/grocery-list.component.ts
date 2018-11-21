import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grocery-list',
  templateUrl: './grocery-list.component.html',
  styleUrls: ['./grocery-list.component.css']
})
export class GroceryListComponent implements OnInit 
{
  groceries: any[] =
  [
    {
      "groceryName": "potato"
    },
    {
      "groceryName": "tomato"
    }
];

  constructor() { }

  ngOnInit() {
  }

}
