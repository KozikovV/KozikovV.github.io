//Функции. Задачи.
//1.Создать функцию multiply, которая будет принимать любое количество чисел и возвращать их произведение: multiply(1,2,3) = 6 (1*2*3)
//Если нет ни одного аргумента, вернуть ноль: multiply() // 0
/** 
 * @desc accepts any numbers in arguments and shows their multiplication;
 * if function haven't arguments return 0;
 * if return 1 most likely, there were no numbers in the arduments
 * @param {number} numbers multiplying
 * @returns {number}  multiplication of arguments
 */

function multiply() {
    if (!arguments.length) return 0;     // якщо масив аргументів дорівнює нулю то значить їх немає і виведе 0
    let a = 1;
    for (value of arguments) {                               // цикл перевірки значень аргументу
        if (typeof value === 'number') {                     // якщо це не число пропускає (захист від некоректних данних)
            a *= value;                                     // кожен наступний буде множити на попередній
        }
    }
    if (a === 1) {
        console.log('please check your data');              // якщо одиниця то скоріше за все аргементи були, але не числа (захист від некоректних даних)
    }
    return a;                                               //повертає значення а
}
console.log(multiply(1, 2, 3, -5));

//2.Создать функцию, которая принимает строку и возвращает строку-перевертыш: reverseString(‘test’) // “tset”.
/** 
 * @desc accepts any string in arguments and return reverse string;
 * @param {string} user string
 * @returns {number}  reverse string
 */
function reverseString(a) {
    if (typeof a !== 'string') {                            //захист від некоректних данних, якщо а буде не строкою
        return console.log('please check your data');
    } 

    return a = a.split('').reverse().join('');;                                               // повертає змінену строку строку розбиває на символи, міняє порядок і зєднує по символьно присвоює нове значення
}

console.log(reverseString('ivan'));

//3.Создать функцию, которая в качестве аргумента принимает строку из букв и возвращает строку, 
//где каждый символ разделен пробелом и заменен на юникод-значение символа: getCodeStringFromText(‘hello’) // “104 101 108 108 111” 
/** 
 * @desc accepts any string in arguments and return same string whith changing symbols on unicode;
 * @param {string} user string
 * @returns {number}  unicode string
 */
function getCodeStringFromText(b) {
    if (typeof b !== 'string') return console.log('please check your data'); // захист від неокруктних даних
    let g = '';                                                              // нова строка
    for (i = 0; i < b.length; i++) {        
        g += b.charCodeAt(i) + ' ';                                         // посимвольно рпоходить по строці перетворюючи символ на юнікод та разом з пробілом добавляє в нову строку
    }
    return g;                                                               //виводить нову строку
} 

console.log(getCodeStringFromText('ivan'));
//4.Создать функцию угадай число. Она принимает число от 1-10 (обязательно проверить что число не больше 10 и не меньше 0). 
//Генерирует рандомное число от 1-10 и сравнивает с переданным числом если они совпали то 
//возвращает “Вы выиграли” если нет то “Вы не угадали ваше число 8 а выпало число 5”.

const input = document.querySelector('input');
const result = document.querySelector('.card-text');

input.addEventListener('keyup', function(e) {
    if (e.key === 'Enter' && input.value >= 0 && input.value < 11) {
        let b = Math.round(Math.random() * 10);
        if (parseFloat(input.value) === b) {
            result.innerHTML = 'You right!!!';
            result.insertAdjacentHTML("afterbegin", `<p style="background-color: red; margin: 0">Random number was ${b}</>`)         
            result.setAttribute('style', 'background-color: green; color: yellow');
            setTimeout(function(){
                result.innerHTML = '';
            }, 2000);

        } else {
            result.innerHTML = `Looser. Your number was ${input.value} and the right random number was ${b}`;
            result.setAttribute('style', 'background-color: red; color: yellow');
            setTimeout(function(){
                result.innerHTML = '';
            }, 2000);            
        };
    };

})



/** 
 * @desc function game - take a user number from 0 to 10 and 
 * compares it with an arbitrary number of published function 
 * @param {string} user number from 0 to 10
 * @returns {number}  result of game
 */
// так як це локальна функція, що самовикликається опис не діє
// (function (a) {
//     if (typeof a !== 'number' || a > 10 || a < 0)                                               // перевірка даних якщо аргумент не число, більше 10, або менше 0 
//         return console.log('please check your data. value of number mast be between 0 and 10');

//     let b = Math.round(Math.random() * 10);                                                 // вираховує будь яке число від 1 до 10 та робить його цілим числом

