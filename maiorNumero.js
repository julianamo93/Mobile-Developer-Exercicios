function encontrarMaiorNumero(numeros) {
    // Verificar se o array está vazio
    if (numeros.length === 0) {
      throw new Error("O array está vazio.");
    }
  
    // Inicializar maiorNumero com o primeiro elemento do array
    let maiorNumero = numeros[0];
  
    // Percorrer o array a partir do segundo elemento
    for (let i = 1; i < numeros.length; i++) {
      // Se o elemento atual for maior que maiorNumero, atualizar maiorNumero
      if (numeros[i] > maiorNumero) {
        maiorNumero = numeros[i];
      }
    }
  
    // Retornar o maior número encontrado
    return maiorNumero;
  }
  
  // Exemplo de uso:
  const numeros = [3, 5, 7, 2, 8, 6];
  console.log(encontrarMaiorNumero(numeros)); // Saída: 8

