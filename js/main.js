const picArray = [
  {src: './img/baisen_first-half_01.jpg'},
  {src: './img/baisen_first-half_02.jpg'},
  {src: './img/baisen_first-half_03.jpg'},
  {src: './img/baisen_first-half_04.jpg'},
  {src: './img/baisen_first-half_05.jpg'},
  {src: './img/baisen_first-half_06.jpg'},
  {src: './img/baisen_first-half_07.jpg'},
  {src: './img/baisen_first-half_08.jpg'},
  ];
  
const picArray2 = [
  {src: './img/baisen_latter-half_01.jpg'},
  {src: './img/baisen_latter-half_02.jpg'},
  {src: './img/baisen_latter-half_03.jpg'},
  {src: './img/baisen_latter-half_04.jpg'},
  {src: './img/baisen_latter-half_05.jpg'},
  {src: './img/baisen_latter-half_06.jpg'},
  {src: './img/baisen_latter-half_07.jpg'},
  ];

  let counter = 0;
  
  function changePicture() {
    if (counter < picArray.length) {
      document.getElementById('pics').src = picArray[counter].src;
      counter++;
    } else {
      document.getElementById('pics').src = picArray[0].src;
      counter = 1;
    } 
  }

  function changePicture2() {
    if (counter < picArray2.length) {
      document.getElementById('pics').src = picArray2[counter].src;
      counter++;
    } else {
      document.getElementById('pics').src = picArray2[0].src;
      counter = 1;
    } 
  }
  
  let playingID = 0;
  let playingID2 = 0;
  
  function roastFirstHalf () {
    if (playingID == 0) {
      document.getElementById('playButton').innerHTML = '前半焙煎中！';
      playingID = setInterval(changePicture, 1000);
      document.getElementById('playButton2').innerHTML = '後半スタート';
      clearInterval(playingID2);
      playingID2 = 0;
    } else {
      document.getElementById('playButton').innerHTML = '前半';
      clearInterval(playingID);
      playingID = 0;
    }
  }

  // 後半ボタン
  function roastLatterHalf () {
    if (playingID2 == 0) {
      document.getElementById('playButton2').innerHTML = '後半焙煎中！';
      playingID2 = setInterval(changePicture2, 1000);
      document.getElementById('playButton').innerHTML = '前半';
      clearInterval(playingID);
      playingID = 0;
    } else {
      document.getElementById('playButton2').innerHTML = '後半';
      clearInterval(playingID2);
      playingID2 = 0;
    }
  }


  // 終了ボタン
  function finish () {
    document.getElementById('playButton').innerHTML = '前半スタート';
    clearInterval(playingID);
    playingID = 0;
    document.getElementById('playButton2').innerHTML = '後半スタート';
    clearInterval(playingID2);
    playingID2 = 0;
  }
