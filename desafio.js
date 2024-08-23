// exercício de desafio: criando uma função para encontrar o menor número

function encontrarMenorNumero(numeros) {
    if (numeros.length === 0) {
      throw new Error("O array está vazio.");
    }
  
    let menorNumero = numeros[0];
  
    // Percorrer o array a partir do segundo elemento
    for (let i = 1; i < numeros.length; i++) {
      // Se o elemento atual for menor que menorNumero, atualizar menorNumero
      if (numeros[i] < menorNumero) {
        menorNumero = numeros[i];
      }
    }
  
    // Retornar o menor número encontrado
    return menorNumero;
  }
  
  // Exemplo de uso:
  const numeros = [3, 5, 7, 2, 8, 6];
  console.log(encontrarMenorNumero(numeros)); // Saída: 2