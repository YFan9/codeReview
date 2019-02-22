import { Component, OnInit } from "@angular/core";
import {
  angularInfoService,
  frameInfoService,
  cssInfoService,
  speakInfoService,
  sourceInfoService
} from "../../../services/website/websiteInfo.service";
import { HighFunc } from "src/app/common-tool/high-func";

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
    var fn = HighFunc.currying(function(a, b, c, d, e) {
      console.log([a, b, c, d, e]);
    });
    let aaa = fn("_", 2, 3);
    aaa("_", "_")(4)(5)(1);
  }
  switchView: boolean = false;
  angularInfoArr: Array<any> = [];
  frameInfoArr: Array<any> = [];
  cssInfoArr: Array<any> = [];
  sourceInfoArr: Array<any> = [];
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
