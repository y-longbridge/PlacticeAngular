import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  styleUrls:['./app.component.css'],
  template: `
  <div>
    <h1>フォーム　Tips</h1>
    <div>
      <h2>文字数カウント機能付きテキストエリア</h2>
      <textare cols="70" rows="5" name="tweet" [(ngModel)]="tweet" (input)="setColor()" ></textarea>
      <div [ngStyle]="myStyle">{{count}}</div>

    </div>

  </div>
  `,
})
/*---------------------------------------------------*/
export class AppComponent  {
  maxlen = 100;   // 入力可能な最大長
  tweet = ''; // テキストエリア初期値
  count = this.maxlen;  // 入力可能残り文字数
  myStyle = { color: '#00f', fontWeight:'normal' }; // 残り文字数のスタイル
  setColor(){

  }
}
