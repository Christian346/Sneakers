/**
 localStorage.

 getItem //gets item
 removeItem//removes
 setItem - takes 2 parameters a key and value 

 localSotage.setItem('name1','bob')
 cons log this localStorage.getItem('name1')

 */

//open mini menu
let menu = document.querySelector('.menu');
let ul = document.querySelector('.main-nav_ul')
//close mini menu
let menux = document.querySelector('#x');
// show cart box
let shopCartTop = document.querySelector('.cart');
let cartbox = document.querySelector('.cartbox');
//counter
let amount = document.querySelector('.amount')
let minus = document.querySelector('.minus');
let plus = document.querySelector('.plus');
let productsInCart = 0;
//gallery section
let thumbpics = document.querySelectorAll('.thumbbox')
//select big image
let bigImg = document.querySelector('.big-img')
// prev and next buttons
let btnNext = document.querySelector('.right-arr')
let btnPrev = document.querySelector('.left-arr')
//orange btn
var count = 0;
let cartCount = document.querySelector('#cartnumber');
let addToCartBtn = document.querySelector('.btnBuy');
let price = 250.0;
let discount = 0.5;
let msgEmpty = document.querySelector('.empty-msg');
let productInShopCart = document.querySelector('.products-in-cart');
let checkOut = document.querySelector('#checkout');

let productCounterValue = 1;

//overlay
let overLay = document.querySelector('.overlay')
let overlayGallery;
let overlayBigImg;
//lightbox
let lightBox = document.querySelector('.lightbox')

//girl page things
let priceGirl =150;
let discountGirl = 0.5





//menu listener
menu.addEventListener('click',()=>{
    ul.classList.toggle('visible');
})
menux.addEventListener('click',()=>{
ul.classList.toggle('visible')
console.log("clicked")
})
//showcart box listener
shopCartTop.addEventListener('click' ,() =>{
 cartbox.classList.toggle('visible')
});
//counter listener
minus.addEventListener('click', decrement)
plus.addEventListener('click', increment)

thumbpics.forEach(img => {
    img.addEventListener('click',onThumbClick);
})
//buttons event
btnNext.addEventListener('click', btnClikedNext)
btnPrev.addEventListener('click', btnClikedPrev)
// addtoCart listener
//addToCartBtn.addEventListener('click', addToCart);

//girl addToCart

//big img change
bigImg.addEventListener('click',onBigImgClick)


//set the counter number
function setProductCounter(value){
    if((productCounterValue + value) > 0){
        productCounterValue += value;
        amount.innerHTML = productCounterValue;
   }
}

function increment(){
    //console.log(productCounterValue)
    setProductCounter(1);
}
function decrement(){
    setProductCounter(-1);
}

function onThumbClick(event){
    //clear active state for all thumbnails
    thumbpics.forEach(img => {
        img.classList.remove('active');
    });
    //set active thumbnail
    event.target.parentElement.classList.add('active')
    //update main image
    bigImg.src = event.target.src.replace('-thumbnail','') //change the name with empty
}

function btnClikedNext(){
    let imageIndex = getCurrentImgArr();
    imageIndex++;

    if(imageIndex > 4){
        imageIndex = 1;
    }
    setBigImg(imageIndex)
}

function btnClikedPrev()
{
    let imageIndex = getCurrentImgArr();
    imageIndex--;

    if(imageIndex < 1){
        imageIndex = 4;
    }
    setBigImg(imageIndex)
}
//clicking section ends

//get current image in array used in clicked buttons
function getCurrentImgArr(){
    const imageIndex =  parseInt(bigImg.src.split('\\').pop().split('/').pop().replace('.jpeg', '').replace('image-product-',''));
    return imageIndex; //console.log(imageIndex);
}
//set the big image
function setBigImg(imageIndex){
   bigImg.src =`./images/image-product-${imageIndex}.jpg`;
  
   //sync pics
   thumbpics.forEach(img => {
       img.classList.remove('active');
   })
   //set active pic
   thumbpics[imageIndex-1].classList.add('active');  //minus one to make sure the whole array is taken care off
}
// gallery finished


function addToCart(){
  productsInCart += productCounterValue;
  
  const htmlDiv = `
  <div class="item">
  <div class="inner-cartbox">
      <div class="thumbnail-cart">
          <img src="images/image-product-2-thumbnail.jpg" class="res-img" alt="">
      </div>
      <p> Fall Limited Edition Sneakers <br>
      ${(price * discount).toFixed(2)} x <span class="quantity">${productsInCart} </span> <span class="total-p">${(price * discount * productsInCart).toFixed(2)}</span></p>
      <div class ="cart-trash">
          <img src="images/icon-delete.svg" alt="">
      </div>
  </div>
  `;
  productInShopCart.innerHTML = htmlDiv;
  
  let deleteBtn = document.querySelector('.cart-trash')
  deleteBtn.addEventListener('click',btnDeleteClick)

  updateCart();
  console.log(productsInCart);
}



