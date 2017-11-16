
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from './Book';

@Component({
  selector: 'edit-book',
  template: `
      <form #myForm="ngForm" (ngSubmit)="onsubmit()" *ngIf="item">

      </form>
  `})

/* ------------------------------------------------------
------------------------------------------------------- */
export class EditComponent {
  @Input() item: Book;

  //サブミット時の処理
  onsubmit() {

  }
}
