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
  constructor() {}
  ngAfterViewInit() {
    initialize();
    function initialize() {
      let viz_container;
      let chart_container;
      let viz;

      viz_container = d3.selectAll('#viz_container')
        .style('width', '300px')
        .style('height','300px');

      chart_container = d3.select('#chart_container');

      viz = vizuly.component.radial_progress(document.getElementById('chart_container'));

      viz.data(120)
              .min(0)
              .max(100)
              .capRadius(1);

      viz.startAngle(180)        // Angle where progress bar starts
         .endAngle(180)          // Angle where the progress bar stops
         .arcThickness(.04)      // The thickness of the arc (as a ratio of radius)
         .label(function (d,i) { // The 'label' property allows us to use a dynamic function for labeling.
            return d3.format('$,.2f')(d);
          });

      let vizTheme = vizuly.theme.radial_progress(viz)
                                .skin(vizuly.skin.RADIAL_PROGRESS_BUSINESS);

      viz.update();
    }

  }
}
