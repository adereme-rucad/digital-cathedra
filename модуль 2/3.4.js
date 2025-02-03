'use strict';
const student = {
    name: "Петров",
    lastName: "Петр",
    marks: {
        "Математика": [1, 2, 3, 4],   
        "Физика": [5, 6,7, 8],       
        "Химия": [9, 10, 11, 12],        
        "История": [13, 14, 15, 16]       
    },

 // Метод для получения оценок по предмету
    vyvodotsenok: function() {
        const subject = prompt("Введите название предмета:"); 
        console.log(`Оценки по предмету "${subject}":`, this.marks[subject]);
    }
};

// Вызов метода для получения оценок по предмету
student.vyvodotsenok();