// a) 1, 3, 5, 7, ___
// Essa sequência é de números ímpares, incrementando de 2 em 2.
let sequenceA = [1, 3, 5, 7];
let nextA = 9; // Próximo elemento
sequenceA.push(nextA); // Adiciona 9 à sequência
console.log(sequenceA); // [1, 3, 5, 7, 9]

// b) 2, 4, 8, 16, 32, 64, ____
// Cada número é o dobro do anterior (progressão geométrica).
let sequenceB = [2, 4, 8, 16, 32, 64];
let nextB = 128; // Próximo elemento
sequenceB.push(nextB); // Adiciona 128 à sequência
console.log(sequenceB); // [2, 4, 8, 16, 32, 64, 128]

// c) 0, 1, 4, 9, 16, 25, 36, ____
// Sequência de quadrados perfeitos (0^2, 1^2, 2^2, ...).
let sequenceC = [0, 1, 4, 9, 16, 25, 36];
let nextC = 49; // Próximo elemento, que é 7^2
sequenceC.push(nextC); // Adiciona 49 à sequência
console.log(sequenceC); // [0, 1, 4, 9, 16, 25, 36, 49]

// d) 4, 16, 36, 64, ____
// Outra sequência de quadrados perfeitos, mas começando em 2^2, 4^2, 6^2...
let sequenceD = [4, 16, 36, 64];
let nextD = 100; // Próximo elemento, que é 10^2
sequenceD.push(nextD); // Adiciona 100 à sequência
console.log(sequenceD); // [4, 16, 36, 64, 100]

// e) 1, 1, 2, 3, 5, 8, ____
// Sequência de Fibonacci, onde cada número é a soma dos dois anteriores.
let sequenceE = [1, 1, 2, 3, 5, 8];
let nextE = 13; // Próximo elemento, que é 5 + 8
sequenceE.push(nextE); // Adiciona 13 à sequência
console.log(sequenceE); // [1, 1, 2, 3, 5, 8, 13]

// f) 2, 10, 12, 16, 17, 18, 19, ____
// Mistura de lógica: parte de números que terminam em 0, 2 ou 6 e sequência contínua.
let sequenceF = [2, 10, 12, 16, 17, 18, 19];
let nextF = 20; // Próximo elemento, seguindo o padrão
sequenceF.push(nextF); // Adiciona 20 à sequência
console.log(sequenceF); // [2, 10, 12, 16, 17, 18, 19, 20]
