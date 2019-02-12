import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-layout",
  templateUrl: "./layout.component.html",
  styleUrls: ["./layout.component.scss"]
})
export class LayoutComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    let username = JSON.parse(sessionStorage.getItem("userInfo")).name;
    username && (username = window.atob(username));
    username && (this.username = username);
  }
  username: string = "";
}
