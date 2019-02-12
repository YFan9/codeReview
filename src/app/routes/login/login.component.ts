import { Component, OnInit, ElementRef, Renderer2 } from "@angular/core";
import { isNullOrUndefined } from "util";
import { LoginService } from "src/app/services/login/login.service";
import { NzMessageService } from "ng-zorro-antd";
import { Router } from "@angular/router";
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  constructor(
    private loginSrv: LoginService,
    private message: NzMessageService,
    private el: ElementRef,
    private renderer: Renderer2,
    private router: Router
  ) {}

  ngOnInit() {
    this.bindEnterKey();
  }
  userInfo: any = {
    name: "",
    password: ""
  };
  btnChecked: boolean = false;
  changeUserName() {
    this.judgeBtnAble(this.userInfo.name, this.userInfo.password);
  }
  changePwd() {
    this.judgeBtnAble(this.userInfo.name, this.userInfo.password);
  }
  judgeBtnAble(name, pwd) {
    if (
      !isNullOrUndefined(name) &&
      !isNullOrUndefined(pwd) &&
      name !== "" &&
      pwd !== ""
    )
      this.btnChecked = true;
    else this.btnChecked = false;
  }
  checkLogin() {
    if (this.loginSrv.checkedUserInfo(this.userInfo)) {
      this.message.success("登录成功");
      this.router.navigate(["overview"]);
      let userInfo = {
        name: window.btoa(this.userInfo.name),
        password: window.btoa(this.userInfo.password)
      };
      sessionStorage.setItem("userInfo", JSON.stringify(userInfo));
    } else {
      this.message.error("账号或者密码错误");
      this.userInfo.password = "";
      this.btnChecked = false;
    }
  }
  clearInp() {
    this.userInfo = { name: "", password: "" };
  }
  bindEnterKey() {
    let domDiv = this.el.nativeElement.querySelector(".login-box");
    this.renderer.listen(domDiv, "keyup", item => {
      if (item.keyCode == 13) {
        this.checkLogin();
      }
    });
  }
}
