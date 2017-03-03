import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from "@angular/flex-layout";
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ROUTES, PAGES, SERVICES, COMPONENTS } from './appstuff';



@NgModule({
  declarations: [
    AppComponent,
    ...PAGES, ...COMPONENTS
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    FlexLayoutModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [ SERVICES ],
  bootstrap: [AppComponent]
})
export class AppModule { }
