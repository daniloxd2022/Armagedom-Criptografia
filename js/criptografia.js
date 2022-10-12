//Declarando constantes
const botao = document.getElementById('btn');
const texto = document.getElementById('msg');
const divRetorno = document.getElementById('exibeMensagem')
const qCriptografia = document.getElementById('qcode');
const mensagemRetorno = document.createElement('p');//criação de elemento paragrafo
const incremento = document.createElement(`input`);// criação de elemento input
incremento.id = 'incremento';
incremento.type = 'number';
incremento.placeholder = 'incremento';
document.getElementById("limpar").addEventListener("click", limpar);


// Mudando o botão de codificar para decofificar e ao contrario
document.querySelectorAll('input').forEach((input) => {
    input.addEventListener('click', (event) => {
        const evento = event.target;

        if (evento.value === 'decodificar') {
            botao.innerText = ' Descriptografar! '
        }
        else (botao.innerText = ' Criptografar! ')
        //se o evento receber valor igual e extritamente igual a decodificar então botão recebe texto descriptografar se não botão Criptografar
    })
})

//aparece a barra para escolher o numero de posições da cifra 
document.querySelectorAll('select').forEach((select) => {
    select.addEventListener('change', (event) => {
        const evento = event.target;
        const divDoInc = document.getElementById("divmsg");


        if (evento.value === 'cesar') {
            divDoInc.appendChild(incremento)
        }
        else (incremento.remove())
        //se o evento receber valor extritamente igual a cesar então aparecer incremento se não remover incremento
    })
})


// alertas para o usuario

//se quando o usuario clicar no botão e a caixa de texto estiver vazia Alertar "Coloque Mensagem para Criptografar!"
// e se clicado no botão e não tiver selecionado em uma opção de criptografia alertar"Escolha uma criptografia" 

function exibeNaTela(conteudo) {
    return mensagemRetorno.innerText = conteudo;
} divRetorno.appendChild(mensagemRetorno);

botao.addEventListener('click', () => {

    if (!texto.value) {
        alert('Coloque Mensagem para Criptografar!')
    }
    else if (qCriptografia.value === 'base64' && texto.value) {
        exibeNaTela(base64())
    }
    else if (qCriptografia.value === 'cesar' && texto.value) {
        exibeNaTela(cifraCesar())
    }
    else alert('Escolha uma Criptografia')
})

// se tiver selecionado cesar  e não tiver valor no incremento alertar mensagem
botao.addEventListener('click', () => {
    if (qCriptografia.value === 'cesar' && !incremento.value) {
        alert('Coloque um valor no incremento POR FAVOR')
    }

})

//  Codigo Base64
function base64() {
    return botao.textContent.includes('Criptografar!') ? window.btoa(texto.value) : window.atob(texto.value);

}

//textcontent referente ao texto no botão



// Cifra de César
const cifraCesar = () => {
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    let fraseText = texto.value;
    fraseText = fraseText.toLowerCase();
    const incremento = document.getElementById('incremento')
    const d = parseInt(incremento.value); //convert string
    let CodificadorFrase = [];

    for (let i = 0; i < fraseText.length; i++) {
        if (fraseText[i] != ' ') {
            for (let j = 0; j < alfabeto.length; j++) {
                if (fraseText[i] == alfabeto[j]) {
                    if (botao.textContent.includes('Criptografar!')) {
                        CodificadorFrase[i] = alfabeto[(j + d) % alfabeto.length];
                    }
                    else {
                        if (j - d >= 0) {
                            CodificadorFrase[i] = alfabeto[(j - d)];
                        }
                        else {
                            CodificadorFrase[i] = alfabeto[alfabeto.length + (j - d)]
                        }
                    }
                }
            }
        }
        else {
            CodificadorFrase[i] = ' ';
        }
    }
    return CodificadorFrase.join('');
}

function limpar() {
    location.reload();
}
