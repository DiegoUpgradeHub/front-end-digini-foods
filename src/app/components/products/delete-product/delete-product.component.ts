import { Component, Input} from '@angular/core';
import { Product } from 'src/app/core/models/product';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.scss']
})
export class DeleteProductComponent {

  public allProducts: Product [] = [];






  event:any;

  public getEvent (event:any): void {
    console.log(event)
  }

}
