
$(function() {
    var header = $(".header-wrap");

    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll >= 50) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    });

});


$( ".mobile-menu-bars" ).click(function() {
  $('.mobile-menu-closed').show();
  $('.mobile-menu-bars').hide();
	$('.ico-menu').fadeIn();
});


$( ".mobile-menu-closed" ).click(function() {
  $('.mobile-menu-closed').hide();
  $('.mobile-menu-bars').show();
	$('.ico-menu').fadeOut();
});
