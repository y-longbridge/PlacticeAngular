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
        <input id="inpName" name="inpName" type="text" [(ngModel)]="inpValues.inpName" #inpName="ngModel"/>
        <p>何か変更されていないか（pristine）: <span *ngIf="inpName.pristine">変更されていない</span><span *ngIf="!inpName.pristine">変更された</span></p>
        <p>何か変更されたか（dirty）: <span *ngIf="inpName.dirty">変更された</span><span *ngIf="!inpName.dirty">変更されていない</span></p>
        <p>フォーム/入力要素に一度でもフォーカスが当たった（touched）: <span *ngIf="inpName.touched">当たった</span><span *ngIf="!inpName.touched">当たっていない</span></p>
        <p>フォーム/入力要素に一度でもフォーカスが当たっていない（untouched）: <span *ngIf="inpName.untouched">当たっていない</span><span *ngIf="!inpName.untouched">当たった</span></p>
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
