import { Component, Input, Output, EventEmitter } from '@angular/core';
import { HelpersService } from '../../services/';

@Component({
  selector: 'notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent {
  @Input() notification: any;
  constructor(public helpers: HelpersService) { }
  ngOnInit() {
    console.log(this.notification);
  }
  onActionClick() {
    this.helpers.dismissNotification();
    this.helpers.loading = true;
    setTimeout(() => {
      this.notification.onActionClick();
      this.helpers.loading = false;
    }, 400);
  }
}
