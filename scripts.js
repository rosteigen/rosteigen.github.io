let contadorLeft = 0;
let contadorRight = 0;
let flag = 0;

function openCloseBrain(element) {

    switch (element) {

        case 'img-white-brain':
            if (contadorLeft % 2 == 0) {
                document.getElementById(element).style.animation = "translate-left 1s forwards";
                esparcirElementos();
                document.getElementById(element).onmouseover  = function(){}        
                document.getElementById(element).onmouseout  = function(){}        
            }
            else {
                document.getElementById(element).style.animation = "goback-left 1s";
                
            }
            
            contadorLeft += 1; 
            break;

        case 'img-red-brain':
            if (contadorRight % 2 == 0) {
                document.getElementById(element).style.animation = "translate-right 1s forwards";
                document.getElementById(element).onmouseover  = function(){}        
                document.getElementById(element).onmouseout  = function(){}
            }
            else {
                document.getElementById(element).style.animation = "goback-right 1s";
                
            }
            contadorRight += 1; 
            break;
    }
    
}

function esparcirElementos(){

    let html = document.getElementById("html"),
    css = document.getElementById("css"),
    javascript = document.getElementById("javascript"),
    java = document.getElementById("java"),
    csharp = document.getElementById("csharp");

    const elemento = [html,css,javascript,java,csharp];

    elemento.forEach(element => { 
        element.style.animation = "open-"+element.id+" 1s 1s forwards";
        setTimeout(()=> {
        
            element.style.visibility = "visible";
        }, 1150);
        
    })
}

$(window).scroll(function() {
    $('.cuadro').each(function() {
  
      var _win     = $(window),
          _ths     = $(this),
          _scroll = _win.scrollTop()

    if(_scroll > 400){
        _ths.addClass('anim');
        _ths.removeClass('desanim');
        flag = 1;
    }
    else if(flag > 0){
        _ths.removeClass('anim');
        _ths.addClass('desanim');
    }  
      
  
    });
  });


  $(window).scroll(function() {
    $('.container-skills').each(function() {
  
      var _win     = $(window),
          _ths     = $(this),
          _scroll = _win.scrollTop()

    if(_scroll > 1300){
        _ths.addClass('anim');
        _ths.removeClass('desanim');
        flag = 1;
    }
    else if(flag > 0){
        _ths.removeClass('anim');
        _ths.addClass('desanim');
    }  
      
  
    });
  });