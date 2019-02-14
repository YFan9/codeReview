import { Component, OnInit } from "@angular/core";
import { angularInfo } from "src/app/services/website/websiteInfo";

@Component({
  selector: "app-website",
  templateUrl: "./website.component.html",
  styleUrls: ["./website.component.scss"]
})
export class WebsiteComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    this.creatAngularInfo();
  }
  angularInfoArr: Array<any> = [];
  creatAngularInfo() {
    this.angularInfoArr = new angularInfo().array;
  }
}
