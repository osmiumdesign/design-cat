$(function() {

$('.menu-hamburger').on('click', function() {
  $(this).toggleClass('hamburger-open');
  $('.side-menu').toggleClass('side-open');
});
	// Custom JS
  $(window).on("load",function(){
              $("a[rel='anchor']").mPageScroll2id({
                scrollSpeed: 800,
                highlightClass:"anchor-hover",
              });
          });

});
if ($(window).width() > 720) {
$(document).ready(function() {
  $('.menu-hamburger').addClass('hamburger-open');
  $('.side-menu').addClass('side-open');
});
};
