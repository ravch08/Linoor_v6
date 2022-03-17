'use strict';

const header = document.querySelector('header');
const sidebar = document.querySelector('.sidebar');
const fadeIns = document.querySelectorAll('.fade-in');
const scrollTop = document.querySelector('.scrollTop');
const slideIns = document.querySelectorAll('.slide-in');
const bannerSection = document.querySelector('#banner');
const overlay = document.querySelector('.sidebar-overlay');
const closeSidebarBtn = document.querySelector('.btn-close')
const hamburgerMenu = document.querySelector('.hamburger-menu');

const priceSwitch = document.querySelector('.switch');
const yearlyPricing = document.querySelector('.pricing-yearly');
const priceSwitchRound = document.querySelector('.slider-round');
const monthlyPricing = document.querySelector('.pricing-monthly');


// ----- Intersection Observer -------------------------------------------------------------------

const options = {
    threshold: 1
};

const appearOptions = {
    threshold: 0.7,
    rootMargin: '-100px 0px -100px 0px'
};

const headerObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {

        if (!entry.isIntersecting) {
            header.classList.add('sticky');
        } else {
            header.classList.remove('sticky')
        }
    });
}, options);

const scrollObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {

        if (!entry.isIntersecting) {
            scrollTop.classList.remove('scaleDown');
        } else {
            scrollTop.classList.add('scaleDown');
        }
    });
}, options);

let appearObserver = new IntersectionObserver(function (entries) {

    entries.forEach(entry => {

        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('appear');
            appearObserver.unobserve(entry.target);
        }
    });
}, appearOptions);

headerObserver.observe(bannerSection);
scrollObserver.observe(bannerSection);

fadeIns.forEach(fadeIn => {
    appearObserver.observe(fadeIn);
});

slideIns.forEach(slideIn => {
    appearObserver.observe(slideIn);
});


// ----- Event Listeners  -------------------------------------------------------------------

const openSidebar = () => {
    sidebar.style.left = "0";
    overlay.style.left = "0";
};

const closeSidebar = () => {
    sidebar.style.left = "-35rem";
    overlay.style.left = "-100%";
};

scrollTop.addEventListener('click', () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

priceSwitch.addEventListener('click', () => {

    priceSwitchRound.classList.toggle('show-yearly');

    if (monthlyPricing.classList.contains('active')) {
        monthlyPricing.classList.remove('active');
        yearlyPricing.classList.add('active');
        yearlyPricing.classList.remove('hide');
        monthlyPricing.classList.add('hide');

    } else if (monthlyPricing.classList.contains('hide')) {
        monthlyPricing.classList.remove('hide');
        yearlyPricing.classList.add('hide');
        yearlyPricing.classList.remove('active');
        monthlyPricing.classList.add('active');
    }
});

overlay.addEventListener('click', closeSidebar);
hamburgerMenu.addEventListener('click', openSidebar);
closeSidebarBtn.addEventListener('click', closeSidebar);


// ----- Swiper -------------------------------------------------------------------

const swiperBanner = new Swiper('#swiper-banner', {

    loop: true,
    speed: 1000,
    effect: "fade",
    keyboard: true,
    spaceBetween: 80,
    slidesPerView: "1",
    centeredSlides: true,

    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    }
});

const swiperSponser = new Swiper('#swiper-sponser', {

    loop: true,
    keyboard: true,
    spaceBetween: 80,
    slidesPerView: "5",
    centeredSlides: true,

    breakpoints: {
        100: { slidesPerView: 1 },
        460: { slidesPerView: 3 },
        860: { slidesPerView: 5 }
    },

    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },

    pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
        clickable: 'true'
    }
});

const swiperTestimonial = new Swiper('#swiper-testimonial', {

    loop: true,
    centeredSlides: true,

    breakpoints: {
        350: { slidesPerView: 1, spaceBetween: 20 },
        1024: { slidesPerView: 2, spaceBetween: 30 },
        1400: { slidesPerView: 3, spaceBetween: 52 },
        1920: { slidesPerView: 4, spaceBetween: 30 },
    },

    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },

    pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
        clickable: 'true'
    }
});