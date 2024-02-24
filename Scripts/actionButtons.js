//console.log("Button");

let btnCosta = document.getElementById("btnCosta");
let btnSierra = document.getElementById("btnSierra");
let btnSelva = document.getElementById("btnSelva");

let aCosta = document.getElementById('costa');//.addEventListener("click", actionBtn1);

btnCosta.addEventListener("click", actionBtnCosta);
btnSierra.addEventListener("click", actionBtnSierra);
btnSelva.addEventListener("click", actionBtnSelva);

function actionBtnCosta() {
	//mainFrame.src = "costa.html";
	//console.log(typeOf=mainFrame);
	aCosta.href="costa.html";
}

function actionBtnSierra() {
	//Se obtiene el elemento con el ID Sierra
	//Se guarda en la variable aSierra y se cambia su atributo href
	var aSierra = document.getElementById("sierra").href = "sierra.html";
}

function actionBtnSelva() {
	var aSelva = document.getElementById("selva").href = "selva.html";
}