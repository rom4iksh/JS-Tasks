// Задание 1
// Задайте в коде переменную n с числовым значением.
// С помощью логического И в условии проверьте, находится ли переменная n в диапазоне чисел от 0 до 100 включительно.

let n = 100;
if (n >= 0 && n <= 100){
    n = 'находится';
} else {
n = 'не находится';
}
console.log(n);




// Задание 2
// Дан объект с именами и заработными платами:
// const engineers = {
// Den: 1000,
// Matt: 5000,
// Steve: 2000
// }
// Вывести в консоль через шаблонные строки заработную плату всех работников в таком формате:
// Заработная плата ххх составляет ххх рублей.
// ВНИМАНИЕ. Ваша программа должна работать для любого количества имён и зарплат!

const engineers = {
Den: 1000,
Matt: 5000,
Steve: 2000
};

for (let key in engineers){
    console.log(`Заработная плата ${key} составляет ${engineers[key]}` );
};


// Задание 3
// Создать массив из 5 элементов.
// Используя цикл for, вывести каждый второй элемент массива в консоль.

stringMas = ['a', 'b', 'c', 'd', 'f'];

for(let i = 1; i < stringMas.length; i = i + 2){
    console.log(stringMas[i]);
}

// Задание 4
// Есть массив произвольных чисел:
// let numbers = [42, 65, 49, 68, 56, 47, 70, 42, 51, 35, 58, 63, 40, 70]
// Вывести в консоль значения всех элементов массива и соответствующие им индексы в таком виде:
// Индексу 0 соответствует число 42
// Индексу 1 соответствует число 65
// и т.д.

let numbers = [42, 65, 49, 68, 56, 47, 70, 42, 51, 35, 58, 63, 40, 70];
for (let i = 1; i <= numbers.length; i = i + 1){
    console.log(`Индексу ${numbers.length - i} соответствует число ${numbers[numbers.length - i]} `)
}

// Задание 5
// Дан массив объектов, например:
// let questions = [{
//     question: "What's the currency of the USA?",
//     choices: ["US dollar", "Ruble", "Horses", "Gold"],
//     corAnswer: 0
// }, {
//     question: "Where was the American Declaration of Independence signed?",
//     choices: ["Philadelphia", "At the bottom", "Frankie's Pub", "China"],
//     corAnswer: 0
// }];
// Добавить в каждый объект дополнительное поле usersAnswer со значением null.
// Решение должно работать для массива любой длины.

let questions = [{
    question: "What's the currency of the USA?",
    choices: ["US dollar", "Ruble", "Horses", "Gold"],
    corAnswer: 0
}, {
    question: "Where was the American Declaration of Independence signed?",
    choices: ["Philadelphia", "At the bottom", "Frankie's Pub", "China"],
    corAnswer: 0
}];

for (let i = 0; i < questions.length; i++){
    questions[i].userAnswer = null;
}

console.log(questions)



// Задание 6
// Есть массив произвольных чисел:
// let numbers = [42, 65, 49, 68, 56, 47, 70, 42, 51, 35, 58, 63, 40, 70]
// 1) Вывести в консоль все элементы массива, используя 2 разных цикла: for-of и for со счетчиком
// 2) Посчитать и вывести в консоль сумму элементов в массиве.
// Подсказка: в задачах такого типа нужно заранее предусмотреть переменную (например, sum) и записать в нее начальное значение (в случае с суммой - ноль). Затем уже описать цикл, в котором эта сумма будет считаться (в каждой итерации цикла к ней будет прибавляться следующий элемент массива).
// 3) Посчитать и вывести в консоль сумму только четных чисел в массиве.
// 4) Найти и вывести в консоль максимальное число массива.
// Подсказка: как и в случае с суммой, здесь сначала нужно объявить переменную (например, max), записать в нее первый элемент массива, а затем уже в цикле искать максимальное значение.
// 5) Определить и вывести в консоль индекс максимального числа массива (или индексы, если число встречается более одного раза). Само максимальное число мы уже нашли в прошлой части задачи, повторно его искать не нужно


