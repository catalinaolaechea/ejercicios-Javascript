//ejercicio 01

// Clasificación de Números Pares e Impares:
// Crea un array llamado numeros y agrégale varios números enteros.
// Escribe un bucle for que recorra el array numeros.
// Dentro del bucle, usa un condicional if para verificar si cada número es par o impar.
// Si el número es par, imprime "El número X es par" (donde X es el número actual).
// Si el número es impar, imprime "El número X es impar".

// Solución 

var arrayNumeros = [10, 15, 71, 83, 97, 1, 24, 27, 29, 3, 37, 61];
for (var i = 0; i < arrayNumeros.length; i++) {
    if (arrayNumeros[i] % 2) {
        console.log(`${arrayNumeros[i]} es par.`);
    } else {
        console.log(`${arrayNumeros[i]} es impar.`);
    }
}

//Ejercicio 02

// Filtrar Calificaciones:
// Declara un array llamado calificaciones que contenga varios números representando calificaciones (por ejemplo, en una escala de 0 a 100).
// Usa un bucle for para recorrer cada calificación en el array.
// Dentro del bucle, usa un condicional if para clasificar cada calificación:
// Si la calificación es menor a 60, imprime "Reprobado".
// Si la calificación está entre 60 y 80, imprime "Aprobado".
// Si la calificación es mayor a 80, imprime "Excelente".

// Solución: 
var arraycalificaciones = [ ];
for(var i = 0; i < 10; i++){
    arraycalificaciones.push(Math.floor(math.random *100));
}
for(var i = 0; i < 10; i++){
    if(arraycalificaciones[i] < 60){
        console.log(`${arraycalificaciones[i]} = Reprobado`);
    }
    else if (arraycalificaciones[i] >= 60 || arraycalificaciones[i] < 80 ){
        console.log(`${arraycalificaciones[i]} = Aprobado`);
    }
    else {
        console.log(`${arraycalificaciones[i]} = Excelente`);
    }
}

//Ejercicio 03

// Clasificación de Productos por Precio:

// Crea un array llamado precios con diferentes valores numéricos que representen el precio de varios productos.
// Escribe un bucle for que recorra cada precio en el array.
// Dentro del bucle, usa un condicional if para clasificar cada producto en función de su precio:
// Si el precio es menor a 20, imprime "Producto económico".
// Si el precio está entre 20 y 50, imprime "Producto de precio moderado".
// Si el precio es mayor a 50, imprime "Producto de lujo".


// Solución: 

var arraycalificaciones = [ ];
for(var i = 0; i < 10; i++){
    arraycalificaciones.push(Math.floor(math.random *100));
}
for(var i = 0; i < 10; i++){
    if(arraycalificaciones[i] < 20){
        console.log(`$ ${arraycalificaciones[i]} = producto economico`);
    }
    else if (arraycalificaciones[i] >= 20 || arraycalificaciones[i] < 50 ){
        console.log(`$ ${arraycalificaciones[i]} = Producto de precio moderado`);
    }
    else {
        console.log(`$ ${arraycalificaciones[i]} = Producto de lujo`);
    }
}
