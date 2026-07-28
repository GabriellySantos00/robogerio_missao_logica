let modalAtual;
let caixaAtual = null;
let elseIfDesbloqueado = false;
let elseDesbloqueado = false;

window.onload = function () {
    setTimeout(function () {
        document.getElementById("linha1").style.opacity = "1";
    }, 2000);

    setTimeout(function () {
        document.getElementById("linha2").style.opacity = "1";
    }, 4000);

    setTimeout(function () {
        document.getElementById("botoes").style.opacity = "1";
    }, 5000);
};

const titulo = document.getElementById("titulo");
const linha1 = document.getElementById("linha1");
const linha2 = document.getElementById("linha2");
const linha3 = document.getElementById("linha3");
const botao1 = document.getElementById("botao1");
const botao2 = document.getElementById("botao2");
const botao3 = document.getElementById("botao3");

const texto = "> robogerio.exe";

let i = 0;

function digitar() {

    if (i < texto.length) {

        titulo.textContent += texto.charAt(i);
        i++;

        setTimeout(digitar, 120);

    } else {

        carregarSistema();

    }
}

let pontos = 0;

function carregarSistema() {

    const animacao = setInterval(function () {

        linha1.textContent = "Inicializando sistema" + ".".repeat(pontos);

        pontos++;

        if (pontos > 4) {
            clearInterval(animacao);

            linha1.innerHTML = '<span class="erroSistema">⚠ Sistema corrompido.</span>';
            linha3.innerHTML = "Missão: restaure a Lógica do Robogério.<br> Treinando JavaScript.";


            setTimeout(() => {
                botao1.style.opacity = "1";
            }, 0);

            setTimeout(() => {
                botao2.style.opacity = "1";
            }, 400);

            setTimeout(() => {
                botao3.style.opacity = "1";
            }, 800);

        }

    }, 500);

}

digitar();


function mostrarCaixa(numero) {


    let caixa = document.getElementById("caixaContainer" + numero)
    let caixinha = document.getElementById("caixinhaTecnica" + numero)


    if (numero === 2 && !elseIfDesbloqueado) {
        alert("Fase Bloqueada! :P\n\nConclua o IF primeiro!");
        return;
    }

    if (numero === 3 && !elseDesbloqueado) {
        alert("Fase Bloqueada! :P\n\nConclua o ELSE IF primeiro!");
        return;
    }

    if (caixaAtual === numero) {
        caixaAtual = null;
    } else {
        caixaAtual = numero;
    }


    let caixas = document.querySelectorAll(
        "#caixaContainer1, #caixaContainer2, #caixaContainer3, #caixaContainer4");

    let caixinhas = document.querySelectorAll(
        "#caixinhaTecnica1, #caixinhaTecnica2, #caixinhaTecnica3");


    caixas.forEach(function (item) {
        item.style.display = "none";
    });

    caixinhas.forEach(function (item) {
        item.style.display = "none";
    });

    if (caixaAtual !== null) {
        caixa.style.display = "flex";
        caixinha.style.display = "block";
    }

    document.querySelectorAll("details").forEach(function (details) {
        details.open = false;
    });
}

function exercicioBotao(numero) {

    modalAtual = numero;

    let modal = document.getElementById("modal" + numero);

    let todosModais = document.querySelectorAll("dialog");

    todosModais.forEach(function (modal) {
        modal.style.display = "none";
    });


    let modalOverlay = document.getElementById("modalOverlay");

    modal.style.display = "block";
    modalOverlay.style.display = "flex";


    document.querySelectorAll("details").forEach(function (details) {
        details.open = false;
    });

}


function botaoFechar(numero) {

    let modalOverlay = document.getElementById("modalOverlay");

    clearInterval(animacao);


    document.querySelectorAll("#energiaBarra" + numero + " .palito")
        .forEach(p => p.classList.remove("ativo"));

    document.getElementById("porcentagem" + numero).textContent = "0%";
    document.getElementById("mensagemEnergia" + numero).textContent = "";
    document.getElementById("terminal-body" + numero).textContent = "";

    let containersEnergia = document.querySelectorAll(
        "#containerEnergia1, #containerEnergia2, #containerEnergia3"
    );

    containersEnergia.forEach(function (container) {
        container.style.display = "none";
    });

    document.querySelectorAll("details").forEach(function (details) {
        details.open = false;
    });

    let todosModais = document.querySelectorAll("dialog");

    todosModais.forEach(function (modal) {
        modal.style.display = "none";
    });

    modalOverlay.style.display = "none";


}



