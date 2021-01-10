$(function(){
  let spbtn = $('.spbtn');
  let ddbgl = $('.dd-tgl');
  // navigation drower event
  spbtn.on('click', function(){
    if($(window).width() <= 767){
      $(this).toggleClass('active');
      $('nav').toggleClass('active');
    }
  });
  ddbgl.on('click', function(){
    if($(window).width() <= 767){
      $(this).find('ul.drop-down').slideToggle();
    }
  });
  // bxslider
  $(document).ready(function(){
    $('.bxslider').bxSlider({
      auto: true, // オートスライド
      mode: 'fade', // horizontal / vertical / fade 
      speed: 1000, // 遷移スピード
      pause: 10000, // スライド間隔
    });
  });
  // lightBox
  lightbox.option({
    disableScrolling: true, // モーダルアクティブ時はスクロール禁止
    fadeDuration: 1000, // 背景フェードの時間、デフォは600
    imageFadeDuration: 1000, // 画像フェードの時間、デフォは600
  })
  // JQuery Modal
  $('a.jm-opn').click(function() {
    $(this).modal({
      fadeDuration: 500,
      fadeDelay: 0.50
    });
    return false;
  });
  // ScrollReveal
  ScrollReveal().reveal('.scr', { 
    duration: 2000,
    delay: 300,
    opacity: 0,
    scale: 0.1,
    reset: true 
  });
  // scrollTop
  let sclTop = $('.scl-top');
  $(window).scroll(function() {
    if($(this).scrollTop() >= 500){
      sclTop.fadeIn();
    } else {
      sclTop.fadeOut();
    }
  })
  sclTop.on('click', function(){
    // $(window).scrollTop(0);
    $('html, body').animate({scrollTop:0});
  });
});