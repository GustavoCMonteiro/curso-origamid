let quantidadeAlunos = parseInt(prompt("Quantos alunos serão inseridos?"));
let alunos = [];

for (let cont = 1; cont <= quantidadeAlunos; cont++) {
  let nomeAluno = prompt("Qual o nome do aluno " + cont + " ?");
  alunos.push(nomeAluno);
}

let quantidadeNotas = parseInt(prompt("Quantos notas serão enviadas?"));
let media = [];
let mediaAluno = 0;

for (let cont = 0; cont < alunos.length; cont++) {
  let notaTotal = 0;
  mediaAluno = 0;
 
  for (let i = 1; i <= quantidadeNotas; i++) {
    let nota = parseInt(
      prompt("Qual a nota " + i + " do aluno " + alunos[cont])
    );
    notaTotal = notaTotal + nota;
  }

  mediaAluno = notaTotal / quantidadeNotas;
  media.push(mediaAluno.toFixed(1));
}

document.write("---------------------------------------------------------------");
document.write("<h2>" + "M É D I A - D O S - A L U N O S" + "</h2>");
document.write("---------------------------------------------------------------");

for (let i = 0; i < alunos.length; i++) {
  document.write("<h4>" + alunos[i] + " : " + media[i] + "</h4>");
}
  


