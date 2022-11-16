import {Component, Input, OnInit} from '@angular/core';
import {IProduct} from "../../settings/interfaces/iproduct";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() product!:IProduct;
  public flagDeteils:boolean;

  constructor() {
    this.flagDeteils = false;
  }

  ngOnInit(): void {
  }

}