let porcentagens = document.querySelectorAll("#porcentagem1, #porcentagem2, #porcentagem3");

let mensagensEnergia = document.querySelectorAll("#mensagemEnergia1, #mensagemEnergia2, #mensagemEnergia3")


let containersEnergia = document.querySelectorAll(
    "#containerEnergia1, #containerEnergia2, #containerEnergia3"
);

let terminalBodies = document.querySelectorAll(
    "#terminal-body1, #terminal-body2, #terminal-body3"
);

let palitos = document.querySelectorAll(
    "#energiaBarra1 .palito, #energiaBarra2 .palito, #energiaBarra3 .palito"
);



let inputFields = document.querySelectorAll(
    "#terminal-input1, #terminal-input2, #terminal-input3"
);

inputFields.forEach(function (input) {
    input.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            const command = input.value.trim();
            executeCommand(command);
            input.value = ''; // Limpa o campo
        }
    });
});


function executeCommand(cmd) {

    // Exibe o comando digitado
    const line = document.createElement('div');
    line.innerHTML = `<span class="robot@console:~$</span> ${cmd}`;
    terminalBodies.forEach(function (terminal) {
        terminal.appendChild(line.cloneNode(true));
    });

    // Lógica simples de comandos
    let output = '';
    if (cmd.toLowerCase() === 'ajuda') {
        output = 'Digite um número de 1 a 100 e descubra o resultado!';

    } else if (cmd.toLowerCase() === 'clear') {
        terminalBodies.forEach(function (terminal) {
            terminal.innerHTML = '';
        });

        containersEnergia.forEach(function (container) {
            container.style.display = "none";
        });

        mensagensEnergia.forEach(function (mensagem) {
            mensagem.textContent = "";
        });

        porcentagens.forEach(function (porcentagem) {
            porcentagem.textContent = "0%";
        });


        palitos.forEach(function (palito) {
            palito.classList.remove("ativo");
        });

        document.querySelectorAll(".terminal-window").forEach(function (terminal) {
            terminal.classList.remove("expandido");
        });

        return;

    }

    else if (!isNaN(cmd)) {

        let energia = Number(cmd);
        carregarEnergia(energia);

    } else {
        output = `Comando inválido: ${cmd}`;
    }

    // Exibe a resposta
    if (output) {
        const outputLine = document.createElement('div');
        outputLine.textContent = output;
        terminalBodies.forEach(function (terminal) {
            terminal.appendChild(outputLine.cloneNode(true));
        });


    }

    // Rola para a última linha
    terminalBodies.forEach(function (terminal) {
        terminal.scrollTop = terminal.scrollHeight;
    });
}

function carregarEnergia(valor) {


    clearInterval(animacao);
    document.querySelectorAll(
        "#botaoSeguinte1, #botaoSeguinte2, #botaoSeguinte3"
    ).forEach(function (botao) {
        botao.style.display = "none";
    });

    let porcentagens = document.querySelectorAll(
        "#porcentagem1, #porcentagem2, #porcentagem3"
    );
    let mensagensEnergia = document.querySelectorAll(
        "#mensagemEnergia1, #mensagemEnergia2, #mensagemEnergia3"
    );

    containersEnergia.forEach(function (container) {
        container.style.display = "block";
    });


    valor = Math.max(0, Math.min(Number(valor), 100));

    // Reseta tudo
    porcentagens.forEach(function (porcentagem) {
        porcentagem.textContent = "0%";
    });

    palitos.forEach(p => p.classList.remove("ativo"));

    let atual = 0;

    animacao = setInterval(() => {

        atual++;

        porcentagens.forEach(function (porcentagem) {
            porcentagem.textContent = atual + "%";
        });

        const quantidadeAcesa = Math.floor(atual / 5);

        const palitosAtuais = document.querySelectorAll(
            "#energiaBarra" + modalAtual + " .palito"
        );

        palitosAtuais.forEach((palito, indice) => {
            if (indice < quantidadeAcesa) {
                palito.classList.add("ativo");
            }
        });

        if (atual >= valor) {

            clearInterval(animacao);

            mostrarResultado(valor);
        }

    }, 100);
}

