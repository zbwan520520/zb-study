import {Input, Directive, ElementRef, OnInit, HostListener} from '@angular/core';

// 选择器
@Directive({
  // 属性
  selector: '[appHighlight]',
  // 样式
  // selector: '.appHighlight',
})
export class AppHighlightDirective{
  @Input() appHighlight;
  // 注入ElementRef对象
  constructor(private el : ElementRef) {

  }

  ngOnInit(): void {
    // el.nativeElement就是DOM节点
//    if (this.appHighlight === '') {
//      this.el.nativeElement.style.background = 'yellow';
//    } else {
//      this.el.nativeElement.style.background = this.appHighlight;
//    }
  }

  // 事件控制颜色显示
  @HostListener('mouseover') onMouseover(){
     // el.nativeElement就是DOM节点
      if (this.appHighlight === '') {
        this.el.nativeElement.style.background = 'yellow';
      } else {
        this.el.nativeElement.style.background = this.appHighlight;
      }
  }
  @HostListener('mouseout') onMouseout(){
    this.el.nativeElement.style.background = null;
  }
}
