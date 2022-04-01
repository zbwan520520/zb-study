import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello-bind',
  templateUrl: './hello-bind.component.html',
  styleUrls: ['./hello-bind.component.css']
})
export class HelloBindComponent implements OnInit {
  imgSrc = "https://img0.baidu.com/it/u=1755972059,208517416&fm=253&fmt=auto?w=318&h=164"
  constructor() { }

  ngOnInit(): void {
  }

  hello() {
    alert('Hello cat');
  }
}
