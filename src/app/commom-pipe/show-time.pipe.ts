import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "showTime"
})
export class ShowTimePipe implements PipeTransform {
  transform(date: string, args?: string): string {
    switch (args) {
      case "diff": {
        return this.creatDiffDate(date);
      }
      case "date": {
        return date;
      }
      default: {
        return this.creatDiffDate(date);
      }
    }
  }
  /**
   * 只是单纯的考虑30天为一个自然月
   * @param date
   */
  creatDiffDate(date: string) {
    let nowDate = new Date().valueOf();
    let preDate = new Date(date).valueOf() || new Date().getTime();
    const timeStampDay = 24 * 3600 * 1000;
    const timeStampHour = 3600 * 1000;

    let differDay = Math.floor((nowDate - preDate) / timeStampDay);
    let msDay = (nowDate - preDate) % timeStampDay;
    let differHour = Math.floor(msDay / timeStampHour);
    if (differDay === 0) {
      return `${differHour}小时前`;
    } else if (differDay > 0 && differDay < 30) {
      return `${differDay}天前`;
    } else if (differDay >= 30 && differDay < 360) {
      return `${Math.floor(differDay / 30)}月前`;
    } else if (differDay >= 360) {
      return `${Math.floor(differDay / 360)}年前`;
    } else {
      return `1970-01-01`;
    }
  }
}
