let burgerButton = document.querySelector('.burger'),
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