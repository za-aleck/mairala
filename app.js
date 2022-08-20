 $(document).ready(function() {
     $('.burger').on('click', function() {
         $('.burger').toggleClass('active');
         $('html,body').toggleClass('lock');
         $('.menu').toggleClass('active');
     });
     $('.menu__link,.header__logo').on('click', function() {
         $('html,body').removeClass('lock');
         $('.burger').removeClass('active');
         $('.menu').removeClass('active');
     });
     let sections = $('section'),
         nav = $('nav'),
         nav_height = nav.outerHeight();

     $(window).on('scroll', function() {
         $('nav a').removeClass('active');
         let cur_pos = $(this).scrollTop();
         sections.each(function() {
             let top = $(this).offset().top - nav_height - 61,
                 bottom = top + $(this).outerHeight();
             if (cur_pos >= top && cur_pos <= bottom) {
                 nav.find('a').removeClass('active');
                 sections.removeClass('active');
                 $(this).addClass('active');
                 nav.find('a[href="#' + $(this).attr('id') + '"]').addClass('active');
             }
         });
     });
     //nav.find('a')
     $('[href*="#"]').on('click', function() {
         let $el = $(this),
             id = $el.attr('href');
         $('html, body').animate({
             scrollTop: $(id).offset().top - nav_height - 60
         }, 1000);
         return false;
     });
     $('.slider').slick({
         dots: true,
         infinite: true,
         speed: 300,
         slidesToShow: 1,
         slidesToScroll: 1,
         //waitForAnimate:false,
         arrows: false,
     });
     $('.carousel').slick({
         dots: true,
         infinite: true,
         speed: 300,
         slidesToShow: 1,
         slidesToScroll: 1,
         prevArrow: '<button class="arrow right"><img src="img/right.png" alt=""></button>',
         nextArrow: '<button class="arrow left"><img src="img/left.png" alt=""></button>',
         arrows: true
     });


       //$("body").on('click', '[href*="#"]', function(e){
   //var fixed_offset = 63;
   //$('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
  //e.preventDefault();
  //});
 });