// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  var array = [];
  for (let clave in objeto){
    array.push ([clave, objeto [clave]])
  }
  return array;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  var obj = {};
  var acc= 0;
  
  for (let i=0 ; i<string.length ; i++){
    acc = 0;
    for (let y=0; y<string.length ; y++){
      if (string [i] === string [y]){ 
        acc= acc + 1;
      }
      }
    obj[string[i]] = acc;
  }

  return obj;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var mayus = "";
  var minus = "";
  for (i=0 ; i<s.length ; i++){
    if (s [i]=== s [i].toLowerCase()){
      minus= minus + s [i];
    }
    else {
      mayus= mayus + s[i];
    }
  }
  var inver = mayus + minus
   return inver;
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
var reves = "";
var frase = "";
  for (i=0; i<str.length ; i++){
  if (str [i]!==" "){
    reves = str [i] + reves;
  }
  else if (frase===""){
    frase= frase + reves;
    reves = "";
  }
  else {
    frase= frase + " " + reves;
    reves = "";
  }
  }
  frase = frase + " " + reves;
  return frase;
}



function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  var n = numero.toString();
  var a = "";
  
  for (i=0 ; i<n.length ; i++){
      a= n [i] + a;
  }
  if (a===n){
    return "Es capicua"; 
  }
  else {
    return "No es capicua"
  }
  
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  var modi = "";
  for (i= 0 ; i< cadena.length ; i++){
    if (cadena [i]!=="a" && cadena [i]!=="c" && cadena [i]!=="b" ){
      modi = modi + cadena [i];
    }
  }
  return modi;
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí

  var a= arr.sort(function(a, b){return a.length - b.length});
  return a;
}

function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  return arreglo1.filter(v => arreglo2.includes(v));
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

