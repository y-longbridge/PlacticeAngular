import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template:
  `
  <h1>chap3-5:イベントバインディング</h1>
  <div>
    <h2>▼pat1 ボタンクリックで現在時刻を表示</h2>
    <input type = "button" (click) = "showDateTime()" value = "現在時刻" />
    {{dateTimeValue}}
  </div>
  <div>
    <h2>▼pat2 イベントオブジェクトを取得</h2>
    <input type = "button" (click) = "showEventSource($event)" value = "コンソールにイベントオブジェクト表示" />
  </div>
  <div>
    <h2>▼pat3 div要素のマウスの座標を表示</h2>
    <div id="main" class="div-mouse-area" (mousemove) = "showMouseArea($event)">
      <p>screen : {{screenX}} × {{screenY}} </p>
      <p>page : {{pageX}} × {{pageY}} </p>
      <p>client : {{clientX}} × {{clientY}} </p>
      <p>offset : {{offsetX}} × {{offsetY}} </p>
    </div>
  </div>
  <div>
    <h2>▼pat4 イベント発生時のキー情報</h2>
    <form>
      <input id="key" name="key" (keydown) = "showKey($event)" />
    </form>
    <div>キーコード : {{keyCode}}</div>
    <div [hidden] = "!altKey">[Alt]</div>
    <div [hidden] = "!ctrlKey">[Ctrl]</div>
    <div [hidden] = "!shiftKey">[Shift]</div>
  </div>
  <div>
    <h2>▼pat5 デフォルトのイベントをキャンセルする</h2>
    <form>
      <label for="zip">郵便番号：</label>
      <input id="zip" name="zip" type="text" size="10" (keypress) = "maskZip($event)" />
    </form>
  </div>
  <div>
    <h2>▼pat5 イベントバブリング（伝播 -でんぱ- ）をキャンセルする</h2>
    <div id="outer" (click) = "onClickOuter()">outer
        <div id="inner" (click) = "onClickInner($event)">inner
        </div>
    </div>
  </div>
  <div>
    <h2>▼pat6 テンプレート参照変数による入力値の取得</h2>
    <h3>入力値を取得するダメな例</h3>
    <input id="txt1" name="txt1" type="text" (input) ="showInputValue1($event)" />
    <ul [innerHTML] = "inputValue1"></ul>
    <h3>テンプレート参照変数を使用する</h3>
    <input #txt2 name="txt2" type="text" (input) = "showInputValue2(txt2.value)" />
    <ul [innerHTML] = "inputValue2"></ul>
    <h3>テンプレート参照変数を使用する2 ※(change)=0によりデータバインディングが行われる※ </h3>
    <label>姓：<input #lastName type="text" (change) = "0" /></label><br/>
    <label>名：<input #firstName type="text" (change) = "0" /></label>
    <div>コンニチハ　{{lastName.value}}  {{firstName.value}} サン！</div>

  </div>
  <div>
    <h2>▼pat7 Enterキー押下専用イベント keyup.enter</h2>
    <p>Enterキーによる操作は、通常「Keyupイベントでキー判定を行う」という手順だけど、<br/>
    Enterキーによる操作は頻度が多いので、専用の「keyup.enter】イベントが用意されている</p>
    <input id="txtKeyup" name="txtKeyup" type="text" (keyup.enter) = "showKeyupEnter($event)" />
    <ul [innerHTML] = "inputValue3"></ul>
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
    .div-mouse-area {
      /* position:absolute; */
      margin:50px;
      width:300px;
      height:300px;
      border:solid 1px #000;
      background-color: #393f4c;
      color: #fff;
    }
    #outer {
      height: 200px;
      width: 350px;
      margin: 50px;
      padding: 10px;
      border: 1px solid #000;
    }
    #inner {
      height: 10px;
      width: 100px;
      margin-top: 50px;
      margin-left: 30px;
      padding: 20px;
      border: 1px solid #000;
    }

  `]
})

