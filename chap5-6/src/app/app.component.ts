import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/form';

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

    </div>
  </form>
  `,
})
export class AppComponent  {

　show() {

}

}
