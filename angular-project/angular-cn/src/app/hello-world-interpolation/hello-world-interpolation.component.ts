import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hello-world-interpolation',
  templateUrl: './hello-world-interpolation.component.html',
  styleUrls: ['./hello-world-interpolation.component.css']
})
export class HelloWorldInterpolationComponent implements OnInit {

  message = '';

  constructor() { }

  ngOnInit(): void {
  }

}
