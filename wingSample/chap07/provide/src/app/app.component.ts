import { Component, OnInit, Inject } from '@angular/core';

import { Book } from './book';
import { BookService } from './book.service';
import { Hoge } from './hoge';

@Component({
  selector: 'my-app',
  template: `
    <table class="table">
      <tr>
      <th>ISBNコード</th><th>書名</th><th>価格</th><th>出版社</th>
      </tr>
      <tr *ngFor="let b of books">
        <td>{{b.isbn}}</td>
        <td>{{b.title}}</td>
        <td>{{b.price}}円</td>
        <td>{{b.publisher}}</td>
      </tr>
    </table>
  `,
})
export class AppComponent implements OnInit {
  books :Book[];

  constructor(@Inject(Hoge)private bookservice: BookService) {}

  ngOnInit() {
    this.books = this.bookservice.getBooks();
  }	
}
