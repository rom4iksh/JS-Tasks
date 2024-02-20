// Задание 2
// Запросом на сервер по url https://jsonplaceholder.typicode.com/todos достать задачи.
// Отобразить первые 20 задач списком ul на странице. Содержимое каждого li - поле title объекта задачи.

const ul = document.querySelector('ul');
let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos');
xhr.send();
xhr.onload = function() {
    let response = xhr.response;
    const tasks = JSON.parse(response);

    for (let i = 0; i < 20; i++) {
        const li = document.createElement('li');
        ul.append(li);
        li.append(tasks[i].title)
    }

};
