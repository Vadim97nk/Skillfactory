/// Задание 7.7.1

function printInfo() {
    console.log(`name: ${this.name}, age: ${this.age}`);
}

const person = {
    name: 'Виктор',
    age: 23
};

printInfo.call(person);

/// Задание 7.7.2

function calculate(a, b, operator) {
    if (operator === '+') {
        return a + b;
    } else if (operator === '-') {
        return a - b;
    } else if (operator === '*') {
        return a * b;
    } else if (operator === '/') {
        return a / b;
    } else {
      return 
    }
}

const values = [2, 3, "+"];
const result = calculate.apply(null, values);
console.log(result);

/// Задание 7.7.3

const users = [
    { name: "Яна", age: 23 },
    { name: "Миша", age: 16 },
    { name: "Дима", age: 73 },
    { name: "Лена", age: 35 },
    { name: "Вова", age: 12 },
    { name: "Оля", age: 25 },
];

const adultUsers = users.filter((user) => {
    return user.age >= 18;
});
const nameUsers = users.map(user => user.name);
console.log(adultUsers);
console.log(nameUsers);

/// Задание 7.7.4

function setFullName(fullName) {
    this.fullName = fullName;
}

const setPersonFullName = setFullName.bind(person);

setPersonFullName("John Smith");

console.log(person.fullName);

/// Задание 7.7.5

function newUniqueArray(arr) {
    const uniqNumbers = Array.from(new Set(arr));

    uniqNumbers.sort((a, b) => a - b);
    
    return uniqNumbers;
}