import { Component } from '@angular/core';
import { UserService, FeathersService } from '../../services/';

@Component({
  selector: 'chatexample',
  templateUrl: './chat_example.component.html',
  styleUrls: ['./chat_example.component.scss']
})
export class ChatExampleComponent {

  constructor(public user: UserService, public feathers: FeathersService) {

  }

  updateStatus(form) {
    let status = form.value.status;
    this.feathers.updateStatus(status);
    form.reset();
  }

}
