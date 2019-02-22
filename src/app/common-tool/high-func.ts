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
   *柯里化尝试（健壮性较强，占位符）
   * @param fn 方法
   * @param args 参数
   */
  static currying(fn, ...args) {
    if (args.length >= fn.length && !args.includes("_")) {
      return fn(...args);
    }
    return function(...args2) {
      if (args.includes("_") && !args2.includes("_")) {
        args.forEach((item, index) => {
          if (item == "_" && args2[0]) {
            args.splice(index, 1, args2[0]);
            args2.shift();
          }
        });
      }
      return HighFunc.currying(fn, ...args, ...args2);
    };
  }
}
