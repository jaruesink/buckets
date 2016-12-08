//Pages
import { HomePage, LoginPage, BucketPage } from './pages';
export const PagesList = [ HomePage, LoginPage, BucketPage ];

//Components
import {
  LoadingComponent, HeaderComponent, BucketlistComponent, BucketcardComponent,
  AddbucketComponent, AddtransactionComponent, TransactionlistComponent,
  EditTransactionComponent, CircleChartComponent, OverlayComponent, TutorialComponent,
  FriendsSidebarComponent
} from './components';
export const ComponentsList = [
  LoadingComponent, HeaderComponent, BucketlistComponent, BucketcardComponent,
  AddbucketComponent, AddtransactionComponent, TransactionlistComponent,
  EditTransactionComponent, CircleChartComponent, OverlayComponent, TutorialComponent,
  FriendsSidebarComponent
];

//Directives
export const DirectivesList = [];

//Pipes
import { OrderByPipe, MoneyPipe } from './pipes';
export const PipesList = [ OrderByPipe, MoneyPipe ]

//Services
import {
  FirebaseService, AuthService, UserService, BucketService,
  TransactionsService, UtilityService, FacebookService
} from './services';
export const ServicesList = [
  FirebaseService, AuthService, UserService, BucketService,
  TransactionsService, UtilityService, FacebookService
];
