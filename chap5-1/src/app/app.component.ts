import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  styleUrls: ['./app.component.css'],
  template: `
  <h1>フォーム開発の基本</h1>
  <form #myForm="ngForm" (ngSubmit)="show()" novalidate>
    <div>
      <label for="mail" >メールアドレス:</label><br/>
      <input id="mail" name="mail" type="email" [(ngModel)]="user.mail" #mail="ngModel" required email />
      <span *ngIf="mail.errors?.required">メールアドレスは必須です</span>
      <span *ngIf="mail.errors?.email">メールアドレスは正しい形式で入力してください。</span>
    </div>
    <div>
      <label for="passwd">パスワード：</label><br/>
      <input id="password" name="passwd" type="password" [(ngModel)]="user.passwd" required minlength="6" #passwd="ngModel" />
      <span *ngIf="passwd.errors?.required">パスワードは必須です</span>
      <span *ngIf="passwd.errors?.minlength">パスワードは6文字以上で入力してください</span>
    </div>
    <div>
      <label for="name">名前（漢字）:</label><br/>
      <input id="name" name="name" type="text" [(ngModel)]="user.name" required minlength="3" maxlength="18" #name="ngModel" />
      <span *ngIf="name.errors?.required">名前（漢字）は必須です。</span>
      <span *ngIf="name.errors?.minlength">名前（漢字）は3文字以上で入力してください。</span>
      <span *ngIf="name.errors?.maxlength">名前（漢字）は18文字以内で入力してください。</span>
    </div>
    <div>
      <label for="memo">備考:</label>
      <input id="memo" name="memo" maxlength="10">
    </div>
  </form>
  `

})

export class AppComponent  {
  // ユーザー情報の初期値
  user = {
    mail: 'hoge@example.com',
    passwd: '',
    name: 'はなこ',
    memo: 'めも'
  };

  show() {

  }
}
