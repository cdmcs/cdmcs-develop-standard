---
title: 使用须知
date: 2024-04-08
category:
  - 公共组件
order: 1
---




#### 写在前面

&emsp;&emsp;此组件库结合了[element-ui](https://element.eleme.cn/#/zh-CN/component/installation)封装了一些公司日常开发过程中常用的组件、方法，诣在提高团队整体的开发效率。

&emsp;&emsp;此组件库包含了[element-ui](https://element.eleme.cn/#/zh-CN/component/installation)使用的组件和方法，因此当[下载此组件库](versions.md)在页面引入后，无需再额外引入[element-ui](https://element.eleme.cn/#/zh-CN/component/installation)的js文件和css文件，



#### 组件库文件存放位置

组件库存放位置应在公共路径，让每一位开发者在页面头部引入即可，后面公共库代码修改也只需要替换公共路径下的文件，引入方式也无需修改(建议不带版本号)，减少代码维护工作。


#### 引入方式

以下是引用公共库文件方法示例代码==（复制粘贴后请手动删除注释内容）==：
```html
<!-- 在页面头部 -->
<head>
    <!-- 引用公共库的css -->
    <link rel="stylesheet" href="../dist/index.css" />
    <!-- 引入vue -->
    <script src="https://unpkg.com/vue@2/dist/vue.js"></script>
    <!-- 引入公共库的js -->
    <script src="../dist/index.js"></script>
</head>
```

#### 使用注意

一切在[element-ui](https://element.eleme.cn/#/zh-CN/component/installation)文档上有介绍的按官方文档正常使用即可，一切组件无需手动在页面注册可以直接使用。

若用到公共组件，则页面使用方法为：`<cdmcs-xxx />`。

若用到公共方法，则页面使用方法为：`CDMCS.xxx`或`window.CDMCS.xxx`。

注意：**CDMCS.xxx或window.CDMCS.xxx使用方法只能在JS中直接使用，无法在html中直接使用，若想在html中直接使用CDMCS.xxx方法，查看下面示例代码：**

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <link rel="stylesheet" href="../dist/index.css" />
    <script src="https://unpkg.com/vue@2/dist/vue.js"></script>
    <script src="../dist/index.js"></script>
  </head>
  <body>
    <div id="app" v-cloak>
      目前你使用的公共组件库版本为：{{CDMCS.version}}
    </div>
  </body>

  <script>
    new Vue({
      el: "#app",
      data: function () {
        return {
          CDMCS: window.CDMCS || null,
        };
      },
    });
  </script>
</html>

```

更多详细常用公共组件或方法，可以详细[查看这篇文章](intro.md)。

