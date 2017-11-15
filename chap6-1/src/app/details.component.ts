import { Component, Input } from '@angular/core';
import { Book } from './book';

@Component({
  selector: 'detail-book',
  template: `
  <ng-container *ngIf="item"> 
    <div> <!-- divにngIfはエラーになる ==>
        <h3>itemプロパティ値から表示</h3>
        <ul>S
          <li>ISBNコード：{{item.isbn}}</li>
          <li>書名:{{item.title}}</li>
          <li>価格：{{item.price | number}}円</li>
          <li>出版社：{{item.publisher}}</li>
        </ul>
    </div>
  </ng-container>
  
  <ng-container *ngIf="item2"> 
    <div>
      <h3>item2プロパティ値から表示</h3>
      <ul>
        <li>ISBNコード：{{item2.isbn}}</li>
        <li>書名:{{item2.title}}</li>
        <li>価格：{{item2.price | number}}円</li>
        <li>出版社：{{item2.publisher}}</li>
      </ul>
    </div>
  </ng-container>

  `})
/* ----------------------------------------------------------------------------
プロパティに@Inputデコレーターを付与すると、親コンポーネント(app.component.ts)からitem属性で値を受け取れる
-------------------------------------------------------------------------------- */
export class DetailsComponent {
  // プロパティitem2 と 親コンポーネントで指定する属性を変更したい場合
  @Input('data') item2: Book;　// @Input() item: Book; より下に配置するとエラーになる

  @Input() item: Book;

  
}
