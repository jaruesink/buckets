declare const d3:any;
declare const vizuly:any;

import { Component, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'circlechart',
  template: `
    <div class="viz-container" [style.height]="width+'px'" [style.width]="width+'px'" [ngClass]="size">
      <div id="chart-container-{{key}}"></div>
      <div class="viz-summary">
        <span class="viz-total">{{total | money}}</span>
        <span class="viz-divider"> / </span>
        <span class="viz-budget">{{amount | money}}</span>
      </div>
      <div *ngIf="type === 'monthly'" class="viz-type">
        <i class="fa fa-calendar"></i>
      </div>
      <div *ngIf="type === 'savings'" class="viz-type">
        <i class="fa fa-bank"></i>
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
  @Input() type: string;
  @ViewChild('chartContainer') chartContainer;
  arc: any;
  viz: any;
  width: number;
  arcThickness: number;
  constructor() {}
  ngOnInit() {
    if (this.size === 'small') {
      this.width = 214;
      this.arcThickness = .04;
    } else {
      this.width = 300;
      this.arcThickness = .07;
    }
  }
  ngAfterViewInit() {
    this.viz = vizuly.component.radial_progress(document.getElementById(`chart-container-${this.key}`));
    this.viz.data(0)
            .min(0)
            .max(100)
            .capRadius(1)
            .startAngle(220)        // Angle where progress bar starts
            .endAngle(140)          // Angle where the progress bar stops
            .label(function (d,i) { // The 'label' property allows us to use a dynamic function for labeling.
              return d3.format('$,.2f')(d);
            })
            .width(this.width)
            .height(this.width)
            .radius(this.width/2.2)
            .arcThickness(this.arcThickness)
            .update();
  }

  ngOnChanges() {
    if (this.viz) {
      this.arc = d3.selectAll(`#chart-container-${this.key} .vz-radial_progress-arc`);

      if (this.type === 'monthly') {
        if (this.total/this.amount > .9) {
          this.arc.style('fill', 'red');
        } else if ( this.total/this.amount > .7 ) {
          this.arc.style('fill', 'orange');
        } else {
          this.arc.style('fill', 'green');
        }
      }

      if (this.type === 'savings') {
        if (this.total/this.amount > .9) {
          this.arc.style('fill', 'green');
        } else if ( this.total/this.amount > .7 ) {
          this.arc.style('fill', 'orange');
        } else {
          this.arc.style('fill', 'red');
        }
      }

      this.viz.data(this.total)
              .max(this.amount)
              .update();
    }
  }
}
