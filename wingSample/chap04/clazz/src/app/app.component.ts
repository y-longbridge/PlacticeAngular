import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <form>
      <input type="button" (click)="styles.back=!styles.back"
        value="背景色" />
      <input type="button" (click)="styles.fore=!styles.fore"
        value="前景色" />
      <input type="button" (click)="styles.space=!styles.space"
        value="余白" />
    </form>
    <div [ngClass]="styles">
      <p>WINGSプロジェクトは、当初、ライター山田祥寛のサポート（検証・査読・校正作業）集団という位置づけで開始されたコミュニティでしたが、2002年12月にメンバを大幅に増強し、本格的な執筆者プロジェクトとして生まれ変わりました。</p>
      <p>その後、「基礎PHP」インプレス）の執筆を皮切りに、「Java PRESS」「Web+DB PRESS」（技術評論社）、「＠IT」（IT Media）、「CodeZine」（翔泳社）のような紙／ネットワークを問わず、広い媒体で実績を積んで、現在に至ります。</p>
      <p>2005年5月には「有限会社 WINGSプロジェクト」として法人化を果たし、ますます質の高い情報を読者の方々にお届けしてまいります。</p>
    </div>`,

  /*
  //複数のスタイルをまとめてオンオフ
  template: `
    <form>
      <input type="button" (click)="flag=!flag" value="有効／無効" >
    </form>
    <div [ngClass]="{'back fore space': flag}">
      <p>WINGSプロジェクトは、当初、ライター山田祥寛のサポート（検証・査読・校正作業）集団という位置づけで開始されたコミュニティでしたが、2002年12月にメンバを大幅に増強し、本格的な執筆者プロジェクトとして生まれ変わりました。</p>
      <p>その後、「基礎PHP」インプレス）の執筆を皮切りに、「Java PRESS」「Web+DB PRESS」（技術評論社）、「＠IT」（IT Media）、「CodeZine」（翔泳社）のような紙／ネットワークを問わず、広い媒体で実績を積んで、現在に至ります。</p>
      <p>2005年5月には「有限会社 WINGSプロジェクト」として法人化を果たし、ますます質の高い情報を読者の方々にお届けしてまいります。</p>
    </div>`,
    */
      styles: [`
    .back  { background-color: #f00 }
    .fore  { color: #fff }
    .space { padding: 15px }
  `]
})
export class AppComponent  {
  styles = {
    back  : false,
    fore  : false,
    space : false

    //flag = false;
  };
}
