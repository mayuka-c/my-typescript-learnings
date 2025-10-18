// basic types
let userName: string = "Mayuka";
console.log(userName);

let age: number = 25;
console.log(age);

let isAdult: boolean = true;
console.log(isAdult);

// Union type
let userID: string | number = "123";
userID = 13;
console.log(userID);

// Object type
let user: {
  name: string;
  age: number;
  isAdult: boolean;
  id: string | number;
};

user = {
  name: "Mayuka",
  age: 25,
  isAdult: true,
  id: "123",
};

// Array type
// let hobbies: Array<string>; -> Alternative
let hobbies: string[];

hobbies = ["Gaming", "Cooking", "Sleeping"];
console.log(hobbies);

// functions
function print(input: any): void {
  console.log(input);
}
print(hobbies);

function add(a: number, b: number): number {
  return a + b;
}
console.log(add(1, 3.5));

// function types
// custom type
type AddFn = (a: number, b: number) => number;

function calculate(a: number, b: number, calcFn: AddFn) {
  calcFn(a, b);
}

calculate(1, 3, add);

// interface
interface Payment {
  upi: string;
  email: string;
}

let payment: Payment = {
  upi: "my-upi",
  email: "test@example.com",
};

console.log(payment);

// Merging types

// using type
type Admin = {
  permissions: string[];
};

type AppUser = {
  name: string;
};

type AppAdmin = Admin & AppUser;

let admin: AppAdmin = {
  name: "Admin",
  permissions: ["Role1", "Role2"],
};

console.log(admin);

// using interfaces
interface iAdmin {
  permissions: string[];
}

interface iAppUser {
  name: string;
}

interface iAppAdmin extends iAdmin, iAppUser {}

let iAdmin: iAppAdmin = {
  name: "Admin",
  permissions: ["Role1", "Role2"],
};

console.log(iAdmin);

// literal types
type Role = "admin" | "user" | "editor";

let role: Role;
role = "admin";
console.log(role);

// Generic types
type DataStorage<T> = {
  storage: T[];
  add: (data: T) => void;
  delete: (data: T) => void;
};

const textStorage: DataStorage<string> = {
  storage: ["2121"],
  add(data) {},
  delete(data) {},
};

export {};
