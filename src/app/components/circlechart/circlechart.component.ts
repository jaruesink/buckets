declare const d3:any;
declare const vizuly:any;

import { Component, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'circlechart',
  template: `
    <div class="viz-container" [ngClass]="size">
      <div id="chart-container-{{key}}"></div>
      <div class="viz-summary">
        <span class="viz-total">{{total | money}}</span>
        <span class="viz-divider"> / </span>
        <span class="viz-budget">{{budget | money}}</span>
      </div>
    </div>
  `,
  styleUrls: ['./circlechart.scss']
})
export class CircleChartComponent {
  @Input() budget: number;
  @Input() total: number;
  @Input() size: string;
  @Input() key: string;
  @ViewChild('chartContainer') chartContainer;
  viz_container: any;
  viz: any;
  constructor() {}
  ngAfterViewInit() {

    this.viz_container = d3.selectAll('.viz-container');
    this.viz = vizuly.component.radial_progress(document.getElementById(`chart-container-${this.key}`));
    this.viz.data(0)
            .min(0)
            .max(100)
            .capRadius(1)
            .startAngle(220)        // Angle where progress bar starts
            .endAngle(140)          // Angle where the progress bar stops
            .arcThickness(.04)      // The thickness of the arc (as a ratio of radius)
            .label(function (d,i) { // The 'label' property allows us to use a dynamic function for labeling.
              return d3.format('$,.2f')(d);
            });

    if (this.size === 'small') {
      this.viz_container.style('width', '180px').style('height','180px');
      this.viz.width(180).height(180).radius(180/2.2).arcThickness(.07);
    } else {
      this.viz_container.style('width', '300px').style('height','300px');
    }

  }
  
  ngOnChanges() {
    if (this.viz) {
      console.log(this.viz);
      this.viz.data(this.total)
              .max(this.budget)
              .update();
    }
  }
}
