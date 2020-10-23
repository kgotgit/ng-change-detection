import { ChangeDetectionStrategy, Component, DoCheck, OnInit } from '@angular/core';
import { BoxService } from 'src/app/services/box.service';

@Component({
  selector: 'app-box-one',
  templateUrl: './box-one.component.html',
  styleUrls: ['./box-one.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class BoxOneComponent implements OnInit,DoCheck {

  _boxOneCounter=0;
  constructor(public boxService:BoxService) { }


  ngOnInit(): void {
  }

  increment(){
    this.boxService.increment();
  }


  ngDoCheck(): void {
    console.log("doCheck");
  }
}
