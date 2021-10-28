

function add_footer() {
	let footer = document.createElement("DIV");
	footer.innerHTML += "Copyright ©2021 Octagon Audio | All rights reserved";
	footer.cssText += panel_css.replaceAll("$product_color", "white");
	footer.style.width = "100%";
	footer.style.height = "50px";
	content.appendChild(footer);
}

add_footer();
