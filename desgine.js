const Serchbuton=()=>{
    const a=document.getElementById("serchbar")
    a.classList.toggle("d-n")
}

const basket=document.getElementById("basket-i")
basket.addEventListener('mouseenter', (e)=>{
    const basketinner=document.getElementById("basketdrop")
    basketinner.classList.toggle("x")
})

const sortmoney=document.getElementById("sortmoney");
sortmoney.addEventListener('mouseenter', (e)=>{
    const sortdawnmenu=document.getElementById("sortdawnmenu")
    sortdawnmenu.classList.toggle("x")
})

// *auto carusel
const carouselItem=document.getElementsByClassName(" item-x");
let sliderCount=0
function changeSlide(){
    sliderCount++
    let change=sliderCount%3 
    console.log(change);
    const activeItem = document.querySelector('.item-x.active');
    if (activeItem) {
        activeItem.classList.remove("active");
    }
    carouselItem[change].classList.add("active")
}
const intervalId = setInterval(changeSlide, 5000);