let bocales = ['a', 'e', 'i', 'o', 'u'];
let cambios = ["ai","enter","imes","ober","ufat", " "];
let consonantes = ['b','c','d','f','g','h','j','k','l','m','n','ñ','p','q','r','s','t','v','w','x','y','z', ' ']
// let palabra = "andres"
let parrafoIncriptado = [];
let parrafoIncriptado2 = [];
let final = [];
let finalDesencritar = [];

function botonEncriptar(){

     const palabra = document.getElementById('textoIngresado').value;

    for(let j = 0; j < palabra.length; j++){

        for(let k = 0; k < bocales.length;k++){

            if(palabra.charAt(j) == bocales[k]){

                parrafoIncriptado = parrafoIncriptado + cambios[k];

            }

        }

        for(let l = 0 ; l < consonantes.length; l++){

            if(palabra.charAt(j) == consonantes[l]){

                parrafoIncriptado = parrafoIncriptado + consonantes[l];

            }

        }

    }

    final = parrafoIncriptado;
    document.getElementById('textoResultado').value = final;
    parrafoIncriptado = " ";
    document.getElementById('ocultar').style.display = 'none';
    document.getElementById('ocultarh3').style.display = 'none';
    document.getElementById('ocultarp').style.display = 'none';
    document.getElementById('textoIngresado').style.display = 'none';

}

function botonDesencriptar(){

    const palabraIncriptada = document.getElementById('textoResultado').value;
    
    let msg = palabraIncriptada.replace(/(ai)|(enter)|(imes)|(ober)|(ufat)/g, (e)=>
    {
        if(e=="ai"){return "a";};
        if(e=="enter"){return "e";};
        if(e=="imes"){return "i";};
        if(e=="ober"){return "o";};
        if(e=="ufat"){return "u";};
    });

    document.getElementById('textoResultado').value = msg;
    document.getElementById('textoIngresado').style.display = 'block';

      
}

function copiar(){
    const textoIncriptado = textoResultado.value;
    navigator.clipboard.writeText(textoIncriptado);
    document.getElementById('ocultar').style.display = 'inline-block';
    document.getElementById('ocultarh3').style.display = 'block';
    document.getElementById('ocultarp').style.display = 'block';
}