let numbews = [42, 65, 49, 68, 56, 47, 70, 42, 51, 35, 58, 63, 40, 70]

for (let i = 0; i < numbews.length; i++){
    console.log(numbews[i])
}

for(let item of numbews){
    console.log(item);
}


let summ = 0;
for (let i = 0; i < numbews.length; i++){
    summ = summ + numbews[i]
}
console.log(summ);



let chet = 0;
for (let i = 0; i < numbews.length; i++){
   if (numbews[i] % 2 == 0){
    chet = chet + numbews[i];
   }
}
console.log(chet);


let max = numbews[0];
for(let i = 0; i < numbews.length; i++){
    if (numbews[i] > max){
        max = numbews[i];
    }
}
console.log(max);


let indexmax = 0;
for(i = 1; i < numbews.length; i++){
    if (numbews[i] > numbews[indexmax]){
        indexmax = i;
    }
}

console.log(indexmax);




// Задание 7
// Определить массив let arr = [5, 4, 3, -3, -10, -1, 8, -20, 0]
// Создать новый массив из элементов массива arr, но в новом должны содержаться только положительные элементы.
// Подсказка. Изначально нужно объявить пустой массив-хранилище (например, let newArr = []). Затем пройтись в цикле по массиву arr, и в каждой итерации, если элемент положительный, добавлять его в массив newArr.


let gas = [5, 4, 3, -3, -10, -1, 8, -20, 0];
let newGas = [];

for(i=0; i < gas.length; i++){
    if(gas[i] > 0){
        newGas.push(gas[i]);
    }
}
console.log(newGas);


// Задание 8
// Определить массив, например let nums = [5, 4, 3, 8, 0] и переменную let limit = 5;
// Создать новый пустой массив. В цикле наполнить его элементами nums, но в новом должны содержаться элементы, больше и равные (>=) значению переменной limit.


let raf = [5, 4, 3, 8, 0];
let limit = 5;
let rafNew = [];

for (i = 0; i < raf.length; i++){
    if (raf[i] >= limit){
        rafNew.push(raf[i]);
    }
}
console.log(rafNew);



// Задание 9
// Существует массив объектов, описывающих пользователей, например:
// const users = [{name: 'Vasya', age: 23}, {name: 'Olya', age: 12}, {name: 'Anna', age: 22}, {name: 'Alex', age: 18}, {name: 'Valery', age: 8}]
// Пройти в цикле по массиву и вывести имена всех пользователей, возраст которых больше 15.

const users = [{name: 'Vasya', age: 23}, {name: 'Olya', age: 12}, {name: 'Anna', age: 22}, {name: 'Alex', age: 18}, {name: 'Valery', age: 8}];
let namesAge;

for (i = 0; i < users.length; i++){
    if (users[i].age > 15){
        console.log(users[i].name);
    }
}




// Задание 10
// Задать массив слов. Например:
// let vegetables = ["морковь", "баклажан", "репа", "топинамбур"];
// 1) Создать новый массив. С помощью цикла наполнить его объектами с ключами word (само слово), length (длина слова):
// [{word:'морковь', length: 7}, {word:'баклажан', length: 8} и т.п.]
// Вывести этот массив в консоль.
// Подсказка: длину строки можно определить с помощью метода .length. Например, для переменной let string = 'text' это будет string.length (результат - 4, т.к. слово text состоит из 4 символов)
// 2) Пройтись по полученному массиву объектов и вывести в консоль строки вида "слово - длина_слова", например "картошка - 8"


let vegetables = ["морковь", "баклажан", "репа", "топинамбур"];
let vegNew = [];

for (i=0; i < vegetables.length; i++){
    vegNew.push({word:  vegetables[i] ,length: vegetables[i].length});
}

console.log(vegNew);

for (i=0; i < vegNew.length; i++){
    console.log(vegNew[i].word - vegNew[i].length);
}
