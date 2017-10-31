import { NgModule, LOCALE_ID }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent ],
  providers: [{provide: LOCALE_ID, useValue: 'ja-JP'}],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
