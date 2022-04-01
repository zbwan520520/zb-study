import { Component } from '@angular/core';

@Component({
  template: `
    <h3> {{text}}</h3>
  `,
  selector: 'hello-world'
})


export class HelloWorldComponet {
  constructor() {}
  text = "the first component";
}
