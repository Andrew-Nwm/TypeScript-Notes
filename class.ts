class UserClass{
    name: string;

    constructor(name: string){
        this.name = name;
    }

    getName(){
        return this.name;
    }

    setName(name: string){
        this.name = name;
    }

}


//Forma larga de hacer uso de la clase UserClass
const user: UserClass = {
    name: "El_Blaki",
    getName: () => {return "pepito"},
    setName: (name: string) => {}
}


//Forma corta de hacer lo mismo que en la clase UserClass 
const userClass = new UserClass("El_Blaki");

//Una de las principales diferenecias entre una clase y una interface es que una clase puede tener métodos con lógica y una interface no