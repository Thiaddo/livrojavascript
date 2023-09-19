let msg = "Hello, " + "world"; // Produz a string "Hello, world"
let _name = "Thiado"
let greeting = "Welcome to my blog," + " " + _name

console.log(msg)
console.log(_name)
console.log(greeting)

console.log(msg.length)


let s = "Hello, World"                // Começa com um texto.
console.log(s.charAt(0))              // => "h": o primeiro caractere.
console.log(s.charAt(s.length-1))     // => "d": o último caractere.
console.log(s.substring(1,4))         // => "ell": o 2º, 3º e 4º caracteres.
console.log(s.slice(1,4))             // => "ell": a mesma coisa
console.log(s.slice(-3))              // => "rld": os últimos 3 caracteres
console.log(s.indexOf("l"))           // => 2: posição da primeira letra l.
console.log(s.lastIndexOf("l"))       // => 10: posição da última letra l.
console.log(s.indexOf("l", 3))        // => 3: posição do primeiro "l" em ou após 3
console.log(s.split(","))            // => ["hello", "world"] divide em substrings
console.log(s.replace("h", "H"))      // => "Hello, world": substitui todas as instâncias
console.log(s.toUpperCase())          // => "HELLO, WORLD"

//charAt():s = "hello, world"; s[0] // => "h" s[s.length-1] // => "d"