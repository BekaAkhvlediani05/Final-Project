import { navListContent, productsContent } from "./content.js";

class ProductNav {
  constructor(navListContent, productsContent) {
    this._navListContent = navListContent;
    this._products = productsContent;
    this._categoryProducts = [];
    this._cart = []
  }

  _createListItem(name, id) {
    const li = document.createElement("li");
    li.id = id;
    const a = document.createElement("a");
    a.href = "#";
    a.textContent = name;
    li.addEventListener("click", () => {
      this.generateProductList(id);
    });
    li.appendChild(a);
    return li;
  }

  generateNav() {
    const navList = document.querySelector("#product-nav-list");
    this._navListContent.forEach(category => {
      const li = this._createListItem(category.name, category.id);
      navList.appendChild(li);
    });
  }

  _generateProduct(imageSrc, productName, productPrice) {
    const productItem = document.createElement('div');
    productItem.classList.add('product-list-item');

    const img = document.createElement('img');
    img.setAttribute('src', imageSrc);
    img.setAttribute('alt', productName);

    const contentDiv = document.createElement('div');
    contentDiv.classList.add('product-list-item-content');

    const h4 = document.createElement('h4');
    h4.textContent = productName;

    const p = document.createElement('p');
    p.textContent = productPrice;

    const button = document.createElement('button');
    const buttonImg = document.createElement('img');
    buttonImg.setAttribute('src', '/images/add-to-cart.png');
    buttonImg.setAttribute('alt', 'Add to cart');
    buttonImg.setAttribute('id', 'imgbutton');
    button.classList.add('addCart');
    button.appendChild(buttonImg);
    button.appendChild(document.createTextNode('Add to cart!'));


    contentDiv.appendChild(h4);
    contentDiv.appendChild(p);
    contentDiv.appendChild(button);
    productItem.appendChild(img);
    productItem.appendChild(contentDiv);

    return productItem;
  }


  generateProductList(categoryId) {


    if (categoryId === 1) {
      this._categoryProducts = Object.values(this._products).flat()
    } else this._categoryProducts = this._products[categoryId];



    this._generateList(this._categoryProducts)
  }

  filterFunction() {
    const input = document.getElementById("input");
    let filterText = '';
    input.addEventListener('input', () => {
      filterText = input.value.toLowerCase();


      const filteredProducts = this._categoryProducts.filter(product =>
        product.name.toLowerCase().includes(filterText)
      );
      this._generateList(filteredProducts)


    });

  }


  _generateList(products) {
    const productContainer = document.querySelector(".products-list-container");
    productContainer.innerHTML = '';
    products.forEach(product => {
      const productItem = this._generateProduct(product.image, product.name, product.price);
      productContainer.appendChild(productItem);
    });
  }

}


const productNav = new ProductNav(navListContent, productsContent);

productNav.generateNav();
productNav.generateProductList(1)
productNav.filterFunction();

let cartId = document.getElementById('cart');
let cartClose = document.querySelector('.cartClose');
let body = document.querySelector('body');
let listProductHTML = document.querySelector('.products-list-container')

cartId.addEventListener('click', () => {
  body.classList.toggle('display')
})

cartClose.addEventListener('click', () => {
  body.classList.toggle('display')
})

listProductHTML.addEventListener('click', (event) => {
  let positionClick = event.target;


  if (positionClick.classList.contains('addCart') || positionClick.closest('.addCart')) {
    const productElement = positionClick.closest('.product-list-item');
    if (productElement) {
      const productName = productElement.querySelector('h4').textContent;
      const productPrice = productElement.querySelector('p').textContent;
      const productImage = productElement.querySelector('img').src;

      addItemToCart(productName, productPrice, productImage);
    }
  }
});


function addItemToCart(name, price, image) {
  const cartItemsContainer = document.querySelector('.cartItems');


  const existingItem = [...cartItemsContainer.children].find(item =>
    item.querySelector('.itemName').textContent === name
  );

  if (existingItem) {

    const quantityInput = existingItem.querySelector('.quantityInput');
    quantityInput.value = parseInt(quantityInput.value) + 1;
  } else {

    const cartItem = document.createElement('div');
    cartItem.classList.add('cartItem');

    cartItem.innerHTML = `
      <img src="${image}" alt="${name}" class="itemImage">
      <div class="itemDetails">
        <p class="itemName">${name}</p>
        <p class="itemPrice">${price}</p>
        <div class="itemQuantity">
          <input type="number" value="1" class="quantityInput" min="1">
          <button class="removeCartItem">Remove</button>
        </div>
      </div>
    `;

    cartItemsContainer.appendChild(cartItem);
  }


  updateCartCount();
}


function updateCartCount() {
  const cartCount = document.querySelector('.cartItems').children.length;
  const cartLink = document.getElementById('cart');
  cartLink.textContent = `Cart (${cartCount})`;
}


document.querySelector('.cartItems').addEventListener('click', (event) => {
  if (event.target.classList.contains('removeCartItem')) {
    const cartItem = event.target.closest('.cartItem');
    cartItem.remove();


    updateCartCount();
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const body = document.querySelector('body');
  body.classList.remove('display');
  const cartItemsContainer = document.querySelector('.cartItems');
  cartItemsContainer.innerHTML = '';
  updateCartCount();
});

