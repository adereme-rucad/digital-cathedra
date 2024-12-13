// задание 4. Напишите исходный код программы, которая считывает 
// единственное целое число x и проверяет, является ли оно избыточным. 
// Избыточным называется положительное целое число, сумма 
// положительных собственных делителей (отличных от x) которого
//  превышает x. Например: число 12 является избыточным, 
//  т.к. 1 + 2 + 3 + 4 + 6 = 16.  16 > 12.

let n = parseInt(prompt('введите число для проверки на избыточность'));
let spisok = [];
for (let i = 1; i < n - 1; i++) {
    if ( n % i === 0 ) {
        spisok.push(i);
    }
}

let summa = 0; 
for ( let i = 0; i < spisok.length; i++) {
    summa += spisok[i];
}

if (summa > n) {
    console.log('Число избыточное');
} else {
    console.log('Число не избыточное');
}