function log(value: any, context: ClassMethodDecoratorContext) {
  const methodName = String(context.name);

  return function (this: any, ...args: any[]) {
    console.log(`Calling ${methodName} with arguments:`, args);
    const result = value.apply(this, args);
    console.log(`Result: ${result}`);
    return result;
  };
}

class MyClass {
  @log
  myMethod(arg1: number, arg2: number) {
    return arg1 + arg2;
  }
}

const myObj = new MyClass();
myObj.myMethod(2, 3);
