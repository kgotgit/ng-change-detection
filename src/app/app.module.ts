import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NestedBoxesModule } from './nested-boxes/nested-boxes.module';
import { OnPushBoxComponent } from './boxes/on-push-box/on-push-box.component';
import { DefaultBoxComponent } from './boxes/default-box/default-box.component';

@NgModule({
  declarations: [
    AppComponent,
    OnPushBoxComponent,
    DefaultBoxComponent
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
