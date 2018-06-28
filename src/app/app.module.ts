import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AuthComponent } from './components/auth/auth.component';
import { ProtectedDirective } from './directives/protected.directive';
import {routes} from './app.routes';
import { TourListComponent } from './components/tours/tour-list/tour-list.component';
import { InviteTokenComponent } from './components/invite-token/invite-token.component';
import { CreateInviteTokenComponent } from './components/create-invite-token/create-invite-token.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
		ProtectedDirective,
		TourListComponent,
		InviteTokenComponent,
		CreateInviteTokenComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
		HttpModule,
		ReactiveFormsModule,
		RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
