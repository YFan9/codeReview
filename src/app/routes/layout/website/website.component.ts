import { Component, OnInit } from "@angular/core";
import {
  angularInfoService,
  frameInfoService,
  cssInfoService,
  speakInfoService,
  sourceInfoService
} from "../../../services/website/websiteInfo.service";

@Component({
  selector: "app-website",
  templateUrl: "./website.component.html",
  styleUrls: ["./website.component.scss"]
})
export class WebsiteComponent implements OnInit {
  constructor(
    private angularInfoSrv: angularInfoService,
    private frameInfoSrv: frameInfoService,
    private cssInfoSrv: cssInfoService,
    private speakInfoSrv: speakInfoService,
    private sourceInfoSrv: sourceInfoService
  ) {}

  ngOnInit() {
    this.creatInfo();
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
  creatInfo() {
    this.angularInfoArr = this.angularInfoSrv.array;
    this.frameInfoArr = this.frameInfoSrv.array;
    this.cssInfoArr = this.cssInfoSrv.array;
    this.sourceInfoArr = this.sourceInfoSrv.array;
  }
  changeBtn() {
    this.switchView = !this.switchView;
    if (this.initNum === 0) {
      this.angularView = this.angularInfoSrv.chartOption;
      this.frameView = this.frameInfoSrv.chartOption;
      this.cssView = this.cssInfoSrv.chartOption;
      this.speakView = this.speakInfoSrv.chartOption;
      this.sourceView = this.sourceInfoSrv.chartOption;
    }
  }
}
