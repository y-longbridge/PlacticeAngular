import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <my-content>
      <span class="header">あなたもWINGSプロジェクトに参加しませんか？</span>
      <span class="attention">ただいま、メンバー募集中！</span>
      <small>連絡先：webmaster@wings.msn.to</small>
      <p>興味のある方は、WINGSプロジェクト採用担当まで、メールでご連絡ください。</p>
      <small>（担当：山田）</small>
    </my-content>
  `,
})
export class AppComponent {
}
