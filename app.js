// Funcion 1 recibe 2 parametros
//Primer parametro un string
//Segundo parametro un array de strings
//Debe devolver los strings del array que sean más largos que el string de entrada
function bigWords(cadena, arrayCadena){
    const cadenaSalida = arrayCadena.filter(palabra => palabra.length > cadena.length)
    return cadenaSalida;
}


const myArray = ['insecto', 'bootcamp', 'mangos', 'reptil', 'mosca', 'escritorio'];
//bigWords('bocina', myArray);
let pruebaSalida = bigWords('bocina', myArray);
console.log(pruebaSalida)
//Construye la funcion que reciba por parametros una funcion que recibe un array de string
//Imprimir en el html una lista con los elementos del array
//Cada elemento debe imprimirse en <li><li>
//Los parametros son los elementos resultantes de la función anterior 
function printArray(myArray){
    let el = document.querySelector("ul");
    let elementoLista;
    let textoLista;
    for(i = 0; i < myArray.length; i++){
        elementoLista = document.createElement("li");
        textoLista = myArray[i];
        elementoLista.appendChild(document.createTextNode(textoLista));
        el.appendChild(elementoLista);
    }
}

printArray(pruebaSalida);