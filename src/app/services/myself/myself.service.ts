import { Injectable } from "@angular/core";
import { isTemplateRef } from "../../../../node_modules/ng-zorro-antd";

@Injectable({
  providedIn: "root"
})
export class MyselfService {
  constructor() {}
}
class CreateInfo {
  tsTitle: string;
  tsContent: Array<any>;
  constructor(title: string, contentArr: Array<any>) {
    title && (this.tsTitle = title);
    contentArr && (this.tsContent = contentArr);
  }
}

/**
 * 本模拟数据服务使用了三重循环嵌套，可以大量减少代码量,增加大量逻辑理解
 * 但是实践开发使用当中这种并不是较优解，应用唯一标识字段配合html页面的多标签标识来实现该功能。
 * type=0 表示为图片信息，type=1 表示为文字描述，type=2 表示为醒目标注
 */
export class AuthorInfoService {
  constructor() {}
  array = [
    {
      tsCard: [
        new CreateInfo("基本资料：", [
          {
            tsHeader: "头像：",
            tsInfo: "../../../assets/images/myself/author_header.jpg",
            type: 0
          },
          { tsHeader: "姓名：", tsInfo: "杨帆", type: 1 },
          { tsHeader: "性别：", tsInfo: "男", type: 1 },
          {
            tsHeader: "爱好：",
            tsInfo: "看影评、以及一切能够大众娱乐的娱乐",
            type: 1
          },
          {
            tsHeader: "自白：",
            tsInfo: "做一个有思想能赚小钱钱的代码工程师",
            type: 1
          }
        ]),
        new CreateInfo("基本资料：", [
          {
            tsHeader: "头像：",
            tsInfo: "../../../assets/images/myself/author_header.jpg",
            type: 0
          },
          { tsHeader: "姓名：", tsInfo: "杨帆", type: 1 },
          { tsHeader: "性别：", tsInfo: "男", type: 1 },
          {
            tsHeader: "爱好：",
            tsInfo: "看影评、以及一切能够大众娱乐的娱乐",
            type: 1
          },
          {
            tsHeader: "自白：",
            tsInfo: "更换头像、预览功能是绝对独立的，强吹一波angular双向绑定",
            type: 2
          }
        ]),
        new CreateInfo("基本资料：", [
          {
            tsHeader: "头像：",
            tsInfo: "../../../assets/images/myself/author_header.jpg",
            type: 0
          },
          { tsHeader: "姓名：", tsInfo: "杨帆", type: 1 },
          { tsHeader: "性别：", tsInfo: "男", type: 1 },
          {
            tsHeader: "爱好：",
            tsInfo: "看影评、以及一切能够大众娱乐的娱乐",
            type: 1
          },
          {
            tsHeader: "自白：",
            tsInfo: "做一个有思想能赚小钱钱的代码工程师",
            type: 1
          }
        ]),
        new CreateInfo("基本资料：", [
          {
            tsHeader: "头像：",
            tsInfo: "../../../assets/images/myself/author_header.jpg",
            type: 0
          },
          { tsHeader: "姓名：", tsInfo: "杨帆", type: 1 },
          { tsHeader: "性别：", tsInfo: "男", type: 1 },
          {
            tsHeader: "爱好：",
            tsInfo: "看影评、以及一切能够大众娱乐的娱乐",
            type: 1
          },
          {
            tsHeader: "自白：",
            tsInfo: "做一个有思想能赚小钱钱的代码工程师",
            type: 1
          }
        ]),
        new CreateInfo("基本资料：", [
          {
            tsHeader: "头像：",
            tsInfo: "../../../assets/images/myself/author_header.jpg",
            type: 0
          },
          { tsHeader: "姓名：", tsInfo: "杨帆", type: 1 },
          { tsHeader: "性别：", tsInfo: "男", type: 1 },
          {
            tsHeader: "爱好：",
            tsInfo: "看影评、以及一切能够大众娱乐的娱乐",
            type: 1
          },
          {
            tsHeader: "自白：",
            tsInfo: "做一个有思想能赚小钱钱的代码工程师",
            type: 1
          }
        ]),
        new CreateInfo("非基本资料：", [
          {
            tsHeader: "头像：",
            tsInfo: "../../../assets/images/myself/author_header.jpg",
            type: 0
          },
          { tsHeader: "姓名：", tsInfo: "杨帆", type: 1 },
          { tsHeader: "性别：", tsInfo: "男", type: 1 },
          {
            tsHeader: "爱好：",
            tsInfo: "看影评、以及一切能够大众娱乐的娱乐",
            type: 1
          },
          {
            tsHeader: "自白：",
            tsInfo:
              "人类的本质就是复读机，感谢计算机有复制、粘贴这种逆天的功能",
            type: 2
          }
        ])
      ]
    },
    {
      tsCard: [
        new CreateInfo("非特殊资料：", [
          {
            tsHeader: "个人主页：",
            tsInfo: "暂无",
            type: 2
          }
        ])
      ]
    }
  ];
}
export class ExpInfoService {
  constructor() {}
  array = [
    {
      tsCard: [
        new CreateInfo("CRUD code：", [
          {
            tsHeader: "增删改查工程师：",
            tsInfo: "能够对任意数据进行潇洒的增删改查处理",
            type: 1
          }
        ]),
        new CreateInfo("ALGOL code", [
          {
            tsHeader: "算法工程师：",
            tsInfo: "对空间复杂度与时间复杂度进行研究，并给出性能优解",
            type: 1
          }
        ]),
        new CreateInfo("F2E：", [
          {
            tsHeader: "前端工程师",
            tsInfo: "没错就是个除了html、css、js以外调接口的",
            type: 2
          }
        ])
      ]
    }
  ];
}
export class StudyInfoService {
  constructor() {}
  array = [
    {
      tsCard: [
        new CreateInfo("如何解决问题：", [
          {
            tsHeader: "查寻资料或者技术相关网站：",
            tsInfo:
              "个人推荐优先级依次是：掘金、脉脉（半娱乐性质）、stackoverflow（好像没有被墙，但是由于该社区采用了google的api，所以没有代理服务器好像访问有点慢。" +
              "可以采用禁止浏览器渲染js，在打开页面后再慢慢渲染的方式，加速打开速度。不过作为一个代码工程师还是应该学会‘科学’上网才好）" +
              "思否、简书、CSDN、知乎等等（其实后面几个在遇到问题的时候，Google一下搜到正确信息的概率也是蛮高的）",
            type: 1
          }
        ])
      ]
    },
    {
      tsCard: [
        new CreateInfo("如何解决问题：", [
          {
            tsHeader: "学会记笔记",
            tsInfo:
              "将曾经帮助你解决了疑惑或者问题的网站网址记录下来，说不定你以后还会用到它。对于你在自主学习对于你自己来说是新技术的内容时，记网址的行为更是必不可少的。" +
              "一个好的工具，是可以提高一个人的工作效率的。虽然听说到达某种大牛程度，是可以忽略这一丢丢的提升的，但我还是建议一下蚂蚁笔记，因为我只用过这个。",
            type: 1
          }
        ])
      ]
    },
    {
      tsCard: [
        new CreateInfo("如何解决问题：", [
          {
            tsHeader: "善用github",
            tsInfo:
              "不存在没有bug的系统，也就不存在没有bug的框架及代码。github最起码可以起到安慰人心的作用，因为你可以在里面的开源包中看到一些其他大牛提出或者找到的BUG" +
              "而如果这个BUG与你所遇到的问题相同，心里是不是就感觉轻松了许多，当然还是需要找寻其他可替代方案的。还有github上面的许多项目也是有专人来解答Issues的",
            type: 1
          }
        ])
      ]
    }
  ];
}
