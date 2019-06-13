const nama = document.getElementById('nama'),
      jawaban = document.getElementById('jawaban'),
      time = document.getElementById('timeCount'),
      coba = document.getElementById('btn-coba');
  
function getNama() {
  if(localStorage.getItem('nama') === null) {
    nama.textContent = '[Nama Anda?]';
  } else {
    nama.textContent = localStorage.getItem('nama');
  }
}

function getJawab() {
  if(localStorage.getItem('jawaban') === null) {
    jawaban.innerText = '?';
  } else {
    jawaban.innerText = localStorage.getItem('jawaban');
  }
}

function setNama(e) {
  if(e.type === 'keypress') {
    if(e.which == 13 || e.keyCode == 13) {
      localStorage.setItem('nama', e.target.innerText);
      nama.blur();
    }
  } else {
    localStorage.setItem('nama', e.target.innerText);
  }
}

function setJawaban(e) {
  if(e.type === 'keypress') {
    if(e.which == 13 || e.keyCode == 13) {
      localStorage.setItem('jawaban', e.target.innerText);
      jawaban.blur();
    }
  } else {
    localStorage.setItem('jawaban', e.target.innerText);
  }
}

  let min = 5;
  let sec = 0;
function countDown() {
  if(sec >= 0 && sec < 10) {
    sec = '0' + sec;
  }
  time.innerHTML = min + ":" + sec;
  sec -= 1;

  if(sec < 0) {
    sec = '59';
    min -= 1;
  }
  
  if(min < 3) {
    document.getElementsByClassName('bg-cal')[0].style.background = "url(../img/antique-classic-countdown-1095601.jpg) fixed no-repeat center";
  }
  if(min < 0) {
    clearInterval(count);
  }
  
}let count = setInterval(countDown, 1000);

function cekPengunjung() {
  if(localStorage.getItem('jawaban') == null) {
    alert('Selamat Datang, silakan mencoba.')
  } else if(localStorage.getItem('jawaban') == '7') {
    alert('Wowow!! Sepertinya anda sudah bisa berhitung');
  } else {
    alert('Baka!! Haha kau datang lagi.');
  };
}

nama.addEventListener('keypress', setNama);
nama.addEventListener('blur', setNama);
jawaban.addEventListener('keypress', setJawaban);
jawaban.addEventListener('blur', setJawaban);
coba.addEventListener('click', function() {
  if(localStorage.getItem('jawaban') == null) {
    alert('Coba dulu, ayo isi. Ganti tanda tanyanya.')
  } else if(localStorage.getItem('jawaban') == '7') {
    alert('Wow! Jagoan ey. Good Job.');
  } else {
    alert('Aho kah? Belajar lagi ya... jang/neng. ');
  };
})

getNama();
getJawab();
countDown();
cekPengunjung();