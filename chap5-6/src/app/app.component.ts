import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'my-app',
  styleUrls: [`app/app.component.css`],
  template:
  `
  <h1>モデル駆動型のフォーム</h1>
  <p>app.component.ts で ReactiveFormsModule をインポートする</p>

  <form [formGroup]="myForm" (ngSubmit)="show()" >

    <div>
      <label for="mail">メールアドレス：</label><br/>
      <input id="mail" name="mail" type="email" [formControl]="mail" />
      <span *ngIf="mail.errors?.required">メールアドレスは必須です</span>
      <span *ngIf="mail.errors?.email">メールアドレスを正しい形式で入力してください</span>
    </div>

    <div>
      <label for="passwd">パスワード：</label><br/>
      <input id="passwd" name="passwd" type="password" [formControl]="passwd" />
      <span *ngIf="passwd.errors?.required">パスワードは必須です</span>
      <span *ngIf="passwd.errors?.minlength">パスワードは6文字以上で入力してください</span>
    </div>

    <div>
      <label for="name">名前(漢字）：</label><br/>
      <input id="name" name="name" type="text" [formControl]="name" />
      <span *ngIf="name.errors?.required">名前は必須です</span>
      <span *ngIf="name.errors?.minlength">名前は3文字以上で入力してください</span>
      <span *ngIf="name.errors?.maxlength">名前は10文字以内で入力してください</span>
    </div>

    <div>
        <label for="memo">備考：</label><br/>
        <textarea id="memo" name="memo" rows="5" cols="30" [formControl]="memo" ></textarea>
        <span *ngIf="memo.errors?.maxlength">備考は10文字以内で入力してください</span>
    </div>

    <div>
        <input type="submit" value="送信" [disabled]="myForm.invalid" />
    </div>
  </form>
  `,
})
/********************************************************** */
export class AppComponent  {
  // 個々の入力要素（初期値と検証ルール）を定義
  mail = new FormControl (
    'hoge@example.com',
    [ Validators.required, Validators.email ]
  );
  passwd = new FormControl (
    '',
    [ Validators.required, Validators.minLength(6) ]
  );
  name = new FormControl (
    'はなこ',
    [ Validators.required, Validators.minLength(3), Validators.maxLength(10)  ]
  );
  memo = new FormControl(
    'メモ',
    [ Validators.maxLength(10) ]
  )

  // FormGroupオブジェクトを作成
  myForm = this.builder.group({
    mail: this.mail,
    passwd: this.passwd,
    name: this.name,
    memo: this.memo
  });
  // コンストラクタ
  constructor ( private builder: FormBuilder) {}

  // サブミット時に実行するメソッド
　show() {

  }

}
