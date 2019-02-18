import { Component, OnInit, ElementRef, Renderer2 } from "@angular/core";
import {
  Router,
  ActivatedRoute
} from "@angular/router";

@Component({
  selector: "app-layout",
  templateUrl: "./layout.component.html",
  styleUrls: ["./layout.component.scss"]
})
export class LayoutComponent implements OnInit {
  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private router: Router,
    private routes: ActivatedRoute
  ) {}

  ngOnInit() {
    let username = JSON.parse(sessionStorage.getItem("userInfo")).name;
    username && (username = window.atob(username));
    username && (this.username = username);
    this.bindHiddenPopover();
  }
  username: string = "";
  isClickPopover: boolean = false;
  handlePopover(e: Event) {
    e = e || window.event;
    e.stopPropagation();
    this.isClickPopover = !this.isClickPopover;
  }
  /**
   * 绑定事件，全局隐藏气泡卡片
   */
  bindHiddenPopover() {
    let wrapDiv = this.el.nativeElement.querySelector(".wrap");
    this.renderer.listen(wrapDiv, "click", () => {
      this.isClickPopover = false;
    });
  }
  loginOut() {
    sessionStorage.removeItem("userInfo");
    this.router.navigate(["login"]);
  }
  goBack() {
    let pathname = window.location.pathname;
    const appointStr = "/overview";
    if (pathname.includes(appointStr)) {
      this.loginOut();
    } else {
      this.router.navigate(["overview"]);
    }
  }
}
