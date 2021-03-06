import { Component } from '@angular/core';
import { Book } from './Book';

@Component({
  selector: 'my-app',
  styleUrls: ['app/app.component.css'],
  template: `
  <h1>子コンポーネントからイベントを受け取る(@Outpuデコレーター）</h1>
  <div>
    <span *ngFor="let b of books">
      [<a href="#" (click)="onclick(b)">{{b.title}}</a>]
    </span>

    <hr/>
    <!-- <edit-book [item]="selected" (edited)="onedited($event)"></edit-book> -->
    <edit-book [item]="selected" (changed)="onedited($event)"></edit-book>

  </div>




  `,
})
/* ------------------------------------------------

------------------------------------------------- */
export class AppComponent  {
   //
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

  onclick(book: Book) {
    this.selected = book;
  }

  // 子コンポーネントからのイベントを処理
  onedited(book: Book) {
     for (let item of this.books) {
       if (item.isbn === book.isbn ) {
          item.title = book.title;
          item.price = book.price;
          item.publisher = book.publisher;
       }
     }
     // 選択された書籍情報を空にしフォームを非表示にする
     this.selected = null;
  }



}
