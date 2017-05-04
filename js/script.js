console.log("Задание 1"); // Комментарий

var str1 = "Привет, мир";

console.log("В строке '" + str1 + "' " + str1.length + " символов.");

console.log("Задание 2");

var strBefore = 'На столе стоит графин и три чашки';
var strTarget = 'графин';
var strNew = 'кувшин';
var strAfter = strBefore.replace(strTarget, strNew);

console.log("В строке '" + strBefore + " заменили подстроку '" + strTarget + "' на подстроку '" + strNew + "'. Получили строку '" + strAfter + "'.");

console.log("Задание 3");
var str4Search = 'Dolby home theater';
var strPattern = 'home';
var numIndex = str4Search.indexOf(strPattern);

console.log("В строке '" + str4Search + "' ищем подстроку '" + strPattern + "'. Позиция вхождения: " + numIndex + ".");