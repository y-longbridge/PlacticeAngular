import { Component, OnInit, OnDestroy } from '@angular/core';
import { MyComponent1 } from './my.component1';
import { MyComponent2 } from './my.component2';

@Component({
  selector: 'my-app',
  template:
  `
    <h1>構造ディレクティブ -- ngTemplateOutput, --ngComponentOutlet</h1>
    <!-- あらかじめテンプレートを用意 -->
    <ng-template #myTemp let-id="id" let-name="name">
      <div>
        <ul>
          <li>ID:{{id}}</li>
          <li>NAME:{{name}}</li>
        </ul>
      </div>
    </ng-template>

    <!-- -->
    <div>
      <h2>用意されたテンプレートの内容をインポートする --ngTemplateOutlet</h2>
      <select name="selectItem" [(ngModel)]="selectIdx">
        <option *ngFor = "let i of items; let idx = index;" [value]="idx" >{{i.id}} : {{i.name}}</option>
      </select>
      <ng-container *ngTemplateOutlet="myTemp; context: items[selectIdx]" >
      </ng-container>
    </div>

    <div>
      <h2>コンポーネントを動的にインポートする　-- mgComponentOutlet</h2>
      <div>
        コンポーネントを切り替え：<br/>
        <ng-container *ngComponentOutlet="myComp"></ng-container>
      </div>
    </div>
  `,

  styles:
  [`
    h2 {
      color : #b5495b;
      font-size: 110%;
    }
    h3 {
      font-size: 102%;
    }
  `]
})


/*
--------------------------------------------------------
*/
export class AppComponent implements OnInit, OnDestroy {
  items = [
    {id: 1, name: 'AAA'},
    {id: 2, name: 'BBB'},
    {id: 3, name: 'CCC'},
    {id: 4, name: 'DDD'},
    {id: 5, name: 'EEE'}
  ];
  selectIdx = -1;

  interval: any;  //タイマー
  comps = [MyComponent1, MyComponent2 ];
  currentIdx = 0; //現在のコンポーネントインデックス
  myComp: any = MyComponent1;

  // コンポーネント切り替えのためのタイマーを変更
  ngOnInit(){
    this.interval = setInterval(() => {
      //インデックスを更新しコンポーネントを変更
      this.currentIdx = (this.currentIdx + 1 ) % this.comps.length;
      this.myComp = this.comps[this.currentIdx];
    }, 3000);
  }
  //コンポーネント破棄の際にタイマー破棄
  ngOnDestroy() {
    clearInterval(this.interval);
  }
 }
