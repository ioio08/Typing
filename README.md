# Typing Game

### アクセス：https://js-typing.netlify.app/

![Typing](https://user-images.githubusercontent.com/66821960/99471174-767b9100-2989-11eb-913c-4ecd98037537.gif)


## 使用言語

 -  HTML　<img width= '18px'  src="https://cdn.svgporn.com/logos/html-5.svg">

 -  SCSS　<img width= '25px'  src="https://cdn.svgporn.com/logos/sass.svg">

 -  JavaScript　<img width= '25px'  src="https://cdn.svgporn.com/logos/javascript.svg">

 ## アプリ概要

目的：if構文,for構文,while構文など、条件付きの処理の理解を深めるために作成

構成：
1. 課題となる文字が表示される
1. 表示された文字に応じてKeyboardをTypeし、その正誤に応じて処理（正：次の文字に進む、誤：次に進めない）
1. 全文字Type後、経過時間を表示

詳細：if,for,whileといった処理の流れ決める構文だけでなく、配列や変数、文字列の指定をして処理実装を行うなど、より詳細な処理設定も行っています。( 例)文字数で紐づけてTypeした文字との正誤判定、正解した単語を赤く変化させるなど )

## 出来る事

1. EnterKeyの押下だけで、ゲーム開始、再スタート。

1. 描画された文字と、Typeした単語の正誤判断。

1. 開始から全単語Type後までの経過時間を表示。

## 工夫ポイント

### 1.  文字数に応じて文字色を変化させる為に、span要素で文字を囲む処理(/main.js L31 ~ 37)

#### for構文を利用して、各文字を全てspanで囲むまでループ処理させる。
```
for (let i = 0; i < word.length; i++) {
    let span = document.createElement('span');
    target.appendChild(span);
    span.textContent = word.substr(i, 1);
    span.classList.add('style' + i);
  }
```

### 2.  Typeの正誤判断で処理分岐(/main.js L54 ~ 63)

#### if構文によってTypeの正誤によって処理を分岐させている。(true:正解した文字色を赤に + 次の文字に進む、false: 何も処理を行わない)
```
document.addEventListener('keydown', event => {

  // Typeミスでreturn
  if (event.key !== word[loc]) {
    return;
  }

  // 正解した文字を color:red に変更
  let spanStyle = document.getElementsByClassName('style' + loc);
  spanStyle[0].style.color = 'red';

  // Typeする文字を次に進める
  loc++;

  <--- 省略 --->
```

