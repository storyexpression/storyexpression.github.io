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
let clickNumber = 0;

// arrow left
$('#member .arrow .left').on('click',leftSlide);

function leftSlide() {

  clickNumber--;
  if(clickNumber < 0){
    clickNumber = 4;
  }

  $('.memberBox').removeClass('num0 num1 num2 num3 num4');

  $('.memberBox').eq(clickNumber).addClass('num0');
  $('.memberBox').eq(clickNumber-4).addClass('num1');
  $('.memberBox').eq(clickNumber-3).addClass('num2');
  $('.memberBox').eq(clickNumber-2).addClass('num3');
  $('.memberBox').eq(clickNumber-1).addClass('num4');

}

$('#member .arrow .left').on('click',leftChange);

function leftChange() {
  slideNumber--;
  if(slideNumber < 0){
    slideNumber = 4;
  }

  $(".memberBox").eq(slideNumber - 2).removeClass("checked");
  $(".memberBox").eq(slideNumber - 3).addClass("checked");

  $(".dot span").removeClass("checked");
  $(".dot span").eq(slideNumber).addClass("checked");

}

// arrow right

$('#member .arrow .right').on('click',rightSlide);

function rightSlide() {

  clickNumber++;
  if(clickNumber > 4){
    clickNumber = 0;
  }

  $('.memberBox').removeClass('num0 num1 num2 num3 num4');

  $('.memberBox').eq(clickNumber-5).addClass('num0');
  $('.memberBox').eq(clickNumber-4).addClass('num1');
  $('.memberBox').eq(clickNumber-3).addClass('num2');
  $('.memberBox').eq(clickNumber-2).addClass('num3');
  $('.memberBox').eq(clickNumber-1).addClass('num4');

}

$('#member .arrow .right').on('click',rightChange);

function rightChange() {

  slideNumber++;
  if(slideNumber > 4){
    slideNumber = 0;
  }

  $(".memberBox").eq(slideNumber -4).removeClass("checked");
  $(".memberBox").eq(slideNumber -3).addClass("checked");
  $(".dot span").removeClass("checked");
  $(".dot span").eq(slideNumber).addClass("checked");

}

