function writeScreen(conversao, moeda) {
    console.log(conversao, moeda)

    let real = document.getElementById("real").value

    document.querySelector(".valor-selecionado").innerHTML = document.querySelector(".valor-2").innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(real) 

    let convertido = ""
    
    if(moeda == 'USD-BRL') {
        convertido = conversao.USDBRL.high
    } else if(moeda == 'EUR-BRL') {
        convertido = conversao.EURBRL.high
    } else {
        convertido = conversao.BTCBRL.high
    }

    if(convertido != ""){
        let resultado = real / convertido 
    
        if(moeda == 'USD-BRL') {
            document.querySelector(".valor-2").innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD"
            }).format(resultado) 
        } else if(moeda == 'EUR-BRL') {
            document.querySelector(".valor-2").innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "EUR"
            }).format(resultado) 
        } else {
            document.querySelector(".valor-2").innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "BTC"
            }).format(resultado) 
        }
    }
}

async function valueDolar(moeda) {
    let conversao = await fetch ("http://economia.awesomeapi.com.br/json/last/" +
    moeda + "/"
    ).then(resposta => resposta.json())

    writeScreen(conversao, moeda)
}

function converterMoeda() {
    let moeda = document.getElementById("moedas").value

    valueDolar(moeda)
}

function change() {
    let moedaSelecionada = document.getElementById("moedas").value

    if(moedaSelecionada == "USD-BRL"){
        document.querySelector(".valor-1").innerHTML = "Dólar Americano"
        document.querySelector(".valor-2").innerHTML = "U$ "
        
        let image = document.getElementById("valor-3")

        image.src = "./assets/us.png"

    } else if(moedaSelecionada == "EUR-BRL"){
        document.querySelector(".valor-1").innerHTML = "Euro"
        document.querySelector(".valor-2").innerHTML = "Є "

        let image = document.getElementById("valor-3")

        image.src = "./assets/eu.png"
    } else {
        document.querySelector(".valor-1").innerHTML = "Bitcoin"
        document.querySelector(".valor-2").innerHTML = "BTC "
        
        let image = document.getElementById("valor-3")

        image.src = "./assets/bitcoin.png"
    }
}

const select = document.querySelector("#moedas")

select.addEventListener("change", change)
