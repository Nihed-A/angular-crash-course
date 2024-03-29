import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { AboutComponent } from './about/about.component';
import {FormsModule} from "@angular/forms";
import { MenuComponent } from './menu/menu.component';
import { ProductsComponent } from './products/products.component';
import { MyFirstComponent } from './my-first/my-first.component';
import { NewProductComponent } from './new-product/new-product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import {NgOptimizedImage} from "@angular/common";
import {MyFirstService} from "./services/my-first.service";

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    MenuComponent,
    ProductsComponent,
    MyFirstComponent,
    NewProductComponent,
    ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    NgOptimizedImage,
  ],
  providers: [
    MyFirstService,
    HttpClient,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
