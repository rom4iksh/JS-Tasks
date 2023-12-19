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




