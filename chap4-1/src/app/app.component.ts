import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template:
  `
    <h1>パイプ</h1>
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
      <p>整数部、小数部の桁数指定 = {{numValue | number: '5.0-2'}} ※整数最小桁.小数最小桁-小数最大桁 (5.0-2)</p>
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

    <div>
    <h2>数値を通貨形式に整形する - currency -</h2>
    <ul>
      <li>デフォルト:{{currencyValue | currency }}</li>
      <li>通貨コード：{{currencyValue | currency: 'JPY'}}</li>
      <p>指定した通貨により、小数点以下桁数が自動で変更される</p>
      <li>通貨記号　円:{{currencyValue | currency: 'JPY' : true }}</li>
      <li>通貨記号　ユーロ:{{currencyValue | currency: 'EUR' : true }}</li>
      <p>明示的に小数部の桁数を指定することもできる</p>
      <li>桁数指定：{{currencyValue | currency: 'JPY' : true: '1.0-1'}} ※整数最小桁.小数最小桁-小数最大桁 (1.0-1)</li>
    </ul>
    </div>

    <div>
    <h2>数値をパーセントに整形する - percent -</h2>
    <ul>
      <li>デフォルト：{{percentValue | percent }}</li>
      <li>小数第一まで：{{percentValue | percent: '1.0-1'}} ※整数最小桁.小数最小桁-小数最大桁 (1.0-1)</li>
    </ul>
    </div>
    <div>
    <h2>日付/時刻を整形する　- date -</h2>
    <p>ロケールによって出力は異なる</p>
    <p>デフォルト: {{ currentDate | date }}</p>

    <h3>あらかじめ用意されている書式</h3>
    <table>
      <tr><th>書式</th><th>概要</th><th>結果(ja-JP)</th></tr>
      <tr><td>medium</td><td>普通の日付/時刻 (yMMMdjms)</td><td>{{ currentDate | date: 'medium' }}</td></tr>
      <tr><td>short</td><td>短い日付/時刻 (yMdjm)</td><td>{{ currentDate | date: 'short' }}</td></tr>
      <tr><td>fullDate</td><td>完全な日付 (yMMMMMEEEEd)</td><td>{{ currentDate | date: 'fullDate' }}</td></tr>
      <tr><td>longDate</td><td>長い日付(yMMMMd)</td><td>{{ currentDate | date: 'longDate' }}</td></tr>
      <tr><td>mediumDate</td><td>普通の日付(yMMMd)</td><td>{{ currentDate | date: 'mediumDate' }}</td></tr>
      <tr><td>shortDate</td><td>短い日付 (yMd)</td><td>{{ currentDate | date: 'shortDate' }}</td></tr>
      <tr><td>mediumTime</td><td>普通の時刻 (jms)</td><td>{{ currentDate | date: 'mediumTime' }}</td></tr>
      <tr><td>shortTime</td><td>短い時刻 (jm)</td><td>{{ currentDate | date: 'shortTime' }}</td></tr>
    </table>
  </div>
  <h3>個別の書式を指定</h3>
     <table>
    <tr><th>指定子</th><th>概要</th><th>結果(ja-JP)</th></tr>
    <tr><td>G</td><td>紀元前/後(短い)</td><td>{{ currentDate | date: 'G'}}</td></tr>
    <tr><td>GGG</td><td>紀元前/後(普通)</td><td>{{ currentDate | date: 'GGG'}}</td></tr>
    <tr><td>GGGG</td><td>紀元前/後(長い)</td><td>{{ currentDate | date: 'GGGG'}}</td></tr>
    <tr><td>y</td><td>4桁の年(0000～9999)</td><td>{{ currentDate | date: 'y'}}</td></tr>
    <tr><td>yy</td><td>2桁の年(00～99)</td><td>{{ currentDate | date: 'yy'}}</td></tr>
    <tr><td>M</td><td>月(1～12)</td><td>{{ currentDate | date: 'M'}}</td></tr>
    <tr><td>MM</td><td>月(01～12)</td><td>{{ currentDate | date: 'MM'}}</td></tr>
    <tr><td>MMM</td><td>月の省略名(Jan～Dec)</td><td>{{ currentDate | date: 'MMM'}}</td></tr>
    <tr><td>MMM</td><td>月の省略名(Jan～Dec)</td><td>{{ currentDate | date: 'MMMM'}}</td></tr>
    <tr><td>MMMM</td><td>月の完全名(January～December)</td><td>{{ currentDate | date: 'MMMM'}}</td></tr>
    <tr><td>L</td><td>月の省略名(J～D)</td><td>{{ currentDate | date: 'L'}}</td></tr>
    <tr><td>d</td><td>日（1～31）</td><td>{{ currentDate | date: 'd'}}</td></tr>
    <tr><td>dd</td><td>日（01～31）</td><td>{{ currentDate | date: 'dd'}}</td></tr>
    <tr><td>j, jj</td><td>時間（1～12　AM/PM）</td><td>{{ currentDate | date: 'j'}}</td></tr>
    <tr><td>h</td><td>12時間表記の時間（0～23）</td><td>{{ currentDate | date: 'h'}}</td></tr>
    <tr><td>hh</td><td>12時間表記の時間（0～23）</td><td>{{ currentDate | date: 'hh'}}</td></tr>
    <tr><td>H,HH</td><td>24時間表記の時間（0～24）</td><td>{{ currentDate | date: 'H'}}</td></tr>
    <tr><td>m</td><td>分（0～59）</td><td>{{ currentDate | date: 'm'}}</td></tr>
    <tr><td>mm</td><td>分（0～59）</td><td>{{ currentDate | date: 'mm'}}</td></tr>
    <tr><td>s</td><td>秒（0～59）</td><td>{{ currentDate | date: 's'}}</td></tr>
    <tr><td>ss</td><td>秒（00～59）</td><td>{{ currentDate | date: 'ss'}}</td></tr>
    <tr><td>z</td><td>タイムゾーン（ゾーン名）</td><td>{{ currentDate | date: 'z'}}</td></tr>
    <tr><td>Z</td><td>タイムゾーン（時差）</td><td>{{ currentDate | date: 'Z'}}</td></tr>
    <tr><td>a</td><td>am/pm</td><td>{{ currentDate | date: 'a'}} (※ja-JPでは出力なし)</td></tr>
    <tr><td>EE</td><td>曜日</td><td>{{ currentDate | date: 'E'}} </td>
    <tr><td>EE</td><td>曜日</td><td>{{ currentDate | date: 'EE'}} </td>
    <tr><td>EEE</td><td>曜日</td><td>{{ currentDate | date: 'EEE'}} </td>
    </table>
    <p>複数指定時: 'yMMdd (EEE)'：{{currentDate | date: 'yMMdd (EEE)'}}</p>
  <h3>補足</h3>
  <p>
  現時点（2017/11/02のバージョン）では
  書式指定は 「y」 を指定しても 「年」が表示されてしまうなど細かな制御ができない。

  一般的にはあらかじめ用意されている書式を使用するほうが望ましい
  </p>
  <div>
    <h2>数値によって表示文字列を切り替える - i18nPlural</h2>
    <p>memberの要素数によって出力する文字を変更する： {{member1.length | i18nPlural : msg1}}</p>
  </div>

  <div>
  <h2>文字列によって表示文字列を切り替える - i18nSelect</h2>
  <p>メンバーの所属するクラス名により、出力する文字列を変更する
  <ul>
    <li *ngFor = "let m of member2">
      {{m.name}} の成績は {{m.class | i18nSelect :msg2}}
    </li>
  </ul>
  <p></p>
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

  table {
    border-collapse: collapse;
    border: 1px solid #ccc;
  }
  table th {
    background: #dcdcd1;
    border: 1px solid #ccc;
  }
  table td {
    border: 1px solid #ccc;
    padding: 0px 10px 0px 10px;
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

  currencyValue = 3500.125;

  percentValue = 0.123456;

  currentDate = new Date();


  member1 = ['たろう', 'はなこ', 'じろう'];
  msg1 =
  {
      '=0' : 'だれもいない',
      '=1' : 'ぼっち',
      'other' : '#人'
  };

  member2 = [ {name: 'たろう', class: 'A'}, {name: 'はなこ', class: 'B'}, {name: 'じろう', class: '-'}];
  msg2 =
    {
        'A' : '優秀',
        'B' : '普通',
        'other' : '不明'
    };
}
