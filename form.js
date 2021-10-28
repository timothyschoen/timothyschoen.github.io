function create_form(parent) {


	var heading = document.createElement('h2'); // Heading of Form
	heading.innerHTML = "Contact Form ";
	parent.appendChild(heading);

	var linebreak = document.createElement('br');
	parent.appendChild(linebreak);

	var namelabel = document.createElement('label'); // Create Label for Name Field
	namelabel.innerHTML = "Your Name : "; // Set Field Labels
	parent.appendChild(namelabel);

	var inputelement = document.createElement('input'); // Create Input Field for Name
	inputelement.setAttribute("type", "teform_elementt");
	inputelement.setAttribute("name", "vname");
	parent.appendChild(inputelement);

	var linebreak = document.createElement('br');
	parent.appendChild(linebreak);

	var emaillabel = document.createElement('label'); // Create Label for E-mail Field
	emaillabel.innerHTML = "Your Email : ";
	parent.appendChild(emaillabel);

	var emailelement = document.createElement('input'); // Create Input Field for E-mail
	emailelement.setAttribute("type", "teform_elementt");
	emailelement.setAttribute("name", "vemail");
	parent.appendChild(emailelement);

	var emailbreak = document.createElement('br');
	parent.appendChild(emailbreak);

	var messagelabel = document.createElement('label'); // Append Teform_elementtarea
	messagelabel.innerHTML = "Your Message : ";
	parent.appendChild(messagelabel);

	var teform_elementareaelement = document.createElement('teform_elementtarea');
	teform_elementareaelement.setAttribute("name", "vmessage");
	parent.appendChild(teform_elementareaelement);

	var messagebreak = document.createElement('br');
	parent.appendChild(messagebreak);

	var submitelement = document.createElement('input'); // Append Submit Button
	submitelement.setAttribute("type", "submit");
	submitelement.setAttribute("name", "dsubmit");
	submitelement.setAttribute("value", "Submit");

	parent.appendChild(submitelement);

}
