import { ShowDate } from "src/app/common-tool/show-date";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class angularInfo {
  constructor() {}
  array: Array<any> = [
    {
      title: "路由守卫",
      description:
        "目前该网站只是做了关于用户是否登录的权限控制，路由守卫即跳转路由前的权限控制"
    },
    {
      title: "浏览器CSS兼容前缀",
      description:
        "由于之前的浏览器各自的渲染机制，即对于一些标准的定义的不一致性的历史原因，一部分CSS样式在个别浏览器中渲染时，" +
        "需要加入独特的CSS样式前缀。对此大而全的angular框架，已经为我们准备好了相关的配置文件，我们只需要填写相关数据即可。" +
        "本网站目前是默认配置，即无视IE浏览器，且包容占据市场份额百分之零点五的前两个版本的浏览器"
    },
    {
      title: "路由导航",
      description:
        "目前该网站采用了两种路由加载形式，1.同步加载(登录页面和overview页面)，2异步加载即惰性加载(网站信息页面和作者信息页面)" +
        "涉及到的路由导航相关API有：Router、window.location等等"
    },
    {
      title: "angular模版及语法糖",
      description:
        "本身angular的语法糖就是与模版紧密相连的，常见的*ngIf与*ngFor就是替我们节简了模版写法。本网站目前使用的模版几乎都是与语法糖有关" +
        "注：angular框架要使用语法糖需要在相应module中引入FormsModule"
    },
    {
      title: "HttpClient",
      description:
        "主要是用于前后端分离，基于restful api架构。虽然本网站的所有数据流都是基于前端的数据模拟，但是还是将angular中的" +
        "HttpClient类引用到了该网站中，如果需要实现与后端的交互，只需要发起简单的http协议请求即可。"
    }
  ];
  chartOption = {
    backgroundColor: "#2c343c",
    title: {
      text: "angular 框架",
      left: "center",
      top: 20,
      textStyle: {
        color: "#ccc"
      }
    },

    tooltip: {
      trigger: "item",
      formatter: "{a} <br/>{b} : ({d}%)"
    },
    visualMap: {
      show: false,
      min: 80,
      max: 600,
      inRange: {
        colorLightness: [0, 1]
      }
    },
    series: [
      {
        name: "技术架构",
        type: "pie",
        radius: "55%",
        center: ["50%", "50%"],
        data: [
          { value: 213, name: "路由守卫" },
          { value: 132, name: "自动化实现css前缀" },
          { value: 321, name: "路由导航" },
          { value: 231, name: "angular模板及语法糖" },
          { value: 123, name: "HttpClient(http协议)" }
        ].sort(function(a, b) {
          return a.value - b.value;
        }),
        roseType: "radius",
        label: {
          normal: {
            textStyle: {
              color: "rgba(255, 255, 255, 0.6)"
            }
          }
        },
        labelLine: {
          normal: {
            lineStyle: {
              color: "rgba(255, 255, 255, 0.3)"
            },
            smooth: 0.2,
            length: 10,
            length2: 20
          }
        },
        itemStyle: {
          normal: {
            color: "#c23531",
            shadowBlur: 200,
            shadowColor: "rgba(0, 0, 0, 0.5)"
          }
        },
        animationType: "scale",
        animationEasing: "elasticOut",
        animationDelay: function(idx) {
          return Math.random() * 200;
        }
      }
    ]
  };
}

export class frameInfo {
  constructor() {}
  array: Array<any> = [
    {
      title: "可读性",
      description:
        "几乎所有的网站搭建，无论前端还是后端都是需要多人协助的，所以代码的可读性是相当重要的。" +
        "本网站简单类型或者复杂类型的命名方式几乎都是采用动词加名词的方式，且不同文文件即css、images、ts中的命名规范都有一定的特色习惯，减少命名的混淆可能。" +
        "在尽量少的注释情况下，让其他人可以花更少的成本读懂代码含义。最后个人认为开发过程中：" +
        "用户体验>代码可读性>代码可维护性>性能优化>新技术的尝试"
    },
    {
      title: "用户体验",
      description:
        "用户体验及不需要考虑本身的代码问题，单纯考虑用户操作方式、习惯、感官方面，即同理心。目前本网站有从操作便易，操作习惯、" +
        "以及感官上来优化用户体验。"
    },
    {
      title: "可维护性",
      description:
        "一个网站的可维护性，是基于该网站的可读性的基础上拓展开来的。在该网站代码具有易读性，就可以开始考虑耦合性问题了。针对降低耦合性，本网站中的代码" +
        "几乎都是遵守一个方法只实现一个功能，减少全局方法的使用等原则。简单来说就是遵守SOLID原则(单一功能、开闭原则、里氏替换、接口隔离以及依赖反转)"
    },
    {
      title: "性能优化",
      description:
        "angular框架的其中一个特色即脏检查来实现数据响应的，在触发脏检查的时候，我们应该尽量避免使用复杂类型，最好是使用简单类型的参数去触发脏检查。" +
        "减少不必要的重复操作，且避免内存泄漏情况的产生。其实angular框架本身就已经考虑了多方面的性能优化，避免内存泄漏的产生" +
        "这也是为什么angular有独特的一套操作dom的方式，并且不建议使用原生方式操作dom。对于Renderer2 API来实现监听事件,返回值本身就是一个取消监听函数。" +
        "这也就尽可能的避免的内存泄漏的产生"
    },
    {
      title: "新技术的尝试",
      description:
        "本网站由于暂时只用于codereview，所以并未有什么新技术的尝试。但是对于部分UI部分，有去了解一个叫做蓝湖的UI标注网站。"
    }
  ];
  chartOption = {
    tooltip: {
      trigger: "item",
      formatter: "{a} <br/>{b}:({d}%)"
    },
    legend: {
      orient: "vertical",
      x: "left",
      data: ["可读性", "可维护性", "性能优化", "用户体验", "新技术的尝试"]
    },
    series: [
      {
        name: "架构占比",
        type: "pie",
        radius: ["50%", "70%"],
        avoidLabelOverlap: false,
        label: {
          normal: {
            show: false,
            position: "center"
          },
          emphasis: {
            show: true,
            textStyle: {
              fontSize: "30",
              fontWeight: "bold"
            }
          }
        },
        labelLine: {
          normal: {
            show: false
          }
        },
        data: [
          { value: 888, name: "可读性" },
          { value: 666, name: "可维护性" },
          { value: 444, name: "性能优化" },
          { value: 1234, name: "用户体验" },
          { value: 222, name: "新技术的尝试" }
        ]
      }
    ]
  };
}

