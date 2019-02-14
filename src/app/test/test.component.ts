import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'of-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
  encapsulation: ViewEncapsulation.Native
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
