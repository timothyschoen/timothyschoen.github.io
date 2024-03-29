
function create_form(parent) {

	var createform = document.getElementById('contact_form'); // Create New Element Form
	parent.appendChild(createform);

	var heading = document.createElement('h2'); // Heading of Form
	heading.innerHTML = "Contact Form ";
	createform.appendChild(heading);

	var linebreak = document.createElement('br');
	createform.appendChild(linebreak);

	var namelabel = document.createElement('label'); // Create Label for Name Field
	namelabel.innerHTML = "Your Name : "; // Set Field Labels
	createform.appendChild(namelabel);

	var inputelement = document.createElement('input'); // Create Input Field for Name
	inputelement.setAttribute("type", "text");
	inputelement.setAttribute("name", "vname");
	createform.appendChild(inputelement);

	var linebreak = document.createElement('br');
	createform.appendChild(linebreak);

	var emaillabel = document.createElement('label'); // Create Label for E-mail Field
	emaillabel.innerHTML = "Your Email : ";
	createform.appendChild(emaillabel);

	var emailelement = document.createElement('input'); // Create Input Field for E-mail
	emailelement.setAttribute("type", "text");
	emailelement.setAttribute("name", "vemail");
	createform.appendChild(emailelement);

	var emailbreak = document.createElement('br');
	createform.appendChild(emailbreak);

	var messagelabel = document.createElement('label'); // Append Textarea
	messagelabel.innerHTML = "Your Message : ";
	createform.appendChild(messagelabel);

	var texareaelement = document.createElement('textarea');
	texareaelement.setAttribute("name", "vmessage");
	createform.appendChild(texareaelement);

	var messagebreak = document.createElement('br');
	createform.appendChild(messagebreak);

	var submitelement = document.createElement('input'); // Append Submit Button
	submitelement.setAttribute("type", "submit");
	submitelement.setAttribute("name", "submit");
	submitelement.setAttribute("value", "Submit");

	createform.appendChild(submitelement);

}

function contact() {
	let container = document.createElement("DIV");
	container.style.float = "right";
	container.style.width = "40%";
	container.style.height = "460px";
	container.style.margin = "15px";
	container.position = "relative";
	content.appendChild(container);

	let contact_info = document.createElement("DIV");
	contact_info.style.cssText = "font-family: LucidaGrande; border-radius:0%; border:none; outline:none; font-size:14px; color:white; background-color:transparent; position:absolute; top:130px; height:70px; left:40px; width:50%;";
	contact_info.innerHTML += "Don't hesistate to contact me if you have any questions. Mail me (info@octagonplugins.com) or use the form on the right.";
	content.appendChild(contact_info);



	create_form(container);
}

contact();
