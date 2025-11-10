// 4. Create a generic function that would make the following code compile:

import { AnimalType } from "./Task1";

const myPets = [
  { name: "Max", age: 3, type: AnimalType.Dog },
  { name: "Fluffy", age: 1, type: AnimalType.Cat },
  { name: "Tweety", age: 2, type: AnimalType.Bird },
];

function mapPetNames<T extends { name: string }>(pets: T[]): string[] {
  return pets.map((pet) => pet.name);
}

const petNames = mapPetNames(myPets);
console.log(petNames);

function print(arg: any): void {
  console.log(arg);
}

print("hello");
print(42);
print(true);

function firstElement(arr: any[]): any {
  return arr[0];
}

const numbers = [1, 2, 3, 4, 5];
const firstNumber = firstElement(numbers);

const strings = ["apple", "banana", "orange"];
const firstString = firstElement(strings);

let pair1 = { first: "one", second: 1 };
let pair2 = { first: () => {}, second: [] };
let pair3 = { first: true, second: { x: 1 } };
