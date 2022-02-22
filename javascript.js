//open mini menu
let menu = document.querySelector('.menu');
let ul = document.querySelector('.main-nav_ul')

menu.addEventListener('click',()=>{
    ul.classList.toggle('visible');
})
//close mini menu
let menux = document.querySelector('#x');

menux.addEventListener('click',()=>{
ul.classList.toggle('visible')
console.log("clicked")
})

//cart box
let shopCartTop = document.querySelector('.cart');
let cartbox = document.querySelector('.cartbox');

shopCartTop.addEventListener('click' ,() =>{
 cartbox.classList.toggle('visible')
});

//counter
let amount = document.querySelector('.amount')
let minus = document.querySelector('.minus');
let plus = document.querySelector('.plus');
var count=0;

minus.addEventListener('click', decrement)
plus.addEventListener('click', increment)
function decrement(){
    if(count > 0)
    count--;
    amount.innerHTML = count;
}
function increment(){
    count++;
    amount.innerHTML = count;
}
//function to save goes below?

//gallery 

let thumbpics = document.querySelectorAll('.thumbbox')

thumbpics.forEach(img => {
    img.addEventListener('click',onThumbClick);
})

let bigImg = document.querySelector('.big-img')

function onThumbClick(event){
    //clear active state for all thumbnails
    thumbpics.forEach(img => {
        img.classList.remove('active');
    });
    //set active thumbnail
    event.target.parentElement.classList.add('active')
  
    //update main image
    bigImg.src = event.target.src.replace('-thumbnail','')
}


//buttons
let btnNext = document.querySelector('.right-arr')
let btnPrev = document.querySelector('.left-arr')
//buttons event
btnNext.addEventListener('click', btnClikedNext)
btnPrev.addEventListener('click', btnClikedPrev)

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

function getCurrentImgArr(){
    const imageIndex =  parseInt(bigImg.src.split('\\').pop().split('/').pop().replace('.jpeg', '').replace('image-product-',''));
    return imageIndex; //console.log(imageIndex);
}

function setBigImg(imageIndex){
   bigImg.src =`./images/image-product-${imageIndex}.jpg`;
  
   //sync pics
   thumbpics.forEach(img => {
       img.classList.remove('active');
   })
   //set active pic
   thumbpics[imageIndex-1].classList.add('active');
}
// gallery finished







