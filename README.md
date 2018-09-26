# vue_components
基于vue的公用组件

## 1、Tree （递归遍历树节点）
#### Attributes
  参数  | 说明  | 类型  | 默认值
  -------------- | -------------- | -------------- | --------------
 content  | 要递归的数据  | Array  | []
 autoExpandParent  | 是否自动展开父节点  | Boolean  | false
 defaultExpandAll  | 默认展开所有父节点  | Boolean  | false
 defaultExpandParent  | 默认展开指定的父节点(父节点ID值)  | String  | ''
 defaultSelectedKeys  | 默认选中指定的节点(子节点ID值)  | String  | ''
 icon  | 显示的icon图标  | String  | ''
 activeIcon  | 选中显示的icon图标  | String  | ''
#### Events
  参数  | 说明  
  -------------- | -------------- 
 onExpand  | 选中值反生变化的事件  

## 2、Input （输入框）
#### Attributes
  参数  | 说明  | 类型  | 默认值
  -------------- | -------------- | -------------- | --------------
 type  | 输入框类型  | String  | ''
 placeholder  | 占位文本  | String  | ''
 value  | 绑定文本框的值  | String  | ''
 maxLength  | 最大长度  | String  | ''
 className  | 类名  | String  | ''
#### Events
  参数  | 说明  
  -------------- | -------------- 
 handleFocus  | 获取焦点触发的事件
 handleInput  | 值发生改变触发的事件
 handleBlur  | 失去焦点触发的事件
 
## 3、Message （消息框）
#### 用法
```
  // main.js
  import message from './Message'
  Vue.use(message)
  // 在组件中使用this.$message()引用
```
#### Attributes
  参数  | 说明  | 类型  | 默认值
  -------------- | -------------- | -------------- | --------------
 title  | 显示的标题  | String  | ''
 msg  | 显示的主要内容（如果只有这一个参数，则默认3秒后自动关闭）  | String  | ''
 closeBtn  | 是否显示关闭按钮  | Boolean  | false
 showCancelBtn  | 是否显示取消按钮  | Boolean  | false
 showSuccessBtn  | 是否显示确定按钮  | Boolean  | false
 cancelBtnText  | 取消按钮文字  | String  | '取消'
 successBtnText  | 确定按钮文字  | String  | '确定'
 duration  | 多长时间后关闭（有按钮显示则失效）  | Number  | 3000
#### Events
  参数  | 说明  
  -------------- | -------------- 
 onClose  | 消息框隐藏触发的事件
 successCallback  | 点击确定触发的事件