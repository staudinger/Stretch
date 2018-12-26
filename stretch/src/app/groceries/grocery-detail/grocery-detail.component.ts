import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { Grocery } from 'src/app/grocery';
import { GroceryService } from '../grocery.service';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-grocery-detail',
  templateUrl: './grocery-detail.component.html',
  styleUrls: ['./grocery-detail.component.css']
})
export class GroceryDetailComponent implements OnInit {
  imageWidth: number = 50;
  imageMargin: number = 2;
  groceries: Grocery[] = [];
  filteredGrocery: Grocery[] = [];
  grocery: Grocery;
  name: string;
  errorMessage: string;
  constructor(private groceryService: GroceryService, private route: ActivatedRoute, private router: Router) {
    this.grocery = this.groceries.filter(x=>x.id == name)[0];
    
  }

  clickBack():void{
    this.router.navigate(['/groceries']);
  }

  ngOnInit() 
  {
    this.name = this.route.snapshot.paramMap.get('name');
    this.groceryService.getGroceries().subscribe
    (
      //returned data (groceries) is initialized to local groceries array.
      serviceGroceries => 
      {
        
        this.groceries = serviceGroceries;
        this.grocery = this.groceries.find(x=>x.id == this.name);
      }

    );
  }
}
