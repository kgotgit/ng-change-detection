import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-default-box',
  templateUrl: './default-box.component.html',
  styleUrls: ['./default-box.component.css'],
})
export class DefaultBoxComponent implements OnInit {



  @Input() boxes:[];
  constructor() { }

  ngOnInit(): void {


  }



}
