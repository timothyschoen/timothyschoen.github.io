

function add_footer() {
	let footer = document.createElement("DIV");
	footer.cssText += panel_css.replaceAll("$product_color", "white");
	footer.style.width = "100%";
	footer.style.height = "50px";
}

add_footer();
