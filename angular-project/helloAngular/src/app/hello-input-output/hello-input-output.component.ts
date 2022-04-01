import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello-input-output',
  template: '<h3>{{num}}</h3>' +
    '<app-hello-input-child [num]="num" (myChange)="changeNum()"></app-hello-input-child>',
  styleUrls: ['./hello-input-output.component.css']
})
export class HelloInputOutputComponent implements OnInit {

  num = 12
  constructor() { }

  ngOnInit(): void {
  }

  changeNum() {
    this.num = 24;
  }
}
