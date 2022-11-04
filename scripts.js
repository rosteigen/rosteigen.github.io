let contadorLeft = 0;
let contadorRight = 0;
let flag = 0;

function openCloseBrain(element) {

    let elemento = document.getElementById(element);

    switch (element) {

        case 'img-white-brain':
            if (contadorLeft % 2 == 0) {
                elemento.style.animation = "translate-left 1s forwards";
                esparcirElementos();
                elemento.onmouseover  = function(){}        
                elemento.onmouseout  = function(){}        
            }
            else {
                elemento.style.animation = "goback-left 1s";
                removeElementos();
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

    let line1 = document.getElementById("line1-whitebrain"),
    line2 = document.getElementById("line2-whitebrain"),
    line3 = document.getElementById("line3-whitebrain"),
    line4 = document.getElementById("line4-whitebrain"),
    line5 = document.getElementById("line5-whitebrain");

    const lineas = [line1,line2,line3,line4,line5];

    lineas.forEach(linea => { 
        setTimeout(()=> {
        
            linea.style.animation = "line-fadein 1s forwards";
            linea.style.visibility = "visible";
            
        }, 800);
        
    })
  
}

function removeElementos(){
    let line1 = document.getElementById("line1-whitebrain"),
    line2 = document.getElementById("line2-whitebrain"),
    line3 = document.getElementById("line3-whitebrain"),
    line4 = document.getElementById("line4-whitebrain"),
    line5 = document.getElementById("line5-whitebrain");

    const lineas = [line1,line2,line3,line4,line5];

    lineas.forEach(linea => { 

        linea.style.animation = "line-fadeout 1s forwards";
    })
}

function esparcirSkills(){
    let line1 = document.getElementById("line1-redbrain"),
    line2 = document.getElementById("line2-redbrain"),
    line3 = document.getElementById("line3-redbrain"),
    line4 = document.getElementById("line4-redbrain"),
    line5 = document.getElementById("line5-redbrain");

    const lineas = [line1,line2,line3,line4,line5];

    lineas.forEach(linea => { 
        setTimeout(()=> {
        
            linea.style.animation = "line-fadein 1s forwards";
            linea.style.visibility = "visible";
        }, 800);
        
    })
}

function removeSkills(){
    let line1 = document.getElementById("line1-redbrain"),
    line2 = document.getElementById("line2-redbrain"),
    line3 = document.getElementById("line3-redbrain"),
    line4 = document.getElementById("line4-redbrain"),
    line5 = document.getElementById("line5-redbrain");

    const lineas = [line1,line2,line3,line4,line5];

    lineas.forEach(linea => { 

        linea.style.animation = "line-fadeout 1s forwards";
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

    if(_scroll > 1900){
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
    $('.items').each(function() {
  
      var _win     = $(window),
          _ths     = $(this),
          _scroll = _win.scrollTop()

    if(_scroll > 1600 && _scroll < 2500){
        _ths.css({'color': 'black','font-weight': '600'});
        flag = 1;
    }
    else {
        _ths.css({'color': 'white','font-weight': '100'});
    }  
      
  
    });
  });


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

  let ultimoScroll = 0;
  $(window).scroll(function() {
    $(window).each(function() {

        let barra = document.getElementById("barra");
  
      let currentScroll = $(this).scrollTop();

      if(currentScroll > ultimoScroll){
        barra.removeClass('desanim');
        barra.addClass('anim');
      }
      else {
        barra.removeClass('anim');
        barra.addClass('desanim');
      }

        ultimoScroll = currentScroll;
  
    });
  });