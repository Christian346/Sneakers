let shopCartTop = document.querySelector('.cart');
let cartbox = document.querySelector('.cartbox');

shopCartTop.addEventListener('click' ,() =>{
 cartbox.classList.toggle('visible')
});

let amount = document.querySelector('.amount')
let minus = document.querySelector('.minus');
let plus = document.querySelector('.plus');


minus.addEventListener('click', ()=>{
   console.log('clicked less')
})

plus.addEventListener('click', ()=>{
    console.log('clicked more')
 })

