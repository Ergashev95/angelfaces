$(document).ready(function () {
    // we with contact
    const $pageContact = $('.nav__info-link');
    $pageContact.on('click',function(event){
        event.preventDefault();
        const $pageContactAttr = $(this).attr('href');
        const $pageContactCondinate = $($pageContactAttr).position().top - 100;
        $('html,body').animate({
            scrollTop: $pageContactCondinate,
        },700);
    })

    // scrroll top
    $(window).scroll(function () {
        const scrollTop = $(this).scrollTop();
        if (scrollTop > 300) {
            $('.scroll').fadeIn();
        } else {
            $('.scroll').fadeOut();
        }

    })

    $('.scroll').click(function () {
        $('html,body').animate({
            scrollTop: 0,
        });
    })

   
    // scroll page

    const $pageLinks = $('.nav__link');
    $pageLinks.click(function (event) {
        event.preventDefault();
        $pageLinks.removeClass('activepage');
        const $pageId = $(this).addClass('activepage').attr('href');
        const $codinate = $($pageId).position().top - 120;
        $('body,html').animate({
            scrollTop: $codinate,
        },100)
    })

    $(window).scroll(function () {
        const $scroll = $(this).scrollTop();
        $pageLinks.each(function () {
            const $target = $(this).attr('href');
            const $selector = $($target).position().top - 120;
            if($scroll >= $selector){
                $pageLinks.removeClass('activepage');
                $(this).addClass('activepage')
            }
        })
    })

    // slick slider

        
    $('.slicks').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        infinite: true,
        arrows: false,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
              }
            },
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
              }
            }
          ]
      });
    
});



window.addEventListener('load', function(){
    const elSliders = this.document.querySelectorAll('.header__sliders-item');
    const clonElSliders1 = elSliders;
    const clonElSliders2 = elSliders;
    const elSliderPrevBtn = document.querySelector('.slider-prev');
    const elSliderNextBtn = document.querySelector('.slider-next');


    elSliderPrevBtn.addEventListener('click', function(){
        for (let j = 0; j < elSliders.length; j++) {
            if(elSliders[j].classList.contains('active')){
                elSliders[j].classList.remove('active');
                elSliders[j].classList.add('deactive');
            } else if(elSliders[j].classList.contains('deactive')){
                elSliders[j].classList.remove('deactive');
                elSliders[j].classList.add('inactive');
            } else if(elSliders[j].classList.contains('inactive')){
                elSliders[j].classList.remove('inactive');
                elSliders[j].classList.add('active');
            }
        }
    });

    elSliderNextBtn.addEventListener('click', function(){
        for (let j = 0; j < elSliders.length; j++) {
            if(elSliders[j].classList.contains('active')){
                elSliders[j].classList.remove('active');
                elSliders[j].classList.add('deactive');
            } else if(elSliders[j].classList.contains('deactive')){
                elSliders[j].classList.remove('deactive');
                elSliders[j].classList.add('inactive');
            } else if(elSliders[j].classList.contains('inactive')){
                elSliders[j].classList.remove('inactive');
                elSliders[j].classList.add('active');
            }
        }
    });

    
    this.setInterval(() => {

    }, 1000)



    // menu burger

    const menuBurger = document.querySelector('.menu__btn');
    const navMenu = document.querySelector('.nav__menu');
    const menuClose = this.document.querySelector('.menu__close')
    const btnLink = document.querySelectorAll('.btn__link');
    const body = this.document.querySelector('body');
    console.log(menuBurger);
    console.log(btnLink);


    menuBurger.addEventListener('click',() => {
        navMenu.classList.add('activeburger')
    })
    menuClose.addEventListener('click',function(){
        navMenu.classList.remove('activeburger')
    })
    for(let i = 0; i < btnLink.length;i++){
        btnLink[i].addEventListener('click', () => {
            navMenu.classList.remove('activeburger')
        })
    } 
  
})
