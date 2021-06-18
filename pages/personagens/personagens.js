arrowsBottom = document.getElementById("arrowsBottom");
window.addEventListener('load', function () {
    document.querySelector(".menuJogos").addEventListener('scroll', function() { 
        if (this.scrollTop + this.offsetHeight == this.scrollHeight) {
            arrowsBottom.style.display = "none";
        } else {
            arrowsBottom.style.display = "block";
        }
    }); 
})


menuJogos = document.querySelector(".menuJogos")
window.addEventListener('load', function () {
    if (menuJogos.scrollTop == 0) {
        arrowsUp.style.display = "none";
    } else {
        arrowsUp.style.display = "block";
    }
})

arrowsUp = document.getElementById("arrowUp");
window.addEventListener('load', function () {
    document.querySelector(".menuJogos").addEventListener('scroll', function() {
        if (this.scrollTop < 10) {
            arrowsUp.style.display = "none";
        } else {
            arrowsUp.style.display = "block";
        }
    }); 
})

let botoesJogos = document.getElementsByClassName("botaoJogos");
for (let i = 0; i < botoesJogos.length; i++) {
    botoesJogos[i].addEventListener("click", function() {
        let current = document.getElementsByClassName("ativo");
        current[0].className = current[0].className.replace(" ativo", "");
        this.className += " ativo";
        
    });
}
