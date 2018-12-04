import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IGrocery } from 'src/interfaces/grocery';

@Component({
  selector: 'app-grocery-detail',
  templateUrl: './grocery-detail.component.html',
  styleUrls: ['./grocery-detail.component.css']
})
export class GroceryDetailComponent implements OnInit {
  grocery: IGrocery;

  constructor(private router: Router) { }

  clickBack():void{
    this.router.navigate(['/groceries']);
  }

  ngOnInit() {
  }

}
