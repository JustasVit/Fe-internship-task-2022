import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNavigationComponent } from './components/top-navigation/top-navigation.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LeftNavigationComponent } from './components/left-navigation/left-navigation.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { LayoutComponent } from './components/layout/layout.component';
import { UserDetailsEditComponent } from './components/user-details-edit/user-details-edit.component';
import {ReactiveFormsModule} from "@angular/forms";
import {UsersService} from "./services/users.service";
import {CountriesService} from "./services/countries.service";
import {OnlyOneErrorPipe} from "./pipes/only-one-error.pipe";

@NgModule({
  declarations: [
    AppComponent,
    TopNavigationComponent,
    LeftNavigationComponent,
    UserDetailsComponent,
    LayoutComponent,
    UserDetailsEditComponent,
    OnlyOneErrorPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule
  ],
  providers: [UsersService, CountriesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
