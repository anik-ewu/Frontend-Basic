import { Component } from '@angular/core';
import { single } from './data';
// import { LegendPosition } from '@swimlane/ngx-charts/common/types/legend.model';

import { LegendPosition } from './common/legend.model';
import { ScaleType } from './common/scale-type.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  single: any[] = [];
  public view: any[] = [800, 400];
  public showXAxis = true;
  public showYAxis = true;
  public gradient = true;
  public showLegend   = true;
  public legend: boolean = true;
  public legendPosition = 'below';
  // public below = LegendPosition.below;
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
