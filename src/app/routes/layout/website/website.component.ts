import { Component, OnInit } from "@angular/core";
import {
  angularInfo,
  frameInfo,
  cssInfo,
  speakInfo,
  sourceInfo
} from "src/app/services/website/websiteInfo";

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
  frameInfoArr: Array<any> = [];
  cssInfoArr: Array<any> = [];
  sourceInfoArr: Array<any> = [];
  switchView: boolean = false;
  angularView: any;
  frameView: any;
  cssView: any;
  speakView: any;
  sourceView: any;
  initNum: number = 0;
  creatAngularInfo() {
    this.angularInfoArr = new angularInfo().array;
    this.frameInfoArr = new frameInfo().array;
    this.cssInfoArr = new cssInfo().array;
    this.sourceInfoArr = new sourceInfo().array;
  }
  changeBtn() {
    this.switchView = !this.switchView;
    if (this.initNum === 0) {
      this.angularView = new angularInfo().chartOption;
      this.frameView = new frameInfo().chartOption;
      this.cssView = new cssInfo().chartOption;
      this.speakView = new speakInfo().chartOption;
      this.sourceView = new sourceInfo().chartOption;
    }
  }
}
