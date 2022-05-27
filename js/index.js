let lang = localStorage.getItem('lang') || 'en',
    theme = localStorage.getItem('theme') || 'dark';

// --------------- translation ------------------------

import i18Obj from './translate.js';

function getTranslate(language) {
    document.querySelectorAll('[data-i18]').forEach(el => el.textContent = i18Obj[language][el.dataset.i18]);
    lang = language;
    setActiveLangSwitcher();
}

function setActiveLangSwitcher() {
    document.querySelectorAll('.switch-lng-link').forEach(el => el.classList.remove('active'));
    document.querySelector(`[data-lang="${lang}"]`).classList.add('active');
}

document.querySelector('.switch-lng').addEventListener('click', function (event) {
    if (event.target.classList.contains('switch-lng-link')) {
        getTranslate(event.target.dataset.lang);
        localStorage.setItem('lang', lang);
    }
})

// --------------- load user options ------------------

getTranslate(lang);
setTheme(theme);

// --------------- open / close menu ------------------

const burgerButton = document.querySelector('.burger'),
    menu = document.querySelector('.nav'),
    cover = document.querySelector('.cover');
burgerButton.addEventListener('click', function () {
    burgerButton.classList.toggle('is-active');
    menu.classList.toggle('is-active');
    cover.classList.toggle('is-active');
    document.querySelectorAll('.burger-line').forEach(el => el.classList.toggle('is-active'));
})

menu.addEventListener('click', closeMenu);

function closeMenu(event) {
    if (event.target.classList.contains('mai-nav-element-link')) {
        burgerButton.classList.remove('is-active');
        menu.classList.remove('is-active');
        cover.classList.remove('is-active');
        document.querySelectorAll('.burger-line').forEach(el => el.classList.remove('is-active'));
    }
}

// --------------- change imgs on btn click in portfolio ------------------

const buttonsBlock = document.querySelector('.buttons-block'),
    portfolioButtons = document.querySelectorAll('.portfolio-button'),
    portfolioImages = document.querySelectorAll('.portfolio-photo-item');

buttonsBlock.addEventListener('click', changeImage);

function changeImage(event) {
    if (event.target.classList.contains('portfolio-button')) {
        portfolioImages.forEach((img, index) => img.src = `./assets/img/${event.target.dataset.season}/${index + 1}.jpg`);
        portfolioButtons.forEach(btn => {
            btn.classList.remove('button-active');
        });
        event.target.classList.add('button-active');
    }
}

// ------------------ preload images --------------------

function preloadImages() {
    const seasons = ['winter', 'spring', 'summer', 'autumn'];
    seasons.forEach(el => {
        for (let i = 1; i <= 6; i++) {
            const img = new Image();
            img.src = `./assets/img/${el}/${i}.jpg`;
        }
    })
}

preloadImages();

// ------------------- light-dark theme change --------------------

document.querySelector('.dark-light-switcher').addEventListener('click', () => {
    theme = (theme === 'dark') ? 'light' : 'dark';
    setTheme(theme);
    localStorage.setItem('theme', theme);
});

function setTheme(them) {
    document.querySelectorAll('.light-theme').forEach(el => el.classList.remove('light-theme'))
    if (them === 'light') {
        const sectionTitles = document.querySelectorAll('body, .theme-container, .nav, .section-title, .portfolio-button, .mai-nav-element-link, .burger-line');
        sectionTitles.forEach(el => el.classList.add('light-theme'));
    }
}

