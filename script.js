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


console.log(`

score: 150 - 150

вёрстка валидная +10
Для проверки валидности вёрстки используйте сервис https://validator.w3.org/
Надпись "Document checking completed. No errors or warnings to show." +10

вёрстка семантическая +20
В коде страницы присутствуют семантические теги HTML5, например, article, aside, figure, figcaption, footer, header, main, nav, section, используются заголовки h1-h6. Заголовок h1 может быть только один.
2 балла за каждый уникальный семантический тег HTML5 и за каждый уникальный заголовок h1-h6, но не больше 20 баллов

есть адаптивное бургер-меню. Ссылки в пунктах меню ведут на основные разделы CV. При кликах по пунктам меню реализована плавная прокрутка по якорям. При уменьшении ширины экрана меню становится адаптивным. Внешний вид адаптивного меню можно скопировать с макета музея +10

для оформления СV используются css-стили +10
1 балл за каждый стилизованный элемент, но не больше 10 баллов

контент размещается в блоке, который горизонтально центрируется на странице. Фоновый цвет, если он есть, тянется во всю ширину страницы +10

вёрстка адаптивная: ни на одном из разрешений экрана до 320px включительно не появляется горизонтальная полоса прокрутки, при этом всё содержание страницы сохраняется +10

на странице СV присутствует изображение - фото или аватарка автора CV, пропорции изображения не искажены, у изображения есть атрибут alt (может быть пустым) +10

контакты для связи и перечень навыков оформлены в виде списка ul > li +10

CV содержит контакты для связи, краткую информацию о себе, перечень навыков, информацию об образовании и уровне английского +10

CV содержит пример вашего кода (например, решение задачи с сайта codewars) с подсветкой кода. Для подсветки кода может использоваться js-библиотека, например, highlight.js +10

CV содержит изображения-ссылки на выполненные вами проекты. При клике по изображению страница проекта открывается в новой вкладке. У каждого проекта есть название, небольшое описание, указан перечень используемых технологий. +10

CV выполнено на английском языке +10

выполнены требования к Pull Request: есть ссылка на задание, скриншот страницы СV, ссылка на деплой страницы CV на GitHub Pages, выполнена самооценка (самооценку расписываем по пунктам критериев оценки, указывая балл за каждый пункт) +10
Вниманию проверяющих. Так как сабмитится ссылка на деплой CV, вам необходимо будет самостоятельно найти Pull Request для проверки. Для этого по ссылке в футере перейдите на гитхаб автора CV, найдите там репозиторий rsschool-cv, в нём открытый PR из ветки cv-html-css в ветку main с названием CV и проверьте его описание

дизайн, оформление, качество выполнения CV не ниже чем в примерах CV, приведённых в материалах к заданию (это дополнительные 10 баллов, поэтому некоторый субъективизм в оценке может присутствовать) +10
`)
