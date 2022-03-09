/* 
    TS es un lenguaje escrito sobre JS, por lo que puede ser clasificado como una capa extra o mejora.
    Uno de los principales cambios al respecto es el hecho de que TS funciona de forma fuertemente tipada.

    Al igual que en JS, en TS podremos utilizar las palabras reservadas let y const, para definir variables
    o constantes.
*/

/*
    La sintaxis general es la misma que en JS, con el agregado de usar dos puntos, de tal forma que:

    --->    let|const  nombreVariable : tipo ;
    
    Se puede o no inicializar, dependiendo del caso.

    --->    let|const  nombreVariable : tipo = valor ;

    Para TS tenemos los siguientes tipos:

        - Boolean (true | false)
        - Number (int | float)
        - String
        - Array
        - Tuplas
*/

//Si se inicializa la variable, puede no indicársele el tipo, pues se infiere. Como una constante, este no puede ser modificado una vez indicado su valor.
const PI = 3.14;

//Si no se inicializa la variable, entonces deberá de asignársele un tipo.
let numero:number;
numero = 10;

console.log(numero);

//Strings
let Name : string = "Ricardo";
let Apellido : string = "Fuentes";

console.log(Name + ' ' + Apellido);

//Arrays (colecciones) -> cada uno deberá respetar su tipo y valores. Es decir, si definimos number no podemos agregar strings.
let numeros: number[] = [1, 2, 3, 4, 5];
let nombres: string[] = ["Alberto", "Pedro", "Juan"];
let numeros2: Array<number> = [1, 2, 3, 4, 5, 6];
let nombres2: Array<string> = ["Ricardo", "Sara"];

console.log(numeros);
console.log(numeros2);
console.log(nombres);
console.log(nombres2);

//Tuplas -> Soluciona el agregar más de un tipo de dato en un array
let tupla: [number, string, boolean];
tupla = [23, "Ricardo", true];
console.log(tupla);

let tupla2 : [number[], string[]];
tupla2 = [numeros, nombres2];
console.log(tupla2);