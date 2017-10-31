import { NgModule, LOCALE_ID }      from '@angular/core'; // LOCALE_IDを追加
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent ],
  providers: [{ provide: LOCALE_ID, useValue: 'ja-JP' }], // 追加 (日本：ja-JP,ドイツ:de-DE)
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
