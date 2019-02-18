import { Component, OnInit } from "@angular/core";
import { authorInfoService } from "../../../services/myself/myself.service";

@Component({
  selector: "app-myself",
  templateUrl: "./myself.component.html",
  styleUrls: ["./myself.component.scss"]
})
export class MyselfComponent implements OnInit {
  constructor(private authorInfoSrv: authorInfoService) {}

  ngOnInit() {
    this.creatInfo();
  }
  authorInfoArr: Array<any> = [];
  authorArrIndex: number = 1;
  creatInfo() {
    this.creatAuthorInfo();
  }
  creatAuthorInfo() {
    if (this.authorInfoSrv.array.length > 0) {
      this.authorInfoArr = this.authorInfoSrv.array.slice(
        0,
        this.authorArrIndex
      );
    }
  }
  authorTrunLeft(event) {
    [this.authorArrIndex, this.authorInfoArr] = this.trunLeft(
      event,
      this.authorArrIndex,
      this.authorInfoArr,
      this.authorInfoSrv.array
    );
  }

  authorTrunRight() {
    [this.authorArrIndex, this.authorInfoArr] = this.trunRight(
      event,
      this.authorArrIndex,
      this.authorInfoArr,
      this.authorInfoSrv.array
    );
  }
  /**
   * 向左翻页实现
   * @param event 事件
   * @param index 当前下标+1
   * @param overArr 全局数组
   * @param callArr 服务中调用的数组
   */
  trunLeft(event, index, overArr, callArr) {
    event = event || window.event;
    event.stopPropagation();
    if (index > 1) {
      index--;
      overArr = callArr.slice(index - 1, index);
    }
    return [index, overArr];
  }
  /**
   * 向右翻页
   * @param event 事件
   * @param index 当前下标+1
   * @param overArr 全局数组
   * @param callArr 服务中调用的数组
   */
  trunRight(event, index, overArr, callArr) {
    event = event || window.event;
    event.stopPropagation();
    event.preventDefault();
    if (index < callArr.length) {
      index++;
      overArr = callArr.slice(index - 1, index);
    }
    return [index, overArr];
  }
}
