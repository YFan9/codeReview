export class PCMobile {
  static isClient() {
    let client = 0;
    if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
      //判断IOS
      client = 2;
    } else if (/(Android)/i.test(navigator.userAgent)) {
      //判断Android
      client = 1;
    } else {
      //判断PC
      client = 0;
    }
    return client;
  }
}
