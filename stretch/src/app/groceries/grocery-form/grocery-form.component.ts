import { Component, OnInit } from '@angular/core';
import { Grocery } from 'src/app/grocery';
import { min } from 'rxjs/operators';
import { GroceryService } from '../grocery.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-grocery-form',
  templateUrl: './grocery-form.component.html',
  styleUrls: ['./grocery-form.component.css']
})
export class GroceryFormComponent implements OnInit {

  grocery = {} as Grocery;

  
  groceries: Grocery[] = [];
  

  constructor(private groceryService: GroceryService,  private router: Router) { }

  clickOk():void
  {
    this.grocery.imageUrl = "";
    console.log(this.grocery);
    this.groceryService.addGrocery(this.grocery).subscribe(grocery => {
      this.groceries.push(grocery);

    });
    this.router.navigate(['/groceries']);
  }
  
  ngOnInit() {
    
  }

}
