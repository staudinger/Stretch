import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { GroceryListComponent } from './groceries/grocery-list/grocery-list.component';
import { GroceryDetailComponent } from './groceries/grocery-detail/grocery-detail.component';

@NgModule
({
  declarations: 
  [
    AppComponent,
    GroceryListComponent,
    GroceryDetailComponent
  ],
  imports: 
  [
    BrowserModule, 
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }