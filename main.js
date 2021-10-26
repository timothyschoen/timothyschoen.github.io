

document.body.style.backgroundColor = "#171717";
document.body.style.width = '70%';
document.body.style.height= '100%';

let buttons = [];
let labels = ["HOME", "PRODUCTS", "ABOUT", "CONTACT"];


let products = [["GreenLight", "./greenlight.png", "Trattatello", "#3cbe79", "Dynamic phaser and flanger with a unique sound"]];

function main() {

    let divisor = document.body.clientWidth > 1200 ? 6.0 : 12.0;
    let left =  document.body.clientWidth / divisor;
    let width =  document.body.clientWidth - (2 * (document.body.clientWidth / divisor));

    let content = document.createElement("DIV");
    content.style.cssText = "border-radius:0%; border:none; outline:none; background-color:#171717;";
    content.style.position = "fixed";
    content.style.left = "x0px".replace("x0", left);
    content.style.width = "x0px".replace("x0", width);
    content.style.height = document.body.clientHeight;
    document.body.appendChild(content);

    let panel = document.createElement("DIV");
    panel.style.cssText = "border-radius:0%; border:none; outline:none; font-size:12px; color:white; background-color:#f0f0f0; position:absolute; top:55px; left:0px;";
    panel.style.height = "2px";
    panel.style.width = "x0px".replace("x0", width);
    content.appendChild(panel);

    var logo = document.createElement('img');
    logo.src = "./Octagon_extra.png";

    logo.style.width = "130px";
    logo.style.height = "auto";
    logo.style.top = "0px";
    logo.style.left = "12px";
    logo.style.position = "absolute";
    content.appendChild(logo);

    for (let i = 0; i < 4; i++) {
      buttons[i] = document.createElement("BUTTON");
      buttons[i].innerHTML = labels[i];
      buttons[i].style.cssText = "border-radius:0%; border:none; outline:none; font-size:12px; color:white; background-color:transparent; position:absolute;  top:2px; left:x0px;".replace("x0", 170 + (i * 80));
      buttons[i].className = "button";
      buttons[i].style.height = "48px";
      buttons[i].style.width = "80px";
      buttons[i].style.fontFamily = "LucidaGrande";
      buttons[i].style.zIndez = "5";
      //buttons[i].addEventListener("click", buttonpresets[i][2]);
      content.appendChild(buttons[i])
    }

    for (let i = 0; i < products.length; i++) {

      let name = products[i][0];
      let img = products[i][1];
      let font = products[i][2];
      let color = products[i][3];
      let desc = products[i][4];

      let panel = document.createElement("DIV");
      panel.style.cssText = "border-radius:0%; border:none; outline:none; font-size:12px; color:white; background-color:#141414; position:absolute; top:100px; left:0px;";
      panel.style.height = "300px";
      panel.style.left = "x0px".replace("x0", left);
      panel.style.width = "x0px".replace("x0", width);

      let product_logo = document.createElement("DIV");
      product_logo.innerHTML += name;
      product_logo.style.cssText = "font-family: Trattatello; border-radius:0%; border:none; outline:none; font-size:60px; color:product_color; background-color:transparent; position:absolute; top:20px; left:0px;".replace("product_font", font).replace("product_color", color)
      product_logo.style.height = "70px";
      product_logo.style.left = "40px";
      product_logo.style.width = "300px";
      panel.appendChild(product_logo);

      let product_desc = document.createElement("DIV");
      product_desc.innerHTML += desc;
      product_desc.style.cssText = "font-family: LucidaGrande; border-radius:0%; border:none; outline:none; font-size:20px; color:product_color; background-color:transparent; position:absolute; top:130px; left:0px;".replace("product_font", font).replace("product_color", color)
      product_desc.style.height = "70px";
      product_desc.style.left = "40px";
      product_desc.style.width = "600px";
      panel.appendChild(product_desc);

      let try_button = document.createElement("BUTTON");
      try_button.innerHTML += "Try in browser >";
      try_button.style.cssText = "font-family: LucidaGrande; border-radius:5px; border:2px solid; font-size:14px; color:product_color; background-color:transparent; position:absolute; top:230px; left:0px;".replace("product_font", font).replace("product_color", color)
      try_button.style.borderColor = color;
      try_button.style.height = "30px";
      try_button.style.left = "40px";
      try_button.style.width = "140px";

      try_button.onclick = function() {
        window.location.href = "./playtest.html";
      }
      panel.appendChild(try_button);

      let info_button = document.createElement("BUTTON");
      info_button.innerHTML += "More >";
      info_button.style.cssText = "font-family: LucidaGrande; border-radius:5px; border:2px solid; font-size:14px; color:product_color; background-color:transparent; position:absolute; top:230px; left:0px;".replace("product_font", font).replace("product_color", color)
      info_button.style.borderColor = color;
      info_button.style.height = "30px";
      info_button.style.left = "190px";
      info_button.style.width = "120px";
      panel.appendChild(info_button);

      var png = document.createElement('img');
      png.src = img;

      console.log(img);


      png.style.height = panel.style.height;
      png.style.width = "auto";
      png.style.top = "0px";
      png.style.right = "0px";
      png.style.position = "absolute";
      panel.appendChild(png);

      //let text = document.createElement("DIV");
      //panel.appendChild(text);

      document.body.appendChild(panel);
    }
}

main();
