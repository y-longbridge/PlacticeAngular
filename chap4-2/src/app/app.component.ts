import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template:
  `
  <h1>構造ディレクティブ -- ngIf, ngSwitch</h1>
  <p>双方向バインディング (chap3-6) 使用するので、app.module.tsにFormsModuleを追加する必要がある</p>

  <div>
    <h2>式の審議によって表示/非表示を切り替える　- ngif -</h2>
    <label for="show-ngif">表示/非表示</label>
    <input id="show-ngif" name="show-ngif" type="checkbox" [(ngModel)] = "showIf" />

    <div class="div-area" *ngIf="showIf">
      ngIfディレクティブを使用して、
      チェックボックスの値により表示・非表示を切り替えるエリア<br/>
      非表示の場合は、html出力されない
    </div>
    <p>
    補足：ngIfを使用して非表示にした場合はhtmlとして文書ツリーに出力されない。<br/>
    出力して非表示にしたい場合は、display属性を使用する。
    </p>
    <div class="div-area" [style.display]= "showIf ? 'box' : 'none'" >
      属性バインディングで display属性を変更し、
      チェックボックスの値により表示・非表示を切り替えるエリア<br/>
      非表示の場合は、html出力さる
    </div>
    <h3>Angular4からは elseが使用できる</h3>
    <div class="div-area" *ngIf="showIf; else elseContent">
      ngIf true
    </div>
    <ng-template #elseContent>
    <div class = "div-area-off">
      ngIf else
    </div>
    </ng-template>
  </div>

  <div>
    <h2>式の値によって表示を切り替える　- ngSwitch - </h2>
    <select name = "season" [(ngModel)] = "season">
      <option value = "">四季を選択</option>
      <option value = "spring">春</option>
      <option value = "summer">夏</option>
      <option value = "autumn">秋</option>
      <option value = "winter">冬</option>
    </select>

    <div [ngSwitch] = "season">
      <span *ngSwitchCase = "'spring'">春はあけぼの</span>
      <span *ngSwitchCase = "'summer'">夏は夜</span>
      <span *ngSwitchCase = "'autumn'">秋は夕暮れ</span>
      <span *ngSwitchCase = "'winter'">冬はつとめて</span>
      <span *ngSwitchDefaul >選択してください</span>
    </div>

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

    .div-area {
      /* position:absolute; */
      /* margin:50px; */
      width:60%;
      /* height:300px; */
      padding: 20px;
      border:solid 1px #000;
      background-color: #393f4c;
      color: #fff;
    }
    .div-area-off {
      /* position:absolute; */
      /* margin:50px; */
      width:60%;
      /* height:300px; */
      padding: 20px;
      border:solid 1px #000;
      background-color: #904840;
      color: #fff;
    }

  `]

})
// ***************************************************** //
/*
    ディレクティブ・・・htmlに対して追加された独自の要素/属性のこと
    ------------------------------------------------------
    ディレクティブ・・・htmlに対して追加された独自の要素/属性のこと
    ----- ディレクティブの分類
    コンポーネント          テンプレートを伴ったディレクティブ
    構造ディレクティブ       要素を追加・削除することで、文書ツリーを操作
    属性ディレクティブ       属性の形式で、要素/コンポーネントの見た目や動作を変更
    ----- 主な構造/属性ディレクティブ
    nglf                    式の真偽によて表示/非表示を切り替え
    ngSwitch                式の値によって表示を切り替え
    ngFor                   配列をループ処理
    ngTemplateOutlet        用意されたテンプレートの内容をインポート
    ngComponentOutlet       用意されたコンポーネントをインポート
    ngStyle                 要素にスタイルプロパティを付与
    ngClass                 要素にスタイルクラスを着脱
    ngPlural                数値に応じて出力を切り替え
*/
export class AppComponent  {
  showIf = true;

  season = '０';


}
