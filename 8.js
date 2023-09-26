// Задание 2

//В файле html есть разметка:

//<ul id="list">
//<li>Джон</li>
//<li>Пит</li>
//<li>Джессика</li>
//<li>Сара</li>
//</ul>

//Вывести в консоль каждое из имен (содержимое каждого li).



//ПОДСКАЗКИ

//1) C помощью метода document.querySelectorAll найдите на странице все пункты списка (li) и запишите в переменную. У вас получится html-коллекция (массив). 

//2) Обойдите коллекцию с помощью forEach и для каждого li вывкдите в консоль текстовое содержимое (innerText) 

const liItems = document.querySelectorAll('#list li');

liItems.forEach(item => {
  console.log(item.innerText);
});


//Задание 3

//Поменять имена в списке выше на числа от 0 по порядку (0, 1, 2 и т.д.)



const liItems = document.querySelectorAll('#list li');

liItems.forEach((item, index) => {
  item.innerText = index;
});



//Задание 4

//Создать с помощью js абзац (тег p). Добавить в него контент. Добавить к нему стили: размер 36px, жирный шрифт. Добавить абзац с текстом на страницу.


const paragraph = document.createElement('p');
paragraph.innerText = 'Это новый абзац, добавленный с помощью JavaScript';
paragraph.style.fontSize = '36px';
paragraph.style.fontWeight = 'bold';

document.body.appendChild(paragraph);



//Задание 5

//Написать в html тег заголовка с текстом "Сегодня:" 

//После заголовка подготовить в html пустой параграф. С помощью js добавить в него сегодняшнюю дату.

html:
<h2>Сегодня:</h2>
<p id="date"></p>

js:
const dateParagraph = document.getElementById('date');
const today = new Date();
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
dateParagraph.innerText = today.toLocaleDateString('ru-RU', options);



//Задание 6

//Написать функцию, которая принимает на вход 3 параметра: название тега, название цвета, содержимое. Функция должна сформировать необходимый тег, //добавить необходимый стиль с цветом и внести содержимое. Вывести несколько таких сгенерированных тегов в консоль, затем отправить их на страницу.




html:
<div id="tags"></div>

js:
function generateTag(tagName, color, content) {
    const tag = document.createElement(tagName);
    tag.style.color = color;
    tag.innerText = content;
    return tag;
  }
  
  const tagsDiv = document.getElementById('tags');
  const tag1 = generateTag('h3', 'red', 'Заголовок 1');
  const tag2 = generateTag('p', 'green', 'Абзац текста');
  const tag3 = generateTag('span', 'blue', 'Маленький текст');
  tagsDiv.appendChild(tag1);
  tagsDiv.appendChild(tag2);
  tagsDiv.appendChild(tag3);
  
  console.log(tag1);
  console.log(tag2);
  console.log(tag3);



//Задание 7
//Вставить в страницу (в html документ) тег <select>. С помощью js (в цикле) добавить в этот select опции (option) под годы от 1960 по 2020.


html:
<select id="years"></select>

js:
const yearsSelect = document.getElementById('years');
for (let i = 1960; i <= 2020; i++) {
  const option = document.createElement('option');
  option.value = i;
  option.innerText = i;
  yearsSelect.appendChild(option);
}

console.log(yearsSelect);




//Задание 8

//Вставить в страницу (в html документ) ul.
//Предусмотреть в коде следующий массив:


//const clients = [

//{name: "Женя", order: true},
//{name: "Кристина", order: true},
//{name: "Павел", order: false},
//{name: "Виолетта", order: false},
//{name: "Костя", order: true}

//]



//Перебирать массив, для каждого элемента массива создать li, наполнить li текстом:
//- Клиент Женя оплатил заказ
//- Клиент Павел отменил заказ
//... остальные li с контентом



//Маска получается такой: "Клиент ИМЯ СТАТУС заказ", где имя - свойство объекта (а объект здесь - это текущая ячейка массива), статус зависит от от //свойства order: если true – то оплатил, если false – то отменил.

html:
<ul id="clients-list"></ul>

js:
const clientsList = document.getElementById('clients-list');
const clients = [
  {name: "Женя", order: true},
  {name: "Кристина", order: true},
  {name: "Павел", order: false},
  {name: "Виолетта", order: false},
  {name: "Костя", order: true}
];

clients.forEach(client => {
  const li = document.createElement('li');
  const status = client.order ? 'оплатил' : 'отменил';
  li.innerText = Клиент ${client.name} ${status} заказ;
  clientsList.appendChild(li);
});

