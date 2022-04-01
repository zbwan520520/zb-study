import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello-form',
  templateUrl: './hello-form.component.html',
  styleUrls: ['./hello-form.component.css']
})
export class HelloFormComponent implements OnInit {

  user = {name:"张三"};
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log('=======================');
    console.log('表单提交');
    console.log('=======================');
  }

}
