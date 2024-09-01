function isFibonacci(num) {
    if (num < 0) return false; // Fibonacci não tem números negativos

    let a = 0;
    let b = 1;

    // Se o número for 0 ou 1, já sabemos que pertence à sequência
    if (num === a || num === b) return true;

    let c = a + b;

    while (c <= num) {
        if (c === num) return true;

        a = b;
        b = c;
        c = a + b;
    }

    return false;
}

// Aqui você pode definir o número que quer verificar
const numToCheck = 21;

if (isFibonacci(numToCheck)) {
    console.log(`O número ${numToCheck} pertence à sequência de Fibonacci.`);
} else {
    console.log(`O número ${numToCheck} NÃO pertence à sequência de Fibonacci.`);
}
