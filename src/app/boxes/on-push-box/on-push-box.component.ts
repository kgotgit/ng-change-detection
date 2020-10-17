import { Component, OnInit, Input, ChangeDetectionStrategy, DoCheck, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-on-push-box',
  templateUrl: './on-push-box.component.html',
  styleUrls: ['./on-push-box.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class OnPushBoxComponent implements OnInit, DoCheck{

  _boxes:[];
  _count=-1;

  @Input()
  set boxes(boxes){
    this._boxes=boxes;
    this.setCount();
  }
  get boxes(){
    return this._boxes;
  }

  constructor(private changeDetectorRef:ChangeDetectorRef) { }

  ngOnInit(): void {}

  setCount(){
    this._count=Array.isArray(this._boxes)?this._boxes.length:0;
  }

  ngDoCheck(): void {
    console.log("ngDoCheck");
    if(this._boxes && this._boxes.length!=this._count){
      this.changeDetectorRef.markForCheck();
      this.setCount();
      console.log("markForCheck");
    }
  }

  noAction($event){
    this.changeDetectorRef.markForCheck();
    console.log("Detect Changes app-on-push-box");
  }

}
