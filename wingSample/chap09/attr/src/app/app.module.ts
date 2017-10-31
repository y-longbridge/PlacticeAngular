import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { ColoredDirective } from './colored.directive';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, ColoredDirective ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
