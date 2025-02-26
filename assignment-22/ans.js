// 1. Creating a base class (Person)
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // Method shared by all Person instances
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

// 2. Creating a subclass (Student) with Inheritance
class Student extends Person {
    constructor(name, age, grade) {
        super(name, age); // Calls the constructor of Person
        this.grade = grade;
    }

    // Method specific to Student
    study() {
        console.log(`${this.name} is studying in grade ${this.grade}.`);
    }

    // Overriding the greet() method
    greet() {
        console.log(`Hey, I'm ${this.name}, a student in grade ${this.grade}.`);
    }
}

// 3. Creating instances and testing functionality
const person1 = new Person("Jhansi", 23);
person1.greet();  
// Output: Hello, my name is Jhansi and I am 23 years old.

const student1 = new Student("Jai", 18, "14th Grade");
student1.greet();  // Overridden method in Student
student1.study();  

const student2 = new Student("Akash", 25, "18th Grade");
student2.greet();  
// Output: Hey, I'm Akash, a student in grade 18th Grade.
