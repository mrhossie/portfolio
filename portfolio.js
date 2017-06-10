$(window).scroll(function() {

  var wScroll = $(this).scrollTop();
  //console.log(wScroll);
  if (wScroll < 550) {
    $('#myName').css({
      'transform': 'translate(0px, ' + wScroll / 2 + 'px)'
    });
  }

  // if (wScroll > $('.coding').offset().top - ($(window).height() / 5 )){
  //   $('.coding').addClass('is-showing');
  // }
  if (wScroll > $('.talent').offset().top - ($(window).height() / 6 )){

        $(".talent").addClass('is-showing');
  }
  if (wScroll <= $('.talent').offset().top - ($(window).height() / 6 )){

        $(".talent").removeClass('is-showing');
  }

});
