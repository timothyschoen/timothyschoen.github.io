

function contact() {
	let container = document.createElement("DIV");
	container.style.float = "right";
	container.style.width = "50%";


	container.position = "fixed";
	content.appendChild(container);
	
	let contact_info = document.createElement("DIV");
	contact_info.style.cssText = "font-family: LucidaGrande; border-radius:0%; border:none; outline:none; font-size:14px; color:white; background-color:transparent; position:absolute; top:130px; height:70px; left:40px; width:50%;";
	contact_info.innerHTML += "Don't hesistate to contact me if you have any questions. Mail me (tim.schoen@student.hku.nl) or use the form on the right.";
	content.appendChild(contact_info);
	
	
	
	create_form(container);
}

contact();
