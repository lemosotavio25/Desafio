function countAInString(str) {
    // Inicializa o contador
    let count = 0;

    // Converte a string para minúsculas para facilitar a contagem
    let lowerCaseStr = str.toLowerCase();

    // Percorre cada caractere da string
    for (let i = 0; i < lowerCaseStr.length; i++) {
        if (lowerCaseStr[i] === 'a') {
            count++;
        }
    }

    // Verifica se a letra 'a' foi encontrada e retorna a mensagem apropriada
    if (count > 0) {
        console.log(`A letra 'a' aparece ${count} vezes na string.`);
    } else {
        console.log("A letra 'a' não foi encontrada na string.");
    }
}

// String a ser verificada
const stringToCheck = "JavaScript é uma linguagem fantástica!";

// Chama a função para contar as ocorrências de 'a'
countAInString(stringToCheck);
