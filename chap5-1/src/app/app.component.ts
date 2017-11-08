import { Component } from '@angular/core';

@Component({
  selector: "my-app",
  template: `
    <form #myForm="ngForm" (ngSubmit)="show()" novalidate>

    <div>
      Angularの検証機能を使用する場合
      <ul>
        <li>formタグにnovalidate属性を付けてHTML5の検証機能を無効にする。Angular4からは不要。Angular2までは必要。</li>
        <li>各フォーム要素のngModelディレクティブは必須</li>
        <li>name属性は必須</li>
        <li>検証時等にテンプレート内からアクセスできるようにテンプレート参照変数「#xxxxx="ngModel"」を指定しておく</li>
      </ul>
    </div>

    <div>
      <label for="mail" >メールアドレス:</label><br/>
      <input id="mail" name="mail" type="email" [(ngModel)]="user.mail" #mail="ngModel" required email />

      <span *ngIf="mail.errors?.required">メールアドレスは必須です</span>
      <span *ngIf="mail.hasError('required')">別記の方法：メールアドレスは必須です.(hasErrorメソッド使用)</span>
      <span *ngIf="mail.errors?.email">メールアドレスは正しい形式で入力してください。</span>
    </div>

    <div>
      <label for="passwd">パスワード：</label><br/>
      <input id="password" name="passwd" type="password" [(ngModel)]="user.passwd" required minlength="6" #passwd="ngModel" />
      <span *ngIf="passwd.errors?.required">パスワードは必須です</span>
      <!--<span *ngIf="passwd.errors?.required&& passwd.dirty">パスワードは必須です</span>-->
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
      <label for="memo">備考:</label><br/>
      <textarea id="memo" name="memo" rows="5" cols="30" [(ngModel)]="user.memo" maxlength="10" #memo="ngModel"></textarea>
      <span *ngIf="memo.errors?.maxlength">備考は10文字以内で入力してください</span>
    </div>

    <div>
      <label for="numPat">数字入力:</label><br/>
      <input id="numPat" name="num5" type="text" [(ngModel)]="user.numPat" required pattern="[0-9]{4}" #numPat="ngModel" />
      <span *ngIf="numPat.errors?.required">数字入力は必須です。</span>
      <span *ngIf="numPat.errors?.pattern">数字4桁で入力してください。</span>
  </div>

    <div>
      <input type="submit" value="送信" [disabled]="myForm.invalid" />
    </div>


    </form>

    <div>
    <P>入力値をまとめて受け取る</P>
    <pre>{{myForm.value | json}}</pre>
    </div>

  `
})
export class AppComponent {
  user = {
    mail: 'hoge@example.com',
    passwd: '',
    name: 'はなこ',
    memo: 'めも',
    numPat: ''
  };

  show() {
    console.log('メールアドレス：' + this.user.mail);
    console.log('パスワード：' + this.user.passwd);
    console.log('名前（漢字）：' + this.user.name);
    console.log('備考：' + this.user.memo);
  }
}
