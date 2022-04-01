import { Component, OnInit, DoCheck } from '@angular/core';
import { Router, ActivatedRoute, ParamMap} from "@angular/router";

@Component({
  selector: 'app-router-params',
  template: `
    <div>参数是： {{id}}</div>
  `,
  styleUrls: ['./router-params.component.css']
})
export class RouterParamsComponent implements OnInit, DoCheck {
  id: any;
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }

  ngDoCheck(): void {
    this.id = this.route.snapshot.paramMap.get('id');
  }
}
