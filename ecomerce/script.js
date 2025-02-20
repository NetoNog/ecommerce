// Obtém todos os botões de "Adicionar ao Carrinho"
const buttons = document.querySelectorAll('.add-carrinho');
// Obtém a lista do carrinho onde os produtos adicionados irão aparecer
const carrinhoList = document.getElementById('carrinho-list');

// Para cada botão de "Adicionar ao Carrinho", adiciona um ouvinte de evento
buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        // Obtém o elemento de produto onde o botão foi clicado
        const produto = e.target.parentElement;
        // Obtém o nome do produto (título)
        const nomeProduto = produto.querySelector('h3').textContent;
        // Obtém o preço do produto
        const precoProduto = produto.querySelector('p').textContent;

        // Cria um novo item de lista (li) para o carrinho
        const itemCarrinho = document.createElement('li');
        // Preenche o item do carrinho com o nome e preço do produto
        itemCarrinho.textContent = `${nomeProduto} - ${precoProduto}`;
        // Adiciona o item ao carrinho (ul)
        carrinhoList.appendChild(itemCarrinho);
    });
});

// Ouvinte de evento para o botão de "Finalizar Compra"
document.getElementById('finalizar-compra').addEventListener('click', () => {
    // Exibe um alerta de confirmação da compra
    alert('Compra finalizada! Obrigado pela sua compra.');
    // Limpa a lista do carrinho após a compra
    carrinhoList.innerHTML = '';
});
