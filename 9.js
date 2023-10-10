<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body> 
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


<form onsubmit="addItem(event)">
    <label for="input">Type something:</label>
    <input type="text" id="input">
    <button type="submit">Add Item</button>
   </form>
   
   <ul id="list"></ul>
   
   <script>
    function addItem(event) {
     event.preventDefault();
     const input = document.getElementById("input");
     const list = document.getElementById("list");
     const li = document.createElement("li");
     li.innerText = input.value;
     list.appendChild(li);
     input.value = "";
    }
   </script>




<!-- Задание 4

Калькулятор. 

Создать в html форму с текстовым input, тегом select, вторым текстовым input и кнопкой. Добавить в html div. Внутри select будут options - арифметические знаки. В оба инпута пользователь вводит число. Когда пользователь отправляет форму (событие submit), над двумя числами выполняется действие, выбранное в select (чтобы получить выбранный пользователем option, мы "забираем" значение  select.value). Результат отображается в div.



1) решить с помощью if

2) решить с помощью evel (https://developer.mozilla.org/...) -->


<!-- 1 variant -->

<form onsubmit="calculate(event)">
    <label for="num1">Enter first number:</label>
    <input type="number" id="num1" required><br><br>
    
    <label for="operator">Select an operator:</label>
    <select id="operator" required>
     <option value="">--Select--</option>
     <option value="+">+</option>
     <option value="-">-</option>
     <option value="*">*</option>
     <option value="/">/</option>
    </select><br><br>
    
    <label for="num2">Enter second number:</label>
    <input type="number" id="num2" required><br><br>
    
    <button type="submit">Calculate</button>
   </form>
   
   <div id="result"></div>
   
   <script>
    function calculate(event) {
     event.preventDefault();
     const num1 = document.getElementById("num1").value;
     const operator = document.getElementById("operator").value;
     const num2 = document.getElementById("num2").value;
     let result;
     if (operator === "+") {
      result = parseFloat(num1) + parseFloat(num2);
     } else if (operator === "-") {
      result = parseFloat(num1) - parseFloat(num2);
     } else if (operator === "*") {
      result = parseFloat(num1) * parseFloat(num2);
     } else if (operator === "/") {
      result = parseFloat(num1) / parseFloat(num2);
     }
     document.getElementById("result").innerText = "Result: " + result;
    }
   </script>


<!-- 2 variant -->


<form onsubmit="calculate(event)">
    <label for="expression">Enter an expression:</label>
    <input type="text" id="expression" required><br><br>
    
    <button type="submit">Calculate</button>
   </form>
   
   <div id="result"></div>
   
   <script>
    function calculate(event) {
     event.preventDefault();
     const expression = document.getElementById("expression").value;
     const result = eval(expression);
     document.getElementById("result").innerText = "Result: " + result;
    }
   </script>







<!-- Задание 5

Вставить в разметку html тег button без js (просто предусмотреть в разметке). При наведении на кнопку изменять ее цвет каждый раз рандомным цветом. При выведении мышки за пределы кнопки поворачивать кнопку на рандомный угол от -180 до 180 градусов. Использовать обработку событий mouseenter, mouseleave на этой кнопке. -->







<html>
<head>
  <style>
    .random-button {
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
</head>
<body>
  <button class="random-button" onmouseenter="changeColor()" onmouseleave="rotateButton()">Button</button>

  <script>
    function changeColor() {
       button = document.querySelector('.random-button');
       randomColor = getRandomColor();
      button.style.backgroundColor = randomColor;
    }

    function rotateButton() {
       button = document.querySelector('.random-button');
       randomAngle = getRandomAngle();
      button.style.transform = 'rotate(' + randomAngle + 'deg)';
    }

    function getRandomColor() {
       letters = '0123456789ABCDEF';
       color = '#';
      for ( i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }

    function getRandomAngle() {
      return Math.floor(Math.random() * 361) - 180;
    }
  </script>
</body>
</html>







</body>
</html>
