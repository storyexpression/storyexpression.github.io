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