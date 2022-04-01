// 引入ng核心包的组件
import { Component } from '@angular/core';

// 装饰器，用来定义方法或者类的信息
/*
  模板
  定义组件模板有两个方式
  方式1：使用templateUrl引用一个html文件
  方式2：使用使用temlate + ES6的模板字符串
  样式
  定义组件样式有两个方式
  方式1：使用styleUrls引用css文件
  方式2：使用使用styles + ES6的模板字符串
 */
@Component({
  // 当前组件的引用地址
  selector: 'app-root',
  // 组件模板
  // 组件模板方式2
  // template : '<h1> Hello ES6 的字符串模板 -- {{title}}</h1>',
  // 组件模板方式1
  templateUrl: './app.component.html',
  // 组件的样式文件
  // 组件样式方式1
  // styleUrls: ['./app.component.css']
  // 组件样式方式2
  styles : ['h1 {color: #1976d2; font-family: Arial, Helvetica, sans-serif; font-size: 250%;}']
})
// 组件名称
export class AppComponent {
  title = 'Welcome to my first Angular';
}
