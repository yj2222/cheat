$(function(){
  let spbtn = $('.spbtn');
  let ddtgl = $('nav.spnav li.dd-tgl');
  // navigation event
  spbtn.on('click', function(){
    $(this).toggleClass('active');
    $('nav.spnav').toggleClass('active');
  });
  ddtgl.on('click', function(){
    $(this).children('.drop-down').slideToggle();
  });
  // bxslider
  $(document).ready(function(){
    $('.bxslider').bxSlider({
      auto: true, // オートスライド
      mode: 'fade', // horizontal / vertical / fade 
      speed: 3000, // 遷移スピード
      pause: 3000, // スライド間隔
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
  let thumbnalImg = $('ul.thumbnail img');
  for(let i = 0; i < thumbnalImg.length; i++){
    console.log(thumbnalImg[0]);
    ScrollReveal().reveal(thumbnalImg[i], { 
      viewFactor: 1,
      duration: 1000, 
      easing: 'ease-out',
      delay: `${300 * i}`,
      origin: 'left', 
      distance: '50px',
      reset: true
    });
  }
  ScrollReveal().reveal('p.scr a', { 
    duration: 2000,
    delay: 1200,
    opacity: 0,
    scale: 0.1,
    reset: true 
  });
  ScrollReveal().reveal(`.deco1`, { 
    duration: 2000, 
    origin: 'top', 
    distance: '100%',
    reset: true 
  });
  ScrollReveal().reveal('.deco2', { 
    duration: 2000, 
    delay: 300,
    origin: 'bottom', 
    distance: '100%',
    reset: true 
  });
  ScrollReveal().reveal('p.scr span:first-of-type', { 
    duration: 2000, 
    delay: 600,
    origin: 'left', 
    distance: '100%',
    reset: true 
  });
  ScrollReveal().reveal('p.scr span:last-of-type', { 
    duration: 2000, 
    delay: 900,
    origin: 'right', 
    distance: '100%',
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