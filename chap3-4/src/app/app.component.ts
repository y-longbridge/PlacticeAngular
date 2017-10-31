import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template:
  `
  <div>
    <h2>▼pat1 属性バインディング</h2>
    <table border="1">
      <tr><td [attr.colspan] = "colspan">caption</td></tr>
      <tr><td>col1</td><td>col2</td></tr>
    </table>
  </div>
  <div>
    <h2>▼part2 クラスバインディング</h2>
    <div class="line back">class属性にlineとbackを付ける</div>
    <div class="line back" [class.fore]="foreFlagOn">class属性にlineとbackを付け、クラスバインディングでforeを適用する</div>
    <div class="line back" [class.fore]="foreFlagOff">class属性にlineとbackを付け、クラスバインディングでforeを適用しない</div>
  </div>
  <div>
    <h2>▼part3▼ スタイルバインディング</h2>
    <div [style.background-color]="bcolor">スタイルバインディング</div>
    <div [style.background-color] ="bcolorFlg ? '#0ff' : '' "> スタイルバインディングの適用を切り替える </div>
    <div [style.background-color]="'green'" [style.color]="'pink'">スタイルバインディング複数適用する</div>
    <div [style.font-size.%] = "fontSize">単位付きのスタイル</div>
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

// **************************************************************** //
// 属性バインディング

export class AppComponent  {
  // ▼pat1▼ 属性バインディング //
  // プロパティがないものは、属性にたいしてバインディングする
  colspan: number = 2;

  // ▼part2▼ クラスバインディング //
  foreFlagOn: boolean = true; //
  foreFlagOff: boolean = false;

  // ▼part3▼ スタイルバインディング //
  bcolor = '#0ff';
  bcolorFlg: boolean = false;
  fontSize: number = 150;
}
