// Задание 1 
// Создать произвольную переменную, присвоить ей значение. C помощью if написать условие: если переменная равна “hidden”, присвоить ей значение “visible”, иначе - “hidden”.

let a = 'fal';

if ('hidden' == a) {
    a = 'visible';
} else {
    a = 'hidden';
}
console.log(a)

// Задание 2
// Создать переменную и присвоить ей число.
// Записать условие:
// - если переменная равна нулю, присвоить ей 1;
// - если меньше нуля - строку “less then zero”;
// - если больше нуля - используя оператор “присвоение”, переменную умножить на 10 (использовать краткую запись).

let b = 0;

if (b == 0) {
    b = 1;
} else if (b < 0) {
    b = 'less then zero';
} else {
    b *= 10;
}

console.log(b);

// Задание 3
// Запросите у пользователя число и запишите его в переменную. 
// (Не забывайте, что от пользователя мы всегда получаем строку).
// Создайте переменную-результат и присвойте ей значение: если введенное пользователем число меньше 5, то результат будет '0', если больше -  '1'. Выведите результат в консоль.
// Выполните это задание, используя тернарный оператор (: ?)

let result;
let user = prompt('Введите число');
if (user < 5) {
    result = 0;
} else if (user > 5) {
    result = 1;
}
console.log(result);

// Задание 4
// Попросить пользователя ввести одно число, следом - второе число. Вывести в консоль максимальное из чисел (наибольшее) с текстом: Большее число: 7 (вместо 7 будет максимальное число из введенных пользователем).
// * предусмотреть вариант ввода одинаковых чисел

let k = prompt('Введите первое число');
let s = prompt('Введите второе число');
let c;

if (k < s) {
    c = 'Большее число: ' + s;
} else if (k > s) {
    c = 'Большее число: ' + k;
} else if (k = s) {
    c = 'Одинаковые числа: ' + k + ' и ' + s;
}

console.log(c);

// Задание 5
// Определить, является ли введенное пользователем число num1 кратным введенному числу num2. Обе переменные запрашиваем у пользователя, ответ выводим в консоль.

let num1 = +prompt('Введите первое число');
let num2 = +prompt('Введите второе число');
let lk;
if (num1 % num2 === 0) {
    lk = 'кратно';
} else {
    lk = 'не кратно';
}
console.log(lk);



// Задание 6
// Запросить у пользователя средний балл, записать в переменную.
// Если средний балл 1-4 - вывести в консоль "Двоечник, иди учись!", если 5-8 - "Неплохо, но давай еще поднажмем!", если 9-10 - "Ого, да ты настоящий отличник!" (можно другие фразы - по желанию).

let cr = prompt('Средний балл');
let cc;

if (cr <= 4) {
    cc = "Двоечник, иди учись!";
} else if (cr <= 8) {
    cc = "Неплохо, но давай еще поднажмем!";
} else if (9 <= cr) {
    cc = "Ого, да ты настоящий отличник!";
}

console.log(cc);

// Задание 7
// Запросить у пользователя ответы на 2 вопроса:
// - балл за экзамен (от 0 до 100)
// - количество выполненных проектов (от 0 и больше)
// Вывести в консоль общий выпускной балл в соответствии с этими значениями:
// - 100, если балл за экзамен более 90 или количество проектов более 10.
// - 90, если балл за экзамен более 75 и количество проектов не менее 5.
// - 75, если балл за экзамен более 50 и количество проектов не менее 2.
// - 0 во всех других случаях.

let ex = prompt('Введите балл за экзамен (от 0 до 100)');
let pr = prompt('Введите кол-во выполненых проектов (от 0 и больше)');
let ob;

if (ex >= 90 || pr >= 10) {
    ob = 100;
} else if (ex >= 75 && pr >= 5) {
    ob = 90;
} else if (ex >= 50 && pr >= 2) {
    ob = 75;
} else {
    ob = 0;
}

console.log(ob);



// Задание 8
// День аренды автомобиля стоит $40. При аренде на 7 или больше дней вы получаете общую итоговую скидку $50. Если вы арендуете авто на 3 или более дней, ваша общая скидка составит $20.
// Количество дней, на которые нужно арендовать авто, запрашиваются с помощью prompt. Напишите программу, рассчитывающую общую стоимость аренды на запрашиваемое количество дней.

let cost = 40;
let discount = 0;
let days = +prompt('Введите кол-во дней аренды');
if (7 > days && 3 <= days) {
    discount = 20;
} else if (days >= 7) {
    discount = 50;
}
console.log((cost * days) - discount);







// Задание 9 Создать переменную num и записать в нее число, например 10. С помощью цикла 10 раз увеличивать значение этой переменной на 1. Итоговый результат вывести в консоль.

for (let num = 10; num < 20; num++) {
    console.log(num);
}


// Задание 10 Увеличивая счетчик цикла на 2, нужно 5 раз выполнить действия: - запрашивать у пользователя ввод числа - проверять, равно ли это число 10. Если равно, выводить в консоль "Равно 10". Иначе выводить "Не равно 10"

for (let i = 0; i < 10; i = i + 2) {
    let das = +prompt('Введите число');
    if (das == 10) {
        sad = 'Равно 10';
    } else {
        sad = 'Не равно 10';
    }
    console.log(sad);
}

// Задание 11
// С помощью цикла вывести в консоль квадраты чисел от 0 до 100 (не включая 100) - т.е. вывести числа 0, 1, 4, 9, 16...
// * Задавать количество чисел, которые нужно вывести, при помощи функции prompt.
let kol = +prompt('Введите кол-во цифр');
for (let i = 0; i < kol; i++) {
    console.log(i * i);
}

// Задание 12
// Напишите программу, которая выводит в консоль числа от 1 до 100.
// При этом вместо чисел, кратных трем, программа должна выводить слово «Fizz», а вместо чисел, кратных пяти, — слово «Buzz». Если число кратно и 3, и 5, то программа должна выводить слово «FizzBuzz»

for (let i = 1; i < 101; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log('FizzBuzz');
    } else if (i % 3 == 0) {
        console.log('Fizz');
    } else if (i % 5 == 0) {
        console.log('Buzz');
    } else {
        console.log(i);
    }
}
