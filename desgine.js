const Serchbuton=()=>{
    const a=document.getElementById("serchbar")
    a.classList.toggle("d-n")
}

const basket=document.getElementById("basket-i")
basket.addEventListener('mouseenter', (e)=>{
    const basketinner=document.getElementById("basketdrop")
    basketinner.classList.toggle("x")
})