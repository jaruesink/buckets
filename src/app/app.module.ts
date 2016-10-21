import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RoutingModule } from './app-routing.module';

//Firebase
import { initializeFirebase } from './firebase/';

//Components, Services, and Directives
import { AppComponent } from './app.component';
import { ComponentsList, ServicesList, PagesList, DirectivesList } from './appstuff';
import { FirebaseService } from './services';

@NgModule({
  declarations: [ AppComponent, ...DirectivesList, ...PagesList, ...ComponentsList ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RoutingModule,
    initializeFirebase()
  ],
  providers: [...ServicesList],
  bootstrap: [AppComponent]
})
export class AppModule { }
