import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserDetailsComponent} from "./components/user-details/user-details.component";
import {LayoutComponent} from "./components/layout/layout.component";
import {UserDetailsEditComponent} from "./components/user-details-edit/user-details-edit.component";
import {UsersListComponent} from "./components/users-list/users-list.component";
import {UserDetailsGuard} from "./guards/user-details.guard";
import {UserDetailsEditingGuard} from "./guards/user-details-editing.guard";
import {ErrorComponent} from "./components/error/error.component";
import {LoginComponent} from "./components/login/login.component";

const routes: Routes = [
  {
    path: "",
    component: LayoutComponent,
    children: [
      {
        path: "details/:id",
        component: UserDetailsComponent,
        canActivate: [UserDetailsGuard],
      },
      {
        path: "details/:id/edit",
        component: UserDetailsEditComponent,
        canActivate: [UserDetailsEditingGuard],
      },
      {
        path: "list",
        component: UsersListComponent
      },
    ],
  },
  {
    path: "error",
    component: ErrorComponent
  },
  {
    path: "login",
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], exports: [RouterModule]
})
export class AppRoutingModule {
}
