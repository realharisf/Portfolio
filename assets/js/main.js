/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById('nav-menu'),
navToggle = document.getElementById('nav-toggle'),
navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}


/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


// Intersection Observer to detect when the section is in view
const aboutSection = document.querySelector('#about');
const counters = document.querySelectorAll('.about__info-title');

const countUp = (element) => {
    const target = +element.getAttribute('data-count');
    let count = 0;
    const speed = 1000; // Speed of the counting animation (milliseconds)

    const increment = target / speed;

    const interval = setInterval(() => {
        count += increment;
        if (count >= target) {
            clearInterval(interval);
            element.textContent = target;
        } else {
            element.textContent = Math.floor(count);
        }
    }, 1);
};

// Intersection Observer to observe when the about section is in view
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Trigger counting animation
            counters.forEach(counter => {
                counter.classList.add('visible');
                countUp(counter);
            });
            observer.disconnect(); // Stop observing after animation starts
        }
    });
}, { threshold: 0.5 }); // Trigger when 50% of the section is in view

observer.observe(aboutSection);


/*==================== ACCORDION SKILLS ====================*/
const skillsContent = document.getElementsByClassName('skills__content'),
skillsHeader = document.querySelectorAll('.skills__header')

function toggleSkills(){
    let itemClass = this.parentNode.className

    for(i = 0; i < skillsContent.length; i++){
        skillsContent[i].className = 'skills__content skills__close'
    }

    if(itemClass === 'skills__content skills__close') {
        this.parentNode.className = 'skills__content skills__open'
    }
}

skillsHeader.forEach((el) =>{
    el.addEventListener('click', toggleSkills)
})

/*==================== QUALIFICATION TABS ====================*/
const tabs = document.querySelectorAll('[data-target]'),
tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab => {
    tab.addEventListener('click', () =>{
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tabContent =>{
            tabContent.classList.remove('qualification__active')
        })
        target.classList.add('qualification__active')

        tabs.forEach(tab => {
            tab.classList.remove('qualification__active')
        })

        tab.classList.add('qualification__active')
    })
})

/*==================== SERVICES MODAL ====================*/


/*==================== PORTFOLIO SWIPER  ====================*/
let swiperPortfolio = new Swiper(".portfolio__container", {
    cssMode: true,
    slidesPerView: 1,
    loop: true,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
});

/*==================== TESTIMONIAL ====================*/
let swiperTestimonial = new Swiper(".testimonial__container", {
    loop: true,
    grabCursor: true,
    spaceBetween: 48,

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    breakpoints:{
        568:{
            slidesPerView: 2,
        }
    }
});

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/


/*==================== CHANGE BACKGROUND HEADER ====================*/ 
function scrollHeader(){
    const nav = document.getElementById('header')
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*==================== SHOW SCROLL UP ====================*/ 


// /*==================== DARK LIGHT THEME ====================*/ 
// const themeButton = document.getElementById('theme-button')
// const darkTheme = 'dark-theme'
// const iconTheme = 'uil-sun'

// // Previously selected topic (if user selected)
// const selectedTheme = localStorage.getItem('selected-theme')
// const selectedIcon = localStorage.getItem('selected-icon')

// // We obtain the current theme that the interface has by validating the dark-theme class
// const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
// const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

// // We validate if the user previously chose a topic
// if (selectedTheme) {
//   // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
//   document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
//   themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
// }

// // Activate / deactivate the theme manually with the button
// themeButton.addEventListener('click', () => {
//     // Add or remove the dark / icon theme
//     document.body.classList.toggle(darkTheme)
//     themeButton.classList.toggle(iconTheme)
//     // We save the theme and the current icon that the user chose
//     localStorage.setItem('selected-theme', getCurrentTheme())
//     localStorage.setItem('selected-icon', getCurrentIcon())
// })

/*==================== DARK LIGHT THEME ====================*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

// Check if there's a previously selected theme in localStorage
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

// Set default to dark mode if no preference is saved in localStorage
if (selectedTheme) {
  // If there is a stored theme preference, use it
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
} else {
  // If there's no stored preference, default to dark mode
  document.body.classList.add(darkTheme)
  themeButton.classList.add('uil-moon')  // Set the sun icon to show it's in dark mode
  localStorage.setItem('selected-theme', 'dark')  // Store the default dark theme
  localStorage.setItem('selected-icon', 'uil-moon')  // Store the default icon as moon
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})


let currentIndex = 0;

function moveCarousel(direction) {
    const carousel = document.querySelector('.certifications__carousel');
    const totalItems = document.querySelectorAll('.certification__box').length;

    if (direction === 'left') {
        currentIndex = currentIndex === 0 ? totalItems - 1 : currentIndex - 1;
    } else if (direction === 'right') {
        currentIndex = currentIndex === totalItems - 1 ? 0 : currentIndex + 1;
    }

    const offset = -currentIndex * 320; // Adjust 320 to match the width of the items + margin
    carousel.style.transform = `translateX(${offset}px)`;
}

function openModal(imageSrc, title, description) {
    // Set the modal content
    document.getElementById('modalImage').src = imageSrc;
    document.getElementById('modalTitle').innerText = title;
    document.getElementById('modalDescription').innerText = description;

    // Show the modal
    document.getElementById('portfolioModal').style.display = 'flex';
}

function closeModal() {
    // Hide the modal
    document.getElementById('portfolioModal').style.display = 'none';
}