console.log(clientsList);





//Задание 9

//Есть массив ссылок:

//let linksArr = ['https://www.amazon.com/', 'https://www.youtube.com/', 'https://devby.io/', 'https://www.google.com/', 'https://apple.com/'];

//Вам нужно:

//1) при помощи JS создать DIV, задать ему css стили (фон, паддинги)

//2) при помощи цикла пройтись по массиву 'linksArr', для каждого из элементов массива сформировать ссылку (тег

//c атрибутом href и текстом из массива) и добавить эту ссылку в созданный DIV из пункта 1
//При нажатии на ссылки адреса должны открываться в новой вкладке (атрибут target="_blank")

//ПОДСКАЗКА. Для создания атрибута используется js метод setAttribute:

//element.setAttribute(name, value) - где element - сам элемент, которому назначаем атрибут, name - атрибут, который нужно добавить, value - его //значение. Также для стандартных атрибутов существуют свойства, и их можно добавлять напрямую: напр. img.src = ''

//Вкладывать ссылки в див нужно с помощью метода appendChild или append.

//3) Добавить DIV из пункта 1 (со ссылками внутри ) в BODY




html:
<body>
  <div id="links-container"></div>
</body>


js:
const linksArr = ['https://www.amazon.com/', 'https://www.youtube.com/', 'https://devby.io/', 'https://www.google.com/', 'https://apple.com/'];

const linksContainer = document.getElementById('links-container');
const div = document.createElement('div');
div.style.backgroundColor = '#f2f2f2';
div.style.padding = '20px';

linksArr.forEach(link => {
  const a = document.createElement('a');
  a.href = link;
  a.target = '_blank';
  a.innerText = link;
  div.appendChild(a);
});

linksContainer.appendChild(div);

console.log(linksContainer);



//Задание 10

//Добавить к нескольким тегам на странице класс "forRemove". Далее написать JS код, который найдет в HTML все элементы с классом "forRemove" и удалит их.

// Для удаления DOM-элементов можно использовать метод element.remove().

//ВАЖНО: Вам нужно удалять не всю коллекцию li, а каждый отдльный li



html:
<ul>
  <li class="forRemove">Элемент 1</li>
  <li>Элемент 2</li>
  <li class="forRemove">Элемент 3</li>
  <li>Элемент 4</li>
  <li class="forRemove">Элемент 5</li>
</ul>


js:
const elementsToRemove = document.querySelectorAll('.forRemove');

elementsToRemove.forEach(element => {
  element.remove();
});








//Задание 11*

//Создать массив объектов с полями name, age. Например:

//const users = [
//{name: 'Mark', age: 12},
//{name: 'Olga', age: 30},
//{name:'Tom', age: 25},

//{name:'Den', age: 43}
//]

//Создать в html таблицу (table).

//C помощью js заполнить таблицу информацией из массива, в одной колонке будут имена, во второй возраст. Имена должны быть красного цвета, age - синего.



//ПОДСКАЗКА, Таблица состоит из строк (tr) и ячеек (td) внутри этих строк. Строк должно создаваться столько, сколько объектов внутри массива, и их количество может быть любым.




html:
<table>
  <thead>
    <tr>
      <th>Имя</th>
      <th>Возраст</th>
    </tr>
  </thead>
  <tbody id="tableBody">
  </tbody>
</table>


js:
const users = [
    {name: 'Mark', age: 12},
    {name: 'Olga', age: 30},
    {name:'Tom', age: 25},
    {name:'Den', age: 43}
  ];
  
  const tableBody = document.getElementById('tableBody');
  
  users.forEach(user => {
    const row = document.createElement('tr');
    
    const nameCell = document.createElement('td');
    nameCell.textContent = user.name;
    nameCell.style.color = 'red';
    
    const ageCell = document.createElement('td');
    ageCell.textContent = user.age;
    ageCell.style.color = 'blue';
    
    row.appendChild(nameCell);
    row.appendChild(ageCell);
    
    tableBody.appendChild(row);
  });











//доп. задание

const ul = document.querySelector('ul');
ul.classList.add('list');

const liItems = document.querySelectorAll('li');
for (let i = 0; i < liItems.length; i+=2) {
  liItems[i].classList.add('item');
}

const links = document.querySelectorAll('a');
links.forEach(link => {
  link.classList.add('custom-link');
});
