// 任意の数値を変数numに代入する（ここでは16とします）
num = Math.floor(Math.random() * 16);

// 変数numの値を出力する（確認用）
console.log(num);

// 任意の数値を変数numに代入する(3の倍数の場合)
if (num % 3 === 0) {
  console.log('3の倍数です');
} 

//(5の倍数の場合)
else if (num % 5 === 0) {
  console.log('5の倍数です');
} 

//(3と5の倍数の場合)
else if (num % 3 === 0 && num % 5 === 0) {
  console.log('3と5の倍数です');
} 

//それ以外の場合
else {
  console.log('num');
}