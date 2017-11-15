import { Component } from '@angular/core';
// 書籍情報クラスをインポート
import { Book } from './book';

@Component({
  selector: 'my-app',
  styleUrls:['./app.components.css'],
  template: `
  <div>
    <span *ngFor="let b of books">
      [<a href="#" (click)="onClick(b)">{{b.title}}</a>]
    </span>
  </div>
  <hr/>
  <detail-book [item]="selected"></detail-book>
  `,
})

/*---------------------------------

-----------------------------------*/
export class AppComponent  {
  // リスト側で選択された書籍
  selected: Book;

  // 書籍情報を準備
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
    },
    {
      isbn: '978-4-8222-9893-7',
      title: '基礎からしっかり学ぶC++の教科書',
      price: 2800,
      publisher: '日経BP社',
    }
  ];

  // リンククリック時に選択された書籍情報をselectedプロパティに保存
  onClick(book: Book) {
    this.selected = book;
  }
}
