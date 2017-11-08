import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  styleUrls:['app/app.component.css'],
  template: `
  <h1>フォームの構成要素</h1>

  <h2>検証機能</h2>
  <div>
  <h3>Angularの検証機能を使用する場合</h3>
  <ul>
    <li>formタグにnovalidate属性を付けてHTML5の検証機能を無効にする。Angular4からは不要。Angular2までは必要。</li>
    <li>各フォーム要素のngModelディレクティブは必須</li>
    <li>name属性は必須</li>
    <li>検証時等にテンプレート内からアクセスできるようにテンプレート参照変数「#xxxxx="ngModel"」を指定しておく</li>
  </ul>
  <h3>Angularの標準の検証</h3>
  <ul>
    <li>required・・・必須</li>
    <li>minlength・・・最小文字数</li>
    <li>maxlength・・・最大文字数</li>
    <li>pattern・・・正規表現による検証</li>
    <li>email・・・Angular4.0以降</li>
    <li>max・・・Angular4.2以降。最大値</li>
    <li>min・・・Angular4.2以降。最小値</li>

  </ul>
</div>

  <form #myForm="ngForm" novalidate>
    <label for="">required:</label><input id="inpRequired" type="text" [(ngModel)]="user.InputValue" #inpRequired="ngModel" reqiored />
    <span *ngIf="myInput.errors?.required">必須ですわ</span>

    <label for="">minlength</label><input id="inpMinLength" type="text" [(ngModel)]="user.InputValue" #inpMinLength="ngModel" reqiored />
    <span *ngIf="myInput.errors?.required">必須ですわ</span>

    <label for="">maxlength</label><input id="inpMaxLength" type="text" [(ngModel)]="user.InputValue" #inpMaxLength="ngModel" reqiored />
    <span *ngIf="myInput.errors?.required">必須ですわ</span>

    <label for="">pattern</label><input id="inpPattern" type="text" [(ngModel)]="user.InputValue" #inpPattern="ngModel" reqiored />
    <span *ngIf="myInput.errors?.required">必須ですわ</span>

    <label for="">email</label><input id="inpEmail" type="text" [(ngModel)]="user.InputValue" #inpEmail="ngModel" reqiored />
    <span *ngIf="myInput.errors?.required">必須ですわ</span>

    <label for="">max</label><input id="inpMax" type="text" [(ngModel)]="user.InputValue" #inpMax="ngModel" reqiored />
    <span *ngIf="myInput.errors?.required">必須ですわ</span>

    <label for="">min</label><input id="inpMin" type="text" [(ngModel)]="user.InputValue" #inpMin="ngModel" reqiored />
    <span *ngIf="myInput.errors?.required">必須ですわ</span>
  </form>

`})

//-------------------------------------------------------------
export class AppComponent  {
  inpValues = {
    inpRequired : '',
    inpMinLength : '',
    inpMaxLength : '',
    inpPattern : '',
    inpEmail : '',
    inpMax : '',
    inpMin : ''
  }
}
