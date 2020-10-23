import { Injectable } from '@angular/core';

@Injectable({
  providedIn:'root'
})
export class BoxService{

  counter=0;

  constructor(){
  }

  increment(){
    this.counter++;
  }
}
