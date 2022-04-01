import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-birthday2',
  template: `
    <p>The hero's birthday is {{ birthday | date:format}}</p>
    <button (click)="toggleFormat()">ToggleFormat</button>
    <p>The chained hero's birthday is {{ birthday | date:'fullDate' | uppercase}}</p>
  `
})
export class HeroBirthday2Component implements OnInit {

  birthday = new Date(1989,4,8);
  toggle = true;

  get format() {
    return this.toggle ? 'shortDate' : 'fullDate';
  }
  toggleFormat() {
    this.toggle = !this.toggle;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
