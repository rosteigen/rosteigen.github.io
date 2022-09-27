


function whenScroll() {

    var titulos = document.getElementsByClassName("titulos");
    if (document.documentElement.scrollTop >= 500) {
        
        document.getElementById("barra").style.animation = "asd";
        document.getElementById("barra").style.animationDuration = "1s";
        document.getElementById("barra").style.animationFillMode = "forwards"
        for(var i = 0; i < titulos.length; i++){
            titulos[i].style.color = "black";
        }
        
            
    }
    else {
        document.getElementById("barra").style.animation = "none";

            for(var i = 0; i < titulos.length; i++){
                titulos[i].style.color = "white";
        }
    }


}


