import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello-everyone',
  templateUrl: './hello-everyone.component.html',
  styleUrls: ['./hello-everyone.component.css']
})
export class HelloEveryoneComponent implements OnInit {
  flag = false;
  citys = ['北京', '上海', '广州', '深圳'];
  fruits = [
    {id:1, name:'apple'},
    {id:2, name:'orange'},
    {id:3, name:'banana'}
  ]
  char = 'C';
  constructor() { }

  ngOnInit(): void {
  }

}
