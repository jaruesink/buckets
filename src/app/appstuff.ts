//Pages
import { HomePage, LoginPage, BucketPage } from './pages';
export const PagesList = [ HomePage, LoginPage, BucketPage ];

//Components
import {
  LoadingComponent, HeaderComponent, BucketlistComponent, BucketcardComponent,
  AddbucketComponent
} from './components';
export const ComponentsList = [
  LoadingComponent, HeaderComponent, BucketlistComponent, BucketcardComponent,
  AddbucketComponent
];

//Directives
export const DirectivesList = [];

//Services
import {
  FirebaseService, AuthService, UserService, BucketService, HackService
} from './services';
export const ServicesList = [
  FirebaseService, AuthService, UserService, BucketService, HackService
];
