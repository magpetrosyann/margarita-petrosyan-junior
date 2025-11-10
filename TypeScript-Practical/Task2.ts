// 2. Add a type that would cover the structure of the given object:
import { AnimalType } from "./Task1";
export type Pet = {
  name: string;
  age: number;
  type: AnimalType;
};

function getPetDescription(pet: Pet): string {
  const animal = AnimalType[pet.type];
  return `${pet.name} is a ${animal.toLowerCase()} that is ${
    pet.age
  } years old.`;
}

const myPet = {
  name: "Fluffy",
  age: 5,
  type: AnimalType.Cat,
};

console.log(getPetDescription(myPet));
