
let trial_desc = "Try the plugin out in your browser, use Chrome for best results. Saving and deleting presets is disabled. It may take a second to load."

let products = [
  ["GreenLight", "./resources/greenlight.png", "Trattatello", "#3cbe79", "Dynamic phaser and flanger with a unique sound", "GreenLight offers a phaser/flanger-like sound but created in a new and unique way. The phasing responds dynamically your playing, adding life to your sound. You can add delay to create a more chorus-like effect, or create frequency shifting effects.", "./greenlight.html"],
/*  ["Product2", "", "Trattatello", "#e63b35", "Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet"],
  ["Product3", "", "Trattatello", "#58a5e8", "Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet"], */
];


String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.split(search).join(replacement);
};

function create_close_button(parent, color, callback) {
	 var close = document.createElement("BUTTON");
        close.innerHTML = "<";
        close.style.cssText = (button_css + "top:10px; left:10px; width:30px; height:30px;").replaceAll("$theme_color", color);

        close.onclick = function() {
			parent.removeChild(close);
			callback();
		}
		parent.appendChild(close);
}


function OpenTrialWidget(url, panel, color, product_logo, to_hide) {
	 var iframe = document.createElement("iframe");
         iframe.setAttribute("src", url);
         iframe.style.position = "absolute";
         iframe.style.bottom="1%"
         iframe.style.right="2%"
         iframe.style.border = "none";
         iframe.width = "590px";
         iframe.height = "360px";

         panel.appendChild(iframe);



         panel.style.height = "370px";
		     to_hide.forEach(element => panel.removeChild(element));

         let width = document.documentElement.clientWidth;
         let trial_description = document.createElement("DIV");
         trial_description.innerHTML += trial_desc;
         trial_description.style.cssText = "font-family: LucidaGrande; border-radius:0%; border:none; outline:none; font-size:15px; color:$theme_color; background-color:transparent; position:absolute; top:130px; left:0px;".replace("$theme_color", color)
         trial_description.style.height = "70px";
         trial_description.style.left = "40px";
         trial_description.style.width = (width - 700) + "px";
         panel.appendChild(trial_description);

         if((width - 660) < 100) {
           trial_description.style.display = "none";
           product_logo.style.display = "none";
         }

		 create_close_button(panel, color, function(){
           panel.removeChild(iframe);
           panel.removeChild(trial_description);

		   to_hide.forEach(element => panel.appendChild(element));
           panel.style.height = "300px";
           product_logo.style.display = "block";
		});
}


function main() {

    for (let i = 0; i < products.length; i++) {

      let name = products[i][0];
      let img = products[i][1];
      let font = products[i][2];
      let color = products[i][3];
      let desc = products[i][4];
      let extra_desc = products[i][5];
      let trial_location = products[i][6];

      let panel = document.createElement("DIV");
      panel.style.cssText = panel_css.replace("$theme_color", color);
      panel.style.zIndex = "1";

      let png = document.createElement("img");
      png.src = img;
	  png.style.cssText = "height:280px; width:auto; top:10px; right:10px; position:absolute;"
      panel.appendChild(png);

      let product_logo = document.createElement("DIV");
      product_logo.innerHTML += name;
      product_logo.style.cssText = "font-family: $product_font; border-radius:0%; border:none; outline:none; font-size:60px; color:$theme_color; background-color:transparent; position:absolute; top:20px; left:40px; height:70px; width:300px;".replace("$product_font", font).replace("$theme_color", color);
      panel.appendChild(product_logo);

      let product_desc = document.createElement("DIV");
      product_desc.innerHTML += desc;
      product_desc.style.cssText = "font-family: LucidaGrande; border-radius:0%; border:none; outline:none; font-size:20px; color:$theme_color; background-color:transparent; position:absolute; top:130px; left:40px; height:70px; width:50%;".replace("$theme_color", color)
      panel.appendChild(product_desc);

      let info_button = document.createElement("BUTTON");
      let try_button = document.createElement("BUTTON");

      info_button.innerHTML += "More >";
      info_button.style.cssText = button_css.replaceAll("$theme_color", color) + "top:230px; left:190px;";
      panel.appendChild(info_button);

      info_button.onclick = function() {

        panel.removeChild(info_button);
        panel.removeChild(try_button);
        panel.removeChild(product_desc);

        let buy_button = document.createElement("BUTTON");
        buy_button.innerHTML += "Buy";
        buy_button.style.cssText = button_css.replaceAll("$theme_color", color) + "top:230px; left:40px;";
        panel.appendChild(buy_button);

        let more_product_desc = document.createElement("DIV");
        more_product_desc.innerHTML += extra_desc;
        more_product_desc.style.cssText = "font-family: LucidaGrande; border-radius:0%; border:none; outline:none; font-size:14px; color:$theme_color; background-color:transparent; position:absolute; top:130px; height:70px; left:40px; width:500px;".replace("$theme_color", color);
        panel.appendChild(more_product_desc);

		create_close_button(panel, color, function(){
		  panel.removeChild(buy_button);
          panel.removeChild(more_product_desc);

          panel.appendChild(info_button);
          panel.appendChild(try_button);
          panel.appendChild(product_desc);
		});
      }


      try_button.innerHTML += "Try in browser >";
      try_button.style.cssText = button_css.replaceAll("$theme_color", color) + "top:230px; left:40px;";
      try_button.onclick = function() {
		  OpenTrialWidget(trial_location, panel, color, product_logo, Array(info_button, try_button, product_desc, png));
      };

	panel.appendChild(try_button);
    content.appendChild(panel);
	}

    let panel = document.createElement("DIV");
    panel.style.cssText = panel_css.replace("$theme_color", "white");
    content.appendChild(panel);

    let more_coming = document.createElement("DIV");
    more_coming.innerHTML += "More coming soon!";
    more_coming.style.cssText = "font-family: LucidaGrande; border-radius:5px; border:none; outline:none; font-size:60px; color:white; background-color:transparent; position:absolute; top:120px; left:0px; height:62px; width:100%; text-align:center";
    panel.appendChild(more_coming);

    let footer = document.createElement("DIV");
    footer.style.cssText = "font-family: LucidaGrande; border-radius:5px; border:none; outline:none; font-size:60px; color:white; background-color:transparent; position:relative; top:120px; left:0px; height:62px;";
    content.appendChild(footer);
}

main();
