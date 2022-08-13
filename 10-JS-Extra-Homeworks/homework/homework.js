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
  var matrz=[];
  for(let clave in objeto){
    var trz=[clave,objeto[clave]];
    matrz.push(trz);
  }
  return matrz;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  var obj={};
  for(let clave in string){
    var ind=0;
    for(let clav in string){
      if(string[clave]===string[clav]){
        ind++;
      }
    }
    obj[string[clave]]=ind;
  }
  return obj;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var MAYU='', min='';
  for(let clave in s){
    if(s[clave]===s[clave].toUpperCase()){
      MAYU += s[clave];
    }else{
      min += s[clave];
    }
  }
  return MAYU + min;
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  var mtr=str.split(' '), rever='', ready='';
  for(let clave in mtr){
    for(i=mtr[clave].length-1;i>=0;i--){
      rever += mtr[clave][i];
    }
    rever += ' ';
  }
  for(i=0;i<rever.length-1;i++){
    ready += rever[i];
  }
  return ready;
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  var str = numero + '', rever='';
  for(i=str.length-1;i>=0;i--){
    rever += str[i];
  }
  if(rever===str){
    return 'Es capicua';
  }else{
    return 'No es capicua';
  }
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  var nue='';
  for(let clave in cadena){
    if(!(cadena[clave]=='a'||cadena[clave]=='b'||cadena[clave]=='c')){
      nue += cadena[clave];
    }
  }
  return nue;
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  var num={}, id=0, max=0, ready=[];
  for(let clave in arr){
    id=arr[clave].length;
    if(id>max){
      max=id;
    }
    num[arr[clave]] = id;
  }
  for(i=0;i<=max;i++){
    for(let clav in arr){
      if(num[arr[clav]] == i){
        ready.push(arr[clav]);
      }
    }
  }
  return ready;;
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  var ready=[];
  for(let clave in arreglo1){
    for(let clav in arreglo2){
      if(arreglo1[clave]==arreglo2[clav]){
        ready.push(arreglo1[clave]); 
      }
    }
  }
  return ready;
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

