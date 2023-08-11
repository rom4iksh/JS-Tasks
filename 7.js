//Задание 1
//Примените каждый из этих методов округления к трем числам: 5.4, 5.5, 5.6:
//Math.round(x)
//Math.ceil(x)
//Math.floor(x)
//В комментариях к каждой строке напишите, как работают эти округления.

let num1 = 5.4;
let num2 = 5.5;
let num3 = 5.6;

console.log(Math.round(num1)); 
console.log(Math.ceil(num2)); 
console.log(Math.floor(num3));



//Задание 2
//Выведите в консоль фразы в 2 строки:
//Сегодня 27 октября 2022 (здесь будет ваша дата) - используйте options для вывода месяца словом
//19 часов 20 минут (здесь будет ваше время) - используйте шаблонную строку, в которую подставьте значения с помощью методов getHours() и getMinutes()


const date = new Date(); 
const options = { month: 'long' }; 
const formattedDate = new Intl.DateTimeFormat('ru-RU', options).format(date);
const formattedTime = ${date.getHours()} часов ${date.getMinutes()} минут;
console.log(Сегодня ${date.getDate()} ${formattedDate} ${date.getFullYear()});
console.log(formattedTime);
