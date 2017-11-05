import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule} from '@angular/forms';

import { AppComponent }  from './app.component';
import { MyComponent1 } from './my.component1';
import { MyComponent2 } from './my.component2';


@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, MyComponent1, MyComponent2 ],
  entryComponents: [ MyComponent1, MyComponent2 ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
