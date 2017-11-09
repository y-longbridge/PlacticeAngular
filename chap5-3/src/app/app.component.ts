import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  styleUrls:['./app.component.css'],
  template: `
  <h1>フォームの状態を検知</h1>
  <div>
    <h3>入力の有無を判定する</h3>
    <ul>
      <li>name.pristine・・・フォーム/入力要素が変更されていない</li>
      <li>name.dirty・・・フォーム/入力要素が更新された</li>
      <li>name.touched・・・フォーム/入力要素に一度でもフォーカスが当たった</li>
      <li>name.untouched・・・フォーム/入力要素に一度もフォーカスが当たっていない</li>
    </ul>
    <form #myForm="ngForm" novalidate>
      <div class="input">
        <input id="inpName" #inpName="ngModel" type="text"  />
        <p>何か変更されたか: <span *ngIf="inpName.pristine">変更された</span><span *ngIf="!inpName.pristine">変更されていない</span></p>
      </div>
    </form>
  </div>
  <div>

  </div>


  `,
})
/*----------------------------------------------*/
export class AppComponent  {
  inpValues = {
    inpName : "はなこ"
  };

}
