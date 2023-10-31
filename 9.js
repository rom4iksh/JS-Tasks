    <!-- Задание 1 -->
    <!-- Описать в html тег input и тег ul. По нажатию на клавишу в инпуте в список ul должен добавляться элемент li. Содержимое li - нажатая клавиша. -->
    <label for="input">Type a key:</label>
    <input type="text" id="input" onkeyup="addToList(event)">
    <ul id="list"></ul>
   
    <script>
     function addToList(event) {
      const list = document.getElementById("list");
      const key = event.key;
      const li = document.createElement("li");
      li.textContent = key;
      list.appendChild(li);
     }
    </script>



<!-- Задание 2

Вставить в html тег input (просто предусмотреть в разметке).

Обрабатывая событие keyup на теге input, выводить в консоль введенный текст каждый раз, как только клиент вписывает любой символ в поле (или стирает любой символ из поля). Вам понадобится считывать значение поля, это input.value -->

<label for="input">Type something:</label>
 <input type="text" id="input" onkeyup="logInput()">
 
 <script>
  function logInput() {
   const input = document.getElementById("input");
   console.log(input.value);
  }
 </script>


<!-- Задание 3

Создать в html форму с инпутом и кнопкой. Также добавить в html тег ul. Когда форма отправляется, добавлять в список тег li. Его содержимое - введенный текст (input.value). После отправки формы инпут должен быть очищен (проставить пустую строку в value). -->



const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const li = document.createElement('li');
    li.innerText = input.value;
    ul.append(li);
    input.value = '';
});





<!-- Задание 4

Калькулятор. 

Создать в html форму с текстовым input, тегом select, вторым текстовым input и кнопкой. Добавить в html div. Внутри select будут options - арифметические знаки. В оба инпута пользователь вводит число. Когда пользователь отправляет форму (событие submit), над двумя числами выполняется действие, выбранное в select (чтобы получить выбранный пользователем option, мы "забираем" значение  select.value). Результат отображается в div.



1) решить с помощью if

2) решить с помощью evel (https://developer.mozilla.org/...) -->


<!-- 1 variant -->
<!DOCTYPE html>
<html>
<head>
    <title>Калькулятор</title>
</head>
<body>

<form id="calcForm">
    <input type="number" id="num1" required>
    <select id="oper" required>
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
    </select>
    <input type="number" id="num2" required>
    <button type="submit">Выполнить</button>
</form>

<div id="result"></div>

<script>
    document.getElementById('calcForm').addEventListener('submit', function(event) {
        event.preventDefault();

        var num1 = parseFloat(document.getElementById('num1').value);
        var num2 = parseFloat(document.getElementById('num2').value);
        var oper = document.getElementById('oper').value;
        var result = 0;

        if (oper === '+') {
            result = num1 + num2;
        } else if (oper === '-') {
            result = num1 - num2;
        } else if (oper === '*') {
            result = num1 * num2;
        } else if (oper === '/') {
            result = num1 / num2;
        }

        document.getElementById('result').textContent = result;
    });
</script>

</body>
</html>


<!-- 2 variant -->
<!DOCTYPE html>
<html>
<head>
    <title>Калькулятор</title>
</head>
<body>

<form id="calcForm">
    <input type="number" id="num1" required>
    <select id="oper" required>
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
    </select>
    <input type="number" id="num2" required>
    <button type="submit">Выполнить</button>
</form>

<div id="result"></div>

<script>
    document.getElementById('calcForm').addEventListener('submit', function(event) {
        event.preventDefault();

        var num1 = parseFloat(document.getElementById('num1').value);
        var num2 = parseFloat(document.getElementById('num2').value);
        var oper = document.getElementById('oper').value;

        var result = eval(num1 + oper + num2);

        document.getElementById('result').textContent = result;
    });
</script>

</body>
</html>



<!-- Задание 5

Вставить в разметку html тег button без js (просто предусмотреть в разметке). При наведении на кнопку изменять ее цвет каждый раз рандомным цветом. При выведении мышки за пределы кнопки поворачивать кнопку на рандомный угол от -180 до 180 градусов. Использовать обработку событий mouseenter, mouseleave на этой кнопке. -->

const button = document.querySelector('button');
<style>
    button {
      margin-top: 50px;
    padding: 10px 20px;
background-color: #4CAF50;
color: white;
border: none;
border-radius: 5px;
font-size: 16px;
cursor: pointer;
transition: background-color 0.3s ease-in-out, transform 0.5s ease-in-out;
    }
</style>

function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

button.addEventListener('mouseenter', () => {
    button.style.backgroundColor = `rgb(${getRandomInteger(0, 255)}, ${getRandomInteger(0, 255)}, ${getRandomInteger(0, 255)})`;
});


button.addEventListener('mouseleave', () => {
    button.style.transform = `rotate(${getRandomInteger(-180, 180)}deg)`;
});
