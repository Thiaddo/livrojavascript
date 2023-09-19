// As funções são blocos de código JavaScript parametrizados que podemos chamar.

function plus1(x) {          // Define uma função chamada "plus1", com o parâmetro "x"
    return x + 1;            // Retorna um valor uma unidade maior do que o que foi passado
}                            // As funções são incluídas entre chaves

plus1(1)                     // => 4: y é 3; portanto, essa chamada retorna 3+1

var square = function (x) {  // As funções são valores e podem ser atribuídas a
    // variáveis
    return x * x;           // Calcula o valor da função
};                          // Um ponto e vírgula marca o fim da atribuição.

square(plus1(2))            // => 16: chama duas funções em uma única expressão

/*Quando combinamos funções com objetos, obtemos métodos:*/

// Quando funções recebem as propriedades de um objeto, as
// chamamos de "métodos". Todos os objetos de JavaScript têm métodos:

var a = [];       // Cria um array vazio
a.push(1, 2, 3);  // O método push() adiciona elementos em um array
a.reverse();      // Outro método: inverte a ordem dos elementos
console.log(a)

// Também podemos definir nossos próprios métodos. A palavra-chave "this" se refere ao
// objeto no qual o método é definido: neste caso, o array de pontos anterior.

let points = [{ x: 0, y: 0 }, { x: 1, y: 1 }]

points.dist = function () { // Define um método para calcular a distância entre pontos

    var p1 = this[0];      // Primeiro elemento do array que chamamos
    var p2 = this[1];      // Segundo elemento do objeto "this"
    var a = p2.x - p1.x;   // Diferença em coordenadas X
    var b = p2.y - p1.y;     // Diferença em coordenadas Y
    return Math.sqrt(a * a + b * b);          // O teorema de Pitágoras
    // Math.sqrt() calcula a raiz quadrada
};

console.log(points.dist()) // => 1,414: distância entre nossos 2 pontos

/*Agora, conforme prometido, aqui estão algumas funções cujos corpos demonstram instruções de
estruturas de controle JavaScript comuns:*/

// As instruções JavaScript incluem condicionais e laços que usam a sintaxe
// das linguagens C, C++, Java e outras.

function abs(x) {              // Uma função para calcular o valor absoluto
    if (x >= 0) {              // A instrução if...
        return x;              // executa este código, se a comparação for verdadeira.                              
    }                          // Este é o fim da cláusula if.
    else {                     // A cláusula opcional else executa seu código se
        return -x;             // a comparação for falsa.
    }                          // Chaves são opcionais quando há 1 instrução por
                               // cláusula.
}                              // Observe as instruções return aninhadas dentro de if/else.

console.log(abs(10))


function factorial(n) {         // Uma função para calcular fatoriais
    var product = 1;            // Começa com o produto de 1
    while (n > 1) {             // Repete as instruções que estão em {}, enquanto a
                                // expressão em () for verdadeira
        product *= n;           // Atalho para product = product * n;
        n--;                    // Atalho para n = n – 1
    }                           // Fim do laço
    return product;             // Retorna o produto
}
console.log(factorial(4)) // => 24: 1*4*3*2

function factorial2(n) {    // Outra versão, usando um laço diferente
    var i, product = 1;     // Começa com 1
    for(i=2; i <= n; i++)   // Incrementa i automaticamente, de 2 até n
    product *= i;           // Faz isso a cada vez. {} não é necessário para laços de 1 linha
    return product;         // Retorna o fatorial
    }
    console.log(factorial2(5))           // => 120: 1*2*3*4*5
    
// Define uma função construtora para inicializar um novo objeto Point               

function Point(x,y) {                // Por convenção, as construtoras começam com letras maiúsculas
                        this.x = x;  // A palavra-chave this é o novo objeto que está sendo inicializado
                        this.y = y;  // Armazena os argumentos da função como propriedades do objeto
} // Nenhum return é necessário

// Usa uma função construtora com a palavra-chave "new" para criar instâncias

var p = new Point(1,1); // O ponto geométrico (1,1) define métodos para objetos Point atribuindo-os ao objeto prototype associado à função construtora.

Point.prototype.r = function() {
return Math.sqrt(                 // Retorna a raiz quadrada de x2 + y2
this.x * this.x +                 // Este é o objeto Point no qual o método...
this.y * this.y                   //...é chamado.
);
};
// Agora o objeto Point b (e todos os futuros objetos Point) herda o método r()
p.r() // => 1,414...
console.log(p.r())