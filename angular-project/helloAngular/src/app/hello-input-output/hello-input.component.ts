import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hello-input-child',
  template: '<hr/>' +
    '<h3 (click)="childChange()">{{num}}</h3>',
})
export class HelloInputChildComponent implements OnInit {
  @Input() num;
  constructor() { }

  ngOnInit(): void {
  }

  @Output() myChange = new EventEmitter();

  childChange() {
    this.myChange.emit();
  }

}
