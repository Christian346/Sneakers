let shopCartTop = document.querySelector('.cart');
let cartbox = document.querySelector('.cartbox');

shopCartTop.addEventListener('click' ,() =>{
 cartbox.classList.toggle('visible')
});

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


