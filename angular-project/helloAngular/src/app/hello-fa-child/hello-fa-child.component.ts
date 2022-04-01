import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hello-fa-child',
  template: '<app-name-child [name]="name" [age]="age"></app-name-child><hr/> ' +
    '<app-name-child [name]="name" ></app-name-child>'
})
export class HelloFaChildComponent implements OnInit {

  name = "Kitty";
  age = 12;
  constructor() { }

  ngOnInit(): void {
  }

}


@Component({
  selector: 'app-name-child',
  template: '<div>{{name}} -- {{age}}</div>'
})

export class HelloChildComponent implements OnInit {

  @Input() name;
  // @Input() age;
  // 属性拦截控制
  private _age: number;
  @Input()
  set age(age: number) {
    console.log('设置age・・・');
    this._age = age || 1;
  }
  get age() {
    console.log('获取age・・・');
    return this._age;
  }


  constructor() { }

  ngOnInit(): void {
  }

}
