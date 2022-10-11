let contadorLeft = 0;
let contadorRight = 0;

function openCloseBrain(element) {

    switch (element) {

        case 'img-left-brain':
            if (contadorLeft % 2 == 0) {
                document.getElementById(element).style.animation = "translate-left 1s forwards";
                document.getElementById(element).style.filter = "grayscale(0%)";
            }
            else {
                document.getElementById(element).style.animation = "goback-left 1s";
                document.getElementById(element).style.filter = "grayscale(100%)";                
            }
            contadorLeft += 1; 
            break;

            case 'img-right-brain':
            if (contadorRight % 2 == 0) {
                document.getElementById(element).style.animation = "translate-right 1s";
                document.getElementById(element).style.animationFillMode = "forwards";
                document.getElementById(element).style.filter = "grayscale(0%)";
            }
            else {
                document.getElementById(element).style.animation = "goback-right 1s";
                document.getElementById(element).style.filter = "grayscale(100%)";
            }
            contadorRight += 1; 
            break;
    }
}

function colorUpFoto() {
    if (document.documentElement.scrollTop >= 350) {

        document.getElementById("foto-circulo").style.animation = "rotarColorFoto";
        document.getElementById("foto-circulo").style.animationDuration = "1s";
        document.getElementById("foto-circulo").style.animationTimingFunction = "linear";
        document.getElementById("foto-circulo").style.animationFillMode = "forwards";


    }

}

function whenScroll() {

    var titulos = document.getElementsByClassName("titulos");
    if (document.documentElement.scrollTop >= 350) {

        document.getElementById("barra").style.boxShadow = "0 1px 25px #888888";
        document.getElementById("barra").style.animation = "asd 1s forwards";
        for (var i = 0; i < titulos.length; i++) {
            titulos[i].style.color = "black";
        }


    }
    else {
        document.getElementById("barra").style.animation = "none";
        document.getElementById("barra").style.boxShadow = "none";
        for (var i = 0; i < titulos.length; i++) {
            titulos[i].style.color = "white";
        }
    }
}




function translateWhenScroll(){

    window.addEventListener('scroll', () => {
            const scrolled = window.scrollY;

            if(scrolled >= 50){
                document.getElementById("nombre").style.transform = "translateY(-20px)";
            }        
      });


}
