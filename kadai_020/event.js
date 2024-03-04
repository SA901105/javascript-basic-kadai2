//btnというidを持つHTML要素を取得し、定数に代入する
const btn = document.getElementById('btn');

// textというidを持つHTML要素を取得し、定数に代入する
const text = document.getElementById('text');

// HTML要素がクリックされたときにイベント処理を実行する
btn.addEventListener('click', () => {

  //h2要素を新しく作成する
  const chilText = document.createElement('h2');

  //作成したh2要素に「ボタンをクリックしました」というテキストを追加する
  childText.textContent = 'ボタンをクリックしました';

  // 作成したh2要素を書き換える
  text.textContent = 'ボタンをクリックしました';

});