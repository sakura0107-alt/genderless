$(window).on('load resize',function(){
    $('#section-experience__slide').bgSwitcher({
     images: ['image/experience_off.png','image/experience_on.png'], 
  　 interval: 3000,
  　 loop: true,
  　 shuffle: true,
  　 effect: "fade", // fade,blind,clip,slide,drop,hide
  　 duration: 500,
  　 easing: "swing" // linear,swing
     });
});

$(function() {
    $('#section-fashion__slide').bgSwitcher({
       images: ['image/fashion_off.png','image/fashion_on.png'], 
    　 interval: 3000,
    　 loop: true,
    　 shuffle: true,
    　 effect: "fade", // fade,blind,clip,slide,drop,hide
    　 duration: 500,
    　 easing: "swing" // linear,swing
       });
});


$(function() {
   $('#section-profile__slide').bgSwitcher({
   images: ['image/profile_off.png','image/profile_on.png'], 
    　 interval: 3000,
    　 loop: true,
    　 shuffle: true,
    　 effect: "fade", // fade,blind,clip,slide,drop,hide
    　 duration: 500,
    　 easing: "swing" // linear,swing
       });
      });
