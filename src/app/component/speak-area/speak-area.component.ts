import { Component, OnInit } from "@angular/core";
import { speakInfoService } from "../../services/website/websiteInfo.service";

@Component({
  selector: "app-speak-area",
  templateUrl: "./speak-area.component.html",
  styleUrls: ["./speak-area.component.scss"]
})
export class SpeakAreaComponent implements OnInit {
  constructor(private speakSrv: speakInfoService) {}

  ngOnInit() {
    this.initSpeakData();
  }
  speakInfoArr: Array<any> = [];
  speakArrLen: number = 0;
  isMoreSpeak: boolean = false;
  /**
   * 初始化评论区数据
   */
  initSpeakData() {
    this.speakArrLen = this.speakSrv.array.length;
    if (this.speakArrLen > 4) {
      this.speakInfoArr = this.speakSrv.array.slice(0, 4);
      this.isMoreSpeak = true;
    } else {
      this.speakInfoArr = this.speakSrv.array.slice(0, this.speakArrLen);
    }
    let username = window.atob(
      JSON.parse(sessionStorage.getItem("userInfo")).name
    );
    this.speakSrv.array.forEach(item => {
      if (item.upThumb && item.upThumb.name.has(username)) {
        item.upThumb.isUpThumbing = true;
      } else {
        item.upThumb.isUpThumbing = false;
      }
      // if (item.upThumb && item.upThumb.name.includes(username)) {
      //   item.upThumb.isUpThumbing = true;
      // } else {
      //   item.upThumb.isUpThumbing = false;
      // }
    });
  }
  /**
   * 操作点赞功能
   * @param guid 模拟数据的唯一id
   */
  hindleUpThumb(guid) {
    let username = window.atob(
      JSON.parse(sessionStorage.getItem("userInfo")).name
    );
    let speakArrIndex = this.speakInfoArr.findIndex(item => {
      return item.id == guid;
    });
    let speakAreaUpThumb = this.speakInfoArr[speakArrIndex].upThumb;
    let nameIndex = speakAreaUpThumb.name.length;
    let mapName = new Map(speakAreaUpThumb.name);
    if (mapName.has(username)) {//采用map的结构数组,查询时事件复杂度为O(1)
      this.removeUpThumb(speakAreaUpThumb, username);
    } else {
      this.addUpThumb(speakAreaUpThumb, [username, nameIndex]);
    }
    speakAreaUpThumb.isUpThumbing = !speakAreaUpThumb.isUpThumbing;
  }
  addUpThumb(upThumb, nameArr: Array<any>) {
    upThumb.name.set(nameArr[0],nameArr[1])
    // upThumb.name.push(nameArr);
  }
  removeUpThumb(upThumb, name: string) {
    // let mapName = new Map(upThumb.name);
    upThumb.name.delete(name);
    // let currentSet = new Set(upThumb.name);
    // currentSet.delete(name);
    // upThumb.name = Array.from(currentSet);
  }
  moreSpeak() {
    let currentSpeakLen = this.speakInfoArr.length;
    let difLen = this.speakArrLen - currentSpeakLen;
    if (difLen > 4) {
      this.speakInfoArr = this.speakSrv.array.slice(0, currentSpeakLen + 4);
      this.isMoreSpeak = true;
    } else {
      this.speakInfoArr = this.speakSrv.array.slice(
        0,
        currentSpeakLen + difLen
      );
      this.isMoreSpeak = false;
    }
  }
}
