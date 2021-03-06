
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from './Book';

@Component({
  selector: 'edit-book',
  template: `

      <form #myForm="ngForm" (ngSubmit)="onsubmit()" *ngIf="item">

          <div>
            <label for="isbn">ISBNコード：</label><br/>
            <span id="isbn">{{item.isbn}}</span>
          </div>

          <div>
            <label for="title">書名：</label><br/>
            <input id="title" name="title" size="25" type="text" [(ngModel)]="item.title" />
          </div>

          <div>
            <label for="price">価格：</label><br/>
            <input id="price" name="price" size="5" type="number" [(ngModel)]="item.price" />
          </div>

          <div>
            <label for="publisher">出版社：</label><br/>
            <input id="publisher" name="publisher" type="text" [(ngModel)]="item.publisher" />
          </div>

          <div>
            <input type="submit" value="編集" />
          </div>
      </form>

  `})

/* ------------------------------------------------------
------------------------------------------------------- */
export class EditComponent {
  @Input() item: Book;

  // イベント定義
  @Output() edited = new EventEmitter<Book>();

  // イベント名を changed にする場合
  @Output('changed') edited2 = new EventEmitter<Book>();

  // サブミット時の処理
  onsubmit() {
    // emitメソッドでイベントを発生させる
    //this.edited.emit(this.item);

    this.edited2.emit(this.item);
  }

}
