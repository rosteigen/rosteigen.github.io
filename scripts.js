let contadorLeft = 0;
let contadorRight = 0;
let flag = 0;

function openCloseBrain(element) {

    let elemento = document.getElementById(element);

    switch (element) {

        case 'img-white-brain':
            if (contadorLeft % 2 == 0) {
                elemento.style.animation = "translate-left 1s forwards";
                //esparcirElementos();
                elemento.onmouseover  = function(){}        
                elemento.onmouseout  = function(){}        
            }
            else {
                elemento.style.animation = "goback-left 1s";
                
            }
            
            contadorLeft += 1; 
            break;

        case 'img-red-brain':
            if (contadorRight % 2 == 0) {
                elemento.style.animation = "translate-right 1s forwards";
                esparcirSkills();
                elemento.onmouseover  = function(){}        
                elemento.onmouseout  = function(){}
                
            }
            else {
                elemento.style.animation = "goback-right 1s";
                removeSkills();
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

function esparcirSkills(){
    

    
    let line1 = document.getElementById("line1-redbrain"),
    line2 = document.getElementById("line2-redbrain"),
    line3 = document.getElementById("line3-redbrain"),
    line4 = document.getElementById("line4-redbrain"),
    line5 = document.getElementById("line5-redbrain");

    const elemento = [line1,line2,line3,line4,line5];

    elemento.forEach(element => { 
        setTimeout(()=> {
        
            element.style.animation = "line-fadein 1s forwards";
            element.style.visibility = "visible";
        }, 800);
        
    })

    
}

function removeSkills(){

    let line1 = document.getElementById("line1-redbrain"),
    line2 = document.getElementById("line2-redbrain"),
    line3 = document.getElementById("line3-redbrain"),
    line4 = document.getElementById("line4-redbrain"),
    line5 = document.getElementById("line5-redbrain");

    const elemento = [line1,line2,line3,line4,line5];

    elemento.forEach(element => { 

        element.style.animation = "line-fadeout 1s forwards";
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