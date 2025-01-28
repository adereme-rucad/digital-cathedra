// Задание 2. Объявите функцию, которая принимает на вход целые числа. Для
// чётных значений функция возвращает стрелочное выражение
// возведения числа в квадрат, а для нечётных – стрелочное выражение
// возведения в куб.

function powerFunction() {

    let userInput = prompt('Введите целое число:');
    let n = parseInt(userInput);

    if (n % 2 === 0) {
        console.log('Число четное, функция возводит в квадрат');
        return (x) => x ** 2; 
    } else {
        console.log('Число нечетное, функция возводит в куб');
        return (x) => x ** 3; 
    }
}


const powerFunc = powerFunction();

if (powerFunc) {
    const testNumber = n; 
    console.log(`Результат: ${powerFunc(testNumber)}`);
}
