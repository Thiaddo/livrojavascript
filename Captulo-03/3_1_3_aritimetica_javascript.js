// Operações Matemáticas JavaScript

console.log(`Math.pow(2,53) 2 elevado à potência 53 = ${Math.pow(2,53)}`); console.log()                    // => 9007199254740992: 2 elevado à potência 53
console.log(`Math.round(.6) arredonda para inteiro mais próximo: .6 = ${Math.round(.6)}`); console.log()    // => 1.0: arredonda para o inteiro mais próximo
console.log(`Math.ceil(.6) arrendonda para cima para um inteiro: .6 =  ${Math.ceil(.6)}`); console.log()    // => 1.0: arredonda para cima para um inteiro
console.log(`Math.floor(.6) arredonda  para baixo para um inteiro: .6 = ${Math.floor(.6)}`); console.log()  // => 0.0: arredonda para baixo para um inteiro
console.log(`Math.abs(-5) valor absoluto: 5 = ${Math.abs(-5)}`); console.log()                              // => 5: valor absoluto
console.log(`Math.max(1,2,3): Retorna o maior argumento = 3 ${Math.max(1,2,3)}`); console.log()             // Retorna o maior argumento
console.log(`Math.min(40,20,1):Retorna o menor argumento = ${Math.min(40,20,1)}`) ; console.log()           // Retorna o menor argumento
console.log(`Math.random(): Número pseudoaleatório X, onde 0 <= x < 1.0 ${Math.random()}`); console.log()   // Número pseudoaleatório x, onde 0 <= x < 1.0
console.log(`Math.PI: Curcunferência de um círculo = ${Math.PI}`); console.log()                            // STX: circunferência de um círculo / diâmetro
console.log(`Math.E: A base do logaritmo natural = ${Math.E}`); console.log()                               // e: A base do logaritmo natural
console.log(`Math.sqrt(3): A raiz quadrada de 3 = ${Math.sqrt(3)}`); console.log()                          // A raiz quadrada de 3
console.log(`Math.pow(3, 1/3): A rais cúbica de 3 =  ${Math.pow(3, 1/3)}`) ; console.log()                  // A raiz cúbica de 3
console.log(`Math.sin(0): Trigonometris ${Math.sin(0)}`) ; console.log()                                    // Trigonometria: também Math.cos, Math.atan, etc.
console.log(`Math.log(10: Logaritmo naturla de 10 = ${Math.log(10)}`) ; console.log()                       // Logaritmo natural de 10
console.log(`Math.log(100): Logaritmo de base 10 de 100 = ${Math.log(100)/Math.LN10}`); console.log()       // Logaritmo de base 10 de 100
console.log(`Math.log(512): Logaritmo de base 2 de 512 = ${Math.log(512)/Math.LN2}`); console.log()         // Logaritmo de base 2 de 512
console.log(`Math.exp(3): ${Math.exp(3)}`); console.log()                                                   // Math.E ao cubo

Infinity                   // Uma variável de leitura/gravação inicializada como Infinity.
Number.POSITIVE_INFINITY   // O mesmo valor, somente para leitura.
1/0                        // Este também é o mesmo valor.
Number.MAX_VALUE + 1       // Isso também é avaliado como Infinity.
Number.NEGATIVE_INFINITY   // Essas expressões são infinito negativo.

-Infinity
-1/0
-Number.MAX_VALUE - 1
NaN // Uma variável de leitura/gravação inicializada como NaN.
Number.NaN // Uma propriedade somente para leitura contendo o mesmo
// valor.
0/0 // Avaliado como NaN.
Number.MIN_VALUE/2 // Estouro negativo: avaliado como 0
-Number.MIN_VALUE/2 // Zero negativo
-1/Infinity // Também 0 negativo
-0

var zero = 0;     // Zero normal
var negz = -0;    // Zero negativo
zero === negz     // => verdadeiro: zero e zero negativo são iguais
1/zero === 1/negz // => falso: infinito e -infinito não são iguais

console.log(zero)
console.log(negz)
console.log(zero === negz)
console.log(1/zero === 1/negz)
