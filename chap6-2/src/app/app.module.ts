import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';

 import { EditComponent }  from './edit.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, EditComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
