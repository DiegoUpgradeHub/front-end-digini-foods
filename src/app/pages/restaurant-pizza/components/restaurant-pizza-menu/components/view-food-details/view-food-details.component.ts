import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-view-food-details',
  templateUrl: './view-food-details.component.html',
  styleUrls: ['./view-food-details.component.scss']
})
export class ViewFoodDetailsComponent {

  @Input() item: any;
}
