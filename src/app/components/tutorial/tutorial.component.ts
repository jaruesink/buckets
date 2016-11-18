import { Component } from '@angular/core';
import { UtilityService } from '../../services'


@Component({
  selector: 'tutorial',
  templateUrl: 'tutorial.html',
  styleUrls: ['./tutorial.scss']
})
export class TutorialComponent {
  fadeOut: boolean;
  step1: boolean;
  step2: boolean;
  step3: boolean;
  constructor(public utils: UtilityService) {
    this.utils.isOverlayClickable = false;
    this.utils.showOverlay();
    this.step1 = true;
  }
  showStep2() {
    this.fadeOut = true;
    setTimeout(() => {
      this.fadeOut = false;
      this.step1 = false;
      this.step2 = true;
    }, 50);
  }
  showStep3() {
    this.fadeOut = true;
    setTimeout(() => {
      this.fadeOut = false;
      this.step2 = false;
      this.step3 = true;
    }, 50);
  }
  endTutorial() {
    this.fadeOut = true;
    setTimeout(() => {
      this.fadeOut = false;
      this.step3 = false;
    }, 50);
    this.utils.showDrawer()
  }
  ngOnDestroy() {
    this.utils.isOverlayClickable = true;
  }
}
