// Задание 1 
let n = parseInt(prompt('Введите число'));
console.log(n);

if (n < 2) {
    console.log('Число не простое');
}

for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
        console.log('Число не простое');
    }
}

console.log('Число простое');