import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template:
  `
    <div>
      <h2>文字列を大文字に変換する　- uppercase -</h2>
      <p>元の文字列:{{strValue}} ⇒ uppercase: {{strValue | uppercase}}</p>

      <h2>文字列を小文字に変換する　- lowercase -</h2>
      <p>元の文字列:{{strValue}} ⇒ lowercase: {{strValue | lowercase}}</p>

      <h2>単語の先頭文字を大文字に変換する　- titlecase -</h2>
      <p>元の文字列:{{strValue}} ⇒ titlecase: {{strValue | titlecase}}</p>
    </div>

    <div>
      <h2>オブジェクトをJSON形式に変換する - json -</h2>
      <p>デバッグ時にオブジェクトの内容をダンプするようなケースで使用する。<br/>
         undefined(未定義)のプロパティやメソッドは変換に含まれない。<br/>
         式全体をpreタグで囲むと見やすい。
      </p>
      <pre>{{jsonObj | json}}</pre>
    </div>

    <div>
      <h2>文字列から特定の範囲の部分文字列を切り出す - slice -</h2>
      <p>元の文字列: {{strSliceValue}}</p>
      <p>slice: 3       ⇒ {{strSliceValue | slice: 3}}</p>
      <p>slice: 3: 5    ⇒ {{strSliceValue | slice: 3: 5}}</p>
      <p>slice: 99      ⇒ {{strSliceValue | slice: 99}} (※エラーにならない)</p>
      <p>slice: -3      ⇒ {{strSliceValue | slice: -3}}</p>
      <p>slice: -3: -2  ⇒ {{strSliceValue | slice: -3: -2}}</p>
    </div>

    <div>
      <h2>配列から特定の要素を取り出す - slice -</h2>
      <p>元の文字列: {{arySliceValue}}</p>
      <p>slice: 3       ⇒ {{arySliceValue | slice: 3}}</p>
      <p>slice: 3: 5    ⇒ {{arySliceValue | slice: 3: 5}}</p>
      <p>slice: 99      ⇒ {{arySliceValue | slice: 99}} (※エラーにならない)</p>
      <p>slice: -3      ⇒ {{arySliceValue | slice: -3}}</p>
      <p>slice: -3: -2  ⇒ {{arySliceValue | slice: -3: -2}}</p>
    </div>

    <div>
      <h2>数値を桁区切り文字で整形して出力する - number -</h2>
      <p>元の値:{{numValue}}</p>
      <p>デフォルト：{{numValue | number }} ・・・引数infoを省略すると小数点以下第４位を四捨五入して第3位まで表示</p>
      <p>整数部の最小桁数：５，小数部の最小桁数:０,小数部の最大桁数:2 [5.0-2] = {{numValue | number: '5.0-2'}}</p>
      <p>整数：{{numValue | number: '1.0-0'}}</p>
    </div>

    <div>
    <h2>アプリのロケールを指定する</h2>
    <p>
      app.module.tsにLOCALE_IDを記載する<br/>
      日本：ja-JP<br/>
      ドイツ:de-DE<br/>
      アメリカ：en-US<br/>
      フランス:fr-FR<br/>
      ※上記　numberパイプはロケールの影響を受ける。ドイツを指定する小数点がカンマになり、ピリオドが３桁区切りになる
    </p>
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
// パイプ　・・・テンプレートに埋め込まれた値を整形加工する

// -------------------------------
// ----- Angular標準のパイプ -----
// lowercase    大文字から小文字に変換　
// uppercase    小文字から大文字に変換
// titlecase    単語の先頭文字を大文字に変換
// slice        文字列から部分文字列を切り出し
// date         日付/時刻を整形
// number       数値を桁区切り文字で整形
// percent      数値をパーセント形式に整形
// currency     数値を通貨形式に整形
// json         オブジェクトをJSON形式に変換
// i18nPlural   数値によって表示文字列を変化
// i18nSelect   文字列に応じて出力を切り替え
// async        Observable・Promiseによる樋津凰稀処理の結果を取得 Chap7
export class AppComponent  {
  strValue: string = 'THIS IS a ｐｅｎ'; // 全角でもok

  jsonObj: any = {
    name: 'おおさか　はなこ',
    gender: undefined,
    birth: new Date(207, 7, 15) ,
    age: 3,
    wrok: function() { /* メソッドの中身 */ },
    family: ['タロウ', 'ジロウ'],
    other: {
      favorite: 'たこやき',
      memo: 'めも'
    }
  };

  strSliceValue: string = 'いろはにほへとちりぬるを';

  arySliceValue = ['い', 'ろ', 'は', 'に', 'ほ', 'へ', 'と', 'ち', 'り', 'ぬ', 'る', 'を' ];

  numValue = 3500.5234;
}
