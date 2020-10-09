import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { BoxService } from 'src/app/services/box.service';

@Component({
  selector: 'app-box-three',
  templateUrl: './box-three.component.html',
  styleUrls: ['./box-three.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class BoxThreeComponent implements OnInit {

  _boxOneCounter=0;


  @Input()
  set boxOneCounter(counter){
    this._boxOneCounter=counter;
  }
  constructor(public boxService:BoxService) { }

  ngOnInit(): void {
  }

}
