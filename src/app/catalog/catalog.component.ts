import { Component } from '@angular/core';
import { IProduct } from './product.model';

@Component({
  selector: 'hib-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent {
  products: IProduct[];
  filter: string = '';

  constructor() {
    this.products = [
      {
        id: 2,
        description:
          "Made of plastic. A rarity nowadays.",
        effects: "3 ATK",
        name: "Toy Knife",
        imageName: "toy-knife.webp",
        category: "Weapons",
        price: 0,
        discount: 0,
      },
      {
        id: 3,
        description:
          "A worn pink leather glove. For five-fingered folk.",
        effects: "5 ATK",
        name: "Tough Glove",
        imageName: "tough-glove.webp",
        category: "Weapons",
        price: 50,
        discount: 0,
      },
      {
        id: 4,
        description:
          "Has a distinct, non-licorice flavor.",
        effects: "10 HP",
        name: "Monster Candy",
        imageName: "monster-candy.png",
        category: "Food",
        price: 0,
        discount: 0,
      },
      {
        id: 5,
        description:
          "It has already been used several times. ",
        effects: "10 HP",
        name: "Bandage",
        imageName: "bandage.png",
        category: "Armour",
        price: 0,
        discount: 0,
      }
  ];
  }

  getImageUrl(product: IProduct) {
    return '/assets/images/undertale-items/' + product.imageName;
  }

  getFilteredProducts() {
    return this.filter === '' ? this.products : this.products.filter((product) => product.category === this.filter);
  }
}
