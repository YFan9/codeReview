import { Component, OnInit } from "@angular/core";
import {
  AuthorInfoService,
  ExpInfoService,
  StudyInfoService
} from "../../../services/myself/myself.service";

@Component({
  selector: "app-myself",
  templateUrl: "./myself.component.html",
  styleUrls: ["./myself.component.scss"]
})
export class MyselfComponent implements OnInit {
  constructor(
    private authorInfoSrv: AuthorInfoService,
    private expInfoSrv: ExpInfoService,
    private studyInfoSrv: StudyInfoService
  ) {
    let array = [
      this.authorTrunLeft,
      this.authorTrunRight,
      this.expTrunLeft,
      this.expTrunRight,
      this.studyTrunLeft,
      this.studyTrunRight
    ];
    [
      this.authorTrunLeft,
      this.authorTrunRight,
      this.expTrunLeft,
      this.expTrunRight,
      this.studyTrunLeft,
      this.studyTrunRight
    ] = this.loopBindThis(array);
  }

  ngOnInit() {
    this.authorInfoArr = this.creatInfo(
      this.authorInfoArr,
      this.authorInfoSrv.array,
      this.authorArrIndex
    );
    this.expInfoArr = this.creatInfo(
      this.expInfoArr,
      this.expInfoSrv.array,
      this.expArrIndex
    );
    this.studyInfoArr = this.creatInfo(
      this.studyInfoArr,
      this.studyInfoSrv.array,
      this.studyArrIndex
    );
  }
  authorInfoArr: Array<any> = [];
  authorArrIndex: number = 1;
  expInfoArr: Array<any> = [];
  expArrIndex: number = 1;
  studyInfoArr: Array<any> = [];
  studyArrIndex: number = 1;
  creatInfo(overArr, callArr, index) {
    if (callArr.length > 0) {
      overArr = callArr.slice(0, index);
    }
    return overArr;
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

  authorTrunRight(event) {
    [this.authorArrIndex, this.authorInfoArr] = this.trunRight(
      event,
      this.authorArrIndex,
      this.authorInfoArr,
      this.authorInfoSrv.array
    );
  }
  expTrunLeft(event) {
    [this.expArrIndex, this.expInfoArr] = this.trunLeft(
      event,
      this.expArrIndex,
      this.expInfoArr,
      this.expInfoSrv.array
    );
  }

  expTrunRight(event) {
    [this.expArrIndex, this.expInfoArr] = this.trunRight(
      event,
      this.expArrIndex,
      this.expInfoArr,
      this.expInfoSrv.array
    );
  }
  studyTrunLeft(event) {
    [this.studyArrIndex, this.studyInfoArr] = this.trunLeft(
      event,
      this.studyArrIndex,
      this.studyInfoArr,
      this.studyInfoSrv.array
    );
  }
  studyTrunRight(event) {
    [this.studyArrIndex, this.studyInfoArr] = this.trunRight(
      event,
      this.studyArrIndex,
      this.studyInfoArr,
      this.studyInfoSrv.array
    );
  }
  /**
   * 向左翻页实现,解构赋值中的问题，如果给overArr定义类型，会有强制报错。原因猜测：解构赋值是循环遍历的，而解构赋值的类型未统一
   * @param event 事件
   * @param index 当前下标+1
   * @param overArr 全局数组
   * @param callArr 服务中调用的数组
   */
  trunLeft(event, index: number, overArr, callArr: Array<any>) {
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
  trunRight(event, index: number, overArr, callArr: Array<any>) {
    event = event || window.event;
    event.stopPropagation();
    event.preventDefault();
    if (index < callArr.length) {
      index++;
      overArr = callArr.slice(index - 1, index);
    }
    return [index, overArr];
  }
  /**
   * 循环绑定组件类的this，循环好像只能用ES5的语法，原因猜测：这里可能和浅拷贝与赋值的区别有关。ES5中的赋值可能属于浅拷贝，所以功能可以实现
   * @param arr
   */
  loopBindThis(arr: Array<any>) {
    for (let i = 0; i < arr.length; i++) {
      arr[i] = arr[i].bind(this);
    }
    return arr;
  }
}
