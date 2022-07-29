import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNavigationComponent } from './components/top-navigation/top-navigation.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LeftNavigationComponent } from './components/left-navigation/left-navigation.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { LayoutComponent } from './components/layout/layout.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavigationComponent,
    LeftNavigationComponent,
    UserDetailsComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
