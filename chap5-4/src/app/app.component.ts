import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  styleUrls:['./app.component.css'],
  template:
  `
  <h1>フォーム入力要素</h1>
  <div>
    <h2>ラジオボタン</h2>

    <ng-container *ngFor="let itm of animalData; index as idx">
      <label><input type="radio" name="animal"
        [(ngModel)]="animalSelectedlValue"
        [checked]="animalSelectedlValue== itm.value"
        [value]="itm.value"
        (change)="showAnimal(idx)" />{{itm.label}}</label>
    </ng-container>
  </div>

  <div>
    <h2>チェックボックス</h2>
    <ng-container *ngFor="let itm of fruitData; index as idx">
      <label>
      <input type="checkbox" name="fruit{{idx}}"
        [(ngModel)]="fruitData[idx].selected"
        [value]="itm.value"
        (change)="showFruit()"
        />{{itm.label}}</label>
    </ng-container>
  </div>


  <div>
    <h2>選択ボックス</h2>
    <select name="pokemon"
      [(ngModel)]="pokemonSelectedValue"
      (change)="showPokemon()">
      <option value="">パートナーを選択してください</option>
      <option *ngFor="let itm of pokemonData"
        [value]="itm.value"
        [disabled]="itm.disabled"
        [selected]="itm.value == pokemonSelectedValue" >{{itm.label}}</option>
    </select>
  </div>

  <div>
    <h2>リストボックス</h2>
    <select name="pokemon-l" size="5"
      [(ngModel)]="pokemonSelectedValue"
      (change)="showPokemon()">
      <option *ngFor="let itm of pokemonData"
        [value]="itm.value"
        [disabled]="itm.disabled"
        [selected]="itm.value == pokemonSelectedValue" > {{itm.label}} </option>
    </select>
  </div>

  <div>
    <h2>オプションをグループ化する</h2>
    <select name="animalGrp" [(ngModel)]="animalGrpSelectedValue" (change)="showAnimalGrpSelected()">
      <option value="" >ペットを選択してください</option>
      <optgroup *ngFor="let grp of animalGrpKeys(animalGrpData)" label={{grp}} >
        <option *ngFor="let itm of animalGrpData[grp]"
          [value]="itm.value"
          [disabled]="itm.disabled"
          [selected]="itm.value === animalGrpSelectedValue" >{{itm.label}}
        </option>
      </optgroup>

    </select>
  </div>
  `,
})
/*----------------------------------------------------------------*/
export class AppComponent  {
  animalSelectedlValue = 'fish';
  animalData =[
    {label:'犬', value:'dog'},
    {label:'猫', value:'cat'},
    {label:'ハムスター', value:'hamster'},
    {label:'金魚', value:'fish'},
    {label:'亀', value:'turtle'}
  ];

  showAnimal(idx: number) {
    console.log('現在値（ラベル）：' + this.animalData[idx].label);
    console.log('現在値（値）：' + this.animalSelectedlValue);
  }

  fruitData = [
    {label:'バナナ', value:'100', selected:false},
    {label:'イチゴ', value:'201', selected:true},
    {label:'リンゴ', value:'231', selected:false}
  ];

  showFruit() {
    // チェックON・OFFのタイミングで現在の状態をログ出力
    console.log(this.fruitData);
  }

  pokemonSelectedValue = 102;
  pokemonData = [
    {label:'ぴかちゅう', value:'100', disabled:false},
    {label:'とさきんと', value:'101',disabled:false},
    {label:'あずまおう', value:'102', disabled:false},
    {label:'みじゅまる', value:'103', disabled:true}
  ];
  showPokemon() {
    console.log('現在値：' + this.pokemonSelectedValue)
  }

  animalGrpSelectedValue = 'carp';
  animalGrpKeys(obj: Object)
  {
    return Object.keys(obj);
  }
  animalGrpData={
    '哺乳類': [
      { label:'犬', value:'dog', disabled:false},
      { label:'猫', value:'cat', disabled:true},
      { label:'ハムスター', value:'dog', disabled:false}
    ],
    '魚類':[
      { label:'金魚', value:'fish', disabled:false},
      { label:'鯉', value:'carp', disabled:false},
      { label:'熱帯魚１', value:'tropical', disabled:false}
    ],
    '爬虫類': [
      { label:'亀', value:'turtle', disabled:false}
    ]
  };
  showAnimalGrpSelected(){
    console.log(animalGrpSelectedValue);
  }

}
