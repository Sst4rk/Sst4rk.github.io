function menuOpener(){
    let e=document.getElementById("navegador");
    e.classList.add("navegadorOpen"),e.classList.remove("navegadorClose")
}
function menuCloser(){
    let e=document.getElementById("navegador");
    e.classList.add("navegadorClose"),e.classList.remove("navegadorOpen")
}



window.onscroll = function() {
    let boton =document.getElementById("botonArriba");
    if (window.scrollY>500)
        boton.style.opacity="100%";
    else{
        boton.style.opacity="0%";
        
    }
  };