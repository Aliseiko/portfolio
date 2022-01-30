let lang = localStorage.getItem('lang') || 'en',
    theme = localStorage.getItem('theme') || 'dark';

// --------------- translation ------------------------

const i18Obj = {
    'en': {
        'skills': 'Skills',
        'portfolio': 'Portfolio',
        'video': 'Video',
        'price': 'Price',
        'contacts': 'Contacts',
        'hero-title': 'Alexa Rise',
        'hero-text': 'Save sincere emotions, romantic feelings and happy moments of life together with professional photographer Alexa Rise',
        'hire': 'Hire me',
        'skill-title-1': 'Digital photography',
        'skill-text-1': 'High-quality photos in the studio and on the nature',
        'skill-title-2': 'Video shooting',
        'skill-text-2': 'Capture your moments so that they always stay with you',
        'skill-title-3': 'Retouch',
        'skill-text-3': 'I strive to make photography surpass reality',
        'skill-title-4': 'Audio',
        'skill-text-4': 'Professional sounds recording for video, advertising, portfolio',
        'winter': 'Winter',
        'spring': 'Spring',
        'summer': 'Summer',
        'autumn': 'Autumn',
        'price-descripton-1-span-1': 'One location',
        'price-descripton-1-span-2': '120 photos in color',
        'price-descripton-1-span-3': '12 photos in retouch',
        'price-descripton-1-span-4': 'Readiness 2-3 weeks',
        'price-descripton-1-span-5': 'Make up, visage',
        'price-descripton-2-span-1': 'One or two locations',
        'price-descripton-2-span-2': '200 photos in color',
        'price-descripton-2-span-3': '20 photos in retouch',
        'price-descripton-2-span-4': 'Readiness 1-2 weeks',
        'price-descripton-2-span-5': 'Make up, visage',
        'price-descripton-3-span-1': 'Three locations or more',
        'price-descripton-3-span-2': '300 photos in color',
        'price-descripton-3-span-3': '50 photos in retouch',
        'price-descripton-3-span-4': 'Readiness 1 week',
        'price-descripton-3-span-5': 'Make up, visage, hairstyle',
        'order': 'Order shooting',
        'contact-me': 'Contact me',
        'send-message': 'Send message'
    },
    'ru': {
        'skills': 'Навыки',
        'portfolio': 'Портфолио',
        'video': 'Видео',
        'price': 'Цены',
        'contacts': 'Контакты',
        'hero-title': 'Алекса Райс',
        'hero-text': 'Сохраните искренние эмоции, романтические переживания и счастливые моменты жизни вместе с профессиональным фотографом',
        'hire': 'Пригласить',
        'skill-title-1': 'Фотография',
        'skill-text-1': 'Высококачественные фото в студии и на природе',
        'skill-title-2': 'Видеосъемка',
        'skill-text-2': 'Запечатлите лучшие моменты, чтобы они всегда оставались с вами',
        'skill-title-3': 'Ретушь',
        'skill-text-3': 'Я стремлюсь к тому, чтобы фотография превосходила реальность',
        'skill-title-4': 'Звук',
        'skill-text-4': 'Профессиональная запись звука для видео, рекламы, портфолио',
        'winter': 'Зима',
        'spring': 'Весна',
        'summer': 'Лето',
        'autumn': 'Осень',
        'price-descripton-1-span-1': 'Одна локация',
        'price-descripton-1-span-2': '120 цветных фото',
        'price-descripton-1-span-3': '12 отретушированных фото',
        'price-descripton-1-span-4': 'Готовность через 2-3 недели',
        'price-descripton-1-span-5': 'Макияж, визаж',
        'price-descripton-2-span-1': 'Одна-две локации',
        'price-descripton-2-span-2': '200 цветных фото',
        'price-descripton-2-span-3': '20 отретушированных фото',
        'price-descripton-2-span-4': 'Готовность через 1-2 недели',
        'price-descripton-2-span-5': 'Макияж, визаж',
        'price-descripton-3-span-1': 'Три локации и больше',
        'price-descripton-3-span-2': '300 цветных фото',
        'price-descripton-3-span-3': '50 отретушированных фото',
        'price-descripton-3-span-4': 'Готовность через 1 неделю',
        'price-descripton-3-span-5': 'Макияж, визаж, прическа',
        'order': 'Заказать съемку',
        'contact-me': 'Свяжитесь со мной',
        'send-message': 'Отправить'
    }
}

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

// ------------------ work self-assessment ---------------------------

console.log('\n' +
    '1. Смена изображений в секции portfolio +25\n' +
    '    Изображения разных времён года получаем из папок с соответствующими названиями\n' +
    '        при кликах по кнопкам Winter, Spring, Summer, Autumn в секции portfolio отображаются изображения из папки с соответствующим названием +20\n' +
    '        кнопка, по которой кликнули, становится активной т.е. выделяется стилем. Другие кнопки при этом будут неактивными +5\n' +
    '2. Перевод страницы на два языка +25\n' +
    '    Содержание файла можно редактировать или полностью изменить с целью улучшения качества созданного приложения\n' +
    '        при клике по надписи ru англоязычная страница переводится на русский язык +10\n' +
    '        при клике по надписи en русскоязычная страница переводится на английский язык +10\n' +
    '        надписи en или ru, соответствующие текущему языку страницы, становятся активными т.е. выделяются стилем +5\n' +
    '3. Переключение светлой и тёмной темы +25\n' +
    '    Внешний вид тёмной темы соответствует макету, который верстали в предыдущих частях задания, внешний вид светлой темы соответствует одному из двух вариантов макетов на выбор. Баллы за оба варианта одинаковые, выбирайте тот, который больше нравится.\n' +
    '        Вариант первый. Блоки и секции header, hero, contacts, footer остались без изменений, в оставшихся секциях цвет фона и шрифта поменялись местами: фон стал белым, шрифт черным Макет в figma - светлая тема - 1\n' +
    '        На страницу добавлен переключатель при клике по которому:\n' +
    '            тёмная тема приложения сменяется светлой +10\n' +
    '            светлая тема приложения сменяется тёмной +10\n' +
    '            после смены светлой и тёмной темы интерактивные элементы по-прежнему изменяют внешний вид при наведении и клике и при этом остаются видимыми на странице (нет ситуации с белым шрифтом на белом фоне) +5\n' +
    '4. Дополнительный функционал: выбранный пользователем язык отображения страницы и светлая или тёмная тема сохраняются при перезагрузке страницы +5\n' +
    'ИТОГО: 80 баллов')
