function powerFunction(n) {
    // Проверяем, четное ли число
    if (n % 2 === 0) {
        // Для четных возвращаем стрелочную функцию возведения в квадрат
        return (x) => x ** 2;
    } else {
        // Для нечетных возвращаем стрелочную функцию возведения в куб
        return (x) => x ** 3;
    }
}

// Пример использования:
const squareFunc = powerFunction(4); // Четное число
console.log(squareFunc(2)); // 4 (2 в квадрате)

const cubeFunc = powerFunction(3); // Нечетное число
console.log(cubeFunc(2)); // 8 (2 в кубе)
