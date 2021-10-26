

document.body.style.backgroundColor = "#141414";
document.body.style.width = "70%";
document.body.style.height= "100%";

let buttons = [];
let labels = ["HOME", "ABOUT", "CONTACT"];

let trial_desc = "Try the plugin out in your browser, use Chrome for best results. Saving and deleting presets is disabled."

let products = [["GreenLight", "./greenlight.png", "Trattatello", "#3cbe79", "Dynamic phaser and flanger with a unique sound"]];

function main() {

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
      panel.style.cssText = "border-radius:5px; border:2px solid product_color; outline:none; font-size:12px; color:white; background-color:#141414; position:absolute; top:100px; left:0px;".replace("product_color", color);
      panel.style.height = "300px";
      panel.style.left = "x0px".replace("x0", left);
      panel.style.width = "x0px".replace("x0", width);


      var png = document.createElement("img");
      png.src = img;

      console.log(img);

      png.style.height = "280px";
      png.style.width = "auto";
      png.style.top = "10px";
      png.style.right = "10px";
      png.style.position = "absolute";
      panel.appendChild(png);

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

      let info_button = document.createElement("BUTTON");
      info_button.innerHTML += "More >";
      info_button.style.cssText = "font-family: LucidaGrande; border-radius:5px; border:2px solid; font-size:14px; color:product_color; background-color:transparent; position:absolute; top:230px; left:0px;".replace("product_font", font).replace("product_color", color)
      info_button.style.borderColor = color;
      info_button.style.height = "30px";
      info_button.style.left = "190px";
      info_button.style.width = "120px";
      panel.appendChild(info_button);


      let try_button = document.createElement("BUTTON");
      try_button.innerHTML += "Try in browser >";
      try_button.style.cssText = "font-family: LucidaGrande; border-radius:5px; border:2px solid; font-size:14px; color:product_color; background-color:transparent; position:absolute; top:230px; left:0px;".replace("product_font", font).replace("product_color", color)
      try_button.style.borderColor = color;
      try_button.style.height = "30px";
      try_button.style.left = "40px";
      try_button.style.width = "140px";

      try_button.onclick = function() {

       var iframe = document.createElement("iframe");
       iframe.setAttribute("src", "./playtest.html");
       iframe.style.position = "absolute";
       iframe.style.bottom="1%"
       iframe.style.right="1%"
       iframe.style.border = "none";
       iframe.width = "460px";
       iframe.height = "290px";
       panel.appendChild(iframe);

       iframe.onload = function () {
         iframe.contentWindow.scrollTo(1200, 0);
       }


       panel.removeChild(info_button);
       panel.removeChild(try_button);
       panel.removeChild(product_desc);
       panel.removeChild(png);

       let trial_description = document.createElement("DIV");
       trial_description.innerHTML += trial_desc;
       trial_description.style.cssText = "font-family: LucidaGrande; border-radius:0%; border:none; outline:none; font-size:15px; color:product_color; background-color:transparent; position:absolute; top:130px; left:0px;".replace("product_font", font).replace("product_color", color)
       trial_description.style.height = "70px";
       trial_description.style.left = "40px";
       trial_description.style.width = "400px";
       panel.appendChild(trial_description);


       var close = document.createElement("BUTTON");
       close.innerHTML = "x";
       close.style.cssText = "font-family: LucidaGrande; border-radius:5px; border:2px solid; font-size:14px; color:product_color; background-color:transparent; position:absolute; top:10px; left:0px;".replace("product_font", font).replace("product_color", color)
       close.style.borderColor = color;
       close.style.height = "30px";
       close.style.left = "10px";
       close.style.width = "30px";
       close.onclick = function() {
         panel.removeChild(close);
         panel.removeChild(iframe);
         panel.removeChild(trial_description);

         panel.appendChild(info_button);
         panel.appendChild(try_button);
         panel.appendChild(product_desc);
         panel.appendChild(png);
       }

       panel.appendChild(close);
      }
      panel.appendChild(try_button);


      //let text = document.createElement("DIV");
      //panel.appendChild(text);

      document.body.appendChild(panel);
    }
}

main();
