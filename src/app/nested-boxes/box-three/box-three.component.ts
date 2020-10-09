import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { BoxService } from 'src/app/services/box.service';

@Component({
  selector: 'app-box-three',
  templateUrl: './box-three.component.html',
  styleUrls: ['./box-three.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class BoxThreeComponent implements OnInit {

  constructor(public boxService:BoxService) { }

  ngOnInit(): void {
  }

}
