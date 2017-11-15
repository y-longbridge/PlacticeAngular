/*---------------------
書籍情報クラス
あとからコンポーネント側で参照できるようexportキーワードを付与しておきます
-----------------------*/

export class Book {
  isbn: string;       // ISBNコード
  title: string;      // 署名
  price: number;      // 価格
  publisher: string;  // 出版社
}