//second page add to cart
function addToCartGirlFunction(){
    productsInCart += productCounterValue;
    
    const htmlDiv = `
    <div class="item">
    <div class="inner-cartbox">
        <div class="thumbnail-cart">
            <img src="images/image-product-5.jpg" class="res-img" alt="">
        </div>
        <p> Fall Limited Edition Sneakers <br>
        ${(priceGirl * discountGirl).toFixed(2)} x <span class="quantity">${productsInCart} </span> <span class="total-p">${(priceGirl * discountGirl * productsInCart).toFixed(2)}</span></p>
        <div class ="cart-trash">
            <img src="images/icon-delete.svg" alt="">
        </div>
    </div>
    `;
    productInShopCart.innerHTML = htmlDiv;
    
    let deleteBtn = document.querySelector('.cart-trash')
    deleteBtn.addEventListener('click',btnDeleteClick)
  
    updateCart();
    console.log(productsInCart);
  }
  

function updateCart(){
    updateCartIcon();
    updateMsgEmpty();
    updateCheckoutButton();
}


function updateCartIcon(){
    cartCount.textContent = productsInCart;
    if(productsInCart == 0){
        if(!cartCount.classList.contains('disp-none')){
            cartCount.classList.add('disp-none')
        }

    } else{
        cartCount.classList.remove('disp-none')
    }
}

function updateMsgEmpty(){
 if(productsInCart == 0){
        if(msgEmpty.classList.contains('disp-none')) {
            msgEmpty.classList.remove('disp-none');
        }
    } else {
        if(!msgEmpty.classList.contains('disp-none')){
        msgEmpty.classList.add('disp-none')
    }
  }
}

function updateCheckoutButton(){
   if(productsInCart ==0){
       if(!checkOut.classList.contains('disp-none')){
           checkOut.classList.add('disp-none')
       }
         
    }else{
        checkOut.classList.remove('disp-none')
       }
 }

 function btnDeleteClick(){
    productsInCart--;
    updateCart();

    let element = document.querySelector('.quantity')
    let totalAmt = document.querySelector('.total-p')
    element.innerHTML = productsInCart
    totalAmt.innerHTML = `$${(price * discount * productsInCart).toFixed(2)}`

    if(productsInCart == 0 ){
        productInShopCart.innerHTML = '';
    }
}

function onBigImgClick(){
    if(window.innerWidth >= 875){
    if(overLay.childElementCount == 1){

        let newWindow = lightBox.cloneNode(true)
        overLay.appendChild(newWindow)
    
        let closeOverlay = document.querySelector('.closeoverlay')
        closeOverlay.addEventListener('click',onClickCloseOverlay)

        overlayGallery = overLay.querySelectorAll('.thumbbox')
        overlayBigImg = overLay.querySelector('.big-img')

        overlayGallery.forEach(img => {
            img.addEventListener('click',onThumbClickLightBox)
        })
        let btnOverlayNext = overLay.querySelector('.next')
        let btnOverlayPrev = overLay.querySelector('.prev')
        btnOverlayNext.addEventListener('click', btnClikedNextOverlay)
        btnOverlayPrev.addEventListener('click', btnClikedPrevOverlay)
    }

    overLay.classList.remove('hidden')
    }
}

//overlay actions 
function onClickCloseOverlay(){
    overLay.classList.add('hidden');
}

function onThumbClickLightBox(event){
    //clear active state for all thumbnails
    overlayGallery.forEach(img => {
        img.classList.remove('active');
    });
    //set active thumbnail
    event.target.parentElement.classList.add('active')
  
    //update main image
    overlayBigImg.src = event.target.src.replace('-thumbnail','') //change the name with empty
}

//overlay buttons 
function btnClikedNextOverlay(){
    let imageIndex = getOverlayCurrentImgArr();
    imageIndex++;

    if(imageIndex > 4){
        imageIndex = 1;
    }
    setOverlayBigImg(imageIndex)
}

function btnClikedPrevOverlay()
{
    let imageIndex = getOverlayCurrentImgArr();
    imageIndex--;

    if(imageIndex < 1){
        imageIndex = 4;
    }
    setOverlayBigImg(imageIndex)
}
//clicking section ends

//get current image in array used in clicked buttons
function getOverlayCurrentImgArr(){
    const imageIndex =  parseInt(overlayBigImg.src.split('\\').pop().split('/').pop().replace('.jpeg', '').replace('image-product-',''));
    return imageIndex; //console.log(imageIndex);
}
//set the big image
function setOverlayBigImg(imageIndex){
   overlayBigImg.src =`./images/image-product-${imageIndex}.jpg`;
  
   //sync pics
   overlayGallery.forEach(img => {
       img.classList.remove('active');
   })
   //set active pic
   overlayGallery[imageIndex-1].classList.add('active');  //minus one to make sure the whole array is taken care off
}


