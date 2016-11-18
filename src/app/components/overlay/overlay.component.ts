import { Component, Input } from '@angular/core';
import { UtilityService } from '../../services'


@Component({
  selector: 'overlay',
  template: `
    <div *ngIf="utils.isOverlayClickable" class="overlay animated"
    [ngClass]="{
      'fadeIn': utils.overlay,
      'fadeOut': utils.fadeOut
    }"
    (click)="utils.hideOverlay()"
    ></div>
    <div *ngIf="!utils.isOverlayClickable" class="overlay animated"
    [ngClass]="{
      'fadeIn': utils.overlay,
      'fadeOut': utils.fadeOut
    }"
    ></div>
  `,
  styleUrls: ['./overlay.scss']
})
export class OverlayComponent {
  constructor(public utils: UtilityService) {}
}
