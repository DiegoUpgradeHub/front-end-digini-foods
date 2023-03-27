import { Component, Input } from '@angular/core';
import { Product } from 'src/app/core/models/product';

@Component({
  selector: 'app-delete-food',
  templateUrl: './delete-food.component.html',
  styleUrls: ['./delete-food.component.scss']
})
export class DeleteFoodComponent {

  @Input() item: any;



}
