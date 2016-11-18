import { Component, Input } from '@angular/core';
import { UtilityService } from '../../services'


@Component({
  selector: 'overlay',
  template: `
    <div *ngIf="clickable" class="overlay animated"
    [ngClass]="{
      'fadeIn': utils.overlay,
      'fadeOut': utils.fadeOut
    }"
    (click)="utils.hideOverlay()"
    ></div>
    <div *ngIf="!clickable" class="overlay animated"
    [ngClass]="{
      'fadeIn': utils.overlay,
      'fadeOut': utils.fadeOut
    }"
    ></div>
  `,
  styleUrls: ['./overlay.scss']
})
export class OverlayComponent {
  @Input() clickable: boolean;
  constructor(public utils: UtilityService) {}
}