//     if (a === b) {                                                                          // якщо вказане число з довільним однакове виходить надпис ти виграв 
//         console.log('You win');
//     } else {
//         console.log('Looser. Your number was ' + a + ' and the right number was ' + b);     // якщо ні вказує чому програв
//     }
// }(9)) 

//5. Создать функцию, которая принимает число N и возвращает массив, заполненный числами от 1 до N: getArray(10); 
// [1,2,3,4,5,6,7,8,9,10]
/** 
 * @desc take a user number and makes an array of numbers from one to the specified number 
 * @param {string} user number 
 * @returns {number}  array of numbers from one to the specified number
 */
function arrayFunc(b) {
    if (typeof b !== 'number' || b === 0)                           // захист від некоректних данних
        return console.log('please check your data');

    let i = 1;                                  //стартова позиція
    let array = [];                             // масив

    while (i <= b) {        // цикл працює поки виконується умова
        array.push(i);               // значення відправляється в масив  
        i++;                    // крок
    }
    return array;               //повретає масив чисел
}
console.log (arrayFunc(15));

//6. Создать функцию, которая принимает массив, а возвращает новый массив с дублированными элементами входного массива:
//doubleArray([1,2,3]) // [1,2,3,1,2,3]
/** 
 * @desc take a user any array and return new array whith double elements 
 * @param {string} user array 
 * @returns {number}  new array whith double elements 
 */

function doubleArray(a) {
    if (!a.length) return console.log('please check your data');        // захист від пустого масиву

    /* let b = [];                         //новий масив

    for (i of a) {
        b.push(i);                      // розбирає і закидує в новий масив
    }
    for (i of b) {
        a.push(i);                      // дублює в перший масив з другого
    }
    return a;                           //повертає */
    return a.concat (a);
}   
console.log(doubleArray(['1', '2', '3', '4']));

//7. Создать функцию, которая принимает произвольное (любое) число массивов и удаляет из каждого массива первый элемент, 
//а возвращает массив из оставшихся значений: 
//changeCollection([1,2,3], [‘a’, ’b’, ‘c’]) → [[2,3], [‘b’, ‘c’] ], changeCollection([1,2,3]) → [ [2,3] ] и т.д.

/** 
 * @desc take a user any numbers of arrays and return and returns a merged array of arrays without the first value
 * @param {string} user array 
 * @returns {number}  a merged array of arrays without the first value
 */


function changeCollection() {
    let array = [];
    for (i of arguments) {              // розбирає аргумети
        i.shift();                      // на кожному циклі з масиву видаляє один елемент
        array.push(i);                  // на кожному циклі відпрвіляє в новий масив
    }
    return array;
}
console.log(changeCollection([1, 2, 3], ['a', 'b', 'c'], ['k', 'z', 'k']));

//8. Создать функцию которая принимает массив пользователей, поле на которое хочу проверить и значение на которое хочу проверять. 
//Проверять что все аргументы переданы. Возвращать новый массив с пользователями соответсвующие у казанным параметрам.
//funcGetUsers(users, “gender”, “male”);
// [ {name: “Denis”, age: “29”, gender: “male”} , {name: “Ivan”, age: “20”, gender: “male”} ]


let users = [{name: 'Denis', age: 30, gender: 'male'}, 
{name: 'Ivan', age: 30, gender: 'male'}, 
{name: 'Oksana', age: 27, gender: 'female'}, 
{name: 'Nat', age: 25, gender: 'female'}];

/** 
 * @desc take arrays of users, checks on the keys of the objects and return and new array with filtered objects
 * @param {object} array array of users 
 * @param {string} key key for filtration 
 * @param {string} val value of key for filtration
 * @returns {number}  new array with filtered objects
 */


function getUsers(array, key, val) {
    if (arguments.length !== 3) return console.log('please check your data')               // повинно бути три аргумента: масив; ключ обєкту для фільтрації та значення ключа для фільрації
    let arrayNew = [];                                                                         //новий масив
    for (i of array) {                                                               // перебирає обєкти в масиві
       /* for (key in arguments[0][i]) {                                                       // перебирає ключі в обєкті
            if (arguments[0][i][key] === arguments[2] || key === toString(arguments[1])) {  // якщо значення ключа обєкту дорівнює третьому аргументу і якщо ключ обєкту дорівнює сроки другого аргументу
                array.push(arguments[0][i])                                                 // обєкт відправляється в масив
            } else {
                continue;                                                                   // якщо не співпадає пропускається цикл (не обовязково зазначати)
            } 
       } */
       if (i[key] === val) {
           arrayNew.push(i);
       }
    }
    
    if (arrayNew.length === 0 || array === undefined) {                                        // якщо новий масив не має обєктів видає пусто
        return console.log('empty');
    }
    return arrayNew;    
}

console.log(getUsers(users, 'gender','female'));