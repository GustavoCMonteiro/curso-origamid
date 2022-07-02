import LimparCpf from "./limpar-cpf.js";
import ValidarCpf from "./validar-cpf.js";

LimparCpf();

const cpf = document.querySelector("#cpf");
const validarCpf = new ValidarCpf(cpf).iniciar();
