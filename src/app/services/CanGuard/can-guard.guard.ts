import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from "@angular/router";
import { Observable } from "rxjs";
import { LoginService } from "../login/login.service";

@Injectable({
  providedIn: "root"
})
export class CanGuard implements CanActivate {
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this.powerControl();
  }
  constructor(private loginSrv: LoginService, private router: Router) { }
  powerControl() {
    let checkUserInfo = JSON.parse(sessionStorage.getItem("userInfo")) || false;
    if (!checkUserInfo) {
      this.router.navigate(["/login"]);
      return false;
    }
    checkUserInfo = {
      name: window.atob(checkUserInfo.name),
      password: window.atob(checkUserInfo.password)
    };
    if (this.loginSrv.checkedUserInfo(checkUserInfo)) {
      return true;
    } else {
      this.router.navigate(["/login"]);
      return false;
    }
  }
}
