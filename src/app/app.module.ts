import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NestedBoxesModule } from './nested-boxes/nested-boxes.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NestedBoxesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
