import { Component, Input } from '@angular/core';
import { ProductsService } from 'src/app/core/services/products.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-delete-food',
  templateUrl: './delete-food.component.html',
  styleUrls: ['./delete-food.component.scss']
})
export class DeleteFoodComponent {

  itemToDelete: any;

  @Input() item: any;


  constructor (
    private productService: ProductsService,
    public router: Router,
    ) {}




  public deleteProduct(): void {
    this.itemToDelete = this.item;
    console.log(this.itemToDelete);
    this.productService.deleteProduct(this.itemToDelete).subscribe(() => {
      window.location.reload();

    })
  }

}


