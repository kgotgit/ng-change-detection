import { Component, ChangeDetectionStrategy, DoCheck } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements DoCheck {

  title = 'ng-change-detection';

  boxes=[];

  onAdd(){
        this.boxes.push("box "+this.boxes.length);
  }
  ngDoCheck(): void {
   console.log("doCheck");
  }
}
