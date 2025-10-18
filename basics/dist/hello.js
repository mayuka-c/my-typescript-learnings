"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// basic types
let userName = "Mayuka";
console.log(userName);
let age = 25;
console.log(age);
let isAdult = true;
console.log(isAdult);
// Union type
let userID = "123";
userID = 13;
console.log(userID);
// Object type
let user;
user = {
    name: "Mayuka",
    age: 25,
    isAdult: true,
    id: "123",
};
// Array type
// let hobbies: Array<string>; -> Alternative
let hobbies;
hobbies = ["Gaming", "Cooking", "Sleeping"];
console.log(hobbies);
// functions
function print(input) {
    console.log(input);
}
print(hobbies);
function add(a, b) {
    return a + b;
}
console.log(add(1, 3.5));
function calculate(a, b, calcFn) {
    calcFn(a, b);
}
calculate(1, 3, add);
let payment = {
    upi: "my-upi",
    email: "test@example.com",
};
console.log(payment);
let admin = {
    name: "Admin",
    permissions: ["Role1", "Role2"],
};
console.log(admin);
let iAdmin = {
    name: "Admin",
    permissions: ["Role1", "Role2"],
};
console.log(iAdmin);
let role;
role = "admin";
console.log(role);
const textStorage = {
    storage: ["2121"],
    add(data) { },
    delete(data) { },
};
