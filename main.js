function clickEncriptar(){  
    var text = document.getElementById("codigo"). value;
    document.getElementById("noEncontrado"). value = encriptar(text);
    document.getElementById("codigo"). value = "";
}

function clickDesencriptar(){
        document.getElementById("codigo"). value;
    document.getElementById("noEncontrado"). value = desencriptar(text);
    document.getElementById("codigo"). value = "";
}

function encriptar(texto){
    texto = texto.replaceAll("e" , "enter");
    texto = texto.replaceAll("i" , "imes");
    texto = texto.replaceAll("a" , "ai");
    texto = texto.replaceAll("o" , "ober");
    texto = texto.replaceAll("u" , "ufat");
    return texto;
}

function desencriptar(texto){
    texto = texto.replaceAll("enter" , "e");
    texto = texto.replaceAll("imes" , "i");
    texto = texto.replaceAll("ai" , "a");
    texto = texto.replaceAll("ober" , "o");
    texto = texto.replaceAll("ufat" , "u");
    return texto;
}

