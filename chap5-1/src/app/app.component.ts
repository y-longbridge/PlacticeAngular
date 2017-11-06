import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  styleUrls: ['./app.component.css'],
  template: `
  <h1>フォーム開発の基本</h1>
  <form #myForm="ngForm" (ngSubmit)="show()" novalidate>
  <div>
    <label for="mail" >メールアドレス:</label><br/>
    <input id="mail" name="mail" type="email" [(ngModel)]="user.mail" #mail="ngModel" required email />

  </div>
  `

})

export class AppComponent  {
  name = 'Angular';
}
