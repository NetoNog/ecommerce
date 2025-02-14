let cart = [];
let totalPrice = 0;

function addToCart(productName, productPrice) {
  cart.push({ name: productName, price: productPrice });
  totalPrice += productPrice;
  updateCart();
}

function updateCart() {
  const cartItemsList = document.getElementById('cartItems');
  const totalPriceElement = document.getElementById('totalPrice');
  
  // Atualiza os itens no carrinho
  cartItemsList.innerHTML = '';
  cart.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.name} - R$ ${item.price.toFixed(2)}`;
    cartItemsList.appendChild(li);
  });

  // Atualiza o preço total
  totalPriceElement.textContent = totalPrice.toFixed(2);

  // Atualiza o botão do carrinho no header
  const cartButton = document.querySelector('.cart button');
  cartButton.textContent = `Carrinho (${cart.length})`;
}

function toggleCart() {
  const cartModal = document.getElementById('cartModal');
  cartModal.style.display = cartModal.style.display === 'flex' ? 'none' : 'flex';
}
