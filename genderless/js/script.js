$(function() {
    $('.menu-trigger').on('click', function(){
        $(this).toggleClass('active');
      //   $('.header-nav').fadeToggle(1000);
        $('.header-nav').toggleClass('show');
         $('.section-top__image').toggleClass('active');
         $('.section-experience-content').toggleClass('active');
         $('.section-fashion-content').toggleClass('active');
         $('.section-profile-content').toggleClass('active');
         $('body').toggleClass('scroll-prevent');
         
    }); });


