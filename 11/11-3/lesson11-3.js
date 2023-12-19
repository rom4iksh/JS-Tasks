// Задание 3

// Разместить на странице несколько картинок. При клике на любую картинку она плавно становится на бэкграунд всей страницы, а тег картинки получает уникальные css-свойства (чтобы было понятно, что сейчас эта картинка является выбранным элементом). При перезагрузке страницы последнее выбранное состояние должно сохраниться, реализовать через LocalStorage.

// Пример реализации:
// https://ucarecdn.com/6e689f37-...

// ПОДСКАЗКИ    
// - значение атрибута можно узнать с помощью метода element.getAttribute(' '). Но если атрибут стандартный, то можно его забрать с помощью одноименного свойства. Например, адрес картинки = img.src (img - переменная, в которой хранится картика).

// Порядок работы:
// 1. Собираем изображения в массив.
// 2. Вешаем обработчик клика на все окно - window. Так js будет "слушать" клики и записывать в event.target тот элемент, по которому пришелся клик (event нужно обязятельно добавить как параметр в addEventListener).
// window.addEventListener('click', (event => { }))

// Перебираем массив картинок, сравниваем их с event.target. Забираем из картинки, на которую пришелся клик, url (значение атрибута src), вешаем на нее класс active, а у остальных картинок убираем. Записываем url активной картинки в память и ставим ее на фон body.

// При загрузке страницы (в начале кода JS) добавляем проверку, есть ли информация об активной картинке в LocalStorage, если есть - добавляем ей класс active и ставим ее на фон. Если нет - можно присвоить этот класс и поставить на фон первую картинку из массива.

const images = document.querySelectorAll('img');
const body = document.querySelector('body');
let srcOfBackground;

if (localStorage.imageUrl) {
    body.style.backgroundImage = `url(${localStorage.imageUrl})`;
} else {
    body.style.backgroundImage = `url(${images[0].src})`;
}

window.addEventListener('click', (event) => {
    console.log(event.target);
    images.forEach(item => item.classList.remove('active'));

    if (event.target.matches('img')) {
        srcOfBackground = event.target.getAttribute('src');
        localStorage.imageUrl = srcOfBackground;
        event.target.classList.add('active');
    };
    body.style.backgroundImage = `url(${srcOfBackground})`;
});
