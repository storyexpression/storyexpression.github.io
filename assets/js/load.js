let screenHeight = window.innerHeight;
let screenWidth = window.innerWidth;

$('#load span').transit({
  'opacity' : 1
},1800);

$('#load').transit({
  'x' : -screenWidth,
  'opacity' : 0,
  'delay' : 2000
},1800);