// Lista geral
const lista = [];

// Pegando o Botão submit e adicionando toda a interatividade
document.querySelector('input[type=submit]').addEventListener('click', () => {

    if (lista.length < 7) {

        // Captando os valores dos produtos
        let produto = document.getElementById('produto');
        let preco = document.getElementById('preco');

        // Inserindo na lista
        lista.push({
            produto: produto.value,
            preco: preco.value,
        });

        // Lista no HTML
        let ListaVision = document.querySelector('.Listagem-Produtos');

        // Limpar para não repetir
        ListaVision.innerHTML = "";

        // Basicamente um forEach para a Lista
        lista.map((e) => {
            ListaVision.innerHTML += `
            <div class="lista">
                <h4>${e.produto}</h4>
                <h4>${e.preco}</h4>
            </div>
        `;
        })

        produto.innerHTML = "";
        preco.innerHTML = "";

    } else {
        // Retorno para informar o limite
        alert('Você atingiu o limite de 7 produtos');
    }
});

// Desenvolvi para treinar, porém me deu uma boa prática