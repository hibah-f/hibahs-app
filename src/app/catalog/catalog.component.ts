import { Component } from '@angular/core';
import { IProduct } from './product.model';

@Component({
  selector: 'hib-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent {
  product: IProduct;

  constructor() {
    this.product = {
      id: 2,
      description:
        "Made of plastic. A rarity nowadays.",
      effects: "3 ATK",
      name: "Toy Knife",
      imageName: "toy-knife.webp",
      category: "Weapons",
      price: 0,
      discount: 0,
    };
  }

  getImageUrl(product: IProduct) {
    return '/assets/images/' + product.imageName;
  }
}