export class cssInfo {
  piePatternSrc = "../../../assets/images/website/cssView_pie.png";
  bgPatternSrc = "../../../assets/images/website/cssView_bg.png";
  piePatternImg: any;
  bgPatternImg: any;
  itemStyle: any;
  chartOption: any;
  constructor() {
    this.piePatternImg = new Image();
    this.piePatternImg.src = this.piePatternSrc;
    this.bgPatternImg = new Image();
    this.bgPatternImg.src = this.bgPatternSrc;
    this.itemStyle = {
      normal: {
        opacity: 0.7,
        color: {
          image: this.piePatternImg,
          repeat: "repeat"
        },
        borderWidth: 3,
        borderColor: "#235894"
      }
    };
    this.chartOption = {
      backgroundColor: {
        image: this.bgPatternImg,
        repeat: "repeat"
      },
      title: {
        text: "CSS3样式",
        textStyle: {
          color: "#235894"
        }
      },
      tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b}:({d}%)"
      },
      series: [
        {
          name: "样式布局",
          type: "pie",
          selectedMode: "single",
          selectedOffset: 30,
          radius: "60%",
          clockwise: true,
          label: {
            normal: {
              textStyle: {
                fontSize: 18,
                color: "#235894"
              }
            }
          },
          labelLine: {
            normal: {
              lineStyle: {
                color: "#235894"
              }
            }
          },
          data: [
            { value: 1324, name: "弹性盒布局" },
            { value: 666, name: "CSS-BFC(块格式化)" },
            { value: 135, name: "流体特性" },
            { value: 310, name: "流式布局" },
            { value: 588, name: "伪类及伪元素" }
          ],
          itemStyle: this.itemStyle
        }
      ]
    };
  }
  array: Array<any> = [
    {
      title: "弹性盒布局",
      description:
        "结合该网站的默认CSS兼容前缀配置，弹性盒布局是能够实现很好的兼容性问题的。弹性盒布局的好处在于，能够自动的适配不同的屏幕及尺寸" +
        "是一种响应式界面设计方式，可以满足较为复杂的布局需求。"
    },
    {
      title: "BFC(块格式化)",
      description:
        "对于触发BFC的条件有很多，下列满足其中任意一条即可触发，所以本网站对于BFC的运用还是相当的多的。1.根元素，即HTML元素 2.float的值不为none " +
        "3.overflow的值不为visible 4.display的值为inline-block、table-cell、table-caption 5.position的值为absolute或fixed"
    },
    {
      title: "伪类及伪元素",
      description:
        "首先伪类和伪元素的概念相差还是挺大的，写法上：伪类用单个冒号表示，伪元素用双冒号表示。用法上：伪类用于相应元素处于某种状态时，为它添加相应样式" +
        "伪元素用于创建本身不存在于文档树中的元素后，并为该元素添加样式。对于伪元素的应用，个人看来，主要还是用于小标签及小样式的微调。减少不必要的dom节点"
    },
    {
      title: "流式布局",
      description:
        "本网站的布局架构基本就是：弹性盒布局与流式布局的结合。弹性盒布局主要解决不同设备之间的较大分辨率差异，而流式布局主要解决类似设备之间不同分辨率的差异性" +
        "但是虽然本网站是采用的弹性盒布局与流式布局的结合，但并没有很好的考虑适配移动端设配，只是保证了不会有破版的情况发生。对于移动端设备，本人还是更倾向于" +
        "重新设计以及搭建一个单独的H5页面较好。这样也有利于维护及二次开发。更符合设计模式下的单一功能原则"
    },
    {
      title: "流体特性",
      description:
        "流体特性是本人在张鑫旭博客大牛那里看到的名词解读，相关资料并不多。但是按照张鑫旭大牛的解读，流体特性即块级元素默认占满整个父容器(高度另算，这里涉及到其他css渲染原因)" +
        "而在该块级元素添加padding、margin、border后块级元素的区域将自动变化，这种特性叫做流体特性。利用这种流体特性，本网站的overview页面的图片垂直居中效果，便是利用了流体特性的方式来实现的。"
    }
  ];
}

