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
        <span class="viz-budget">{{amount | money}}</span>
      </div>
    </div>
  `,
  styleUrls: ['./circlechart.scss']
})
export class CircleChartComponent {
  @Input() amount: number;
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
    this.viz.data(.01)
            .min(0)
            .max(this.amount)
            .capRadius(1)
            .startAngle(220)        // Angle where progress bar starts
            .endAngle(140)          // Angle where the progress bar stops
            .label(function (d,i) { // The 'label' property allows us to use a dynamic function for labeling.
              return d3.format('$,.2f')(d);
            });

    let width;
    if (this.size === 'small') {
      width = 214;
      this.viz.width(width).height(width).radius(width/2.2).arcThickness(.04);
    } else {
      width = 300;
      this.viz.width(width).height(width).radius(width/2.2).arcThickness(.07);
    }
    this.viz_container.style('width', `${width}px`).style('height', `${width}px`);
    this.viz.update();
  }

  ngOnChanges() {
    if (this.viz) {
      this.viz.data(this.total)
              .max(this.amount)
              .update();
    }
  }
}
