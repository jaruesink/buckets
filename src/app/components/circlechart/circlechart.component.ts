declare const d3:any;
declare const vizuly:any;

import { Component, Input } from '@angular/core';

@Component({
  selector: 'circlechart',
  template: `
  <div class="container mt-3 mb-3">
    <div id="viz_container">
      <div id="chart_container"></div>
    </div>
  </div>
  `,
  styleUrls: ['./circlechart.scss']
})
export class CircleChartComponent {
  @Input() budget: number;
  @Input() total: number;
  viz_container: any;
  chart_container: any;
  viz: any;
  constructor() {}
  ngOnInit() {

    this.viz_container = d3
        .selectAll('#viz_container')
        .style('width', '300px')
        .style('height','300px');

    this.chart_container = d3.select('#chart_container');

    this.viz = vizuly.component.radial_progress(document.getElementById('chart_container'));

    this.viz.data(0)
            .min(0)
            .max(100)
            .capRadius(1);

    this.viz.startAngle(180)        // Angle where progress bar starts
            .endAngle(180)          // Angle where the progress bar stops
            .arcThickness(.04)      // The thickness of the arc (as a ratio of radius)
            .label(function (d,i) { // The 'label' property allows us to use a dynamic function for labeling.
      return d3.format('$,.2f')(d);
    });

    this.viz.update();

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
