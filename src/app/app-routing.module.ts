import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./routes/login/login.component";
import { ErrorInfoComponent } from "./routes/error-info/error-info.component";
import { OverViewComponent } from "./routes/layout/over-view/over-view.component";
import { CanGuard } from "./services/CanGuard/can-guard.guard";
import { LayoutComponent } from "./routes/layout/layout.component";

const routes: Routes = [
  { path: "", redirectTo: "/login", pathMatch: "full" },
  { path: "login", component: LoginComponent },
  {
    path: "",
    canActivate: [CanGuard],
    component: LayoutComponent,
    children: [
      { path: "overview", component: OverViewComponent },
      { path: 'myself', loadChildren: './routes/layout/myself/myself.module#MyselfModule' },
      { path: 'website', loadChildren: './routes/layout/website/website.module#WebsiteModule' },]
  },
  { path: "**", component: ErrorInfoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
