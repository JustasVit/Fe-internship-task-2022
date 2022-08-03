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
import { UsersListComponent } from './components/users-list/users-list.component';
import {UserComponent} from "./components/user/user.component";
import {NgxPaginationModule} from "ngx-pagination";
import {UserDetailsEditingGuard} from "./guards/user-details-editing.guard";
import {UserDetailsGuard} from "./guards/user-details.guard";
import {AuthService} from "./services/auth.service";

@NgModule({
  declarations: [
    AppComponent,
    TopNavigationComponent,
    LeftNavigationComponent,
    UserDetailsComponent,
    LayoutComponent,
    UserDetailsEditComponent,
    OnlyOneErrorPipe,
    UserComponent,
    UsersListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  providers: [UsersService, CountriesService, AuthService, UserDetailsGuard, UserDetailsEditingGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
