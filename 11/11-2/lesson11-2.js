// Задание 1
// 1) Задать объект с полем name. 
// Задать переменную, которая будет хранить JSON упомянутого объекта. 
// Задать переменную, которая будет хранить результат парсинга предыдущей переменной.






let array = { name: "Masha" };
let JSONArray = JSON.stringify(array);
let newArray = JSON.parse(JSONArray);






// 2) Создать переменную user, в которой хранится объект. 
// Записать переменную в localStorage. 
// Создать переменную newUser, в которой будет храниться JS объект из localStorage




const user = { name: "Katiya" };
localStorage.user = JSON.stringify(user);
let newUser = JSON.parse(localStorage.user);




// Задание 2
// 1) Добавить в таск-мееджер кнопку, которая помечает все задачи как сделанные.
// - Добавить тег button в html код и повесить на него обработчик события click
// - В обработчике найти все существующие теги li при помощи функции document.querySelectorAll
// - В цикле или с помощью forEach обойти найденные в пункте теги li. Каждому проставить li.style.textDecoration = 'line-through';





document.querySelector('.all-done').addEventListener('click', () => {
    document.querySelectorAll('li').forEach(el => {
        el.style.textDecoration = 'line-through';
    })
});
