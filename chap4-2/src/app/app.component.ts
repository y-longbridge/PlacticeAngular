import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template:
  `
    <div>
      <h2>日付/時刻を整形する　- date -</h2>
      <p>あらかじめ用意されている書式</p>
      <table>
        <tr><th>書式</th><th>概要</th><th>結果(ja-JP)</th></tr>
        <tr><td>medium</td><td>普通の日付/時刻 (yMMMdjms)</td><td>2017年3月17日 15:26:06</td></tr>
        <tr><td>short</td><td>短い日付/時刻 (yMdjm)</td><td>2017/3/17 15:28</td></tr>
        <tr><td>fullDate</td><td>完全な日付 (yMMMMMEEEEd)</td><td>2017年3月17日金曜日</td></tr>
        <tr><td>longDate</td><td>長い日付(yMMMMd)</td><td>2017年3月17日</td></tr>
        <tr><td>mediumDate</td><td>普通の日付(yMMMd)</td><td>2017年3月17日</td></tr>
        <tr><td>shortDate</td><td>短い日付 (yMd)</td><td>2017/3/17</td></tr>
        <tr><td>mediumTime</td><td>普通の時刻 (jms)</td><td>15:26:06</td></tr>
        <tr><td>shortTime</td><td>短い時刻 (jm)</td><td>15:26</td></tr>
      </table>
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

}
