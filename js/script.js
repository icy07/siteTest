let burger = document.querySelector('.burger');
let sign = document.querySelector('.header__sign');
let menu = document.querySelector('.header__menu');
let bg = document.querySelector('.bg-nav');
let body = document.querySelector('body');

burger.onclick = function () {
    burger.classList.toggle("active");
};

$(document).mouseup(function (e) {
    let div = $(".burger");
    if (!div.is(e.target) &&
        div.has(e.target).length === 0) {
        burger.classList.remove('active');
    }
});

body.onclick = function () {
    if ($('.burger').hasClass('active')) {
        sign.classList.add("active");
        menu.classList.add("active");
        bg.classList.add("active");
        body.classList.add("active");
    } else {
        sign.classList.remove("active");
        menu.classList.remove("active");
        bg.classList.remove("active");
        body.classList.remove("active");
    }
};



$('.services__spoiler-head').click(function (event) {
    if ($('.services__spoiler').hasClass('one-slide')) {
        $('.services__spoiler-head').not($(this)).removeClass('active');
        $('.services__content-wrapper').not($(this).next()).slideUp(300);
    }
    $(this).toggleClass('activeSlider').next().slideToggle(300);
});



const slider = document.querySelector('.swiper-container');
const slider2 = document.querySelector('.swiper-container2');

let mySwiper = new Swiper(slider, {
    speed: 400,
    spaceBetween: 50,
    slidesPerView: 1,
    centeredSlides: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    loop: true,
    direction: 'vertical',
    loopPreventsSlide: false,
    breakpoints: {
        750: {
            slidesPerView: 2,
            spaceBetween: 70,
            centeredSlides: false,
        }
    }
});

let galleryThumbs = new Swiper('.gallery-thumbs', {
    slideClass: 'swiper-slide2',
    wrapperClass: 'swiper-wrapper2',
    spaceBetween: 10,
    slidesPerView: 1,
    loop: true,
    simulateTouch: false,
    allowTouchMove: false,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
});

var galleryTop = new Swiper('.gallery-top', {
    slideClass: 'swiper-slide2',
    wrapperClass: 'swiper-wrapper2',
    speed: 400,
    slidesPerView: 3,
    centeredSlides: true,
    loop: true,
    loopPreventsSlide: false,
    slideToClickedSlide: true,
    thumbs: {
        swiper: galleryThumbs
    }
});
