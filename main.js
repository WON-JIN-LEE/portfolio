'use strict';

// Make navbar transparent when it is on the top
const Navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
    console.log(window.scrollY);
    console.log('nav-h: ' + navbarHeight);
    if (window.scrollY > navbarHeight) {
        navbar.classList.add('navbar--dark');
    } else {
        navbar.classList.remove('navbar--dark');
    }
});

// Hendle scrolling when tapping on the navber menu
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (event) => {
    const target = event.target;
    const link = target.dataset.link;


    if (link == null) {
        return;
    }
    scrollIntoView(link);
});

// // Hendle click on "contact me" button on home
const homeContactBtn = document.querySelector('.home__contact');
homeContactBtn.addEventListener('click', (event) => {


    scrollIntoView('#contact');
});

function scrollIntoView(selector) {
    const scrollTO = document.querySelector(selector);
    scrollTO.scrollIntoView({
        behavior: 'smooth'
    });
}