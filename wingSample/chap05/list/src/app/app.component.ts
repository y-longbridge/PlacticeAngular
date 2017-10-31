import { Component } from '@angular/core';

@Component({
  selector: "my-app",
  template: `
    <form>
    <label for="mail">メールアドレス：</label>
    <textarea id="mail" name="mail" type="text"
      [ngModel]="emails.join(';')"
      (ngModelChange)="emails=$event.split(';')">
    </textarea>
    </form>
    <ul>
      <li *ngFor="let email of emails">{{email}}</li>
    </ul>
  `
})
export class AppComponent {
  emails: String[] = [];
}