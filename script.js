//Factory Method



//Eu usei este DEsign Patters para fazer esta Classe que a partir do método instantiate retorna o tipo do empregado
//o parâmetro type ele determina qual a condição do novo funcionário;
function FactoryJob() {

	// método que retorna a instância ou serviço desejado 
	this.instantiate = function ( type){

		var empregado ;


		if(type == "Formado e nao CLT"){
			empregado = new Bolsista();
		}


		else if(type == "Formado e CLT"){
			empregado = new CLT();
		}


		else if(type == "Nao Formado"){
			empregado = new Estagiario();
		}
	}


}


//Classes 
var Bolsista =  function(){
	this.condicao = "Bolsista";
}

var CLT =  function(){
	this.condicao = "CLT";
}

var Estagiario =  function(){
	this.condicao = "Estagiario";
}


//Eventos

function eventoBotao (){

	let type = document.getElementById("txtType").Value;
	let factoryObject = new FactoryJob();

}

document.getElementById("btnSubmit").AddEventListener("click",eventoBotao());


