interface User {
  //Una interface es como un contrato, se trata de un acuerdo que no se puede romper y que se debe cumplir a cabalidad
  name: string;
}

const mainUser: User = {
    name: "Evzoda"
}


//Según la documentación de typeScript es bueno usar siempre interfaces, siempre, hasta que definitivamente ya no se pueda usar-

interface Alumno{
  legajo:string
}