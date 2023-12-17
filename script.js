
const addToCartButtons = document.querySelectorAll('.btn');


const cart = document.getElementById('total');

const cartItems = document.createElement('div');
cartItems.classList.add('cart-items'); 


const addedItems = [];

addToCartButtons.forEach((button, index) => {
    button.addEventListener('click', function () {
        
        const currentItem = this.parentElement;
        currentItem.style.backgroundColor = 'yellow'; 
        const itemName = currentItem.textContent.split('$')[0].trim();
        const itemPrice = parseFloat(currentItem.textContent.split('$')[1]);

        const cartItem = document.createElement('div');
        cartItem.textContent = itemName + ': $' + itemPrice.toFixed(2);

        
        addedItems.push(cartItem);

        
        cart.innerHTML = '';

        const cartItemsText = addedItems.map(item => item.textContent).join(', ');
        cart.textContent = cartItemsText;

        
        const totalAmount = addedItems.reduce((total, item) => {
            return total + parseFloat(item.textContent.split('$')[1]);
        }, 0);
        const totalElement = document.createElement('div');
        totalElement.textContent = 'Total: $' + totalAmount.toFixed(2);
        cart.appendChild(totalElement);

        
const checkoutBtn = document.getElementById('checkoutBtn');

function initiateCheckout() {
  alert('Checkout process initiated. Thanks for your order. Keep with MD. Zubayer Hossain Shopping Cart.');
}

checkoutBtn.addEventListener('click', initiateCheckout);

    });
});
