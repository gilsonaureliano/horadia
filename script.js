function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var horatxt = window.document.getElementById('hora')
    var hora = Number(horatxt.value)
    var msginicial = window.document.getElementById('msginicial')
    
    msg.innerHTML = `Agora são ${hora} horas`

    if (hora > 24){
        window.alert = ('Digite um valor inteiro entre 0 e 24')
    }
    else if (hora > 0 && hora < 12) {
        //Bom dia
        img.src = "imagens/manha.png"
        document.body.style.backgroundColor = "#F4C8AA"
        msginicial.style.color = 'brown'
    }else if (hora >= 12 && hora <= 18) {
        //Boa tarde
        img.src = "imagens/tarde.png"
        document.body.style.backgroundColor = "#AA7374"
        msginicial.style.color = 'black'
    }else {
        //Boa noite
        img.src = "imagens/noite.png"
        document.body.style.backgroundColor = "#403253"
        msginicial.style.color = 'white'
        
    }

}

