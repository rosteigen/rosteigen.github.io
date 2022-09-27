


function whenScroll() {
    if (document.body.onscroll > document.body.scrollHeight) {
        document.getElementById("barra").style.background = "black";
    }
    else {
        document.getElementById("barra").style.background = "none";
    }


}
