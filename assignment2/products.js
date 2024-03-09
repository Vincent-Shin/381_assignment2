document.addEventListener("DOMContentLoaded", function() {
    let cart = {};

    function updateCartDisplay() {
        const cartDisplay = document.getElementById("cart-display");
        cartDisplay.innerHTML = "";
        
        // Add the title "Shopping Cart"
        const cartTitle = document.createElement("h1");
        cartTitle.textContent = "Shopping Cart";
        cartDisplay.appendChild(cartTitle);
    

        for (const [product, details] of Object.entries(cart)) {
            const cartItem = document.createElement("produts");
            cartItem.classList.add("cart-item");
        
            cartItem.innerHTML = `
                <p>${details.name} - $${details.price} - Quantity: ${details.quantity}</p>
                <button class="remove-btn">Remove</button>
            `;
            cartItem.querySelector(".remove-btn").addEventListener("click", function() {
                removeFromCart(product);
            });
            cartDisplay.appendChild(cartItem);
        }
    }

    function addToCart(productName, price) {
        if (cart[productName]) {
            cart[productName].quantity++;
        } else {
            cart[productName] = { name: productName, price: price, quantity: 1 };
        }
        alert(`${productName} has been added to the cart on Roberta Fashion.`);
        updateCartDisplay();
    }

    function removeFromCart(productName) {
        cart[productName].quantity--;
        if (cart[productName].quantity === 0) {
            delete cart[productName];
        }
        updateCartDisplay();
    }

    const addToCartButtons = document.querySelectorAll(".products button");
    addToCartButtons.forEach(button => {
        button.addEventListener("click", function() {
            const product = button.parentNode.querySelector("h3").textContent;
            const price = parseFloat(button.parentNode.querySelector("p").textContent.replace("$", ""));
            addToCart(product, price);
        });
    });

    document.addEventListener("mouseover", function(event) {
        if (event.target.classList.contains("remove-btn")) {
            event.target.style.backgroundColor = "#ff0000";
        }
    });

    document.addEventListener("mouseout", function(event) {
        if (event.target.classList.contains("remove-btn")) {
            event.target.style.backgroundColor = "";
        }
    });
});
