//ランダムでカラーを返す関数
function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i=0; i<6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    //id="color"の要素にcolorを変更する
    document.getElementById("color").innerHTML = color;
    return color;
    }

//bodyの背景色を変更する関数
function changeColor() {
    var colorBg = getRandomColor();
    document.body.style.backgroundColor = colorBg;
    }

//クリップボードにコピーする関数
    function copyColor() {
  copyToClipboard(document.getElementById("color").innerHTML);
    }

    // テキストをクリップボードにコピーする関数
function copyToClipboard(text) {
    navigator.clipboard.writeText(text)
      .then(() => {
        console.log('テキストがクリップボードにコピーされました: ', text);
      })
      .catch((error) => {
        console.error('クリップボードへのコピーに失敗しました: ', error);
      });
  }
  
  
changeColor()