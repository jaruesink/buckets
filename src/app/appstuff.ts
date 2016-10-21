//Pages
import { HomePage, LoginPage } from './pages';
export const PagesList = [ HomePage, LoginPage ];

//Components
import {
  LoadingComponent, HeaderComponent, BucketlistComponent
} from './components';
export const ComponentsList = [
  LoadingComponent, HeaderComponent, BucketlistComponent
];

//Directives
export const DirectivesList = [];

//Services
import {
  AuthService, FirebaseService, UserService, BucketService
} from './services';
export const ServicesList = [
  AuthService, FirebaseService, UserService, BucketService
];
