export class HighFunc {
  /**
   * 函数式编程之组合函数
   * @param args 函数集合数组或类数组
   */
  static compose(...args) {
    return result => {
      return args.reduceRight((result, fn) => {
        return fn(result);
      }, result);
    };
  }

  /**
   *柯里化尝试
   * @param fn 方法
   * @param args 参数
   */
  static currying(fn, ...args) {
    // console.log(...args);
    let _args = [...args];
    let indexArr: Array<any> = [];
    let holesLen: number = 0;
    let preArr: Array<any>;
    console.log(args);
    if (_args.includes("_")) {
      args.map((item, index) => {
        if (item == "_" && indexArr.length !== 0) {
          item = indexArr[0];
          indexArr.shift();
          args.splice(index, 1);
        }
      });
    }
    if (args.length >= fn.length && !args.includes("_")) {
      return fn(...args);
    }
    return function(...args2) {
      console.log(args2);
      if (args2.includes("_")) {
        args2.forEach(item => {
          item !== "_" && holesLen++;
        });
        [...args2].map((item, index) => {
          if (item == "_" && indexArr.length !== 0) {
            item = indexArr[0];
            indexArr.shift();
            args.splice(index, 1);
          }
        });
      }
      return HighFunc.currying(fn, ...args, ...args2);
    };
  }
}
