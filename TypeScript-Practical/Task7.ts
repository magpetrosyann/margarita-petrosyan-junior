type MyType = {
  name: string;
  age: number;
  isStudent: boolean;
  hobbies: string[];
  address: {
    street: string;
    city: string;
    country: string;
  };
  email?: string;
  job?: {
    title: string;
    company: string;
    salary: number;
  };
  phoneNumbers: Map<string, string>;
  birthday: Date;
};

type MyTypeOptional = Partial<MyType>;

type MyTypeRequired = Required<MyType>;

type MyTypeReadonly = Readonly<MyType>;

type MyTypePicked = Pick<MyType, "name" | "age" | "isStudent" | "hobbies">;

type MyTypeOmitted = Omit<MyType, "job" | "phoneNumbers" | "birthday">;

type MyTypeKeys = keyof MyType;

const example: MyTypePicked = {
  name: "Alice",
  age: 25,
  isStudent: true,
  hobbies: ["reading", "gaming"],
};

const keyExample: MyTypeKeys = "email";
