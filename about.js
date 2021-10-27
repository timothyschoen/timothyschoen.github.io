

document.body.style.backgroundColor = "#141414";
document.body.style.width = "70%";
document.body.style.height= "100%";

let buttons = [];
let labels = [["HOME", "./index.html"], ["ABOUT", "./about.html"], ["CONTACT", "./contact.html"]];

let trial_desc = "Try the plugin out in your browser, use Chrome for best results. Saving and deleting presets is disabled."

let products = [["GreenLight", "./resources/greenlight.png", "Trattatello", "#3cbe79", "Dynamic phaser and flanger with a unique sound", "GreenLight offers a phaser/flanger-like sound but created in a new and unique way. The phasing responds dynamically your playing, adding life to your sound. You can add delay to create a more chorus-like effect, or create frequency shifting effects."]];

function about() {

    let divisor = document.body.clientWidth > 1200 ? 6.0 : 12.0;
    let left =  document.body.clientWidth / divisor;
    let width =  document.body.clientWidth - (2 * (document.body.clientWidth / divisor));

    let content = document.createElement("DIV");
    content.style.cssText = "border-radius:0%; border:none; outline:none; background-color:#141414;";
    content.style.position = "fixed";
    content.style.left = "x0px".replace("x0", left);
    content.style.width = "x0px".replace("x0", width);
    content.style.height = document.body.clientHeight;
    document.body.appendChild(content);

    let line = document.createElement("DIV");
    line.style.cssText = "border-radius:0%; border:none; outline:none; font-size:12px; color:white; background-color:#f0f0f0; position:absolute; top:55px; left:0px;";
    line.style.height = "2px";
    line.style.width = "x0px".replace("x0", width);
    content.appendChild(line);

    var logo = document.createElement("img");
    logo.src = "./resources/Octagon_extra.png";

    logo.style.width = "130px";
    logo.style.height = "auto";
    logo.style.top = "0px";
    logo.style.left = "12px";
    logo.style.position = "absolute";
    content.appendChild(logo);

    for (let i = 0; i < 3; i++) {
      buttons[i] = document.createElement("BUTTON");
      buttons[i].innerHTML = labels[i][0];
      buttons[i].style.cssText = "border-radius:0%; border:none; outline:none; font-size:12px; color:white; background-color:transparent; position:absolute;  top:2px; left:x0px;".replace("x0", 170 + (i * 80));
      buttons[i].className = "button";
      buttons[i].style.height = "48px";
      buttons[i].style.width = "80px";
      buttons[i].style.fontFamily = "LucidaGrande";
      buttons[i].style.zIndez = "5";
      buttons[i].onclick = function() {
        location.href = labels[i][1];
      }
      //buttons[i].addEventListener("click", buttonpresets[i][2]);
      content.appendChild(buttons[i])
    }
}

about();
