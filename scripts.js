$(function(){

  /*Move dial arm with a class of 'rotated-45' to end on hover*/
  $('.dial-wrapper-45').hover(function(){
    $(this).children('.rotated-45').removeClass('dial-45-to-start').addClass('dial-45-to-end');
  })
  
  /*Move dial arm with a class of rotated-45 back to start on mouseleave*/
  $('.dial-wrapper-45').mouseleave(function(){
    $(this).children('.rotated-45').removeClass('dial-45-to-end').addClass('dial-45-to-start');
  })
  
  /*Move dial arm with a class of rotated-90 on hover*/
  $('.dial-wrapper-90').hover(function(){
    $(this).children('.rotated-90').removeClass('dial-90-to-start').addClass('dial-90-to-end');
  })
  
  /*Move dial arm with a class of rotated-90 back to start on mouseleave*/
  $('.dial-wrapper-90').mouseleave(function(){
    $(this).children('.rotated-90').removeClass('dial-90-to-end').addClass('dial-90-to-start');
  })
  
})