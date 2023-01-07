// iOSでoverflow:hidden;を適用するためのjs

// document.addEventListener('touchmove', function(e) {e.preventDefault();}, {passive: false});

// 何かに使えるかも

let screenHeight = window.innerHeight;
let screenWidth = window.innerWidth;

// load animation

$('#load .loadImg h1').textPerspecAnimate();
$('#load .loadImg p').textPerspecAnimate();
$('#load .loadImg svg').transit({
  opacity : 1,
  dilay : 1000
},1000);

// loaded

function pageUp(){
  $('#load').addClass('loaded');
};

// header

if($(window).width() > 768) {
  $('#mouseOver').on('mouseover',function(){
    $('header').addClass('show');
  });
  $('header').on('mouseleave',function(){
    $('header').removeClass('show');
  });
};

// toggle menu

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
  $('.turnLeft'+','+'.turnRight').on('mouseover',function(){
    $('.turnBtn').css('opacity','1');
    $('.turnBtn a').css({'visibility':'visible','opacity':'1'});
  });
  
  $('.turnLeft'+','+'.turnRight').on('mouseleave',function(){
    $('.turnBtn').css('opacity','0');
    $('.turnBtn a').css({'visibility':'hidden','opacity':'0'});
  });
}else {
  $('.turnLeft'+','+'.turnRight').ready(function(){
    $('.turnBtn').css('opacity','1');
    $('.turnBtn a').css({'visibility':'visible','opacity':'1'});
  });
}


// comicPagesSlider

//ページ送りのアニメーション作成（必須）ともう少し使いやすく改良予定

let pageNumber = 0;

let prevBtn = $('#comicPage .turnRight .btn');
let nextBtn = $('#comicPage .turnLeft .btn');

let comic = $('#comicPage .comic');

let leftPage = $('#comicPage .comic:nth-child(2n)');

let RightPage = $('#comicPage .comic:nth-child(2n + 1)');

// ページの総数取得

let totalPages = comic.length;

console.log(totalPages);

prevBtn.on('click',prevPage);

function prevPage() {
  pageNumber--;
  if(pageNumber < 0){
    // ここの処理中断部分の修正 nextPageも同様に
    return false;
  }

  if($(window).width() > 768) {
    leftPage.eq(pageNumber + 1).removeClass('show');
    RightPage.eq(pageNumber + 1).removeClass('show');
  
    leftPage.eq(pageNumber).addClass('show');
    RightPage.eq(pageNumber).addClass('show');
    
  }else {
    comic.eq(pageNumber + 1).removeClass('show');
  
    comic.eq(pageNumber).addClass('show');
  }

}

nextBtn.on('click',nextPage);

function nextPage() {
  pageNumber++;
  // totalPagesを用いることで他のページでも使えるように

  if($(window).width() > 768) {
    if(pageNumber > totalPages / 2 - 1){
      return false;
    }

    leftPage.eq(pageNumber - 1).removeClass('show');
    RightPage.eq(pageNumber - 1).removeClass('show');
  
    leftPage.eq(pageNumber).addClass('show');
    RightPage.eq(pageNumber).addClass('show');
    
  }else {
    if(pageNumber > totalPages - 1){
      return false;
    }
    comic.eq(pageNumber - 1).removeClass('show');
  
    comic.eq(pageNumber).addClass('show');
  }
}

// memberSlider

let slideNumber = 0;
let clickNumber = 0;
let memBox = $('.memberBox');

$(window).on('load',sliderSet);

function sliderSet() {
  $('.memberBox').eq(0).addClass('num0');
  $('.memberBox').eq(1).addClass('num1');
  $('.memberBox').eq(2).addClass('num2');
  $('.memberBox').eq(3).addClass('num3');
  $('.memberBox').eq(4).addClass('num4');

}

// arrow left
$('#member .arrow .left').on('click',leftSlide);

function leftSlide() {

  slideNumber--;
  if(slideNumber < 0){
    slideNumber = 4;
  }

  memBox.removeClass('num0 num1 num2 num3 num4');

  memBox.eq(slideNumber).addClass('num0');
  memBox.eq(slideNumber - 4).addClass('num1');
  memBox.eq(slideNumber - 3).addClass('num2');
  //memBox.eq(slideNumber - 2).removeClass("checked");
  memBox.eq(slideNumber - 2).addClass('num3');
  memBox.eq(slideNumber - 1).addClass('num4');

  $(".dot span").removeClass("checked");
  $(".dot span").eq(slideNumber).addClass("checked");

}

// arrow right

$('#member .arrow .right').on('click',rightSlide);

function rightSlide() {

  slideNumber++;
  if(slideNumber > 4){
    slideNumber = 0;
  }

  memBox.removeClass('num0 num1 num2 num3 num4');

  memBox.eq(slideNumber - 5).addClass('num0');
  memBox.eq(slideNumber - 4).addClass('num1');
  memBox.eq(slideNumber - 3).addClass('num2');
  //memBox.eq(slideNumber - 4).removeClass("checked");
  memBox.eq(slideNumber - 2).addClass('num3');
  memBox.eq(slideNumber - 1).addClass('num4');

  $(".dot span").removeClass("checked");
  $(".dot span").eq(slideNumber).addClass("checked");

}

//以下仮組みプログラム

/*

let leftComic = $('#comicPage .leftPage .comic');
let rightComic = $('#comicPage .rightPage .comic');

//let totalPages = leftComic.length;

console.log(leftComic);


prevBtn.on('click',prevPage);

function prevPage() {
  pageNumber--;
  if(pageNumber < 0){
    return pageNumber == 0;
  }
  
  leftComic.eq(pageNumber + 1).removeClass('show');
  rightComic.eq(pageNumber + 1).removeClass('show');
  leftComic.eq(pageNumber).addClass('show');
  rightComic.eq(pageNumber).addClass('show');

  console.log(pageNumber);

}

nextBtn.on('click',nextPage);

function nextPage() {
  pageNumber++;
  if(pageNumber > totalPages - 1){
    return pageNumber == totalPages - 1;
  }

  leftComic.eq(pageNumber - 1).removeClass('show');
  rightComic.eq(pageNumber - 1).removeClass('show');
  leftComic.eq(pageNumber).addClass('show');
  rightComic.eq(pageNumber).addClass('show');

  console.log(pageNumber);
}

*/