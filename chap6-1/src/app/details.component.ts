import { Component, Input } from '@angular/core';
import { Book } from './book';

@Component ({
  selector: 'detail-book',
  template: ''
})
export class DetailsComponent {
  @Input() item: Book;
}
