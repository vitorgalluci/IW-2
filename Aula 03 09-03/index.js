var davi="Ola";
console.log(davi);
alert ("Bem-vindo ao nosso site!");

var nome = prompt("Qual é o seu nome?"); 
alert("Ola "+nome);

var idade=prompt(" Qual sua idade? ");
  if (idade<18) {
    console.log(nome+" você é menor de idade")
} else {
    console.log(nome+" você é maior de idade")
}

let resposta = confirm("Você deseja continuar?");
if (resposta) {
alert("Você escolheu continuar.");

} else {
    
alert("Você cancelou a ação.");
process.exit()
}


var num1 = prompt("Escolha seu primeiro numero para somar: "); 
var num2 = prompt("Escolha seu segundo numero para somar: "); 
var soma = parseFloat(num1)+ parseFloat(num2);
alert("a soma destes dois numeros é : "+soma);

var num3 = prompt("Escolha outro numero para ver o dobro : ");
var mult = parseFloat(num3)*2;
alert("o dobro desse numero é : "+mult);

var nome2 = prompt("Agora de outro nome "); 
var idade2 = prompt("Agora de outra idade "); 
alert("Ola "+nome2+" sua idade é "+idade2);