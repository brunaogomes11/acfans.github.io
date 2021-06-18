listaImagens = [
    {
        nome: "Imagem Altair",
        endereco: "../images/galeriaImagens/imagemAltair.jpg",
    },
    {
        nome: "Imagem Ezio Auditore",
        endereco: "../images/galeriaImagens/imagemEzio.jpg",
    },
    {
        nome: "Imagem Valhalla",
        endereco: "../images/galeriaImagens/imagemValhalla.jpg",
    },
    {
        nome: "Imagem Altair",
        endereco: "../images/galeriaImagens/assassinos.png",
    },
    {
        nome: "Imagem Ezio Auditore",
        endereco: "../images/galeriaImagens/imagemEzio2.jpg",
    },
    {
        nome: "Imagem Origin",
        endereco: "../images/galeriaImagens/imagemOrigins.jpg",
    },
    {
        nome: "Imagem Origins Bayek",
        endereco: "../images/galeriaImagens/imagemOriginsBayek.jpg",
    },
    {
        nome: "Imagem Valhalla Eivor",
        endereco: "../images/galeriaImagens/imagemValhallaEivor.jpg",
    },
    {
        nome: "Imagem Odyssey",
        endereco: "../images/galeriaImagens/imagemOdyssey.jpg",
    },
]

window.addEventListener('load', function () {
    for (let i = 0; i < listaImagens.length; i++) {
        document.querySelector("#gridImagens").innerHTML += `<div class="imagemContainer">
            <img src="${listaImagens[i].endereco}" alt="${listaImagens[i].nome}" class="imagensGaleria">
            <div class="searchIconCont">
                <img src="../images/galeriaImagens/downloadIcon.png" alt="Download Icon">
            </div>
        </div>`;    
    }
    let imagemContainer = document.getElementsByClassName("imagemContainer");
    let imagensGaleria = document.getElementsByClassName("imagensGaleria");
    let searchIconsConts = document.getElementsByClassName("searchIconCont");
    let modalImagem = document.querySelector("#modalImagens")
    for (let i = 0; i < imagemContainer.length; i++) {
        imagemContainer[i].addEventListener("mouseover" ,function() {
            searchIconsConts[i].style.visibility = "visible";
            imagensGaleria[i].style.filter = "blur(2px)";
        });
        imagemContainer[i].addEventListener("mouseout" ,function() {
            searchIconsConts[i].style.visibility = "hidden";
            imagensGaleria[i].style.filter = "blur(0)";
        });
        imagemContainer[i].addEventListener("click", function() {
            modalImagem.style.visibility = "visible";
            modalImagem.innerHTML = `<span class="fecharModal">&times;</span>
            <img src="${listaImagens[i].endereco}" alt="${listaImagens[i].nome}">
            <a href="${listaImagens[i].endereco}" download class="downloadButton">DOWNLOAD <img src="../images/galeriaImagens/downloadIcon.png" alt="Download Icon"></a>`
            document.querySelector(".fecharModal").addEventListener("click",function() {
                modalImagem.innerHTML = ``;
                modalImagem.style.visibility = "hidden";
            })
        })
    }
})