export class speakInfo {
  constructor() {}
  data: Array<any> = [
    ["2019-02-05", 3],
    ["2019-02-06", 4],
    ["2019-02-07", 1],
    ["2019-02-08", 2],
    ["2019-02-09", 8],
    ["2019-02-10", 1],
    ["2019-02-11", 2],
    ["2019-02-12", 6],
    ["2019-02-13", 5]
  ];
  dateList: Array<any> = this.data.map(function(item) {
    return item[0];
  });
  valueList: Array<any> = this.data.map(function(item) {
    return item[1];
  });
  array: Array<any> = [
    {
      id: "xxxx1",
      src: "../../../assets/images/website/cssView_pie.png",
      name: "admin",
      content:
        "本网站所有数据流，均为前端模拟产生，刷新页面可能导致部分临时数据可能丢失",
      date: ShowDate.differDate("2019-02-17"),
      upThumb: {
        count: 2,
        name: ["admin", "admin1"]
      },
    }
  ];
  chartOption = {
    visualMap: {
      show: false,
      type: "continuous",
      seriesIndex: 0,
      min: 0,
      max: 10
    },

    title: {
      left: "center",
      text: "评论区活跃量"
    },
    tooltip: {
      trigger: "axis"
    },
    xAxis: {
      data: this.dateList
    },
    yAxis: {
      splitLine: { show: false }
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "10%"
    },
    series: {
      type: "line",
      showSymbol: false,
      data: this.valueList
    }
  };
}

export class sourceInfo {
  constructor() {}
  array: Array<any> = [
    {
      title:
        "首先这些参考的相应资料绝大部分是当初记下的笔记,且本身该网站并没有用到太多复杂的技术性操作"
    },
    {
      title: "Stack Overflow 参考的相应资料：",
      description:
        "URL: https://stackoverflow.com/questions/43006550/how-to-use-ngif-else"
    },
    {
      title: "思否 参考的相应资料：",
      description: "URL: https://segmentfault.com/a/1190000015468617"
    },
    {
      title: "简书 参考的相应资料：",
      description: "URL: https://www.jianshu.com/p/75d4d3b0d485"
    },
    {
      title: "CSDN 参考的相应资料：",
      description: "URL: https://blog.csdn.net/Dong_PT/article/details/51184603"
    },
    {
      title: "掘金 参考的相应资料：",
      description:
        "（1）URL: https://juejin.im/post/5bd95d22e51d45685f442f73" +
        "（2）URL: https://juejin.im/post/59ac1c4ef265da248e75892b" +
        "（3）URL: https://juejin.im/post/5c24b7a851882509a76875e8"
    },
    {
      title: "MDN 参考的相应资料：",
      description:
        "URL: https://developer.mozilla.org/zh-CN/docs/Learn/CSS/Introduction_to_CSS/Pseudo-classes_and_pseudo-elements"
    },
    {
      title: "其他 参考的相应资料：",
      description: "URL: https://stackoverrun.com/cn/q/12032440"
    }
  ];
  chartOption = {
    tooltip: {
      trigger: "axis"
    },
    legend: {
      data: ["Stack Overflow", "思否", "CSDN", "简书", "掘金", "MDN", "其他"]
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true
    },
    toolbox: {
      show: true,
      feature: {
        magicType: { show: true, type: ["stack", "tiled"] },
        saveAsImage: { show: true }
      },
      top: "6%"
    },
    xAxis: {
      type: "category",
      boundaryGap: false,
      data: [
        "2019-02-05",
        "2019-02-06",
        "2019-02-07",
        "2019-02-08",
        "2019-02-09",
        "2019-02-10",
        "2019-02-11"
      ]
    },
    yAxis: {
      type: "value"
    },
    series: [
      {
        name: "Stack Overflow",
        type: "line",
        data: [3, 6, 2, 4, 1, 18, 19]
      },
      {
        name: "思否",
        type: "line",
        data: [12, 14, 10, 8, 3, 22, 21]
      },
      {
        name: "CSDN",
        type: "line",
        data: [22, 24, 20, 18, 13, 32, 31]
      },
      {
        name: "简书",
        type: "line",
        data: [11, 15, 14, 6, 4, 25, 21]
      },
      {
        name: "掘金",
        type: "line",
        data: [15, 20, 17, 11, 7, 30, 25]
      },
      {
        name: "MDN",
        type: "line",
        data: [25, 23, 20, 15, 17, 38, 35]
      },
      {
        name: "其他",
        type: "line",
        data: [2, 5, 2, 3, 1, 10, 12]
      }
    ]
  };
}
