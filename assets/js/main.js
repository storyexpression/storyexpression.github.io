// ブレイクポイント分岐変数

let breakPoint = $(window).width() > 768;

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

if(breakPoint) {
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

// comicPagesSlider

//ページ送りのアニメーション作成（必須）ともう少し使いやすく改良予定

let comic = $('#comicPage .comic');

let pageNumber = 0;

let prevBtn = $('#comicPage .turnRight .btn');
let nextBtn = $('#comicPage .turnLeft .btn');

let leftPage = $('#comicPage .comic:nth-child(2n)');

let RightPage = $('#comicPage .comic:nth-child(2n + 1)');

let restaurant = $('body').hasClass('restaurant');
let alice = $('body').hasClass('alice');
let hansel = $('body').hasClass('hansel');


// ページの総数取得

let totalPages = comic.length;

console.log(totalPages);

// ロード時にshowクラスを付与

$(window).on('load',function(){
  if(breakPoint) {
    leftPage.eq(pageNumber).addClass('show');
    RightPage.eq(pageNumber).addClass('show');
  }
  else {
    comic.eq(pageNumber).addClass('show');
  };

  console.log('ok');
});

prevBtn.on('click',prevPage);

function prevPage() {
  pageNumber--;
  if(pageNumber < 0){
    if(restaurant){
      window.location.href ='../alice/';
    }else if(alice){
      window.location.href ='../hansel/';
    }else {
      window.location.href ='../restaurant/';
    }
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

  console.log(pageNumber);

}

nextBtn.on('click',nextPage);

function nextPage() {
  pageNumber++;
  // totalPagesを用いることで他のページでも使えるように

  if($(window).width() > 768) {
    if(pageNumber > totalPages / 2 - 1){
      if(restaurant){
        window.location.href ='../hansel/';
      }else if(alice){
        window.location.href ='../restaurant/';
      } else {
        window.location.href ='../alice/';
      }
    }

    leftPage.eq(pageNumber - 1).removeClass('show');
    RightPage.eq(pageNumber - 1).removeClass('show');
  
    leftPage.eq(pageNumber).addClass('show');
    RightPage.eq(pageNumber).addClass('show');
    
  }else {
    if(pageNumber > totalPages - 1){
      if(restaurant){
        window.location.href ='../hansel/';
      }else if(alice){
        window.location.href ='../restaurant/';
      } else {
        window.location.href ='../alice/';
      }
    }
    comic.eq(pageNumber - 1).removeClass('show');
  
    comic.eq(pageNumber).addClass('show');
  }
  
  console.log(pageNumber);

}

// モーダルウィンドウ

let modalWrap = document.createElement('div');
modalWrap.className = 'modalWrap';

let modalBase = $('#comicPage');
modalBase.append(modalWrap);

let modalWindow = $('#comicPage .modalWrap');

// オーバーレイ

let modalBack = document.createElement('div');
modalBack.className = 'bg';

modalWindow.append(modalBack);

// 漫画画像クリックでオーバーレイ表示

let comicImg = comic.has('img');

comicImg.on('click',modalOpen);

//オーバーレイ要素に内包されてる閉じるボタン

let closeBtn = document.createElement('div');
closeBtn.className = 'closeBtn';

let topLine = document.createElement('span');
let bottomLine = document.createElement('span');

modalWindow.append(closeBtn);

closeBtn.append(topLine);
closeBtn.append(bottomLine);

$('.closeBtn').on('click',modalClose);
$('.bg').on('click',modalClose);

//開閉動作

function modalOpen() {
  //ここに画像を開く記述を追加
  if($(this) != comic.last()) {
    if(breakPoint) {
      modalWindow.transit({
        visibility : 'visible',
        opacity : 1
      });
      modalWindow.append($(this).clone());
    }else {
      ;
    };
  }else {
    return false;
  };
};

function modalClose() {
  $('#comicPage .modalWrap').transit({
    visibility : 'hidden',
    opacity : 0
  });
  $('.modalBack .comic').remove();
}

// memberSlider

let slideNumber = 0;
let memBox = $('.memberBox');
let bottomDot = $('.dot span');

// ロード時にクラス付与

$(window).on('load',sliderSet);

function sliderSet() {
  memBox.eq(0).addClass('num0');
  memBox.eq(1).addClass('num1');
  memBox.eq(2).addClass('num2');
  memBox.eq(3).addClass('num3');
  memBox.eq(4).addClass('num4');
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
  memBox.eq(slideNumber - 2).addClass('num3');
  memBox.eq(slideNumber - 1).addClass('num4');

  bottomDot.removeClass("checked");
  bottomDot.eq(slideNumber).addClass("checked");

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
  memBox.eq(slideNumber - 2).addClass('num3');
  memBox.eq(slideNumber - 1).addClass('num4');

  bottomDot.removeClass("checked");
  bottomDot.eq(slideNumber).addClass("checked");

}

// 下部のボタン操作で移動

bottomDot.eq(0).on('click',buttonSlide0);
bottomDot.eq(1).on('click',buttonSlide1);
bottomDot.eq(2).on('click',buttonSlide2);
bottomDot.eq(3).on('click',buttonSlide3);
bottomDot.eq(4).on('click',buttonSlide4);


function buttonSlide0() {
  // slideNumberを0に
  slideNumber = 0;
  // クラス除去
  memBox.removeClass('num0 num1 num2 num3 num4');
  // クラス付与
  memBox.eq(slideNumber).addClass('num0');
  memBox.eq(slideNumber + 1).addClass('num1');
  memBox.eq(slideNumber + 2).addClass('num2');
  memBox.eq(slideNumber + 3).addClass('num3');
  memBox.eq(slideNumber + 4).addClass('num4');
  // ドット部分処理
  bottomDot.removeClass("checked");
  bottomDot.eq(slideNumber).addClass("checked");
};

function buttonSlide1() {
  // slideNumberを1に
  slideNumber = 1;
  // クラス除去
  memBox.removeClass('num0 num1 num2 num3 num4');
  // クラス付与
  memBox.eq(slideNumber).addClass('num0');
  memBox.eq(slideNumber + 1).addClass('num1');
  memBox.eq(slideNumber + 2).addClass('num2');
  memBox.eq(slideNumber + 3).addClass('num3');
  memBox.eq(slideNumber - 1).addClass('num4');
  // ドット部分処理
  bottomDot.removeClass("checked");
  bottomDot.eq(slideNumber).addClass("checked");
};

function buttonSlide2() {
  // slideNumberを2に
  slideNumber = 2;
  // クラス除去
  memBox.removeClass('num0 num1 num2 num3 num4');
  // クラス付与
  memBox.eq(slideNumber).addClass('num0');
  memBox.eq(slideNumber + 1).addClass('num1');
  memBox.eq(slideNumber + 2).addClass('num2');
  memBox.eq(slideNumber - 2).addClass('num3');
  memBox.eq(slideNumber - 1).addClass('num4');
  // ドット部分処理
  bottomDot.removeClass("checked");
  bottomDot.eq(slideNumber).addClass("checked");
};

function buttonSlide3() {
  // slideNumberを3に
  slideNumber = 3;
  // クラス除去
  memBox.removeClass('num0 num1 num2 num3 num4');
  // クラス付与
  memBox.eq(slideNumber).addClass('num0');
  memBox.eq(slideNumber + 1).addClass('num1');
  memBox.eq(slideNumber - 3).addClass('num2');
  memBox.eq(slideNumber - 2).addClass('num3');
  memBox.eq(slideNumber - 1).addClass('num4');
  // ドット部分処理
  bottomDot.removeClass("checked");
  bottomDot.eq(slideNumber).addClass("checked");
};

function buttonSlide4() {
  // slideNumberを4に
  slideNumber = 4;
  // クラス除去
  memBox.removeClass('num0 num1 num2 num3 num4');
  // クラス付与
  memBox.eq(slideNumber).addClass('num0');
  memBox.eq(slideNumber - 4).addClass('num1');
  memBox.eq(slideNumber - 3).addClass('num2');
  memBox.eq(slideNumber - 2).addClass('num3');
  memBox.eq(slideNumber - 1).addClass('num4');
  // ドット部分処理
  bottomDot.removeClass("checked");
  bottomDot.eq(slideNumber).addClass("checked");
};