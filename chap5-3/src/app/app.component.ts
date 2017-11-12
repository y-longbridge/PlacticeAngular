import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  styleUrls:['./app.component.css'],
  template: `
  <h1>フォームの状態を検知</h1>
  <div>
    <h2>入力の有無を判定する</h2>
    <ul>
      <li>name.pristine・・・フォーム/入力要素が変更されていない</li>
      <li>name.dirty・・・フォーム/入力要素が更新された</li>
      <li>name.touched・・・フォーム/入力要素に一度でもフォーカスが当たった</li>
      <li>name.untouched・・・フォーム/入力要素に一度もフォーカスが当たっていない</li>
      <li>formname.submitted・・・フォームが送信済みかどうか</li>
    </ul>
    <form #myForm="ngForm" (ngSubmit)="show()" novalidate>
      <div class="input">
        <input id="inpName" name="inpName" type="text" [(ngModel)]="inpValues.inpName" #inpName="ngModel"/>
        <p>何か変更されていないか（pristine）:
          <span *ngIf="inpName.pristine">変更されていない</span>
          <span *ngIf="!inpName.pristine">変更された</span>
        </p>
        <p>何か変更されたか（dirty）: <span *ngIf="inpName.dirty">変更された</span><span *ngIf="!inpName.dirty">変更されていない</span></p>
        <p>フォーム/入力要素に一度でもフォーカスが当たった（touched）: <span *ngIf="inpName.touched">当たった</span><span *ngIf="!inpName.touched">当たっていない</span></p>
        <p>フォーム/入力要素に一度でもフォーカスが当たっていない（untouched）: <span *ngIf="inpName.untouched">当たっていない</span><span *ngIf="!inpName.untouched">当たった</span></p>
        <input type="submit" value="送信"  />
        <p>サブミット済みかどうか(form.submitted)：<span *ngIf="myForm.submitted">送信済み</span><span *ngIf="!myForm.submitted">未送信</span></p>
      </div>
    </form>
  </div>


  <div>
    <h2>状態による入力用のスタイルを変更する</h2>
    <p>Angularは状態に応じて以下のクラスを自動で付与する</p>
    <ul>
      <li>ng-valid・・・入力値が妥当</li>
      <li>ng-invalid・・・入力値が不正</li>
      <li>ng-pristine・・・入力値が初期値から変更されていない</li>
      <li>ng-dirty・・・入力値が初期値から変更された</li>
      <li>ng-touched・・・要素にフォーカスが当たったことがある</li>
      <li>ng-untouched・・・要素にフォーカスが当たったことがない</li>
      <li>nu-submitted・・・フォームがサブミットされた（formタグ要素のみ）</li>
    </ul>
    <p>入力にエラーがある場合、入力要素の背景色を変更する
    <span>必須入力：</span>
    <input id="inpStyle" name="inpstyle" class="inp-style" type="text"
            #inpStyle="ngModel" [(ngModel)]="inpstyle" required>
    <span class="err" *ngIf="inpStyle.errors?.required && inpStyle.dirty">入力してください</span>
  </div>


  `,
})
/*----------------------------------------------*/
export class AppComponent  {
  inpValues = {
    inpName : "はなこ"
  };
  show() {
    this.inpValues.inpName = "はなこ２";
  }

  inpStyle="";
}
