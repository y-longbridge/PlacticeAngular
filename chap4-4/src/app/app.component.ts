import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h1>構造ディレクティブ -- ngStyle</h1>
    <div>

      <div>
        <h2>要素にスタイルプロパティを付与する --ngStyle</h2>
        <p>
          スタイルバインディング（chap3-4）を使用するのが最もシンプルだけど<br/>
          複数スタイルを指定するには[style.～]="～"　という表記を複数繋げる必要がある。
        </p>

        <h3>スタイルバインディングを使用</h3>
        <div [style.background-color] = "'#393f4c'" [style.color] = "'#fff'">スタイルバインディング</div>
        <p>
          ngStyleディレクティブを使用すると複数のスタイルをまとめて設定できる
        </p>

        <h3>ngStyleディレクティブを使用</h3>
        <div [ngStyle] = "style" >ngStyleディレクティブ</div>
        <p>ngStyleをプロパティバインディング(chap3-3)するために[]で囲んでいる。

        <h3>スタイルを動的に変更する</h3>
        <input type="button" (click)="back=!back" value="背景色" />
        <input type="button" (click)="fore=!fore" value="前景色" />
        <input type="button" (click)="space=!space" value="余白" />
        <div [ngStyle]="changeStyle">スタイルを動的に変更する</div>
      </div>

      <div>
        <h2>スタイルクラスを着脱する --ngClass</h2>
        <input type="button" (click)="styles2.back=!styles2.back" value="背景色" />
        <input type="button" (click)="styles2.fore=!styles2.fore" value="前景色" />
        <input type="button" (click)="styles2.space=!styles2.space" value="余白" />
        <div [ngClass]="styles2">スタイルクラスを着脱する</div>
        <p>スタイルに指定できるデータ型</p>
        <ul>
          <li>文字列・・・スタイルクラス名（空白区切りで複数指定も可）</li>
          <li>配列・・・スタイルクラス名のリスト</li>
          <li>オブジェクト・・・「スタイルクラス名：有効/無効」形式
        </ul>
        <h3>スタイルクラスをまとめオンオフしたい</h3>
        <input type="button" (click)="flag=!flag" value="有効/無効" />
        <div [ngClass]="{'back fore space': flag}">スタイルをまとめて切り替え</div>
      </div>

      <div>
        <h2>数値に応じて出力を切り替える --ngPlural</h2>
        <div [ngPlural] = "member.length">
          <ng-template ngPluralCase="=0">メンバーは集まっていません</ng-template>
          <ng-template ngPluralCase="=1">メンバーが一人集まりました</ng-template>
          <ng-template ngPluralCase="other">{{member.length}}人のメンバーが集まりました。</ng-template>
        </div>
      </div>


    </div>
  `,
  styles :[`
    h2 {
      color : #b5495b;
      font-size: 110%;
    }
    h3 {
      font-size: 102%;
    }

    .back { background-color: #b5495b }
    .fore { color: #fff }
    .space { padding: 15px }
  `]
})

export class AppComponent  {

  // background-colorではなく backgroundColor とcamel形式で定義する
  style = {
    backgroundColor: '#393f4c',
    color: '#fff',
  };
  // background-colorと指定したときはシングルクォートで囲む
  // プロパティ名.単位と指定することも可能
  style2 = {
    'background-color': '#393f4c',
    'color': '#fff',
    'margin.px' :15
  }

  back = false;
  fore = false;
  space = false;
  // getterプロパティ
  get changeStyle() {
    return {
      backgroundColor : this.back ? '#fff': '#393f4c',
      color : this.fore ? '#fff' : '#000',
      'padding.px' : this.space ? 15 : 0
    };
  }

  styles2 = {
    back: false,
    fore: false,
    space: false
  }

  flag = false;

  member:string[] = ["たろう","いちろう","はなこ"];
}
