'use strict'

{
  function setWord() {
    word = words.splice(Math.floor(Math.random() * words.length), 1)[0];

    // ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
    // カスタマイズ  ここから
    // ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝

    while (target.firstChild) {
      target.removeChild(target.firstChild);
    };
    for (let i = 0; i < word.length; i++) {
      let span = document.createElement('span');
      target.appendChild(span);
      span.textContent = word.substr(i, 1);
      span.classList.add('style' + i);
    }
    loc = 0;



    // ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
    // カスタマイズ  ここまで
    // ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
  }


  const words = [
    'pink',
    // 'red',
    // 'blue',
    // 'yellow',
    // 'green',
    // 'orange',
    // 'gray',
    // 'black',
    // 'white',
  ];
  let word;
  let loc;
  let startTime;
  let isPlaying = false;
  const reset = document.getElementById('reset');
  const target = document.getElementById('target');
  target.textContent = 'Click spaceKye to start!!';
  console.log(words);


  // ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
  // カスタマイズ  ここから
  // ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝


  document.addEventListener('keypress', ev => {
    if (ev.keyCode === 32 && isPlaying === false) {
      isPlaying = true;
      startTime = Date.now();
      setWord();
    }
    return;
  });

  // ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
  // カスタマイズ  ここから
  // ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝

  document.addEventListener('keydown', e => {
    if (e.key !== word[loc]) {
      return;
    }

    // ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
    // カスタマイズ  ここから
    // ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝

    let spanStyle = document.getElementsByClassName('style' + loc);
    spanStyle[0].style.color = 'red';

    // ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
    // カスタマイズ  ここまで
    // ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝

    loc++;

    if (loc === word.length) {
      if (words.length === 0) {
        reset.classList.remove('hidden');
        const elapsedTime = ((Date.now() - startTime) / 1000).toFixed(2);
        const result = document.getElementById('result');
        result.textContent = `Finished! ${elapsedTime} seconds!`;
        return;
      }
      setWord()
    }
  });

  function resetGame() {
    reset.addEventListener('click', () => {
      reset.classList.add('hidden');
      result.textContent = '';
      target.textContent = 'Click spaceKye to start!!';
    });
  }

  resetGame();


}