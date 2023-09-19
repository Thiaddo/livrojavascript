// O tipo de dados mais importante de JavaScript é o objeto.
// Um objeto é uma coleção de pares nome/valor ou uma string para mapa de valores.

var book = {             // Objetos são colocados entre chaves.
  topic: "JavaScript",   // A propriedade "topic" tem o valor "JavaScript".
  fat: false             // A propriedade "fat" tem o valor true.
};                       // A chave marca o fim do objeto.

// Acesse as propriedades de um objeto com . ou []:

book.topic                 // => "JavaScript"
book["fat"]                // => true: outro modo de acessar valores de propriedade.
book.author = "Flanagan";  // Crie novas propriedades por meio de atribuição.
book.contents = {};        // {} é um objeto vazio sem qualquer propriedade.

console.log(book.topic)
console.log(book["fat"])
console.log(book.author)


var data = {                  // Um objeto com 2 propriedades
  trial1: [[1, 2], [3, 4]],   // O valor de cada propriedade é um array.
  trial2: [[2, 3], [4, 5]],   // Os elementos dos arrays são arrays.
};

console.log(`${data.trial1[0][0]}`)

console.log(`${data.trial1[0][1]}`)

console.log(`${data.trial1[1][0]}`)

console.log(`${data.trial1[1][1]}`)


console.log(`${data.trial2[0][0]}`)

console.log(`${data.trial2[0][1]}`)

console.log(`${data.trial2[1][0]}`)

console.log(`${data.trial2[1][1]}`)

