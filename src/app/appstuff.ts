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
import {} from './components';
export const COMPONENTS = [];

// Directives
import {} from './directives';
export const DIRECTIVES = [];

//Pipes
import {} from './pipes';
export const PIPES = []


// Services
import { FacebookService } from 'ng2-facebook-sdk';
import { UserService } from './services';
export const SERVICES = [ FacebookService, UserService ];
