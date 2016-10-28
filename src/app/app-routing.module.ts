import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// pages
import { HomePage, LoginPage, BucketPage } from './pages';


const routes: Routes = [
  {path: 'bucket/:link', component: BucketPage},
  {path: 'login', component: LoginPage},
  {path: '', component: HomePage}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class RoutingModule { }
