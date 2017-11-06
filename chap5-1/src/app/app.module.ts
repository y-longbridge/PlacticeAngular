import { NgModule }      from '@angular/core';
import { FormsModule }   from '@angural/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
