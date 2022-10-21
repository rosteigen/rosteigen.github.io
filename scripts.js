/*let contadorLeft = 0;
let contadorRight = 0;

function openCloseBrain(element) {

    switch (element) {

        case 'img-left-brain':
            if (contadorLeft % 2 == 0) {
                document.getElementById(element).style.animation = "translate-left 1s forwards";
                document.getElementById(element).style.filter = "grayscale(0%)";
                esparcirElementos();
                document.getElementById(element).onmouseover  = function(){}        
                document.getElementById(element).onmouseout  = function(){}        
            }
            else {
                document.getElementById(element).style.animation = "goback-left 1s";
                document.getElementById(element).style.filter = "grayscale(100%)";
                document.getElementById(element).onmouseover  = function(){
                    document.getElementById(element).style.filter = "grayscale(0%)";
                }
                document.getElementById(element).onmouseout  = function(){
                    document.getElementById(element).style.filter = "grayscale(100%)";
                }        
            }
            
            contadorLeft += 1; 
            break;

        case 'img-right-brain':
            if (contadorRight % 2 == 0) {
                document.getElementById(element).style.animation = "translate-right 1s forwards";
                document.getElementById(element).style.filter = "grayscale(0%)";
                document.getElementById(element).onmouseover  = function(){}        
                document.getElementById(element).onmouseout  = function(){}
            }
            else {
                document.getElementById(element).style.animation = "goback-right 1s";
                document.getElementById(element).style.filter = "grayscale(100%)";
                document.getElementById(element).onmouseover  = function(){
                    document.getElementById(element).style.filter = "grayscale(0%)";
                }
                document.getElementById(element).onmouseout  = function(){
                    document.getElementById(element).style.filter = "grayscale(100%)";
                }        
            }
            contadorRight += 1; 
            break;
    }
    
}*/

function openCloseNewBrain(){
    let whiteBrain = document.getElementById("container-skills"),
    redBrain = document.getElementById("red-brain");

    whiteBrain.style.animation = "orbitar 2s";


}

function esparcirElementos(){

    let html = document.getElementById("html");
    let css = document.getElementById("css");
    let javascript = document.getElementById("javascript");
    let java = document.getElementById("java");
    let csharp = document.getElementById("csharp");

    const elemento = [html,css,javascript,java,csharp];

    elemento.forEach(element => { 
        element.style.animation = "open-"+element.id+" 1s 1s forwards";
        setTimeout(()=> {
        
            element.style.visibility = "visible";
        }, 1150);
        
    })
}

function colorUpFoto() {

    let foto = document.getElementById("foto-circulo");

    if (document.documentElement.scrollTop >= 350) {

        foto.style.animation = "rotarColorFoto 1s forwards";
        foto.style.animationTimingFunction = "linear";
    }

}




$(window).scroll(function() {
    $('.cuadro').each(function() {
  
      var _win     = $(window),
          _ths     = $(this),
          _pos    = _ths.offset().top,
          _scroll = _win.scrollTop(),
          _height = _win.height();
          flag = 0;

          

    if(_scroll > _pos - _height){
        _ths.addClass('anim');
        _ths.removeClass('desanim');
        flag = 1;
    }
    if(!(_scroll > _pos - _height * .3)&& flag > 0){
        _ths.removeClass('anim');
        _ths.addClass('desanim');
    }  
      
  
    });
  });