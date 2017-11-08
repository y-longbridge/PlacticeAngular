import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'my-app',
  styleUrls: [`app/app.component.css`],
  template:
  `
  <h1>メモ１</h1>
  <div>
    <h2>開発モードと本番モードを切り替える</h2>
    <p>
    chromeで起動し、chromeの開発者ツールのコンソールタブを開くと<br/>
    下記のような開発(development)モードであると出力される。
    <div class="box">
      Angular is running in the development mode. Call enableProdMode() to enable the production mode.
    </div>
    <p>本場案モードに切り替えるには src\main.ts に下記を記載</p>
    <div class="box" [innerHtml]="safeprodModeMemo"></div>


  </div>
  `,
})
export class AppComponent  {

  safeprodModeMemo: SafeHtml;
  prodModeMemo = `
  // 本番モード切替にenabledProdModeをインポート<br/>
  import { enableProdMode }　from '@angular/core';<br/>
  <br/>
  // 本番モードに切替  ※platformBrowserDynamic()・・・より先に記述する必要あり<br/>
  enableProdMode();<br/>
  <br/>
  platformBrowserDynamic().bootstrapModule(AppModule);<br/>
  `;



  constructor (private sanitizer: DomSanitizer) {
    this.safeprodModeMemo = sanitizer.bypassSecurityTrustHtml(this.prodModeMemo);
  }

}
