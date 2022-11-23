// header

if($(window).width() > 768) {
  $('#mouseOver').on('mouseover',function(){
    $('header').addClass('show');
  });
  $('header').on('mouseleave',function(){
    $('header').removeClass('show');
  });
};

// toggle

$('#toggle').on('click',function(){
  $('#line1').toggleClass('line1');
  $('#line2').toggleClass('line2');
  $('#line3').toggleClass('line3');
  $('#gNav').toggleClass('show');
});

// comicPages

if($(window).width() > 768) {
  $('#comicPage #mouseOver').on('mouseover',function() {
    $('header').addClass('show');
    $('footer').addClass('show');
  });
  $('#comicPage header').on('mouseleave',function(){
    $('header').removeClass('show');
    $('footer').removeClass('show');
  });
};

$('.turnLeft'+','+'.turnRight').on('mouseover',function(){
  $('.turnBtn').css('opacity','1');
  $('.turnBtn a').css({'visibility':'visible','opacity':'1'});
});

$('.turnLeft'+','+'.turnRight').on('mouseleave',function(){
  $('.turnBtn').css('opacity','0');
  $('.turnBtn a').css({'visibility':'hidden','opacity':'0'});
});

// 何かに使えるかも

let screenHeight = window.innerHeight;
let screenWidth = window.innerWidth;

// load

$('#load .loadImg h1').textPerspecAnimate();
$('#load .loadImg p').textPerspecAnimate();
$('#load .loadImg svg').transit({
  opacity : 1,
  dilay : 1000
},1000);

function pageUp(){
  $('#load').addClass('loaded');
};

// memberSlider

let slideNumber = 0;

// arrow left

$('#member .arrow .left').on('click',leftSlide);

function leftSlide() {
  slideNumber--;
  if(slideNumber < 0){
    slideNumber = 4;
  }

  $(".memberBox").removeClass("checked");
  $(".memberBox").eq(slideNumber).addClass("checked");
  $('.memberBox').eq(slideNumber + 1).insertBefore('.memberBox').eq(slideNumber);

  $(".dot span").removeClass("checked");
  $(".dot span").eq(slideNumber).addClass("checked");
  $('.memberBox').eq(slideNumber).remove('.memberBox').eq(slideNumber - 1);

}

// arrow right

$('#member .arrow .right').on('click',rightSlide);

function rightSlide() {

  slideNumber++;
  if(slideNumber > 4){
    slideNumber = 0;
  }

  $(".memberBox").removeClass("checked");
  $(".memberBox").eq(slideNumber).addClass("checked");
  $('.memberBox').eq(slideNumber - 1).insertBefore('.memberBox').eq(slideNumber);

  $(".dot span").removeClass("checked");
  $(".dot span").eq(slideNumber).addClass("checked");
  $('.memberBox').eq(slideNumber).remove('.memberBox').eq(slideNumber + 1);

}