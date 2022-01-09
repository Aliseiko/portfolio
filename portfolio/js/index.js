// --------------- open / close menu ------------------

const burgerButton = document.querySelector('.burger'),
    menu = document.querySelector('.nav'),
    cover = document.querySelector('.cover');
burgerButton.addEventListener('click', function () {
    burgerButton.classList.toggle('is-active');
    menu.classList.toggle('is-active');
    cover.classList.toggle('is-active');
})

menu.addEventListener('click', closeMenu);

function closeMenu(event) {
    if (event.target.classList.contains('mai-nav-element-link')) {
        burgerButton.classList.remove('is-active');
        menu.classList.remove('is-active');
        cover.classList.remove('is-active');
    }
}

// --------------- change imgs on btn click in portfolio ------------------

const buttonsBlock = document.querySelector('.buttons-block'),
    portfolioButtons = document.querySelectorAll('.portfolio-button'),
    portfolioImages = document.querySelectorAll('.portfolio-photo-item');

buttonsBlock.addEventListener('click', changeImage);


function changeImage(event) {
    if(event.target.classList.contains('portfolio-button')) {
        portfolioImages.forEach((img, index) => img.src = `./assets/img/${event.target.dataset.season}/${index + 1}.jpg`);
        portfolioButtons.forEach(btn => {
            btn.classList.remove('button-active');
        });
        event.target.classList.add('button-active');
    }
}

