//JavaScript => TypeScript
//JavaScript tiene tipos? Sí, pero no son dinamicos

function suma(a, b) {
  //ejemplo de tipado dinamico de js
  return a + b;
}

//suma = function(a,b) => any
//suma = function(a:number, b:number) => number

const a = suma(1, 2); // 3
const b = suma("a", 2); // "a2" //no da error en js //en ts si da error

function sum(c: number, d: number): number {
  //ejemplo del tipado estricto de ts
  c = 20;
  d = 30;
  return c + d;
  //Al ejecutar el código, si se intenta asignar un valor que no sea un número a una variable de tipo number, se mostrará un error, en este caso, el código se ejecutaría correctemante puesto que se define el tipo de datos a recibir y el tipo de dato a retornar, pero si se intenta asignar un valor que no sea un número a una variable de tipo number , se mostrará un error. En esta situación la salida sería 50.
}

//TypeScript solo estará en el entorno de desarrollo, en producción se compilará a JavaScript por medio de la transpilación

/*tsconfig.json{
  //En este archivo se configura el entorno de desarrollo de TypeScript
  "compilerOptions": {
    "target": "es5", //para que se pueda ejecutar en todos los navegadores
    "module": "commonjs", //para que se pueda usar en node js
    "strict": true //para que sea estricto en el tipado
    "experimentalDecorators": true //para que se puedan usar los decoradores de js en ts,
    "emitDecoratorMetadata": true //para que se puedan usar los decoradores de js en ts,
    "useDefineForClassFields": true //para que se puedan usar los campos de clase en ts (propiedades de clase)
  }

    En el target se puede poner es6, es7, es8, etc, esto va a depender de la versión del navegador, según la versión que se utilice se da más o menos soporte a las funcionalidades de js

    En el module se puede poner commonjs, amd, system, umd, esnext, etc, esto va a depender de la versión de node js que se esté utilizando

  }
    */

/*Diferentes tipos de elementos en ts
  datos primitivos: 
    number
    string
    boolean

  tipos de dato asignables:
    null
    undefined
    void
    any
    unknown

  no es recomendable usar any, ya que se pierde la ventaja de tener un tipado estricto
  la diferencia entre unknown y any es que unknown es más restrictivo que any y no se puede asignar a otro tipo de dato sin hacer una validación previa de que el tipo de dato es correcto, ejemplo:
  let a: number = 1;
  a = 2; //correcto
  a = [1,2,3]; //incorrecto
  a = [1] as unknown as number; //correcto
  */

