function DisplayModal(){
	let modal = document.getElementById("modal")
	modal.style.display = "flex"
}

function UndisplayModal(){
	let modal = document.getElementById("modal")
	modal.style.display = "none"
}

function ActivateRadioCheckers(e){
	let radios = document.getElementsByClassName("radio")
	
	for (let i = 0; i < radios.length; i++) {
		const radio = radios[i];
		if (radio.id == e.target.id || radio.children[0] == e.target)
		{
			radio.children[0].style.display = "block";
		}
		else{
			radio.children[0].style.display = "none";
		}
	}
}