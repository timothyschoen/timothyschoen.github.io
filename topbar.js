
document.body.style.backgroundColor = "#141414";

let panel_css = "font-family: LucidaGrande; border-radius:5px; border:2px solid $theme_color; outline:none; font-size:12px; color:white; background-color:#141414; position:relative; top:100px; left:-10px; padding:-20px; margin:20px; height:300px; width:100%; zIndex:1;";

let button_css = "font-family: LucidaGrande; border-radius:5px; border:2px solid $theme_color; font-size:14px; color:$theme_color; background-color:transparent; position:absolute; width:140px; height:30px; text-align:center;";


let content = document.createElement("DIV");
content.style.cssText = "border-radius:0%; border:none; outline:none; background-color:#141414;";
content.style.position = "absolute";
content.style.left = "7%";
content.style.width = (Math.max(document.body.clientWidth, 1100) * 0.86) + "px";
content.style.height = document.body.clientHeight;
content.style.zIndex = "100";
document.body.appendChild(content);

window.onresize = function() {
	content.style.width = (Math.max(document.body.clientWidth, 1100) * 0.86) + "px";
};

function create_topbar() {

  let buttons = [];
  let labels = [["HOME", "./index.html"], ["ABOUT", "./about.html"], ["CONTACT", "./contact.html"]];

      let topbar = document.createElement("DIV");
      topbar.style.cssText = "border-radius:0%; border:none; outline:none; font-size:12px; color:white; background-color:#141414; position:fixed; top:0px; left:0px;";
      topbar.style.height = "65px";
      topbar.style.left = "0%";
      topbar.style.width = "100%"
      topbar.style.zIndex = "100";
      content.appendChild(topbar);

      let line = document.createElement("DIV");
      line.style.cssText = "border-radius:0%; border:none; outline:none; font-size:12px; color:white; background-color:white; position:relative;";
      line.style.height = "2px";
	    line.style.top = "100%";
      line.style.zIndex = "100";
      line.style.width = "100%";
      topbar.appendChild(line);

      var logo = document.createElement("img");
      logo.src = "./resources/Octagon_extra_2.png";

      logo.style.width = "130px";
      logo.style.height = "auto";
      logo.style.top = "5px";
      logo.style.left = "8%"
      logo.style.position = "fixed";
      logo.style.zIndex = "100";
			logo.onclick = function(){
				location.href = "./index.html";
			};

      topbar.appendChild(logo);

	   let logo_right = logo.getBoundingClientRect().right;

      for (let i = 0; i < labels.length; i++) {
        buttons[i] = document.createElement("BUTTON");
        buttons[i].innerHTML = labels[i][0];
        buttons[i].style.cssText = "border-radius:0%; border:none; outline:none; font-size:12px; color:white; background-color:transparent; position:relative;  top:10px; left:19%;"
        buttons[i].className = "button";
        buttons[i].style.height = "42px";
        buttons[i].style.width = "80px";
        buttons[i].style.fontFamily = "LucidaGrande";
        buttons[i].style.zIndex = "100";
        buttons[i].onclick = function() {
          location.href = labels[i][1];
        }
        //buttons[i].addEventListener("click", buttonpresets[i][2]);
        topbar.appendChild(buttons[i])
      }

}

create_topbar();
