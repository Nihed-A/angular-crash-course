import {Component, Input} from '@angular/core';
import {ProductRepresentation} from "../services/api/models/product-representation";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {

  @Input()
  product: ProductRepresentation = {};
}
