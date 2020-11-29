let negrito = document.getElementById('N');
let italico = document.getElementById('I');
let sublinhado = document.getElementById('S');
let maiusculas = document.getElementById('A');
let minuscula = document.getElementById('a');
let salvar = document.getElementById('Sv')

let area_texto = document.getElementById('txt');

let negrito_ativo = false;
let italico_ativo = false;
let sublinhado_ativo = false;
let maiuscula_ativo = false;
let minuscula_ativo = false;
let pegarTexto;

negrito.addEventListener('click', deixar_negrito);
italico.addEventListener('click', deixar_italico);
sublinhado.addEventListener('click', deixar_sublinhado);
maiusculas.addEventListener('click', deixar_maiuscula)
minuscula.addEventListener('click', deixar_minuscula)
salvar.addEventListener('click', salvando)


// SALVANDO O TEXTO

function salvando() {
   localStorage.setItem('Texto_bloco', area_texto.value);
}

window.onload = function () {
   area_texto.value = localStorage.getItem('Texto_bloco');
}
// --------------------------------------

function deixar_negrito() {
   if (negrito_ativo == false) {
      area_texto.style.fontWeight = "700";
      negrito_ativo = true;
   } else {
      area_texto.style.fontWeight = "lighter";
      negrito_ativo = false;
   };
};

function deixar_italico() {
   if (italico_ativo == false) {
      area_texto.style.fontStyle = "italic";
      italico_ativo = true;
   } else {
      area_texto.style.fontStyle = "normal";
      italico_ativo = false;
   };
};

function deixar_sublinhado() {
   if (sublinhado_ativo == false) {
      area_texto.style.textDecoration = "underline"
      sublinhado_ativo = true;
   } else {
      area_texto.style.textDecoration = "none";
      sublinhado_ativo = false;
   };
};

function deixar_maiuscula() {
   if (maiuscula_ativo == false) {
      area_texto.style.textTransform = "uppercase"
      maiuscula_ativo = true;
      minuscula_ativo = false;
   } else {
      area_texto.style.textTransform = "none";
      maiuscula_ativo = false;
   };
};

function deixar_minuscula() {
   if (minuscula_ativo == false) {
      area_texto.style.textTransform = "lowercase"
      minuscula_ativo = true;
      maiuscula_ativo = false;
   } else {
      area_texto.style.textTransform = "none";
      minuscula_ativo = false;
   };
};



/*
function selecionado(){
    return window.getSelection() != "" ?true:false
}*/

