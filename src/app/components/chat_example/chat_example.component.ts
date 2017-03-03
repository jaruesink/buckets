import { Component } from '@angular/core';
import { HelpersService, FeathersService } from '../../services/';

@Component({
  selector: 'chatexample',
  templateUrl: './chat_example.component.html',
  styleUrls: ['./chat_example.component.scss']
})
export class ChatExampleComponent {

  constructor(helpers: HelpersService, feathers: FeathersService) {
    
  }

}
