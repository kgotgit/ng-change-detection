import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { BoxService } from 'src/app/services/box.service';

@Component({
  selector: 'app-box-one',
  templateUrl: './box-one.component.html',
  styleUrls: ['./box-one.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class BoxOneComponent implements OnInit {

  _boxOneCounter=0;
  constructor(public boxService:BoxService,private changeDetection:ChangeDetectorRef) { }

  ngOnInit(): void {
  }

  increment(){
    this.boxService.increment();
    this._boxOneCounter++;
   /*  this.changeDetection.detectChanges(); */
  }

}
