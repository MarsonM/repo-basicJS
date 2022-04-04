'use strict';

let fitlerPopup = document.querySelector('.filterPopup');
let fitlerLabel = document.querySelector('.filterLabel');
let filterIcon = document.querySelector('.filterIcon');

fitlerLabel.addEventListener('click', function() {
    fitlerPopup.classList.toggle('hidden');
    fitlerLabel.classList.toggle('filterLabelPink');
    filterIcon.classList.toggle('filterIconPink');

    if (filterIcon.getAttribute('src') === 'images/filter.svg') {
        filterIcon.setAttribute('src', 'images/filterHover.svg')
    } else {
        filterIcon.setAttribute('src', 'images/filter.svg')
    }
});

let filterHeaders = document.querySelectorAll('.filterCategoryHeader');
filterHeaders.forEach(function(header) {
    header.addEventListener('click', function(event) {
        event.target.nextElementSibling.classList.toggle('hidden');
    })
});

let filterSizes = document.querySelector('.filterSizes');
let filterSizeWrap = document.querySelector('.filterSizeWrap');
filterSizeWrap.addEventListener('click', function() {
    filterSizes.classList.toggle('hidden');
});

//Здесь начинается выполнение ДЗ
const cartIconWrap = document.querySelector('.cartIcon');
const shopCartModalWin = document.querySelector('.shopCartModalWin');
cartIconWrap.addEventListener('click', () => {
    if (shopCartModalWin.classList.contains('hidden')) {
        shopCartModalWin.classList.remove('hidden');
    }
    else shopCartModalWin.classList.add('hidden');
});

const shoppingCart = {
    getProductBasketTemplate(prodID) {
    return `
            <div class = "a${this[prodID].id}">${this[prodID].name}</div>
            <div class = "a${this[prodID].id}">${this[prodID].count}</div>
            <div class = "a${this[prodID].id}">${this[prodID].price}</div>
            <div class = "a${this[prodID].id}">${this[prodID].price}</div>
    `;
    }
};

let totalPrice = 0;
let totalCount = 0;
const shopCartTotalPrice = document.querySelector('.shopCartTotalPrice');
const shopCartTotalCount = document.querySelector('.shopCartTotalCount');
const shopCart = document.querySelector('.ShopCart');

document.querySelector('.featuredItems').addEventListener('click', element => {
    if (!element.target.tagName === 'BUTTON') {
        return;
    }
    let prodName = element.target.closest('.featuredItem').dataset.name;
    let prodPrice = +element.target.closest('.featuredItem').dataset.price;
    let prodID = element.target.closest('.featuredItem').dataset.id;
    addToCart(prodID, prodName, prodPrice);

});

function addToCart(prodID, prodName, prodPrice) {
    totalPrice += prodPrice;
    if (shoppingCart.hasOwnProperty([prodID])) {
        shoppingCart[prodID].price += prodPrice;
        shoppingCart[prodID].count++;
        updateShopCart(prodID);
    }
    else {
        shoppingCart[prodID] = {
            id: prodID, name: prodName, price: prodPrice, count: 1
        };
        shopCart.innerHTML += shoppingCart.
            getProductBasketTemplate(prodID);
    }
    // читает количество наименовании, а не штук.
    let totalCount = Object.keys(shoppingCart).length - 1;
    shopCartTotalPrice.textContent = totalPrice;
    shopCartTotalCount.textContent = totalCount;
};

function updateShopCart(prodID) {
    switch (+prodID) {
        case 1:
            document.querySelectorAll('.a1')[1].textContent =
                shoppingCart[prodID].count;
            document.querySelectorAll('.a1')[3].textContent =
                shoppingCart[prodID].price;
            break;
        case 2:
            document.querySelectorAll('.a2')[1].textContent =
                shoppingCart[prodID].count;
            document.querySelectorAll('.a2')[3].textContent =
                shoppingCart[prodID].price;
            break;
        case 3:
            document.querySelectorAll('.a3')[1].textContent =
                shoppingCart[prodID].count;
            document.querySelectorAll('.a3')[3].textContent =
                shoppingCart[prodID].price;
            break;
        case 4:
            document.querySelectorAll('.a4')[1].textContent =
                shoppingCart[prodID].count;
            document.querySelectorAll('.a4')[3].textContent =
                shoppingCart[prodID].price;
            break;
        case 5:
            document.querySelectorAll('.a5')[1].textContent =
                shoppingCart[prodID].count;
            document.querySelectorAll('.a5')[3].textContent =
                shoppingCart[prodID].price;
            break;
        case 6:
            document.querySelectorAll('.a6')[1].textContent =
                shoppingCart[prodID].count;
            document.querySelectorAll('.a6')[3].textContent =
                shoppingCart[prodID].price;
            break;
    }
}





