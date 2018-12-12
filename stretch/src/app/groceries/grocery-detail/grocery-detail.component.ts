import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { IGrocery } from 'src/interfaces/grocery';
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
  groceries: IGrocery[] = [];
  filteredGrocery: IGrocery[] = [];
  grocery: IGrocery;
  name: string;
  errorMessage: string;
  constructor(private groceryService: GroceryService, private route: ActivatedRoute, private router: Router) {
    this.grocery = this.groceries.filter(x=>x.groceryName == name)[0];
    
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
      groceries => 
      {
        
        this.groceries = groceries;
        this.grocery = this.groceries.find(x=>x.groceryName == this.name);
      }

    );
  }
}
