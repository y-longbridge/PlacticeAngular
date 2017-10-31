import { Component } from '@angular/core';


@Component({
  selector: 'my-app',
  template:
  `
  <div>
    <h2>▼pat1</h2>
    <form>
      <label for = "name">名前：</label>
      <!-- ngModel指定時はname必須 -->
      <!--
        [property]="value" テンプレート ← コンポーネント
        (event) = "handler()" テンプレート → コンポーネント
        [(ngModel)] = "value" テンプレート ←→ コンポーネント -->
      <input id = "name" name = "name" type = "text" [(ngModel)] = "myName" />
      <div>コンニチハ {{myName}}サン</div>

      <h3>別の書き方 inputイベントを利用</h3>
      <input id="name1" name="name1" type="text"
        [ngModel] = "myName1"
        (input)='myName1=$event.target.value' />
        <div>コンバンハ {{myName1}}サン</div>

      <h3>別の書き方 ngModelのchangeイベントを利用</h3>
      <input id="name2" name="name2" type="text"
        [ngModel] = "myName2"
        (ngModelChange)='myName2=$event' />
        <div>コンバンハ {{myName2}}サン</div>

    </form>
  </div>
  <div>
    <form>
    <h2>▼pat2 データバインディング時に入力値を加工する -入力値を大文字にする-</h2>
    <input id="name3" name="name3" type="text"
      [ngModel] = "myName3"
      (ngModelChange) = "myName3=$event.toUpperCase()" />
      <div>HELLO {{myName3}}</div>
    </form>
  </div>
  `,
  styles:
  [`
    h2 {
      color : #b5495b;
      font-size: 110%;
    }

    h3 {
      font-size: 102%;
    }
  `]
})
// ***************************************************** //
// 双方向バインディング　
// ※ app.module.tsにFormsModuleを追加する ※
export class AppComponent  {
  // ▼pat1▼ //
  myName: string = 'はなこ';
  myName1: string = 'はなこ1';
  myName2: string = 'はなこ2';
  myName3: string = 'HANAKO ';


}
