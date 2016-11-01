//Pages
import { HomePage, LoginPage, BucketPage } from './pages';
export const PagesList = [ HomePage, LoginPage, BucketPage ];

//Components
import {
  LoadingComponent, HeaderComponent, BucketlistComponent, BucketcardComponent,
  AddbucketComponent, AddtransactionComponent, TransactionlistComponent
} from './components';
export const ComponentsList = [
  LoadingComponent, HeaderComponent, BucketlistComponent, BucketcardComponent,
  AddbucketComponent, AddtransactionComponent, TransactionlistComponent
];

//Directives
export const DirectivesList = [];

//Pipes
import { OrderByPipe } from './pipes';
export const PipesList = [ OrderByPipe ]

//Services
import {
  FirebaseService, AuthService, UserService, BucketService, HackService,
  TransactionsService
} from './services';
export const ServicesList = [
  FirebaseService, AuthService, UserService, BucketService, HackService,
  TransactionsService
];
