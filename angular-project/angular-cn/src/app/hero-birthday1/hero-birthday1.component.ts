import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-birthday1',
  template: `
    <p>The hero's birthday is  {{ birthday | date }}</p>
  `
})
export class HeroBirthday1Component implements OnInit {

  birthday = new Date(1989, 4, 8);

  constructor() { }

  ngOnInit(): void {
  }

}
