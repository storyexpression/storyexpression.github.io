function menu() {
  document.getElementById('line1').classList.toggle('line1');
  document.getElementById('line2').classList.toggle('line2');
  document.getElementById('line3').classList.toggle('line3');
  document.getElementById('gNav').classList.toggle('show');
}
document.getElementById('toggle').addEventListener('click' , function () {
  menu();
} );

document.getElementById('aboutLink').addEventListener('click' , function () {
  document.getElementById('line1').classList.remove('line1');
  document.getElementById('line2').classList.remove('line2');
  document.getElementById('line3').classList.remove('line3');
  document.getElementById('gNav').classList.remove('show');
});

document.getElementById('meLink').addEventListener('click' , function () {
  document.getElementById('line1').classList.remove('line1');
  document.getElementById('line2').classList.remove('line2');
  document.getElementById('line3').classList.remove('line3');
  document.getElementById('gNav').classList.remove('show');
});

/* Copyright (c) 2022 by asukas (https://codepen.io/asukas/pen/oNbxpVy) */