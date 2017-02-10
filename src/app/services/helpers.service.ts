import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class HelpersService {
  loading: boolean = false;
  notification: Object;
  constructor() {}

  notify(content: string, action: string = '', onActionClick: any) {
    this.notification = { content, action, onActionClick }
  }
  dismissNotification() {
    this.notification = null;
  }

}
