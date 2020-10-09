import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { BoxService } from 'src/app/services/box.service';

@Component({
  selector: 'app-box-one',
  templateUrl: './box-one.component.html',
  styleUrls: ['./box-one.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class BoxOneComponent implements OnInit {

  constructor(public boxService:BoxService) { }

  ngOnInit(): void {
  }

}
