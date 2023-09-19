var x = .3 - .2;  // 30 centavos menos 20 centavos
console.log(`30 centavos menos 20 centavos: ${x}`)

var y = .2 - .1;  // 20 centavos menos 10 centavos
console.log(`20 centavos menos 10 centavos: ${y}`)

x == y            // => falso: os dois valores não são os mesmos!
console.log(`falso: os dois valores não são os mesmos!: ${x == y }`)

x == .1           // => falso: .3-.2 não é igual a .1
console.log(`falso: .3-.2 não é igual a .1: ${x == .1}`)

y == .1           // => verdadeiro: .2-.1 é igual a .1
console.log(`verdadeiro: .2-.1 é igual a .1: ${y == .1}`)

