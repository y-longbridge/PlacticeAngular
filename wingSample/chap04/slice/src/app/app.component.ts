import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<ul>
    <li>{{str}}</li>
    <li>{{str | slice: 3}}</li>
    <li>{{str | slice: 3: 5}}</li>
    <li>{{str | slice: 7}}</li>
    <li>{{str | slice: -3}}</li>
    <li>{{str | slice: -3: -2}}</li>
    <li>{{str | slice: -10}}</li>
    </ul>`
  })
export class AppComponent  {
  str = 'いろはにほへと';
}
