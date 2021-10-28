

function add_footer() {


	let footer_text = document.createElement("DIV");
	footer_text.innerHTML += "Copyright &copy2021 Octagon Audio | All rights reserved";
	footer_text.style.cssText += panel_css.replace("$theme_color", "white") + "padding-top:30px;";
	footer_text.style.width = "100%";
	footer_text.style.height = "50px";
	footer_text.style.top = "20px";
	footer_text.style.textAlign = "center";
	footer_text.style.position = "relative";

	content.appendChild(footer_text);
}

add_footer();
