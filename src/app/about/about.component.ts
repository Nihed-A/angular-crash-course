import {Component, OnInit} from '@angular/core';
import {ProductService} from "../services/api/products/product.service";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit{

  constructor(
    private service:ProductService
  ) {
  }

  ngOnInit(): void {
    this.service.getAllProductsWithLimit()
      .subscribe({
        next:(data)=>{
          console.log(data);
        }
      })
  }
}
