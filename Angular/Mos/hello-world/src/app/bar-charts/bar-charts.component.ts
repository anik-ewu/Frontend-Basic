import { productSales, productSalesMulti } from './../data/products';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bar-charts',
  templateUrl: './bar-charts.component.html',
  styleUrls: ['./bar-charts.component.scss']
})
export class BarChartsComponent implements OnInit {

  productSales: any[]
  constructor() { Object.assign(this.productSales=[], {productSales}) }

  ngOnInit(): void {
  }

}
