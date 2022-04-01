import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-form-template',
  templateUrl: './hero-form-template.component.html',
  styleUrls: ['./hero-form-template.component.css']
})
export class HeroFormTemplateComponent {
  hero = {name: 'Dr.', alterEgo: 'Dr. What'};
}
