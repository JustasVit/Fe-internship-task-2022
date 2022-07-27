import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserDetailsComponent} from "./components/user-details/user-details.component";
import {LayoutComponent} from "./components/layout/layout.component";

const routes: Routes = [{
  path: '', component: LayoutComponent, children: [{
    path: 'details', component: UserDetailsComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)], exports: [RouterModule]
})
export class AppRoutingModule {
}
