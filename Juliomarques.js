// Faz o carrossel rodar
let indexAtual = 0;
const depoimentos = document.querySelectorAll('.depoimento');
const indicadores = document.getElementById('indicadores');

// bolinha de navegação
depoimentos.forEach((_, index) => {
    const bolinha = document.createElement('span');
    bolinha.classList.add('bolinha');
    if (index === 0) bolinha.classList.add('ativa');
    indicadores.appendChild(bolinha);
});

const bolinhas = document.querySelectorAll('.bolinha');

function mostrarDepoimento() {
    depoimentos.forEach((item, index) => {
        item.classList.remove('ativo');
        bolinhas[index].classList.remove('ativa');
        if (index === indexAtual) {
            item.classList.add('ativo');
            bolinhas[index].classList.add('ativa');
        }
    });

    indexAtual = (indexAtual + 1) % depoimentos.length;
}

setInterval(mostrarDepoimento, 3000); // Troca a cada 3 segundos

// Pra enviar o formulário
document.getElementById('formContato').addEventListener('submit', function(event) {
    event.preventDefault();
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;

    const mailtoLink = `mailto:Souzajuliocesar017@gmail.com?subject=Contato pelo Currículo&body=Nome: ${nome}%0AEmail: ${email}%0AMensagem: ${mensagem}`;

    window.location.href = mailtoLink;

    // Mostra mensagem de confirmação
    const confirmacao = document.createElement('p');
    confirmacao.textContent = "✅ Mensagem enviada ao destinatário!";
    confirmacao.style.color = "green";
    confirmacao.style.textAlign = "center";
    confirmacao.style.marginTop = "15px";
    
    const formulario = document.getElementById('formContato');
    formulario.appendChild(confirmacao);

    formulario.reset();

    // Some a mensagem depois de 5 segundos
    setTimeout(() => {
        confirmacao.remove();
    }, 5000);
});
