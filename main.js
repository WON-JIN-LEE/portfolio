'use strict';

// Make navbar transparent when it is on the top
const Navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
    console.log(window.scrollY);
    console.log('nav-h: ' + navbarHeight);
    if (window.scrollY > navbarHeight) {
        navbar.classList.add('navbar--dark');
    }
    else {
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
    console.log(event.target.dataset.link);
    const scrollTO = document.querySelector(link);
    scrollTO.scrollIntoView({ behavior: 'smooth' });
});