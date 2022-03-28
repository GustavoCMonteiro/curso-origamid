function livro(nome, ano, autor){
  const nomeM = nome.toUpperCase();
  const totalAnos = 2050 - ano;
  const frase = nome + ' por ' + autor;
  const objeto = {
    nome: nomeM,
    totalAnos,
    frase,
  };
  return objeto;
}

const livroRetorno = livro('O Senhor dos Anéis', 1954, 'J. R. R. Tolkien');
console.log(livroRetorno.frase);
console.log(livroRetorno);


function livro1(nome, ano, autor){
  return {
    nome: nome.toUpperCase(),
    totalAnos: 2050 - ano,
    frase: nome + ' por ' + autor,
  };
}

const livroRetorno1 = livro1('O Senhor dos Anéis', 1954, 'J. R. R. Tolkien');
console.log(livroRetorno.nome);
console.log(livroRetorno);