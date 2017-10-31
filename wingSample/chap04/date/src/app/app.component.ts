import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<ul>
    <li>整形なし：{{current | date }}</li>
    <li>整形あり（デフォルト）：{{current | date}}</li>
    <li>整形あり（medium）：{{current | date: 'medium'}}</li>
    <li>整形あり（書式指定）：{{current | date: 'y MM dd（EEE）'}}</li>
  </ul>`
})
export class AppComponent  {
  current = new Date();
}
