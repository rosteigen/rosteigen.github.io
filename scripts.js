


function whenScroll() {

    var titulos = document.getElementsByClassName("titulos");
    if (document.documentElement.scrollTop >= 350) {
        
        document.getElementById("barra").style.boxShadow = "0 1px 25px #888888";
        document.getElementById("barra").style.animation = "asd";
        document.getElementById("barra").style.animationDuration = "1s";
        document.getElementById("barra").style.animationFillMode = "forwards"
        for(var i = 0; i < titulos.length; i++){
            titulos[i].style.color = "black";
        }
        
            
    }
    else {
        document.getElementById("barra").style.animation = "none";
        document.getElementById("barra").style.boxShadow = "none";
            for(var i = 0; i < titulos.length; i++){
                titulos[i].style.color = "white";
        }
    }
}




/*function translateWhenScroll(){

    window.addEventListener('scroll', () => {
            const scrolled = window.scrollY;

            if(scrolled >= 50){
                document.getElementById("nombre").style.transform = "translateY(-20px)";
            }        
      });


}*/
