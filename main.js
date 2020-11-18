'use strict'

{
  // Typingに使うwordを格納する配列
  let words = [
    'red',  'pink',  'blue',  'yellow',  'green',  'orange',  'gray',  'black',  'white',
  ];
  // 各単語を格納していく変数
  let word;
  // wordの何文字目かを表す変数(location の略称)
  let loc;
  // Typingスタート時間を格納する変数(Enterを押した時間)
  let startTime;
  // Typingの状況を切り替える変数(true:実行中, false:停止中 )
  let isPlaying = false;
  const reset = document.getElementById('reset');
  const target = document.getElementById('target');
  target.textContent = 'Click EnterKye to start!!';

  // Typingに使う文字を生成する関数
  function setWord() {
    // wardsからwordへ、ランダムに単語を移していく
    word = words.splice(Math.floor(Math.random() * words.length), 1)[0];

    // wordを切り替える為のwhile構文
    while (target.firstChild) {
      target.removeChild(target.firstChild);
    };

    // wordの入力が正解だった場合に文字色を赤に変えていく処理
    for (let i = 0; i < word.length; i++) {
      // wardの各文字をspanで包み、loc番号と紐付けて対象の文字を指定、styleを付与
      let span = document.createElement('span');
      target.appendChild(span);
      span.textContent = word.substr(i, 1);
      span.classList.add('style' + i);
    }

    // 文字位置を先頭に設定
    loc = 0;
  }

  // Typing スタートさせるEvent:keypress（Enter）を設定
  document.addEventListener('keypress', event => {
    if (event.key === 'Enter' && isPlaying === false) {
      isPlaying = true;
      startTime = Date.now();
      setWord();
    }
    return;
  });

  // 課題の文字とTypeした文字の正誤を検証するEvent設定
  document.addEventListener('keydown', event => {
    // 間違っていればreturn
    if (event.key !== word[loc]) {
      return;
    }

    // 正解した文字に color:red を付与する
    let spanStyle = document.getElementsByClassName('style' + loc);
    spanStyle[0].style.color = 'red';
    loc++;

    // 最後の文字をtypeしたタイミングで、words配列内の状況に合わせて処理を分岐させる。
    // 1. words.length > 0 : 次の文字をセットする
    // 2. words.length = 0 : 経過時間、リセットボタンを描画、Enterで再スタート
    if (loc === word.length) {
      if (words.length === 0) {
        reset.classList.remove('hidden');
        // 経過時間を設定・描画
        const elapsedTime = ((Date.now() - startTime) / 1000).toFixed(2);
        target.textContent = `Finished! ${elapsedTime} seconds!`;

        //  Typingを再スタートさせる関数
        document.addEventListener('keydown', event => {
          if (event.key === 'Enter' && isPlaying === true) {
            isPlaying = false;
            reset.classList.add('hidden');
            target.textContent = 'Click EnterKye to start!!';
            words = [
              'red',  'pink',  'blue',  'yellow',  'green',  'orange',  'gray',  'black',  'white',
            ];
          }
        });
        return;
      }
      // 次の単語をセット
      setWord()
    }
  });



}
