import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello-temlate',
  templateUrl: './hello-temlate.component.html',
  styleUrls: ['./hello-temlate.component.css']
})
export class HelloTemlateComponent implements OnInit {

  text = '';
  people = null;
  constructor() { }

  ngOnInit(): void {
  }

  show01() {
    console.log('=====================')
    console.log(this.text);
    console.log('=====================')
  }

  show02(phone) {
    console.log('=====================')
    console.log(phone);
    console.log('=====================')
  }

}
