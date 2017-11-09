import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  styleUrls:['app/app.component.css'],
  template: `
  <h1>フォームの構成要素</h1>

  <div>
    <h2>検証機能</h2>
    <div>
      <h3>Angularの検証機能を使用する場合</h3>
      <ul>
        <li>formタグにnovalidate属性を付けてHTML5の検証機能を無効にする。Angular4からは不要。Angular2までは必要。</li>
        <li>各入力要素のname属性は必須</li>
        <li>各入力要素のngModelディレクティブは必須</li>
        <li>検証時等にテンプレート内からアクセスできるようにテンプレート参照変数「#xxxxx="ngModel"」を指定しておく</li>
      </ul>
    </div>

    <div>
      <h3>Angularの標準の検証</h3>
      <ul>
        <li>required・・・必須</li>
        <li>minlength・・・最小文字数</li>
        <li>maxlength・・・最大文字数</li>
        <li>pattern・・・正規表現による検証</li>
        <li>email・・・Angular4.0以降。emailの形式かどうかを検証する</li>
        <li>max・・・Angular4.2以降。type=numberの入力要素に対して最大値を設定する</li>
        <li>min・・・Angular4.2以降。type=numberの入力要素に対して最小値を設定する</li>
      </ul>

      <form #myForm="ngForm" novalidate>
        <div class="inp">
          <label for="inpRequired">required:</label>
          <input id="inpRequired" name="inpRequired" type="text" [(ngModel)]="inpValues.inpRequired" #inpRequired="ngModel" required />
          <span class="err" *ngIf="inpRequired.errors?.required">入力してください</span>
        </div>
        <div class="inp">
          <label for="inpMinLength">minlength</label>
          <input id="inpMinLength" name="inpMinLength" type="text" [(ngModel)]="inpValues.inpMinLength" #inpMinLength="ngModel" minlength="5" />
          <span class="err" *ngIf="inpMinLength.errors?.minlength">5文字以上で入力してください</span>
        </div>
        <div class="inp">
          <label for="inpMaxLength">maxlength</label>
          <input id="inpMaxLength" name="inpMaxLength" type="text" [(ngModel)]="inpValues.inpMaxLength" #inpMaxLength="ngModel" maxlength="10" />
          <span  *ngIf="inpMaxLength.errors?.maxlength">10文字以下で入力してください</span>
          <p class="descript">※入力制限で10文字までしか入力できなくなるため、エラーメッセージは出ない。</p>
        </div>
        <div class="inp">
          <label for="inpPattern">pattern(数字4桁)</label>
          <input id="inpPattern" name="inpPattern" type="text" [(ngModel)]="inpValues.inpPattern" #inpPattern="ngModel" pattern="[0-9]{4}" />
          <span class="err" *ngIf="inpPattern.errors?.pattern">数字4桁で入力してください</span>
        </div>
        <div class="inp">
          <label for="inpEmail">email</label>
          <input id="inpEmail" name="inpEmail" type="text" [(ngModel)]="inpValues.inpEmail" #inpEmail="ngModel" email />
          <span class="err" *ngIf="inpEmail.errors?.email">emailの形式で入力してください</span>
        </div>
        <div class="inp">
          <label for="inpMinMax">Min=3, Max=6</label>
          <input id="inpMinMax" name="inpMinMax" type="number" [(ngModel)]="inpValues.inpMinMax" #inpMinMax="ngModel" min="3" max="6" />
          <span class="err" *ngIf="inpMinMax.errors?.min">最小値 3 以上の値を入力してください</span>
          <p class="descript">※入力制限で 3～6 の範囲でしか入力できないため、エラーメッセージは出ない。</p>
        </div>
      </form>
    </div>
  </div>

  <div>
    <h2>検証結果の確認</h2>
    <ul>
      <li>入力要素名.errors.検証型・・・項目に設定された検証の成否。errorsオブジェクトを使用</li>
      <li>入力要素名.hasError('検証型')・・・項目に設定された検証の成否。hasErrorメソッドを使用</li>
      <li>入力要素名.valid・・・入力値が正しいか</li>
      <li>入力要素名.invalid・・・入力値にエラーがあるか</li>
      <li>フォーム名.valid・・・フォームの各入力要素の入力値が正しいか</li>
      <li>フォーム名.invalid・・・フォームの各入力要素の入力値にエラーがあるか</li>
  </ul>

    <div>
      <label for="inpRes1">required:</label>
      <input id="inpRes1" name="inpRes1" type="text" [(ngModel)]="inpResult" #inpRes1="ngModel" required />
      <p>検証結果</p>
      <p>required検証にエラーがあるか（errorsオブジェクト） :<span *ngIf = "inpRes1.errors?.required" >ある</span></p>
      <p>required検証にエラーがあるか（hasErrorメソッド） :<span *ngIf = "inpRes1.hasError('required')" >ある</span></p>
      <p>入力値が正しいか :<span *ngIf = "inpRes1.valid" >正しい</span></p>
      <p>入力値にエラーがるか :<span *ngIf = "inpRes1.invalid" >あり</span></p>

    </div>









  </div>

`})

//-------------------------------------------------------------
export class AppComponent  {
  inpValues = {
    inpRequired : '',
    inpMinLengths : '',
    inpMaxLength : '',
    inpPattern : '',
    inpEmail : '',
    inpMinMax : 0
  }

  inpResult = '';
}
