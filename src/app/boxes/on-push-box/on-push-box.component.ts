import { ChangeDetectionStrategy,
         ChangeDetectorRef,
         Component, DoCheck, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-on-push-box',
  templateUrl: './on-push-box.component.html',
  styleUrls: ['./on-push-box.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class OnPushBoxComponent implements OnInit,DoCheck {

  _boxes:[];
  _size=-1;

  /**Set the boxes data recieved from parent component */
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

  /**Set the size of the boxes array which can be used */
  setCount(){
    this._size=Array.isArray(this._boxes)?this._boxes.length:0;
  }

  /**Check if the boxes size changes as compared to the size of local
   * variable and add view to the change detector queue via markForCheck*/
  ngDoCheck(): void {
    console.log("doCheck");
    if(this._boxes && this._boxes.length!=this._size){
      this.changeDetectorRef.detectChanges();
      this.setCount();
      console.log("markForCheck called");
    }
  }
}


