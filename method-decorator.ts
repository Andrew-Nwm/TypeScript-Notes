//Podemos extender la funcionalidad de un método con un decorador de método.

type methodDecoratorStructure = (
  method: Function,
  context: ClassMethodDecoratorContext
) => PropertyDescriptor | void;//El decorador de método recibe dos parámetros, el método y el contexto. 

//Example 2: Add a method to a class.

function logMethod(method: Function, context: ClassMethodDecoratorContext) {
    return function (...args: any[]) {
        console.log(`The method ${context} has been called with arguments ${args}`);
        const result = method.apply(this, args);
        console.log(`The method ${context} returns ${result}`);
        return result;
    }
}



class Calculator{
    @logMethod
    sum(a: number, b: number){
        return a + b;
    }
}

