/*====================================================================
* textPerspecAnimate.js
=====================================================================*/

// プラグイン化

$.fn.textPerspecAnimate = function(){
  // 文字列取得
  let shopName = this.text();
  // HTMLから一時的に削除
  this.text('');
  // 一文字ずつspanにバラす
  for(let i=0; i<shopName.length; i++){
  this.append('<span>' + shopName.charAt(i) + '</span>');
  }
  // this内のspanにcss適用
  this.find('span').each(function(){
    $(this).css({
      x : Math.random * 35 + 35,
      y : -25,
      rotateX : (Math.random() * 240 -120) + 'deg',
      rotateY : (Math.random() * 240 -120) + 'deg',
      perspective : 1000,
      opacity : 0
    });
  });
  this.find('span').each(function(i){
    $(this).transit({
      x : 0,
      y : 0,
      rotateX : 0,
      rotateY : 0,
      opacity : 1,
      delay : i * 30
    },1000,pageUp);
  });
};