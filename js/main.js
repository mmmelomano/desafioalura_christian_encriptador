const textarea = document.getElementById('texto');
const btnencriptar = document.getElementById('encriptar');
const btndesencriptar = document.getElementById('desencriptar');
var pantalla = document.getElementById('resultado');



btnencriptar.addEventListener('click', () => {
	var resultado = '';
	const textoValue = textarea.value;
	if (textoValue.length == 0) {
		pantalla.innerHTML = `<div>
        <img src="images/Muñeco.png" alt="Muñeco">
        <h4>Ningun mensaje fue encontrado</h4>
        <p>ingrese un texto que desees Encriptar o Desencriptar</p>
    </div>
    `
	} else {
		var objeto = textoValue.split('');
		objeto.forEach(function(e, i) {

			if (e == "e") {
				e = "enter";
			} else if (e == "i") {
				e = "imes";
			} else if (e == "a") {
				e = "ai";
			} else if (e == "o") {
				e = "ober";
			} else if (e == "u") {
				e = "ufat";
			}
			resultado += e;
		})
        pantalla.innerHTML = `<div>
    <p class="parrafo-result" id="parrafo-result">${resultado}</p>
    <button class="btn_upline" id="btn_copiar">Copiar</button>
</div>`;
copiar()
	}
})



btndesencriptar.addEventListener('click', () => {
	var resultado = '';
	const textoValue = textarea.value;
	if (textoValue.length == 0) {
		pantalla.innerHTML = `<div>
         <img src="images/Muñeco.png" alt="Muñeco">
         <h4>Ningun mensaje fue encontrado</h4>
         <p>ingrese un texto que desees Encriptar o Desencriptar</p>
     </div>
     `
	} else {

        resultado = textoValue.replace(/enter/igm, "e");
        resultado = resultado.replace(/imes/igm, "i");
        resultado = resultado.replace(/ai/igm, "a");
        resultado = resultado.replace(/ober/igm, "o");
        resultado = resultado.replace(/ufat/igm, "u");

		pantalla.innerHTML = `<div>
            <p class="parrafo-result" id="parrafo-result">${resultado}</p>
            <button class="btn_upline" id="btn_copiar">Copiar</button>
        </div>`;
        copiar()
	}


})


function copiar(){
    var btnCopiar = document.getElementById('btn_copiar')
    var textoCopia = document.getElementById('parrafo-result');

    console.log('Nada')
    btnCopiar.addEventListener('click',()=>{
        navigator.clipboard.writeText(textoCopia.textContent);
        btnCopiar.textContent = "Copiado"
    })
}
