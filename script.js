
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let header = document.querySelector('.header-2')

menu.addEventListener('click', ()=>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
})

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');

    if(window.scrollY > 150){
        header.classList.add('active')
    } else{
        header.classList.remove('active')
    }
}


let cartCount = 0;

function addToCart(itemName) {
    cartCount++;
    updateCartCount(cartCount);
    showNotification(`${itemName} added to cart.`);
}

function updateCartCount(count) {
    const cartCountElement = document.getElementById('cart-count');
    console.log(cartCount);
}

function showNotification(message) {
    alert(message); 
}

