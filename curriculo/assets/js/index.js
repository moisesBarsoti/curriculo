// Estilização
const h1DeApresentacao = document.querySelector('#inicio h1');
const textoDeApresentacao = 'Olá, Eu sou Moisés Barsoti';
const intervalo = 95;

function escreverLetras(h1DeApresentacao, textoDeApresentacao, intervalo) {
    const letras = textoDeApresentacao.split("").reverse();
    
    const digitador = setInterval(() => {
        if(!letras.length) {
            return clearInterval(digitador);
        }

        const separacaoDasLetras = letras.pop();
        h1DeApresentacao.innerHTML += separacaoDasLetras;
    }, intervalo);
}
escreverLetras(h1DeApresentacao,textoDeApresentacao,intervalo);