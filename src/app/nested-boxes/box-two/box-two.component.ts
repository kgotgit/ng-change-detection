import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-box-two',
  templateUrl: './box-two.component.html',
  styleUrls: ['./box-two.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class BoxTwoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
