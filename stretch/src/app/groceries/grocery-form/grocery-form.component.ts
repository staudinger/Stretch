import { Component, OnInit } from '@angular/core';
import { Grocery } from 'src/app/grocery';
import { min } from 'rxjs/operators';
import { GroceryService } from '../grocery.service';

@Component({
  selector: 'app-grocery-form',
  templateUrl: './grocery-form.component.html',
  styleUrls: ['./grocery-form.component.css']
})
export class GroceryFormComponent implements OnInit {

  grocery = {} as Grocery;

  
  groceries: Grocery[] = [];
  

  constructor(private groceryService: GroceryService) { }

  clickOk():void
  {
    this.grocery.imageUrl = "";
    console.log(this.grocery);
    this.groceryService.addGrocery(this.grocery).subscribe(grocery => {
      this.groceries.push(grocery);
    });
  }
  ngOnInit() {
    
  }

}
