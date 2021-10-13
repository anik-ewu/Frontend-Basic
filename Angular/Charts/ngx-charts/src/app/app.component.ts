import { Component } from '@angular/core';
import { single } from './data';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  single: any[] = [];
  public view: any[] = [600, 500];
  public showXAxis = true;
  public showYAxis = true;
  public gradient = true;
  public showLegend   = true;
  public showXAxisLabel = true;
  public xAxisLabel: "Months";
  public showYAxisLabel = true;
  public yAxisLabel: "Salary";
  public graphDataChart: any[] = [];

  
  public colorScheme = {
    domain: ['red', '#5AA454', '#A10A28', '#C7B42C', '#AAAAAA' , 'green',]
  };
   constructor() {
    Object.assign(this, { single })
  }

}
