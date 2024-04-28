---
title: 组件说明文档
date: 2024-04-08
category:
  - 公共组件
order: 2
---

### 公共组件

#### cdmcs-phone

控制手机号是否脱敏显示

##### 使用

```html
<!-- 在页面中使用 -->
<cdmcs-phone />
```

##### 参数

| 参数      | 说明               | 类型    | 默认值 | 可选值 |
| :-------- | :----------------- | :------ | :----- | ------ |
| v-model   | 控制手机号是否脱敏 | boolean | true   | -      |
| telephone | 显示的11位手机号   | string  | -      | -      |
| show-icon | 是否显示隐藏图标   | boolean | true   | -      |

##### 事件

| 参数   | 说明                           | 类型                  |
| :----- | :----------------------------- | :-------------------- |
| change | 当控制手机号是否脱敏显示时触发 | (value:boolean)=>void |


### 公共方法

#### useValidate

使用`useValidate`可验证用户输入的、信息是否正确。


##### 使用

```vue
<template>
  <el-form-item prop="phone" label="手机号码" 
    :rules="[ 
      { required: true, message: '请输入手机号码', trigger: 'blur' },
      {  trigger: ['blur', 'change'], validator: validateTelephoneByHand}
  ]">
</template>


<script>
  new Vue({
    el: "#app",
    data: function () {
      return {
        form: {
          phone: "",
        },
        // 将window上的CDMCS方法挂载到vue
        CDMCS: window.CDMCS || null,
      };
    },
    methods: {
      // 手动提示校验错误提示
      validateTelephoneByHand: function (rule, value, callback) {
        this.CDMCS.useValidate("tel", value) ? callback() : callback(new Error("亲，请输入正确的手机号！"));
      },
    },
  });
</script>


```




##### 参数

**类型：**`useValidate(type, value) => boolean`


| 参数  | 说明     | 类型   | 默认值 | 可选值 |
| :---- | :------- | :----- | :----- | ------ |
| type  | 校验类型 | string | -      | 见下   |
| value | 校验的值 | string | -      | -      |

传入第一个参数校验类型，再传入第一个参数需要校验的值，调用返回boolean类型。为true代表校验通过，为false代表校验失败。

**type可选值**

- `id`——校验身份证号
- `tel`——校验手机号

**使用场景：**

当需要校验不通过时想手动处理逻辑可调用此方法。

#### useValidateIdNum

通过调用`useValidateIdNum`使用预设的校验错误失败提示。

##### 使用

```vue
<template>
  <el-form-item
    prop="idNum"
    label="身份证号"
    :rules="[
      { required: true, message: '身份证号不可为空', trigger: 'blur' },
      {  trigger: ['blur', 'change'],validator: CDMCS.useValidateIdNum}
    ]">
    <el-input v-model="form.phone" placeholder="请输入身份证号(使用预设校验提示错误信息)"></el-input>
  </el-form-item>
</template>


<script>
  new Vue({
    el: "#app",
    data: function () {
      return {
        form: {
          idNum: "",
        },
        // 将window上的CDMCS方法挂载到vue，然后在上面的validator中直接使用CDMCS.useValidateIdNum
        CDMCS: window.CDMCS || null,
      };
    },
  });
</script>


```

#### useValidateIdNum

通过调用`useValidateIdNum`使用预设的校验错误失败提示。

##### 使用

```vue
<template>
  <el-form-item
    prop="phone"
    label="手机号码"
    :rules="[
      { required: true, message: '手机号码不可为空', trigger: 'blur' },
      {  trigger: ['blur', 'change'],validator: CDMCS.useValidateTelephone}
    ]">
    <el-input v-model="form.phone" placeholder="请输入手机号码(使用预设校验提示错误信息)"></el-input>
  </el-form-item>
</template>


<script>
  new Vue({
    el: "#app",
    data: function () {
      return {
        form: {
          phone: "",
        },
        // 将window上的CDMCS方法挂载到vue，然后在上面的validator中直接使用CDMCS.useValidateTelephone
        CDMCS: window.CDMCS || null,
      };
    },
  });
</script>


```