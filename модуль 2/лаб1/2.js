// задание 2. Напишите исходный код программы, которая выводит 
// в консоль все автоморфные числа на заданном пользователем 
// отрезке [a, b]. Натуральное число называется автоморфным, 
// если десятичная записьего квадрата оканчивается на
// десятичную запись этого числа.

let min = parseInt(prompt('введите левую границу отрезка проверки на автоморфность'));
let max = parseInt(prompt('введите правую границу отрезка проверки на автоморфность'));

for(let n = min; n <= max; n++) {
    if ((n ** 2).toString().endsWith(n.toString())) {
        console.log(n)
    }
}