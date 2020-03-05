class Student {
    constructor(firstName, lastName, year) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.year = year;
        this.tardies = 0;
        this.scores = [];
    }
    fullName() {
        return `Your full name is: ${this.firstName} ${this.lastName}`;
    }
    markLate() {
        this.tardies += 1;
        if (this.tardies >= 3) {
            return 'You are expelled!';
        }
        return `${this.firstName} ${this.lastName} has been late ${this.tardies} times`;
    }
    addScores(score) {
        this.scores.push(score);
        return this.scores;
    }
    calculateAverage() {
        let sum = this.scores.reduceRight(function (a, b) {
            return a + b;
        });
        return sum / this.scores.length;
    }
    static enrollStudents() {
        return 'Enrolling Students';
    }
}
const firstStudent = new Student('Akshit', 'Sehgal', 2);
const secondStudent = firstStudent;
console.log(firstStudent, firstStudent.firstName);
// Student { firstName: 'Akshit', lastName: 'Sehgal', year: 2 } 'Akshit'
firstStudent.firstName = 'Aks';
console.log(firstStudent.firstName);
// Aks
console.log(secondStudent);
// Student { firstName: 'Aks', lastName: 'Sehgal', year: 2 }
console.log(firstStudent.fullName());
// Your full name is: Aks Sehgal
console.log(firstStudent.markLate());
// Aks Sehgal has been late 1 times
console.log(firstStudent.addScores(100));
// [ 100 ]
console.log(firstStudent.addScores(80));
// [ 100, 80 ]
console.log(firstStudent.calculateAverage());
// 90
console.log(Student.enrollStudents());