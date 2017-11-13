import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  styleUrls:['./app.component.css'],
  template: `
  <div>
    <h1>フォーム　Tips</h1>

    <div>
      <h2>文字数カウント機能付きテキストエリア</h2>
      <textarea cols="70" rows="5" name="tweet" [(ngModel)]="tweet" (input)="setColor()" ></textarea>
      <div [ngStyle]="myStyle">{{count}}</div>
    </div>


    <div>
      <h2>テキストボックスの内容を区切り文字で分割する</h2>
      <label for="mail"> メールアドレス</label>
      <textarea id="mail" name="mail" type="text"
          [ngModel]="emails.join(';')"
           (ngModelChange)="emails=$event.split(';')" ></textarea>
      <ul>
        <li *ngFor= "let email of emails">{{email}}</li>
      </ul>
    </div>

  </div>
  `,
})
/*---------------------------------------------------*/
export class AppComponent  {
  maxlen = 100;   // 入力可能な最大長
  tweet = ''; // テキストエリア初期値
  count = this.maxlen;  // 入力可能残り文字数
  myStyle = { color: '#00f', fontWeight: 'normal' }; // 残り文字数のスタイル
  // テキストエリアの変更を監視
  setColor() {
    // 残りの文字数を反映
    this.count = this.maxlen - this.tweet.length;
    // 残りの文字数に応じてスタイルを変更
    if (this.count > 10) {
      this.myStyle = { color: '#00f', fontWeight: 'normal' };
    } else if (this.count > 0) {
      this.myStyle = { color: '#f0f', fontWeight: 'normal' };
    } else {
      this.myStyle = { color: '#f00', fontWeight: 'bold' };
    }
  }

  emails : string[] = [];
}
