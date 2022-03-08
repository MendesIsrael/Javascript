function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var dada = new Date()
    var hora = data.getHours()
    var m = dada.getMinutes()
    msg.innerHTML = `Agora são ${hora} horas e ${m} minutos`
    if (hora >= 0 && hora <12) {
        //Bom Dia
        img.src = 'fotomanha.png'
        document.body.style.background = '#efdcc5'
    } else if (hora >= 12 && hora <= 16){
        //Boa tarde
        img.src = 'fototarde.png'
        document.body.style.background = '#f1c186'
    } else if (hora > 16 && hora < 18) {
        //Boa tarde
        img.src = 'fotofinaltarde.png'
        document.body.style.background = '#6e5c43'
    } else { 
        //Boa noite
        img.src = 'fotonoite.png'
        document.body.style.background = '#243949'
    }
}