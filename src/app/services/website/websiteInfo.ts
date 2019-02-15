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
      title: "浏览器CSS兼容前缀",
      description:
        "由于之前的浏览器各自的渲染机制，即对于一些标准的定义的不一致性的历史原因，一部分CSS样式在个别浏览器中渲染时，" +
        "需要加入独特的CSS样式前缀。对此大而全的angular框架，已经为我们准备好了相关的配置文件，我们只需要填写相关数据即可。" +
        "本网站目前是默认配置，即无视IE浏览器，且包容占据市场份额百分之零点五的前两个版本的浏览器"
    },
    {
      title: "浏览器CSS兼容前缀",
      description:
        "由于之前的浏览器各自的渲染机制，即对于一些标准的定义的不一致性的历史原因，一部分CSS样式在个别浏览器中渲染时，" +
        "需要加入独特的CSS样式前缀。对此大而全的angular框架，已经为我们准备好了相关的配置文件，我们只需要填写相关数据即可。" +
        "本网站目前是默认配置，即无视IE浏览器，且包容占据市场份额百分之零点五的前两个版本的浏览器"
    },
    {
      title: "浏览器CSS兼容前缀",
      description:
        "由于之前的浏览器各自的渲染机制，即对于一些标准的定义的不一致性的历史原因，一部分CSS样式在个别浏览器中渲染时，" +
        "需要加入独特的CSS样式前缀。对此大而全的angular框架，已经为我们准备好了相关的配置文件，我们只需要填写相关数据即可。" +
        "本网站目前是默认配置，即无视IE浏览器，且包容占据市场份额百分之零点五的前两个版本的浏览器"
    },
    {
      title: "浏览器CSS兼容前缀",
      description:
        "由于之前的浏览器各自的渲染机制，即对于一些标准的定义的不一致性的历史原因，一部分CSS样式在个别浏览器中渲染时，" +
        "需要加入独特的CSS样式前缀。对此大而全的angular框架，已经为我们准备好了相关的配置文件，我们只需要填写相关数据即可。" +
        "本网站目前是默认配置，即无视IE浏览器，且包容占据市场份额百分之零点五的前两个版本的浏览器"
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
