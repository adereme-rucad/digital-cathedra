class Figure {
    #x; 
    #y; 
    
    constructor(x, y) {
        this.#x = x; 
        this.#y = y; 
    }
    square() {
        return undefined;
    }
}

class Circle extends Figure {
    constructor(x, y, r) {
        super(x, y);
        this.r = r;
    }
    square() {
        return Math.PI * this.r * this.r;
    }
}

class Rectangle extends Figure {
    constructor(x, y, w, h) {
        super(x, y);
        this.w = w;
        this.h = h;
    }
    square() {
        return this.w * this.h;
    }
}

const circle = new Circle(0, 0, 5);
console.log(`Площадь круга: ${circle.square()}`); 

const rectangle = new Rectangle(0, 0, 4, 2);
console.log(`Площадь прямоугольника: ${rectangle.square()}`);