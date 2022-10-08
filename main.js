const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuHamIcon = document.querySelector(".menu");
const movilMenu = document.querySelector(".movil-menu");
const menuCarritoIcon = document.querySelector(".navbar-shopping-cards");
const ordenCarrito = document.querySelector(".product-detail");
const cardsContainer = document.querySelector(".cards-container");

menuEmail.addEventListener("click", toggleDesktopMenu);
menuHamIcon.addEventListener("click", toggleMovilMenu);
menuCarritoIcon.addEventListener("click", toggleCarritoMenu);

function toggleDesktopMenu() {
    const isCarritoMenuClosed = ordenCarrito.classList.contains("inactive");

    if (!isCarritoMenuClosed) {
        ordenCarrito.classList.add("inactive");
      }

  desktopMenu.classList.toggle("inactive");
}

function toggleMovilMenu() {
    const isCarritoMenuClosed = !ordenCarrito.classList.contains("inactive");

    if (isCarritoMenuClosed) {
        ordenCarrito.classList.add("inactive");
      }

  movilMenu.classList.toggle("inactive");
}

function toggleCarritoMenu() {
  const isMobileMenuClosed = !movilMenu.classList.contains("inactive");
  const isDesktopMenu = !desktopMenu.classList.contains("inactive");

  if (isMobileMenuClosed) {
    movilMenu.classList.add("inactive");
  }
  if (isDesktopMenu) {
    desktopMenu.classList.add("inactive");
  }

  ordenCarrito.classList.toggle("inactive");
}

const productList = [];
productList.push({
    name: 'Ferrari',
    precio: 320,
    Image: './carros/ferre.jpg',
});

productList.push({
    name: 'Audi',
    precio: 310,
    Image: './carros/audi2.jpg',
});

productList.push({
    name: 'Lamborguini',
    precio: 120,
    Image: './carros/lambor.jpg',
});

productList.push({
    name: 'BMW',
    precio: 420,
    Image: './carros/bmw.jpg',
});

productList.push({
    name: 'Toyota',
    precio: 360,
    Image: './carros/toyota.jpg',
});

productList.push({
    name: 'Jeep',
    precio: 390,
    Image: './carros/jeep.jpg',
});

function renderProducts(arr){
    for (product of productList){
        const productCard = document.createElement('div');
        productCard.classList.add('product-cards');
    
        const productImage = document.createElement('img');
        productImage.setAttribute('src', product.Image);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
        
        const productInfoDiv = document.createElement('div');
        
        const productPrice = document.createElement('p');
        productPrice.innerHTML = '$ ' + product.precio;
        const productName = document.createElement('p');
        productName.innerHTML = product.name;
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        const productInfoFigure = document.createElement('figure');
        const productImgCard = document.createElement('img');
        productImgCard.setAttribute('src','./icons/bt_add_to_cart.svg' );
    
        productInfoFigure.appendChild(productImgCard);
    
        productInfo.appendChild(productInfoFigure);
        productInfo.appendChild(productInfoDiv);
    
        productCard.appendChild(productImage);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    }
}

renderProducts(productList);
