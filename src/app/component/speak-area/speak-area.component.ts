import { Component, OnInit } from "@angular/core";
import { speakInfo } from "src/app/services/website/websiteInfo";

@Component({
  selector: "app-speak-area",
  templateUrl: "./speak-area.component.html",
  styleUrls: ["./speak-area.component.scss"]
})
export class SpeakAreaComponent implements OnInit {
  constructor(private speak: speakInfo) {}

  ngOnInit() {
    this.initSpeakData();
  }
  speakInfoArr: Array<any> = [];
  initSpeakData() {
    this.speakInfoArr = this.speak.array;
    let username = window.atob(
      JSON.parse(sessionStorage.getItem("userInfo")).name
    );
    this.speak.array.forEach(item => {
      if (item.upThumb.name.includes(username)) {
        item.upThumb.isUpThumbing = true;
      } else {
        item.upThumb.isUpThumbing = false;
      }
    });
  }
  hindleUpThumb(guid) {
    let username = window.atob(
      JSON.parse(sessionStorage.getItem("userInfo")).name
    );
    let speakArrIndex = this.speakInfoArr.findIndex(item => {
      return item.id == guid;
    });
    console.log(this.speakInfoArr[0].upThumb.count);
    let speakAreaUpThumb = this.speakInfoArr[speakArrIndex].upThumb;
    if (speakAreaUpThumb.name.includes(username)) {
      this.removeUpThumb(speakAreaUpThumb, username);
    } else {
      this.addUpThumb(speakAreaUpThumb, username);
    }
    speakAreaUpThumb.isUpThumbing = !speakAreaUpThumb.isUpThumbing;
  }
  addUpThumb(upThumb, name) {
    upThumb.count++;
    upThumb.name.push(name);
  }
  removeUpThumb(upThumb, name) {
    upThumb.count--;
    let currentSet = new Set(upThumb.name);
    currentSet.delete(name);
    upThumb.name = Array.from(currentSet);
  }
}
