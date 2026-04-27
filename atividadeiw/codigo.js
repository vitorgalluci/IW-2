// exercicio 1:
function exercicio1() {
    const input = document.getElementById('input1').value;
    document.getElementById('p1').innerText = input;
}

// exercicio 2:
function exercicio2() {
    const nome = document.getElementById('inputNome').value;
    document.getElementById('p2').innerText = `Olá, ${nome}`;
}

// exercicio 3:
function exercicio3() {
    const idade = Number(document.getElementById('inputIdade').value);
    const resultado = idade >= 18 ? "maior de idade" : "menor de idade";
    document.getElementById('p3').innerText = resultado;
}

// exercicio 4:
function exercicio4() {
    const cor = '#' + Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = cor;
}

// exercicio 5:
function exercicio5() {
    const corpo = document.body;
    if (corpo.style.backgroundColor === 'black') {
        corpo.style.backgroundColor = 'white';
        corpo.style.color = 'black';
    } else {
        corpo.style.backgroundColor = 'black';
        corpo.style.color = 'white';
    }
}

// exercicio 6:
function adicionarItem() {
    const texto = document.getElementById('inputlista').value;
    if (texto === "") return;

    const li = document.createElement('li');
    li.innerText = texto;
    
// exercecio 7:
    li.onclick = function() {
        this.remove();
    };

    document.getElementById('minhalista').appendChild(li);
    document.getElementById('inputlista').value = "";
}

// exercicio 8:
function exercicio8() {
    const num = Number(document.getElementById('inputNum').value);
    const tipo = (num % 2 === 0) ? "Par" : "Ímpar";
    document.getElementById('p8').innerText = `O número é ${tipo}`;
}

// exercicio 9:
function exercicio9() {
    const senha = document.getElementById('inputsenha').value;
    const msg = document.getElementById('p9');
    
    if (senha.length >= 6) {
        msg.innerText = "senha valida";
        msg.style.color = "green";
    } else {
        msg.innerText = "6 caracteres minimos";
        msg.style.color = "red";
    }
}

// exercicio 10

let totalitens = 0;

function cadastrarnome() {
    const input = document.getElementById('nomecadastro');
    const nome = input.value;
    const lista = document.getElementById('listacadastro');
    const contador = document.getElementById('contador');

    if (nome === "") return;

    const li = document.createElement('li');
    li.innerHTML = `${nome} `;

    const btnRemover = document.createElement('button');
    btnRemover.innerText = "remover";
    btnRemover.onclick = function() {
        li.remove();
        totalItens--;
        contador.innerText = `total: ${totalitens}`;
    };


    li.appendChild(btnRemover);
    lista.appendChild(li);
    
    totalitens++;
    contador.innerText = `total: ${totalitens}`;
    input.value = ""; 
}