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

jogos = [
    {
        nome: "Assassin's Creed",
        dataLanc: "13 de novembro de 2007",
        protagonistas: `<li>Desmond Miles</li>
        <li>Altaïr Ibn-La'Ahad</li>`,
        epoca: "Terceira Cruzada à Terra Santa",
        imagem: "../images/imagemAC1Altair.jpg",
    },
    {
        nome: "Assassin's Creed 2",
        dataLanc: "17 de novembro de 2009",
        protagonistas: `<li>Desmond Miles</li>
        <li>Ezio Auditore da Firenze</li>`,
        epoca: "1476 à 1499",
        imagem: "../images/imagemAC2Ezio.jpg",
    },
    {
        nome: "Assassin's Creed Brotherhood",
        dataLanc: "16 de novembro de 2010",
        protagonistas: `<li>Desmond Miles</li>
        <li>Ezio Auditore da Firenze</li>`,
        epoca: "Renascimento",
        imagem: "../images/imagemACBrthEzio.jpg",
    },
    {
        nome: "Assassin's Creed Revelations",
        dataLanc: "15 de novembro de 2011",
        protagonistas: `<li>Desmond Miles</li>
        <li>Ezio Auditore da Firenze</li>
        <li>Altaïr Ibn-La'Ahad</li>`,
        epoca: "Renascimento (1511 d.C)",
        imagem: "../images/imagemACRevEzioAltair.jpg",
    },
    {
        nome: "Assassin's Creed 3",
        dataLanc: "30 de outubro de 2012",
        protagonistas: `<li>Desmond Miles</li>
        <li>Connor Kenway</li>`,
        epoca: "Revolução Americana",
        imagem: "../images/imagemAC3.jpg",
    },
    {
        nome: "Assassin's Creed 4 Black Flag",
        dataLanc: "29 de outubro de 2013",
        protagonistas: `<li>Desmond Miles</li>
        <li>Edward James Kenway</li>`,
        epoca: "Era Dourada da Pirataria",
        imagem: "../images/imagemAC4BF.jpg",
    },
    {
        nome: "Assassin's Creed Rogue",
        dataLanc: "11 de novembro de 2014",
        protagonistas: `<li>Personagem Não Identificado</li>
        <li>Shay Patrick Cormac</li>`,
        epoca: "Conflito Franco-Indígena",
        imagem: "../images/imagemACRogue.jpg",
    },
    {
        nome: "Assassin's Creed Unity",
        dataLanc: "11 de novembro de 2014",
        protagonistas: `<li>"Jogador" Não Identificado</li>
        <li>Arno Victor Dorian</li>`,
        epoca: "Véspera da Revolução Francesa",
        imagem: "../images/imagemACUnity.jpg",
    },
    {
        nome: "Assassin's Creed Syndicate",
        dataLanc: "23 de outubro de 2015",
        protagonistas: `<li>Jacob Frye</li>
        <li>Evie Frye</li>`,
        epoca: "Revolução Industrial",
        imagem: "../images/imagemACSynd.jpg",
    },
    {
        nome: "Assassin's Creed Origins",
        dataLanc: "27 de outubro de 2017",
        protagonistas: `<li>Bayek</li>`,
        epoca: "Antigo Egito",
        imagem: "../images/imagemACOri.jpg",
    },
    {
        nome: "Assassin's Creed Odyssey",
        dataLanc: "5 de outubro de 2018",
        protagonistas: `<li>Alexios ou Kassandra</li>`,
        epoca: "Guerra do Peloponeso",
        imagem: "../images/imagemACOdy.jpg",
    },
    {
        nome: "Assassin's Creed Valhalla",
        dataLanc: "10 de novembro de 2020",
        protagonistas: `<li>Eivor Varinsdottir</li>`,
        epoca: "Expansões Vikings",
        imagem: "../images/imagemACVall.jpg",
    },
]

window.addEventListener('load', function () {
    let botoesJogos = document.getElementsByClassName("botaoJogos");
    document.querySelector(".jogosInfo").innerHTML = `<div class="informacoes">
        <div class="nome">
            <h3>Nome</h3>
            <span>${jogos[0].nome}</span>
        </div>
        <div class="dataLanc">
            <h3>Data de lançamento</h3>
            <span>${jogos[0].dataLanc}</span>
        </div>
        <div class="princPerson">
            <h3>Protagonistas</h3>
            <ul>
                ${jogos[0].protagonistas}
            </ul>
        </div>
        <div class="epocaGame">
            <h3>Época em que se passa</h3>
            <span>${jogos[0].epoca}</span>
        </div>
    </div>`
    for (let i = 0; i < botoesJogos.length; i++) {
        botoesJogos[i].addEventListener("click", function() {
            let current = document.getElementsByClassName("ativo");
            current[0].className = current[0].className.replace(" ativo", "");
            this.className += " ativo";
            document.querySelector(".jogosInfo").style.backgroundImage  = `url(${jogos[i].imagem})`
            document.querySelector(".jogosInfo").innerHTML = `
            <div class="informacoes">
                <div class="nome">
                    <h3>Nome</h3>
                    <span>${jogos[i].nome}</span>
                </div>
                <div class="dataLanc">
                    <h3>Data de lançamento</h3>
                    <span>${jogos[i].dataLanc}</span>
                </div>
                <div class="princPerson">
                    <h3>Protagonistas</h3>
                    <ul>
                        ${jogos[i].protagonistas}
                    </ul>
                </div>
                <div class="epocaGame">
                    <h3>Época em que se passa</h3>
                    <span>${jogos[i].epoca}</span>
                </div>
            </div>`
        });
      }

})