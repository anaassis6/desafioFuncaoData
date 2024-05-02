/*
Crie uma função que ao receber o dia, mês e ano verifica se está correta
retornando a data completa, caso não seja possível pense em uma solução (acredito que é possível),
utilizar a classe/objeto Date() do typescript para validação dos dados
Nome: Ana Luiza de Assis
*/
var teclado = require("prompt-sync")();
var dataAtual = new Date();
var diaAtual = dataAtual.getDate();
var mesAtual = dataAtual.getMonth() + 1;
var anoAtual = dataAtual.getFullYear();
inicio();
function inicio() {
    console.log("-----Respondas as perguntas a seguir para descobrir a data de hoje-----");
    console.log("-----------------Use somente n\u00FAmeros para responder--------------------");
    var data = parseInt(teclado("Digite o dia de hoje: "));
    var mes = parseInt(teclado("Digite o m\u00EAs: "));
    var ano = parseInt(teclado("Digite o ano: "));
    dataCompleta(data, mes, ano);
}
function dataCompleta(data, mes, ano) {
    if (data == diaAtual && mes == mesAtual && ano == anoAtual) {
        console.log("A data completa de hoje ".concat(data, "/").concat(mes, "/").concat(ano));
    }
    else {
        console.log("Suas respostas n\u00E3o s\u00E3o compat\u00EDveis com a data atual! Algo deu errado!!");
        console.log("A data correta de hoje ".concat(diaAtual, "/").concat(mesAtual, "/").concat(anoAtual));
    }
}
