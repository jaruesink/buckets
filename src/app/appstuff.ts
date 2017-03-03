//Pages
import {
  HomePage, LoginPage
} from './pages';
export const PAGES = [
  HomePage, LoginPage
];

export const ROUTES = [
  {
    path: '',
    component: HomePage
  },
  {
    path: 'login',
    component: LoginPage
  }
];

// Components
import {
  HeaderComponent,
  NotificationComponent,
  BucketlistComponent,
  ChatExampleComponent
} from './components';
export const COMPONENTS = [
  HeaderComponent,
  NotificationComponent,
  BucketlistComponent,
  ChatExampleComponent
];

// Directives
import {} from './directives';
export const DIRECTIVES = [];

//Pipes
import {} from './pipes';
export const PIPES = []


// Services
import { FacebookService } from 'ng2-facebook-sdk';
import { HelpersService, AuthService, UserService, FeathersService } from './services';
export const SERVICES = [ FacebookService, HelpersService, AuthService, UserService, FeathersService ];
