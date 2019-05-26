$(function () {

  var logoPos = $('.logo').offset().top;

  $(window).scroll(function(){
    
    if($(window).scrollTop() > [logoPos-50] ){
      $('.logo').addClass('logo-fixed');
    }else{
      $('.logo').removeClass('logo-fixed');
    }

  });


  $('.slider').slick({
    autoplay: true,
    speed: 2000,
    arrows: false,
    fade: true,
    infinite: true
  });


  $(window).scroll(function(){
    $('.info-bg').each(function(){
    var imgPos = $(this).offset().top;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll > imgPos - windowHeight + windowHeight/5){
      $(this).addClass('fade_on');
    }else{
      $(this).removeClass('fade_on');
    }
    });
  });

});