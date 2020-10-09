import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { BoxService } from 'src/app/services/box.service';

@Component({
  selector: 'app-box-two',
  templateUrl: './box-two.component.html',
  styleUrls: ['./box-two.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class BoxTwoComponent implements OnInit {


  _boxOneCounter=0;


  @Input()
  set boxOneCounter(counter){
    this._boxOneCounter=counter;
  }
  constructor(public boxService:BoxService) { }

  ngOnInit(): void {
  }

}
