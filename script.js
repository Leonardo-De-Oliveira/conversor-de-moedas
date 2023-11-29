let coin = document.getElementById("coin")
let coin_2 = document.getElementById("coin-2")

let coinSelect 
let resultado

let img = document.getElementById("value-1")    
let img_2 = document.getElementById("value-4")

coin.addEventListener("change", changeValues)
coin_2.addEventListener("change", changeValues)

async function valueCoin() {

    let data = await fetch("https://economia.awesomeapi.com.br/last/" +
    coin_2.value
    ).then(resposta => resposta.json())

    let euro = await fetch("https://economia.awesomeapi.com.br/last/" +
    "EUR-BRL"
    ).then(resposta => resposta.json())

    let euroBrl = euro.EURBRL.high
    
    console.log(coin.value)
    console.log(coin_2.value)

    convertCoin(data, euroBrl)
}

function convertCoin(data, euroBrl){
    let insert = document.getElementById("insert").value

    if(coin_2.value == "USD-BRL") {
        coinSelect = data.USDBRL.high
    }
    if(coin_2.value == "EUR-BRL") {
        coinSelect = data.EURBRL.high
    }
    if(coin.value == "USD-BRL" && coin_2.value == "BRL-USD") {
        coinSelect = data.BRLUSD.high
    }
    if(coin_2.value == "BRL-USD" && coin.value == "EUR-BRL") {
        coinSelect = euroBrl
    }
    
    console.log(coinSelect)

    if(coin.value === coin_2.value) {
        resultado = insert
    } else {
        if(coin.value == "BRL-USD" && coin_2.value == "USD-BRL") {
            resultado = insert / coinSelect
        } 
        else if(coin.value == "USD-BRL" && coin_2.value == "EUR-BRL" || coin.value == "EUR-BRL" && coin_2.value == "USD-BRL") {
            resultado = 0
        } 
        else if(coin.value == "USD-BRL" && coin_2.value == "BRL-USD") {
            resultado = insert / coinSelect
        } 
        else if (coin.value == "BRL-USD" && coin_2.value == "EUR-BRL") {
            resultado = insert / coinSelect
        } 
        else if (coin_2.value == "BRL-USD" && coin.value == "EUR-BRL"){
            resultado = insert * coinSelect 
        }
    
    }

    console.log(resultado)
    console.log(insert)

    formatValues(insert, resultado)    

}

function formatValues(insert, resultado) {
    if(coin.value == "USD-BRL"){
        document.querySelector(".value-3").innerHTML = new Intl.NumberFormat("en-US", { 
            style: 'currency', 
            currency: 'USD' 
        }).format(insert)
    }
    if(coin_2.value == "USD-BRL"){
        document.querySelector(".value-6").innerHTML = new Intl.NumberFormat("en-US", { 
            style: 'currency', 
            currency: 'USD' 
        }).format(resultado)
    }
    if(coin.value == "BRL-USD"){
        document.querySelector(".value-3").innerHTML = new Intl.NumberFormat("pt-BR", { 
            style: 'currency', 
            currency: 'BRL' 
        }).format(insert)
    }
    if(coin_2.value == "BRL-USD"){
        document.querySelector(".value-6").innerHTML = new Intl.NumberFormat("pt-BR", { 
            style: 'currency', 
            currency: 'BRL' 
        }).format(resultado)
    }
    if(coin.value == "EUR-BRL"){
        document.querySelector(".value-3").innerHTML = new Intl.NumberFormat("de-DE", { 
            style: 'currency', 
            currency: 'EUR' 
        }).format(insert)
    }
    if(coin.value == "BRL-USD" && coin_2.value == "EUR-BRL"){
        document.querySelector(".value-6").innerHTML = new Intl.NumberFormat("de-DE", { 
            style: 'currency', 
            currency: 'EUR' 
        }).format(resultado)
    }
}

function changeValues() {    

    if(coin.value === "BRL-USD") {
        img.src = "./assets/brasil.png"
        document.querySelector(".value-2").innerHTML = "Real Brasileiro"
        document.querySelector(".value-3").innerHTML = "R$"
    }
    if(coin_2.value === "BRL-USD") {
        img_2.src = "./assets/brasil.png"
        document.querySelector(".value-5").innerHTML = "Real Brasileiro"
        document.querySelector(".value-6").innerHTML = "R$"
    }   
    if(coin.value === "USD-BRL") {
        img.src = "./assets/us.png"
        document.querySelector(".value-2").innerHTML = "Dólar americano"
        document.querySelector(".value-3").innerHTML = "$"
    }
    if(coin_2.value === "USD-BRL") {
        img_2.src = "./assets/us.png"
        document.querySelector(".value-5").innerHTML = "Dólar americano"
        document.querySelector(".value-6").innerHTML = "$"
    }
    if(coin.value === "EUR-BRL") {
        img.src = "./assets/eu.png"
        document.querySelector(".value-2").innerHTML = "Euro"
        document.querySelector(".value-3").innerHTML = "Є"
    }
    if(coin_2.value === "EUR-BRL") {
        img_2.src = "./assets/eu.png"
        document.querySelector(".value-5").innerHTML = "Euro"
        document.querySelector(".value-6").innerHTML = "Є"
    }   

}

