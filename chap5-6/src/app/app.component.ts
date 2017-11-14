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
      <label for="mail">メールアドレス</label><br/>
      <input id="mail" name="mail" type="email" [formControl]="mail" />
      <span *ngIf="mail.errors?.required">メールアドレスは必須です</span>
      <span *ngIf="mail.errors?.email">メールアドレスを正しい形式で入力してください</span>
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
    [ Validators.required, Validators.minLength(3), Validators.maxLength(10) ]
  );
  name = new FormControl (
    'はなこ',
    [ Validators.required, Validators.minLength(6) ]
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
