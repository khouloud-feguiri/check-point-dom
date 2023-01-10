var plusBtns = Array.from(document.querySelectorAll('.fa-circle-plus'));
var minusBtns = Array.from(document.querySelectorAll('.fa-circle-minus'));
var favs = Array.from(document.querySelectorAll(".fa-heart"));
var deleteBtns = Array.from(document.querySelectorAll(".fa-trash"));
var cards = Array.from(document.querySelectorAll(".card"));

for( let el of favs){
    el.addEventListener('click',function(){
    if(el.style.color !='red') {
        (el.style.color='Red')

    }else{
        el.style.color='black'
    }
})}

for (let i in deleteBtns) {
    deleteBtns[i].addEventListener("click", function(){
        cards[i].remove()
        total()
    })
}


for ( let plusBtn of plusBtns){
    plusBtn.addEventListener("click", function(){
        plusBtn.nextElementSibling.innerHTML++
        total()
    })
} 
for (let minusBtn of minusBtns) {
    minusBtn.addEventListener("click", function(){
        minusBtn.previousElementSibling.innerHTML > 0 ? minusBtn.previousElementSibling.innerHTML-- : null
        total()
    })
}

function total() {
    let qte = Array.from(document.querySelectorAll("#counter"));
    let price = Array.from(document.querySelectorAll(".unit-price"))
    let s = 0
   
    for (let i = 0; i < price.length; i++) {
        s = s + price[i].innerHTML * qte[i].innerHTML;
        
    }
    document.getElementById("totalPrice").innerHTML = s; 
}