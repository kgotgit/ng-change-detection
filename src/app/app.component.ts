import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'ng-change-detection';

  boxes=[];

  onAdd(){
    this.boxes.push("boxes "+this.boxes.length);
  }
}
