import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { GroceryListComponent } from './groceries/grocery-list/grocery-list.component';
import { GroceryDetailComponent } from './groceries/grocery-detail/grocery-detail.component';
import { CartComponent } from './cart/cart.component';
import { CompareComponent } from './compare/compare.component';

@NgModule
({
  declarations: 
  [
    AppComponent,
    GroceryListComponent,
    GroceryDetailComponent,
    CartComponent,
    CompareComponent
  ],
  imports: 
  [
    BrowserModule, 
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot
    ([
      {path: 'groceries', component: GroceryListComponent },
      {path: 'groceries/:name', component: GroceryDetailComponent },
      {path: 'cart', component: CartComponent },
      {path: 'compare', component: CompareComponent},
      {path: '', redirectTo: 'groceries', pathMatch: 'full'},
      {path: '**', redirectTo: 'products', pathMatch: 'full'}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }