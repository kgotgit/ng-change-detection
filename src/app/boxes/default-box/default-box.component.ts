import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default-box',
  templateUrl: './default-box.component.html',
  styleUrls: ['./default-box.component.css']
})
export class DefaultBoxComponent implements OnInit {

  boxes=[];
  constructor() { }

  ngOnInit(): void {

    this.boxes.push("boxes "+this.boxes.length);
  }

}
