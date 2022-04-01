import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-hello-style-type',
  templateUrl: './hello-style-type.component.html',
  styleUrls: ['./hello-style-type.component.css'],
  // 受自己的样式影响，不受共通样式影响
  // encapsulation : ViewEncapsulation.ShadowDom
  // 默认值，即受自己的样式影响，也受共通样式影响
  // encapsulation : ViewEncapsulation.Emulated
  // 外部的标签也会受自己样式影响
  encapsulation : ViewEncapsulation.None
})
export class HelloStyleTypeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
