






// variables and constants
const cartContainer = document.querySelector('.cart-container');
const ProductList=document.querySelector('.product-list');
const cartList=document.querySelector('.cart-list');
const cartTotalValue=document.getElementById('cart-total-value');
const cartCountInfo=document.getElementById('cart-count-info');

let cartItemId=1;





eventListeners();
//all event listener
function eventListeners(){

    window.addEventListener('DOMContentLoaded',()=> {
        loadCart();
        
       
    })
   // toggle navbar when toggle button is clicked
   document.querySelector('.navbar-toggler').addEventListener('click', () => {
    document.querySelector('.navbar-collapse').classList.toggle('show-navbar');
});

// show/hide cart container
document.getElementById('cart-btn').addEventListener('click', () => {
    cartContainer.classList.toggle('show-cart-container');

});
//add to cart
ProductList.addEventListener('click',buyProduct);
//delete from cart
cartList.addEventListener('click',deleteProduct);

}

function buyProduct(e){
    if(e.target.classList.contains('add-to-cart-btn')){
        let product=e.target.parentElement.parentElement;
        getProductInfo(product);
    }
}
    
//get productinfo when we click in add to cart


 function getProductInfo(product){
    let productInfo={
        id:cartItemId,
        imgSrc:product.querySelector('.product-img img').src,
        nameProduct:product.querySelector('.product-name').textContent,
        price:product.querySelector('.product-price').textContent,

    }
    cartItemId++;
    addToCart(productInfo);
    saveProductStorage(productInfo);
 }

 function addToCart(product){
    const cartItem=document.createElement('div');
    cartItem.classList.add('cart-item');
    cartItem.setAttribute('data-id',`${product.id}`);
    cartItem.innerHTML=` <img src = ${product.imgSrc} alt = "">
    <div class = "cart-item-info">
      <h3 class = "cart-item-name">${product.nameProduct}</h3>
      <span class = "cart-item-price">${product.price}</span>
    </div>
    <button type = "button" class = "cart-item-del-btn">
      <i class = "fas fa-times"></i>
    </button>`


    cartList.appendChild(cartItem);
 }

// save the product in local storage
 function saveProductStorage(item){
    let products=getProductStorage();
    products.push(item);
    localStorage.setItem('products',JSON.stringify(products))
    updateCartInfo();
 }

 //get the product from local storage

 function getProductStorage(){
  // return localStorage.getItem('products')?JSON.parse(localStorage.getItem('products')) :[];
   // returns empty array if there is not any product info
   if(localStorage.getItem('products'))
   return(JSON.parse(localStorage.getItem('products')));
   else
   return([]);
 }
 

 //localStorage.clear();

 //load carts product

 function loadCart(){
    let products=getProductStorage();
    if(products.length<1){
        cartItemId=1; //if there is no product in the localstorage
    }else{
        cartItemId=products[products.length-1].id;
        cartItemId++
        //else get the id of last product and increase it by 1;
       
    }
    products.forEach(product => addToCart(product)
        );
        updateCartInfo();
 }

//update cartInfo

function updateCartInfo(){
    let cartInfo=findCartInfo();
    cartCountInfo.textContent=cartInfo.productCount;
    cartTotalValue.textContent=cartInfo.total;
}
 

 
// calculate total price of the cart and other info
function findCartInfo(){
    let products = getProductStorage();
    let total = products.reduce((acc, product) => {
        let price = parseFloat(product.price.substr(1)); // removing dollar sign
        return acc += price;
    }, 0); // adding all the prices
    return{
        total,
        productCount: products.length
    }
}
//acc the value of initial value
//price //value of current value


//delete product from cartitem

function deleteProduct(e){
    let cartItem;
   
    if(e.target.tagName==='"BUTTON"'){
        cartItem=e.target.parentElement;//retrun cartitem
        cartItem.remove();//remove from the DOM
    }else if(e.target.tagName==='I'){
        cartItem=e.target.parentElement.parentElement;// return button then return cartitem
        cartItem.remove();
    }
    
   
    
    let products = getProductStorage();
    let updatedProducts = products.filter(product => {
       
        return product.id !== parseInt(cartItem.dataset.id);//return les produits qui vérifie cette condition
    });
    localStorage.setItem('products', JSON.stringify(updatedProducts)); // updating the product list after the deletion
    updateCartInfo();
}












let nom;
let nameuser=  JSON.parse(localStorage.getItem('userData'));
for(let i=0;i<nameuser.length;i++){
    nom=nameuser[i].userName;
    document.getElementById("use1").innerText=nom;
}
 

 //console.log(document.getElementById("use1"));
 



 const soustotal= document.getElementById('cart-total-value');

 //console.log(soustotal);

 //console.log(nom);