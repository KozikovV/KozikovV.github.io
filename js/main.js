$(window).scroll(function(){
    if ($(window).scrollTop() > 0) {
        $('.header__row').addClass('header-scroll');
        $('.header__logo').addClass('header__logo-scroll');
    }
    else {
        $('.header__row').removeClass('header-scroll');
        $('.header__logo').removeClass('header__logo-scroll')
    }
});



$(function(){
    $('.header__btn').on('click',function(){
        $('.header__btn').toggleClass('header__btn-cross');
        $('.header__row').toggleClass('header__row-open');
        $('.header__nav').toggleClass('header__nav-open');		
	});
    $('.header__btn-joinUs h3').on('click',function(){
        $('.header__list-joinUs').toggleClass('joinUs-dropdown');	
	});
	$('.header__btn-language h3').on('click',function(){
        $('.header__btn-language h3').toggleClass('header__btn-rotate');
        $('.header__list-language').toggleClass('language-dropdown');	
    });
    $('.footer__language h3').on('click',function(){
        $('.footer__list-language').toggleClass('footer__list-dropdown');
        $('.footer__language h3').toggleClass('footer__language-rotate');	
    });
});