let animacao = null;

function mostrarResultado(valor) {

    let botao = document.getElementById("botaoSeguinte" + modalAtual)
    let mensagem = document.getElementById("mensagemEnergia" + modalAtual);

    let botoes = document.querySelectorAll(
        "#botaoSeguinte1, #botaoSeguinte2, #botaoSeguinte3");

    botoes.forEach(function (item) {
        item.style.display = "none";
    });




    if (modalAtual === 1) {

        if (valor == 50) {
            mensagem.textContent = "AEEEE! a condição do IF foi verdadeira. Robogério conseguiu continuar!\n\n╭[◉‿◉]╮";
            botao.style.display = "block"
            elseIfDesbloqueado = true;
            botao2.textContent = "ELSE IF";
        } else {
            mensagem.textContent = "A condição do IF não foi verdadeira. \n\n╭[╥﹏╥]╮ \n\n Tente outro valor de energia! \n\n Digite 'clear' para Limpar Terminal.";
            botao.style.display = "none";
        }


    }
    else if (modalAtual === 2) {


        if (valor == 50) {
            mensagem.textContent = "Esse valor ativaria a condição do IF.\n\n╭[╥﹏╥]╮ \n\nTente outro valor de energia!\n\n Digite 'clear' para Limpar Terminal.";
            botao.style.display = "none";
        }
        else if (valor == 70) {
            mensagem.textContent = "AEEEE! a condição do ELSE IF foi verdadeira. Robogério conseguiu continuar!\n\n╭[◉‿◉]╮ ";
            botao.style.display = "block";
            elseDesbloqueado = true;
            botao3.textContent = "ELSE";



        } else {
            mensagem.textContent = "A condição do ELSE IF não foi verdadeira. \n\n╭[╥﹏╥]╮ \n\n Tente outro valor de energia!";
            botao.style.display = "none";
        }


    }
    else if (modalAtual === 3) {

        if (valor == 50) {
            mensagem.textContent = "Esse valor ativaria a condição do IF. \n\n╭[╥﹏╥]╮ \n\n Tente um valor que faça o código chegar até o ELSE.\n\n Digite 'clear' para Limpar Terminal.";
            botao.style.display = "none";
        }
        else if (valor == 70) {
            mensagem.textContent = "Esse valor ativaria a condição do ELSE IF. \n\n╭[╥﹏╥]╮ \n\n O ELSE só acontece quando nenhuma das condições anteriores é verdadeira.\n\n Digite 'clear' para Limpar Terminal.";
            botao.style.display = "none";
        }
        else {
            mensagem.textContent = "AEEEE! Nenhuma condição anterior foi verdadeira, então o ELSE foi executado.\n\n╭[◉‿◉]╮";
            botao.style.display = "block"
        }

    }

}

function condicaoSeguinte(numero) {
    botaoFechar(modalAtual);

    let tecnicas = document.querySelectorAll("#caixinhaTecnica1, #caixinhaTecnica2, #caixinhaTecnica3")
    tecnicas.forEach(function (tecnica) {
        tecnica.style.display = "none";
    });

    let condicoes = document.querySelectorAll("#caixaContainer1, #caixaContainer2, #caixaContainer3, #caixaContainer4");

    condicoes.forEach(function (caixa) {
        caixa.style.display = "none";
    });


    let proximaCaixa = document.getElementById("caixaContainer" + numero);
    let tecnica = document.getElementById("caixinhaTecnica" + numero);

    proximaCaixa.style.display = "flex";

    if (tecnica) {
        tecnica.style.display = "block";
    }

    caixaAtual = numero;

    if (numero === 4) {

        linha1.innerHTML = '<span class="sistemaRestaurado">✓ Falha corrigida. </span>';
        linha3.textContent = " Robogério voltou a funcionar!.";
    }




}
