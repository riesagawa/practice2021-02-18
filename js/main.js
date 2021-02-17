// usescript=書いておくとエラーが発見しやすくなる
'use script';

console.log('Hello World from main.js!');
console.log("It's me!");//文中のシングルクォーテーションに気をつける。ダブルクォーテーションで囲う方法と
console.log('Is\'s me!');//バックスラッシュをつける。option + ¥ バックスラッシュ直後の'は文字として扱われる
console.log('Hel\nlo Wor\tld!');//改行\n  タブ\t
console.log('Hello' + 'World');
console.log(10 + 3);
console.log(10 - 3);
console.log(10 * 3);
console.log(10 / 3);
console.log(10 % 3);//整数の割り算の余り10/3の余り1
console.log(10 ** 3);//べき乗 10の3乗1000

console.log(150 * 140);
console.log(150 * 160);
const price = 150;//定数は後で変更できないやつ
console.log(price * 140);
console.log(price * 160);

let tanka = 160;//変数。名前にハイフンは使えない。数字から始められない。大文字と小文字は区別される。
//予約語は使えない。
console.log(tanka * 100);
tanka = 170;
console.log(tanka * 100);

let nedan = 500;
//nedan = nedan + 100;
nedan += 100; //省略した書き方
//nedan = nedan * 2
nedan *= 2;
//nedan += 1
nedan ++;
//nedan -=1
nedan --;
console.log(nedan);

//データ型について
// 文字列(string),数値(number),Undefind(定義されていない),Null(ヌル値が無い),真偽値(boolean),
console.log(typeof 'Hello');
console.log(typeof 5);
console.log(typeof true);
console.log(typeof undefind);
console.log(typeof null);
//シングルクォーテーションで囲って'5'文字列としているけどちゃんと計算ができてしまう。
console.log('5' * 3);
console.log('5' - 3);
//ただし、プラスの時だけは文字列を単につなげる記号とみなされる　＋
console.log('5' + 3);//53となる
console.log(parseInt('5',10) + 3);//10進数の5
console.log(parseInt('hello' ,10));//NaN 数字が無いという意味













