


function whenScroll() {
    if (document.body.onscroll > 200 || document.documentElement.scrollTop > 200) {
        document.getElementById("barra").style.background = "black";
    }
    else {
        document.getElementById("barra").style.background = "none";
    }
}

gsap.fromTo(document.getElementById("foto-banner"),1, {innerHeight: "0%"}, {innerHeight: "100%"});