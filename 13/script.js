//Задание 1
// Вывести в консоль ТОЛЬКО 5 сообщений с интервалом 2 секунды:
// Сообщение номер 1
// Сообщение номер 2
// Сообщение номер 3
// Сообщение номер 4
// Сообщение номер 5
let i = 1;
const logMessage = setInterval(() => {
    console.log(`Сообщение номер ${i}`);
    i++
}, 2000);
setTimeout(() => {
    clearInterval(logMessage);
}, 10000)

// Задание 2
// Сделать виджет - цифровые часы, оформить по желанию.
// Вам нужно будет каждую секунду запускать функцию, которая будет создавать новый объект Date и забирать из него необходимую информацию.
const clock = document.querySelector('#clock');
let now = setInterval(() => {
    let time = new Date();
    clock.textContent = time.toLocaleTimeString();
}, 1000)
