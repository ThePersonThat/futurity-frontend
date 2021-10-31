import {RouterModule, Routes} from "@angular/router";
import {HomePageComponent} from "../home-page/home-page.component";
import {NgModule} from "@angular/core";
import {NotLoginedLayoutComponent} from "../shared/layouts/not-logined-layout/not-logined-layout.component";
import {LoginPageComponent} from "../login-page/login-page.component";


const routes: Routes = [
  {
    path: "", component: NotLoginedLayoutComponent, children: [
      {path: "", component: HomePageComponent},
      {path: "login", component: LoginPageComponent}
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
