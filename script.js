const MENU = document.querySelectorAll('.nav__item__link');

MENU.forEach((e) => {
    e.addEventListener('click', () => {
        MENU.forEach((el) => el.classList.remove('nav__item__link--active'));
        e.classList.add('nav__item__link--active');
    })
})

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', event => {
        event.preventDefault();

        document.querySelector(event.target.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.addEventListener('scroll', onScroll);

function onScroll(event){
    const CURRENT = window.scrollY;
    const SECTIONS = document.querySelectorAll('section');
    const MENU_LIST = document.querySelectorAll('.nav__item__link');

    SECTIONS.forEach((element) => {
        if(element.offsetTop - 89 <= CURRENT && (element.offsetTop + element.offsetHeight - 89) > CURRENT){
            MENU_LIST.forEach((li) => {
                li.classList.remove('nav__item__link--active');
                if(element.getAttribute('id') === li.querySelector('.nav__item__link a').getAttribute('href').substring(1)){
                    li.classList.add('nav__item__link--active');
                }
            });
        }
    });
}

const HAMBURGER_MENU = document.querySelector('.hamburger');
const HAMBURGER_NAV = document.querySelector('.nav__item');
const ff = document.querySelector('section');

HAMBURGER_MENU.addEventListener('click', () => {
    HAMBURGER_MENU.classList.toggle('hamburger__rotate--active');
    HAMBURGER_NAV.classList.toggle('hamburger--active');
});

document.addEventListener('click', (event) => {
    if (event.target.closest('.nav__item')) {
        HAMBURGER_MENU.classList.remove('hamburger__rotate--active');
        HAMBURGER_NAV.classList.remove('hamburger--active');
    }
})
