$(window).scroll(function() {

  var wScroll = $(this).scrollTop();
  //console.log(wScroll);
  if (wScroll < 550) {
    $('.myName').css({
      'transform': 'translate(0px, ' + wScroll / 1.5 + 'px)'
    });
  }

  if (wScroll > $('#talents').offset().top - ($(window).height() / 4 )){

        //$(".talents").addClass('is-showing');
        $('.talents').each(function(i){
          setTimeout(function(){
            $('.talents').eq(i).addClass('is-showing');
          }, 750 *(i));


        });


  }
  if (wScroll < $('#talents').offset().top - ($(window).height() / 6 )){

        $('.talents').removeClass('is-showing');

  }

});
