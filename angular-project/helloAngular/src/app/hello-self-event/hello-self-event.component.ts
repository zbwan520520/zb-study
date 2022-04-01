import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello-self-event',
  template: '<button (click)="add()">计数</button>' +
    '<h3>count: {{count}}</h3>' +
    '<app-hello-self-child (myClick)="add()"></app-hello-self-child>',
  styleUrls: ['./hello-self-event.component.css']
})
export class HelloSelfEventComponent implements OnInit {

  count = 0;
  constructor() { }

  ngOnInit(): void {
  }

  add() {
    this.count ++;
  }

}