// **************************************************************** //
// イベントバインディング
/* 利用できる主なイベント
click                 ・・・ クリック時
dblclick              ・・・ ダブルクリック時
mousedown             ・・・ マウスボタンを押したとき
mouseup               ・・・ マウスボタンを離したとき
mouseenter            ・・・ マウスポインターが要素に入った時
mousemove             ・・・ マウスポインターが要素内を移動した時
mouseleave            ・・・ マウスポインターが要素から離れたとき
focus                 ・・・ マウスポインターが要素にフォーカスした時
blur                  ・・・ 要素からフォーカスが外れたとき
keydown               ・・・ キーを押したとき
keypress              ・・・ キーを押し続けている時
keyup                 ・・・ キーを離したとき
input                 ・・・ 入力内容が変更されたとき
select                ・・・ テキストが選択されたとき
reset                 ・・・ リセット時
submit                ・・・ サブミット時
*/
export class AppComponent  {
  // ▼pat1
  dateTimeValue: string;
  // ▼pat3
  screenX: number = 0;
  screenY: number = 0;
  pageX: number = 0;
  pageY: number = 0;
  clientX: number = 0;
  clientY: number = 0;
  offsetX: number = 0;
  offsetY: number = 0;
  // ▼pat4
  keyCode: string = '';
  altKey: boolean = false;
  ctrlKey: boolean = false;
  shiftKey: boolean = false;
  // ▼pat6
  inputValue1: string = '';
  inputValue2: string = '';
  // ▼pat7
  inputValue3: string = '';

  // ▼pat1▼ ボタンクリックで現在時刻を表示 //
  showDateTime() {
    this.dateTimeValue =  new Date().toLocaleString();
  }
  // ▼pat2▼ イベントオブジェクトを表示 ※Chromeの開発者ツールのコンソールに出力//
  showEventSource(e: any) {
    console.log(e);
  }
  // ▼pat3 div要素のマウス座標を表示
  showMouseArea(e: any) {
    this.screenX = e.screenX;
    this.screenY = e.screenY;
    this.pageX = e.pageX;
    this.pageY = e.pageY;
    this.clientX = e.clientX;
    this.clientY = e.clientY;
    this.offsetX = e.offsetX;
    this.offsetY = e.offsetY;
  }
  // ▼pat4 イベント発生時のキー情報
  showKey(e: any) {
    this.keyCode = e.which;
    this.altKey = e.altKey;
    this.ctrlKey = e.ctrlKey;
    this.shiftKey = e.shiftKey;
  }
  // ▼pat5 デフォルトのイベントをキャンセルする
  maskZip(e: any) {
    let key = e.which;
  　// 0~9,ハイフンの入力以外をキャンセルする
    // 0 (48) 9(57) backspace(8) delete(46) ハイフン(45)
    if ( !(key >= 48 && key <= 57) || key === 46 || key === 8 || key === 45) {
      e.preventDefault();
    }
  }
  // ※メモ※
  // let はブロックレベルのスコープ。https://qiita.com/y-temp4/items/289686fbdde896d22b5e
  // == は左辺と右辺で型が違う場合は型変換して比較しようとする。
  // === は厳密等価演算子。型を変換せず比較する。

  // ▼pat6 イベントの伝播をキャンセルする
  onClickOuter() {
    console.log('outer');
  }
  onClickInner(e: any) {
    e.stopPropagation();
    console.log('inner');
  }

  // ▼pat6 テンプレート参照変数による入力値の取得
  // ダメな例
  showInputValue1(e: any) {
    this.inputValue1 += `<li>${e.target.value}</li>`;
  }
  // テンプレート参照変数を使用した例
  showInputValue2(inputValue: string) {
    this.inputValue2 += `<li>${inputValue}</li>`;
  }

  // ▼pat7 Enterキー押下専用イベント　keyup.enter
  showKeyupEnter(e: any) {
    this.inputValue3 += `<li>${e.target.value}</li>`;
  }
}
