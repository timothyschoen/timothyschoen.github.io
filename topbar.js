
let divisor = document.body.clientWidth > 1200 ? 8.0 : 24.0;
let left =  document.body.clientWidth / divisor;
let width =  document.body.clientWidth - (2 * (document.body.clientWidth / divisor));

document.body.style.backgroundColor = "#141414";
document.body.style.width = "70%";
document.body.style.height= "100%";

let content = document.createElement("DIV");
content.style.cssText = "border-radius:0%; border:none; outline:none; background-color:#141414;";
content.style.position = "absolute";
content.style.left = "x0px".replace("x0", left);
content.style.width = "x0px".replace("x0", width);
content.style.height = document.body.clientHeight;
content.style.zIndex = "100";
document.body.appendChild(content);

function create_topbar() {

  let buttons = [];
  let labels = [["HOME", "./index.html"], ["ABOUT", "./about.html"], ["CONTACT", "./contact.html"]];

      let topbar = document.createElement("DIV");
      topbar.style.cssText = "border-radius:0%; border:none; outline:none; font-size:12px; color:white; background-color:#141414; position:fixed; top:0px; left:0px;";
      topbar.style.height = "55px";
      topbar.style.left = left + "px";
      topbar.style.width = "x0px".replace("x0", width + 30);
      topbar.style.zIndex = "100";
      content.appendChild(topbar);

      let line = document.createElement("DIV");
      line.style.cssText = "border-radius:0%; border:none; outline:none; font-size:12px; color:white; background-color:#f0f0f0; position:fixed; top:55px;";
      line.style.height = "2px";
      line.style.zIndex = "100";
      line.style.left = left + "px";
      line.style.width = "x0px".replace("x0", width + 30);
      content.appendChild(line);

      var logo = document.createElement("img");
      logo.src = "./resources/Octagon_extra.png";

      logo.style.width = "130px";
      logo.style.height = "auto";
      logo.style.top = "0px";
      logo.style.left = (left + 12) + "px";
      logo.style.position = "fixed";
      logo.style.zIndex = "100";
      content.appendChild(logo);


      for (let i = 0; i < 3; i++) {
        buttons[i] = document.createElement("BUTTON");
        buttons[i].innerHTML = labels[i][0];
        buttons[i].style.cssText = "border-radius:0%; border:none; outline:none; font-size:12px; color:white; background-color:transparent; position:fixed;  top:2px; left:x0px;".replace("x0", left + 170 + (i * 80));
        buttons[i].className = "button";
        buttons[i].style.height = "48px";
        buttons[i].style.width = "80px";
        buttons[i].style.fontFamily = "LucidaGrande";
        buttons[i].style.zIndex = "100";
        buttons[i].onclick = function() {
          location.href = labels[i][1];
        }
        //buttons[i].addEventListener("click", buttonpresets[i][2]);
        content.appendChild(buttons[i])
      }

}

create_topbar();
