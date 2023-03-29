---
title: 配套费核缴管理系统
date: 2023-03-29
category:
  - 公共组件说明
---


## 选择建设单位

:::details 查看示例代码

```javascript
function open_JSDW() {
     var win = new MdiWindow(window, 1000, 420, 0, 0, true);
     win.setTitle("新增建设单位", "font-family:微软雅黑;font-size:14px");
     win.btnClose(true);
     win.btnMax(false);
     win.btnMin(false);
     win.isResize(false);
     win.onClose(function (res) {
         console.log('res', res);//返回参数见下
     });
     win.load("./add_jsdw.jsp?t=" + Math.random(), window, function (obj) {});//jsp文件路径仅供参考
}
```
:::

返回参数res说明：

| 参数名      | 数据格式      | 说明                                                 |
| :---------- | :------------ | :--------------------------------------------------- |
| DWMC        | json 或string | 选择的单位信息，详细参数见下                         |
| SHXYDM      | string        | 社会信用代码，取值以这个为准，当然下面DWMC也返回的有 |
| LXRDH       | string        | 联系人电话                                           |
| LXRSFZHM    | string        | 联系人身份证号                                       |
| LXRXM       | string        | 联系人姓名                                           |
| inputByhand | boolean       | 是否是手动输入，值为true或false ，默认为false        |

DWMC参数说明：

1. 当inputByhand值为`false`时，DWMC参数为`json`格式，见下：

| 参数名         |
| :------------- |
| companyCode    |
| companyName    |
| companyType    |
| countyNum      |
| guid           |
| id             |
| licenseNum     |
| officePhone    |
| outerOrganCode |
| text           |

2. 当inputByhand值为`true`且存储过程表中有公司名字时，DWMC参数为`json`，见下。
   
| 参数名      | 数据格式 | 说明             |
| :---------- | :------- | :--------------- |
| C_LXR_LXDH  | string   | 联系人电话       |
| C_GUID      | string   | guid             |
| C_LXR_SFZHM | string   | 联系人身份证号码 |
| C_LXR_NAME  | string   | 联系人姓名       |
| C_SHXYDM    | string   | 社会信用代码     |
| C_QYMC      | string   | 企业名称         |


3. 当inputByhand值为`true`且存储过程表中无公司名字时，DWMC参数为`string`，值就是公司的名称（新增）。

## 缴费 or 退费公共组件

:::details 查看示例代码

```javascript
open_PTFHJSH: function () {
  var that = this;
  var data = {
    id: 1, ////id为选中项的id
    readonly: false,//readonly：true是只读，false可提交审核结果和意见
    fn_name:that.httpRequest,//函数名
    menu:[
      //非必传，但是可以显示的标签内容或标签顺序，value值不可更改，text可更改
						{
							text: "配套费缴费信息",
							value: "jfxx",
						},
						{
							text: "电子材料证明",
							value: "dzcl",
						},
						{
							text: "缴费凭证信息",
							value: "pzxx",
						},
		],
    openDefault:"jfxx",//非必传，默认打开传进来的第一项或不传的时候显示缴费信息
  }
   var win = top.$.MdiWindow(window,"80%", "90%", 0, 0, true);
   win.setTitle("配套费核缴审核", "font-family:微软雅黑;font-size:14px");//窗口标题自己设置
   win.setWindowArguments(data);
   win.btnClose(true);
   win.btnMax(false);
   win.btnMin(false);
   win.isResize(false);
   win.onClose(function (res) {
      if (res) {
          that.$message({
              message: '保存成功',
              type: 'success'
          });
      }
   })
   win.load('../../utils/pthhjsh_form.jsp', window, function (obj) { });//路径仅供参考
}
//模拟请求
sendRequest: function (res, callback) {
  //res为弹窗传回当前页面的参数，详细见下。
  //callback主要为储错误信息，详细见下
    var timer = setTimeout(() => {
        console.log('timer', res);
        callback({
            sysError: "",
            PN_RET: "0",
            PC_MSG: ""
        })
        clearTimeout(timer)
    }, 2000);
}
```

:::

win.onClose返回参数说明：

数据格式：json

| 参数名 | 数据格式 | 说明                       |
| :----- | :------- | :------------------------- |
| value  | json     | 审核结果，json格式详细见下 |
| SHYJ   | string   | 审核意见                   |

SHJG数据格式说明：
| 参数名 | 数据格式 | 说明                        |
| :----- | :------- | :-------------------------- |
| SHJG   | number   | 1为审核通过，0为审核退回    |
| name   | string   | 值为：审核通过  or 审核退回 |

 callback所需参数说明：
| 参数名   | 数据格式 | 说明           |
| :------- | :------- | :------------- |
| sysError | string   | 客户端错误信息 |
| PN_RET   | string   | 错误标志       |
| PC_MSG   | string   | 错误信息       |

## 流程记录公共组件

:::details 查看示例代码

```javascript
open_process_record: function () {
    var win = top.$.MdiWindow(window, 1000, 550, 0, 0, true);
    win.setTitle("配套费核缴审核-流程记录", "font-family:微软雅黑;font-size:14px");//title自己设置
    win.setWindowArguments({ id: 1,flag:false });
    win.btnClose(true);
    win.btnMax(false);
    win.btnMin(false);
    win.isResize(false);
    win.load('../../utils/process_record.jsp', window, function (obj) { });//jsp路径仅供参考
},

```
:::

setWindowArguments接收参数说明：

数据格式：json

| 参数名 | 数据格式         | 说明                                            |
| :----- | :--------------- | :---------------------------------------------- |
| id     | string or number | 编号，如PN_SQJLBH                               |
| flag   | boolean          | flag为true是退费，为false为核缴，不传默认为核缴 |
