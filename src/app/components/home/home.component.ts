import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public sort: string;
  // note https://www.ryadel.com/en/ts2564-ts
  // -property-has-no-initializer-typescript-error-fix-
  // visual-studio-2017-vs2017/
  constructor() { }

  ngOnInit(): void {
  }

}
