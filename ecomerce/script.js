// Lista de produtos por categoria
const products = {
  computers: [
    { id: 1, name: "Computador Desktop", price: 2499.90, image: "https://via.placeholder.com/200" },
    { id: 2, name: "Laptop Gamer", price: 5999.90, image: "https://via.placeholder.com/200" },
    { id: 3, name: "PC All-in-One", price: 3499.90, image: "https://via.placeholder.com/200" },
    { id: 4, name: "Notebook Ultrafino", price: 2499.90, image: "https://via.placeholder.com/200" },
    { id: 5, name: "Mini PC", price: 999.90, image: "https://via.placeholder.com/200" },
    { id: 6, name: "Estação de Trabalho", price: 7999.90, image: "https://via.placeholder.com/200" }
  ],
  accessories: [
    { id: 7, name: "Teclado Mecânico", price: 299.90, image: "https://via.placeholder.com/200" },
    { id: 8, name: "Mouse Gamer", price: 199.90, image: "https://via.placeholder.com/200" },
    { id: 9, name: "Headset Bluetooth", price: 599.90, image: "https://via.placeholder.com/200" },
    { id: 10, name: "Mousepad XXL", price: 129.90, image: "https://via.placeholder.com/200" }
  ]
};

// Carrinho de compras
let cart = [];

// Função para criar a estrutura de um produto (item de produto)
function createProductElement(product) {
  const productElement = document.createElement('div');
  productElement.classList.add('product');
  productElement.innerHTML = `
    <img src="${product.image}" alt="${product.name}">
    <h3>${product.name}</h3>
    <p>R$ ${product.price.toFixed(2)}</p>
    <button class="add-to-cart-btn" data-id="${product.id}">Adicionar ao Carrinho</button>
  `;
  return productElement;
}

// Função para renderizar produtos de uma categoria
function renderCategoryProducts(category, containerId) {
  const container = document.getElementById(containerId);
  container.innerHTML = ''; // Limpa a lista de produtos existente

  products[category].forEach(product => {
    const productElement = createProductElement(product);
    container.appendChild(productElement);
  });
}

// Função para adicionar um produto ao carrinho
function addToCart(productId) {
  const product = [...products.computers, ...products.accessories].find(p => p.id === productId);
  cart.push(product);
  updateCart();
}

// Função para atualizar a visualização do carrinho
function updateCart() {
  const cartCount = document.getElementById('cart-count');
  const cartItemsList = document.getElementById('cart-items');
  const totalPriceElement = document.getElementById('total-price');

  cartCount.textContent = cart.length;
  cartItemsList.innerHTML = ''; // Limpa a lista de itens no carrinho
  let totalPrice = 0;

  cart.forEach(item => {
    const cartItem = document.createElement('li');
    cartItem.textContent = `${item.name} - R$ ${item.price.toFixed(2)}`;
    cartItemsList.appendChild(cartItem);
    totalPrice += item.price;
  });

  totalPriceElement.textContent = `R$ ${totalPrice.toFixed(2)}`;
}

// Função para abrir o modal do carrinho
function viewCart() {
  const cartModal = document.getElementById('cart-modal');
  cartModal.classList.remove('hidden');
}

// Função para fechar o modal do carrinho
function closeCart() {
  const cartModal = document.getElementById('cart-modal');
  cartModal.classList.add('hidden');
}

// Função para adicionar evento aos botões de "Adicionar ao Carrinho"
function setupAddToCartButtons() {
  const buttons = document.querySelectorAll('.add-to-cart-btn');
  buttons.forEach(button => {
    button.addEventListener('click', (e) => {
      const productId = parseInt(e.target.getAttribute('data-id'));
      addToCart(productId);
    });
  });
}

// Função para inicializar o carregamento do site
function initializePage() {
  renderCategoryProducts('computers', 'computers-list');
  renderCategoryProducts('accessories', 'accessories-list');
  setupAddToCartButtons();
}

// Inicialização do site
window.onload = initializePage;
