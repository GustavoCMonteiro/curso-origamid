export default function horarioFuncionamento() {
  const funcionamento = document.querySelector("[data-semana]");
  const diasSemana = funcionamento.dataset.semana.split(",").map(Number);
  const horarioSemana = funcionamento.dataset.horario.split(",").map(Number);

  const dataAgora = new Date();
  const diaAgora = dataAgora.getDay();
  const horarioAgora = dataAgora.getHours();

  const diaAberto = diasSemana.indexOf(diaAgora) !== -1;
  const horaAberto =
    horarioAgora >= horarioSemana[0] && horarioAgora < horarioSemana[1];

  if (diaAberto && horaAberto) funcionamento.classList.add("aberto");
}
