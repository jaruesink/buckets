//Pages
import { HomePage, LoginPage } from './pages';
export const PagesList = [ HomePage, LoginPage ];

//Components
import { LoadingComponent, HeaderComponent } from './components';
export const ComponentsList = [ LoadingComponent, HeaderComponent ];

//Directives
export const DirectivesList = [];

//Services
import { AuthService, FirebaseService, UserService } from './services';
export const ServicesList = [ AuthService, FirebaseService, UserService ];
