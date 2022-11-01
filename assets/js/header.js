document.getElementById('mouseOver').addEventListener('mouseover',function() {
  document.getElementById('header').classList.add('show');
});

document.getElementById('header').addEventListener('mouseleave',function() {
  document.getElementById('header').classList.remove('show');
});
