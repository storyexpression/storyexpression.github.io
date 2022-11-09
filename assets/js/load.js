let screenHeight = window.innerHeight;
let screenWidth = window.innerWidth;

$('#load span').transit({
  'opacity' : 1
},1800,pageUp);

function pageUp(){
  $('#load').transit({
    'x' : -screenWidth,
    'y' : -screenHeight,
    'rotate' : '-90deg',
    'opacity' : 0
  },2800)};
