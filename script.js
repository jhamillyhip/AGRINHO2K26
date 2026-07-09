function iniciarJogo(){
    document.getElementById("capa").style.display="none";
    document.getElementById("jogo").style.display="block";
}

function escolha(caminho){

    let resultado = document.getElementById("resultado");

    if(caminho=="esquerda"){
        resultado.innerHTML="🎉 Você encontrou um baú cheio de ouro! Parabéns!";
    }else{
        resultado.innerHTML="🐺 Você encontrou um lobo e precisou fugir. Fim da aventura!";
    }
}