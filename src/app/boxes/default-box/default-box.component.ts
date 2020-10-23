import { Component,
          OnInit,
          Input,
          ChangeDetectionStrategy,
          DoCheck,
          AfterViewChecked,
          AfterContentInit,
          AfterContentChecked} from '@angular/core';

@Component({
  selector: 'app-default-box',
  templateUrl: './default-box.component.html',
  styleUrls: ['./default-box.component.css'],
  //Not mandatory to declare explicitly as it is default
  changeDetection:ChangeDetectionStrategy.Default
})
export class DefaultBoxComponent implements OnInit,DoCheck {

  @Input() boxes:[];

  constructor() {}

  ngOnInit(): void {}

  ngDoCheck(): void {
    console.log("doCheck");
  }

}
