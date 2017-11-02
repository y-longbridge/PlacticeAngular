import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'my-app',
  template:
  `
  <h1>chap3-3:プロパティバインディング</h1>
  <div><h2>▼pat1</h2> {{member1.name}}</div>
  <div><h2>▼pat2</h2> {{member2?.name}}</div>
  <div>
    <h2>▼pat3</h2>
    <img [src]="image" width="200"/>
    <img bind-src="image" width="200"/>
    <img src={{image}} width="200"/>
  </div>
  <div>
    <h2>▼pat4</h2>
    <h3>タグはエスケープされ、文字列として出力</h3>
    {{msg}}
    <p><b>innnerHTMLで出力。危険性の高いStyle属性が除去（サニタイズ）される</b></p>
    <div [innerHTML] = "msg" ></div>
    <h3>信頼済みマークを与えて、サニタイズさせない</h3>
    <div [innerHTML] = "safeMsg" ></div>

  </div>
  <div>
    <h2>▼pat5</h2>
    <h3>信頼できない外部リソースはエラーになる</h3>
    <iframe [src]="url"></iframe>
    <h3>信頼できる外部リソースはエラーにならない</h3>
    <iframe [src]="safeUrl"></iframe>
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

    .line { border: solid 1px 3f00; }
    .back { background-color: #0ff; }
    .fore { color: red; }
  `]
})
// ***************************************************** //
// プロパティバインディング　

export class AppComponent  {
  // ▼pat1▼ //
  member1 = {
    name: 'taro',
    age: 20
  };
	// ▼pat2▼ //
	// member2?nameと「?」をつけると
	// member2がnullでない場合だけnameを出力するようになり
	// エラーにならない
	// エラーはデベロッパーツールのConsoleで確認できる

	// 以下をコメントにすると?なしならエラー発生する
  member2 = {
    name: 'hanako',
    age: 20
  };
  // ▼pat3▼ //
  image: string = 'https://images-na.ssl-images-amazon.com/images/I/517Vdn4evQL._SX392_BO1,204,203,200_.jpg';
  // ▼pat4▼ //
  // 信頼済みにしない文字列 //
  msg: string =
    `<script>window.alert("ようこそ ！");</script>
          <div style="font-size:20px;">
            <p>WINGSプロジェクト</p>
          </div>
          <a href="http://www.wings.msn.to/">Web</a>
          <button>同意する</button>
          <input type="button" onclick="alert('OK')" value="クリック" />`;

  // コンストラクタでsafeMsgに信頼済みのmsgを設定する //
  safeMsg: SafeHtml;


  // ▼pat５▼ //
  url: string = 'http://www.wings.msn.to/';

  // コンストラクタで信頼済みにする //
  safeUrl: SafeResourceUrl;

  // ******************************************** //
  // コンストラクタ //
  constructor (private sanitizer: DomSanitizer) {
    // 信頼済み設定クラス　DomeSanitizerクラス
    // bypassSecurityTrustHtml　　      ・・・アプリに設定しても安全なHTML
    // bypasssecurityTrustResourceUrl   ・・・アプリに設定しても安全なリソース
    // bypasssecurityTrustStyle         ・・・アプリに設定しても安全なスタイルシート
    // bypassSecurityTrustScript        ・・・アプリに設定しても安全なJavaScript
    // bupasssecurityTrustUrl           ・・・アプリに設定しても安全なリンク先

    // ▼pat4 msgプロパティに信頼済みマークを付与
    this.safeMsg = sanitizer.bypassSecurityTrustHtml(this.msg);
    // ▼pat5 urlプロパティに信頼済みにする
    this.safeUrl = sanitizer.bypassSecurityTrustResourceUrl(this.url);

  }

}
