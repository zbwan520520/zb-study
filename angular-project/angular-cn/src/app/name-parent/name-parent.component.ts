import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-name-parent',
  template: `
    <h2>Master controls {{names.length}}</h2>
    <app-name-child *ngFor="let name of names" [name]="name"></app-name-child>
  `
})
export class NameParentComponent {
  names = ['张三', "    ", "王五"];
}

@Component({
  selector: 'app-name-child',
  template: `
    <h3>{{name}}</h3>
  `
})
export class NameChildComponent {
  @Input()
  get name(): string {
    return this._name;
  }
  set name(name: string) {
    this._name = (name && name.trim()) || '<no name set>';
  }

  private _name = '';
}
