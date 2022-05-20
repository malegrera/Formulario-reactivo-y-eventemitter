import { Component, OnInit } from '@angular/core';
import { WineQuantity } from '../../model/interfaces';
import {winedata} from '../../model/data';

@Component({
  selector: 'app-wine-list',
  templateUrl: './wine-list.component.html',
  styleUrls: ['./wine-list.component.css'],
})
export class WineListComponent implements OnInit {
wines=winedata;
  constructor() { }

  ngOnInit() { }

  onWineQuantityChange(wine: WineQuantity) {
    this.wines[wine.id].quantityInCart = wine.quantity;
  }
}
