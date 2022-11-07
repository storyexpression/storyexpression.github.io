let screenHeight = window.innerHeight;

$('#load span').transit({
  'opacity' : 1
},1800);

$('#load').transit({
  'y' : -screenHeight,
  'opacity' : 0,
  'delay' : 2000
},1800);