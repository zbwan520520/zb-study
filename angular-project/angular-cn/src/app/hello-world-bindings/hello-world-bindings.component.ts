import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hello-world-bindings',
  templateUrl: './hello-world-bindings.component.html',
  styleUrls: ['./hello-world-bindings.component.css']
})
export class HelloWorldBindingsComponent implements OnInit {

  fontColor = 'blue'
  sayHelloId = 1;
  canClick = false;
  message = 'Hello, World';
  constructor() { }

  ngOnInit(): void {

  }

  sayMessage() {
    alert(this.message);
  }

}
