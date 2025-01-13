//El class-decorator se usa para poder incrementar la funcionalidad de una clase. 
//
//
//
//Un decorador es como un "adorno" que puedes poner en una clase, método o propiedad para cambiar su comportamiento o agregarle cosas nuevas.

//Example 1: Add a property to a class.

function andrewApproves<T extends {new(...args:any[]):{}}>(constructor:T, _context: ClassDecoratorContext):T{
    return class extends constructor{
        andrewApproves = 'yes';
    }
}


@andrewApproves
class Myclass{
    constructor(){
    
    }
}

const instace = new Myclass();
console.log(instace); // log the instance