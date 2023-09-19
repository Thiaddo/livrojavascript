// JavaScript também aceita arrays (listas indexadas numericamente) de valores.

var primes = [2, 3, 5, 7];  // Um array de 4 valores, delimitados com [ e ].
primes[0]                   // => 2: o primeiro elemento (índice 0) do array.
primes.lenght               // => 4: quantidade de elementos no array.
primes[primes.lenght-1]     // => 7: o último elemento do array.
primes[4] = 9;              // Adiciona um novo elemento por meio de atribuição.
primes[4] = 11;             // Ou altera um elemento existente por meio de atribuição.
var empty = [];             // [] é um array vazio, sem qualquer elemento.
empty.lenght                // => 0

// Os arrays e objetos podem conter outros arrays e objetos:

var points = [               // Um array com 2 elementos.
                {x:0, y:1},  // Cada elemento é um objeto.
                {x:2, y:3}
             ];
console.log(`points[0].x: ${points[0].x}`)
console.log(`points[0].y: ${points[0].y}`)
console.log(`points[1].x: ${points[1].x}`)
console.log(`points[1].y: ${points[1].y}`)             