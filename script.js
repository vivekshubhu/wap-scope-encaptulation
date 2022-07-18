console.log("********************** Exercise 1 **********************")
String.prototype.filter = function (arr) {

    let result = this;
    for (let word of arr) {

        result = result.replace(word, '');
    }

    return result.replace('  ', ' ');
}

let text = "This house is not nice!";
let bannedWords = ["not"];

console.log("Original string : " + text);
console.log("Banned words : " + bannedWords)
console.log("Result : " + text.filter(bannedWords));

////////////////////////////////////////////////////////////////////////////////
console.log("********************** Exercise 2 **********************")
Array.prototype.bubbleSort = function () {
    let arr = this;
    for (var i = 0; i < arr.length; i++) {

        for (var j = 0; j < (arr.length - i - 1); j++) {

            if (arr[j] > arr[j + 1]) {

                var temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }

    return arr;
}

let arr = [6, 4, 0, 3, -2, 1];

console.log("Original array : " + arr);
console.log("Sorted array : " + arr.bubbleSort());

////////////////////////////////////////////////////////////////////////////////
console.log("********************** Exercise 3 **********************")

console.log("Inheritance using constructor objects\n---------------------");
function Person(name) {
    this.name = name;
}

function Teacher(subject, name) {
    this.subject = subject;
    this.teach = function () {
        console.log(this.name + " is now teaching " + this.subject + ".\n");
    }
    this.__proto__ = new Person(name);
}

let teacher = new Teacher("OOP", "La Min Tun");
teacher.teach();

console.log("\nInheritance using factory functions\n---------------------");
function createPerson(name) {
    return { name: name };
}
function createTeacher(subject, name) {
    return { subject: subject, teach: function () { console.log(this.name + " is now teaching " + this.subject + ".\n") }, __proto__: createPerson(name) };
}

let teacher2 = Object.create(createTeacher("Java", "Maka"));
teacher2.teach();


////////////////////////////////////////////////////////////////////////////////
console.log("********************** Exercise 4 **********************")

console.log("Inheritance using object prototypes\n---------------------");
let personX = {
    name: "Lama", age: 26,
    salute: function () {
        console.log("Good morning!, and in case I dont see you, good afternoon, good evening and good night!");
    },
    greeting: function () {
        console.log("Greetings, my name is " + this.name + " and I am " + this.age + " years old.");
    }
};

let studentX = {
    major: "Computer Science",
    greeting: function () {
        console.log("Hey, my name is " + this.name + " and I am studying " + this.major);
    },
    __proto__: personX
}

let professorX = {
    department: "CS Department",
    greeting: function () {
        console.log("Hey, my name is " + this.name + " and I am in the " + this.department);
    },
    __proto__: personX
}

studentX.name = "Sundar";
studentX.age = 25;
studentX.greeting();
studentX.salute();

professorX.name = "La Min";
professorX.greeting();
professorX.salute();


console.log("\nInheritance using contructor prototypes\n---------------------");
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.salute = function () {
        console.log("Good morning!, and in case I dont see you, good afternoon, good evening and good night!");
    };
    this.greeting = function () {
        console.log("Greetings, my name is " + this.name + " and I am " + this.age + " years old.");
    };

}

function Student(major, name, age) {
    this.major = major;
    this.greeting = function () {
        console.log("Hey, my name is " + this.name + " and I am studying " + this.major);
    };
    this.__proto__ = new Person(name, age);
}

function Professor(department, name, age) {
    this.department = department;
    this.greeting = function () {
        console.log("Good day, my name is " + this.name + " and I am in the " + this.department);
    };
    this.__proto__ = new Person(name, age);
}


let student = new Student("Computer Science", "Sundar", 25);
student.greeting();
student.salute();

let professor = new Professor("CS department", "La Min", 26);
professor.greeting();
professor.salute();