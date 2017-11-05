import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template:
  `
  <h1>構造ディレクティブ -- ngFor</h1>
  <p>双方向バインディング (chap3-6) 使用するので、app.module.tsにFormsModuleを追加する必要がある</p>

  <div>
    <h2>配列をループ処理する - ngFor -</h2>
    <h3>基本的な使い方</h3>
      <table>
        <tr><th>ISBNコード</th><th>書名</th><th>価格</th><th>出版社</th></tr>
        <tr *ngFor="let b of books">
          <td>{{b.isbn}}</td>
          <td>{{b.title}}</td>
          <td>{{b.price}}</td>
          <td>{{b.publisher}}</td>
        </tr>
      </table>
    <h3>ngForディレクティブでりようできる特殊変数</h3>
    <table>
      <tr><th>index</th><td>ループ回数</td></tr>
      <tr><th>first</th><td>最初の要素であるか</td></tr>
      <tr><th>last</th><td>最後の要素であるか</td></tr>
      <tr><th>even</th><td>index値が偶数であるか</td></tr>
      <tr><th>odd</th><td>index値が奇数であるか</td></tr>
    </table>
    使用例
    <table>
      <tr><th>値</th><th>index</th><th>first</th><th>last</th><th>odd</th><th>even</th></tr>
      <tr *ngFor = "let e of eto; index as i; first as first; last as last; odd as odd even as even;">
        <td>{{e}}</td>
        <td>{{i}}</td>
        <td>{{first ? '○' : '-'}}</td>
        <td>{{last ? '○' : '-'}}</td>
        <td>{{odd ? '○' : '-'}}</td>
        <td>{{even ? '○' : '-'}}</td>
      </tr>
    </table>

    <h3>ダミーコンテナを使用する</h3>
    <p><b>ダメな例</b></p>
    <p>header要素だけが繰り返される</p>
    <header *ngFor="let b of books">{{b.title}}</header>
    <div>出版社</div>
    <footer>isbn</footer>

    <p><b>無駄なdiv要素を使用する例</b></p>
    <div *ngFor="let b of books">
      <header>{{b.title}}</header>
      <div>{{b.publisher}}</div>
      <footer>{{b.isbn}}</footer>
    </div>

    <p><b>ダミーコンテナを使用する例</b></p>
    <ng-container *ngFor="let b of books">
      <header>{{b.title}}</header>
      <div>{{b.publisher}}</div>
      <footer>{{b.isbn}}</footer>
    </ng-container >

    <div>
      <h2>配列要素の追加/削除を追跡する　-トラッキング式 -</h2>
      <p> トラッキング式を使用すると、キーが一致するオブジェクトを同一オブジェクトとし、<br/>
      オブジェクトの値が変更されている場合のみオブジェクトを描画する</p>

      <p>トラッキングなし</p>
      <p>キーが一致していても、別オブジェクトとおして全オブジェクトが描画される</p>
      <ul>
        <li class = "trackfor1" *ngFor="let item of items;">{{item.name}}</li>
      </ul>
      <p>トラッキングあり</p>
      <p>キーが一致しているオブジェクトは同一オブジェクトとして、オブジェクトの値が変更されているものだけが描画される</p>
      <ul>
        <li class = "trackfor2" *ngFor="let item of items; trackBy: trackItem">{{item.name}}</li>
      </ul>
      <input type="button" (click)="onClick()" value="更新">
    </div>

    <div>
      <h2>ページング機能を実装する　-- sliceパイプとの連携</h2>
      <p>sliceパイプは chap4-1参照 【構文】exp | slice:start [:end]</p>
      <table>
      <tr><th>No</th><th>名</th></tr>
      <tr *ngFor="let i of items | slice: startIdx: startIdx + count">
        <td>{{i.id}}</td>
        <td>{{i.name}}</td>
      </tr>
      </table>
      <ul class="paging">
        <li><a href="#" (click) = "pager(0)">1</a></li>
        <li><a href="#" (click) = "pager(1)">2</a></li>
        <li><a href="#" (click) = "pager(2)">3</a></li>
      </ul>
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
    ul.paging li {
      display:table-cell;
      padding-left: 10px;
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

  books = [
    {
      isbn: '978-4-7741-8411-1',
      title: '改訂新版JavaScript本格入門',
      price: 2980,
      publisher: '技術評論社',
    },
    {
      isbn: '978-4-7980-4853-6',
      title: 'はじめてのAndroidアプリ開発 第2版',
      price: 3200,
      publisher: '秀和システム',
    },
    {
      isbn: '978-4-7741-8030-4',
      title: '［改訂新版］Javaポケットリファレンス',
      price: 2680,
      publisher: '技術評論社',
    },
    {
      isbn: '978-4-7981-3547-2',
      title: '独習PHP 第3版',
      price: 3200,
      publisher: '翔泳社',
    }
  ];

  eto = [ '子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥' ];

  items = [
    {id: 1, name: 'AAA'},
    {id: 2, name: 'BBB'},
    {id: 3, name: 'CCC'},
    {id: 4, name: 'DDD'},
    {id: 5, name: 'EEE'}
  ];

  onClick() {
    this.items = [
      {id: 1, name: 'AAA'},
      {id: 2, name: 'BBB'},
      {id: 3, name: 'CCC(変更)'},
      {id: 4, name: 'DDD'},
      {id: 5, name: 'EEE'},
      {id: 6, name: 'FFF(追加)'}
    ];
  }
  trackItem(index: any, item: any) {
    // 一意を識別するキーを返す
    return item.id;
  }

  startIdx = 0;
  count = 3;
  pager(page: number) {
    this.startIdx = this.count * page;
  }

}
