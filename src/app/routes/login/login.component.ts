import {
  Component,
  OnInit,
  ElementRef,
  Renderer2,
  ViewChild
} from "@angular/core";
import { LoginService } from "../../services/login/login.service";
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
    this.inpName.nativeElement.focus();
    this.judgeBtnAble(this.userInfo.name, this.userInfo.password);
  }
  @ViewChild("inpName") inpName;
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
    if (name && pwd && name !== "" && pwd !== "") this.btnChecked = true;
    else this.btnChecked = false;
  }
  checkLogin() {
    if (this.loginSrv.checkedUserInfo(this.userInfo)) {
      this.loginSuccess(this.userInfo.name, this.userInfo.password);
    } else {
      this.loginError();
    }
  }
  loginSuccess(name, password) {
    this.message.success("登录成功");
    this.router.navigate(["overview"]);
    let userInfo = {
      name: window.btoa(name),
      password: window.btoa(password)
    };
    sessionStorage.setItem("userInfo", JSON.stringify(userInfo));
  }
  loginError() {
    this.message.error("账号或者密码错误");
    this.userInfo.password = "";
    this.btnChecked = false;
  }
  clearInp() {
    this.userInfo = { name: "", password: "" };
  }
  bindEnterKey() {
    let domDiv = this.el.nativeElement.querySelector(".wrap");
    this.renderer.listen(domDiv, "keyup", item => {
      if (item.keyCode == 13) {
        this.checkLogin();
      }
    });
  }
  tempLogin() {
    this.loginSuccess("guest","xxxxx1");
  }
}
