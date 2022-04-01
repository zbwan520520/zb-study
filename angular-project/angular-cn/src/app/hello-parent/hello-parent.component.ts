import { Component, Input } from '@angular/core';
import { HEROES } from "./hero";
import { Hero} from "./hero";

@Component({
  selector: 'app-hello-parent',
  template: `
    <h2> {{master}} controls {{heroes.length}} heroes</h2>
    <app-hero-child *ngFor="let hero of heroes" [hero]="hero" [master]="master"></app-hero-child>
  `
})
export class HelloParentComponent {

  heroes = HEROES;
  master = 'master';
}

@Component({
  selector: 'app-hero-child',
  template: `
    <h3>{{hero.name}} says:</h3>
    <p>I, {{hero.name}}, am at your service, {{masterName}}.</p>
  `
})
export class HelloChildComponent {

  @Input() hero!: Hero;
  @Input('master') masterName = '';

}
