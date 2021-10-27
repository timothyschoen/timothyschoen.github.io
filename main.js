

document.body.style.backgroundColor = "#141414";
document.body.style.width = "70%";
document.body.style.height= "100%";

let buttons = [];
let labels = [["HOME", "./index.html"], ["ABOUT", "./about.html"], ["CONTACT", "./contact.html"]];

let trial_desc = "Try the plugin out in your browser, use Chrome for best results. Saving and deleting presets is disabled."

let products = [
  ["GreenLight", "./resources/greenlight.png", "Trattatello", "#3cbe79", "Dynamic phaser and flanger with a unique sound", "GreenLight offers a phaser/flanger-like sound but created in a new and unique way. The phasing responds dynamically your playing, adding life to your sound. You can add delay to create a more chorus-like effect, or create frequency shifting effects."],
  ["Product2", "", "Trattatello", "#e63b35", "Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet"],
  ["Product3", "", "Trattatello", "#58a5e8", "Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet"],
];


function main() {


    document.body.style.height = ((products.length * 300) + 100) + "px";

    let divisor = document.body.clientWidth > 1200 ? 6.0 : 12.0;
    let left =  document.body.clientWidth / divisor;
    let width =  document.body.clientWidth - (2 * (document.body.clientWidth / divisor));

    let content = document.createElement("DIV");
    content.style.cssText = "border-radius:0%; border:none; outline:none; background-color:#141414;";
    content.style.position = "absolute";
    content.style.left = "x0px".replace("x0", left);
    content.style.width = "x0px".replace("x0", width + 30);
    content.style.height = "2000px";
    document.body.appendChild(content);

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

    for (let i = 0; i < products.length; i++) {

      let name = products[i][0];
      let img = products[i][1];
      let font = products[i][2];
      let color = products[i][3];
      let desc = products[i][4];
      let extra_desc = products[i][5];
      console.log(name);

      let panel = document.createElement("DIV");
      panel.style.cssText = "border-radius:5px; border:2px solid product_color; outline:none; font-size:12px; color:white; background-color:#141414; position:relative; top:100px; left:0px;".replace("product_color", color);
      panel.style.padding = "-20px";
      panel.style.margin = "20px";
      panel.style.height = "300px";
      panel.style.width = "x0px".replace("x0", width);
      panel.style.zIndex = "1";

      let png = document.createElement("img");
      png.src = img;

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
      let try_button = document.createElement("BUTTON");

      info_button.innerHTML += "More >";
      info_button.style.cssText = "font-family: LucidaGrande; border-radius:5px; border:2px solid; font-size:14px; color:product_color; background-color:transparent; position:absolute; top:230px; left:0px;".replace("product_font", font).replace("product_color", color)
      info_button.style.borderColor = color;
      info_button.style.height = "30px";
      info_button.style.left = "190px";
      info_button.style.width = "120px";
      panel.appendChild(info_button);

      info_button.onclick = function() {

        panel.removeChild(info_button);
        panel.removeChild(try_button);
        panel.removeChild(product_desc);

        let buy_button = document.createElement("BUTTON");
        buy_button.innerHTML += "Buy";
        buy_button.style.cssText = "font-family: LucidaGrande; border-radius:5px; border:2px solid; font-size:14px; color:product_color; background-color:transparent; position:absolute; top:230px; left:0px;".replace("product_font", font).replace("product_color", color)
        buy_button.style.borderColor = color;
        buy_button.style.height = "30px";
        buy_button.style.left = "40px";
        buy_button.style.width = "140px";
        panel.appendChild(buy_button);

        let more_product_desc = document.createElement("DIV");
        more_product_desc.innerHTML += extra_desc;
        more_product_desc.style.cssText = "font-family: LucidaGrande; border-radius:0%; border:none; outline:none; font-size:14px; color:product_color; background-color:transparent; position:absolute; top:130px; left:0px;".replace("product_font", font).replace("product_color", color)
        more_product_desc.style.height = "70px";
        more_product_desc.style.left = "40px";
        more_product_desc.style.width = "500px";
        panel.appendChild(more_product_desc);

        var close = document.createElement("BUTTON");
        close.innerHTML = "<";
        close.style.cssText = "font-family: LucidaGrande; border-radius:5px; border:2px solid; font-size:14px; color:product_color; background-color:transparent; position:absolute; top:10px; left:0px;".replace("product_font", font).replace("product_color", color)
        close.style.borderColor = color;
        close.style.height = "30px";
        close.style.left = "10px";
        close.style.width = "30px";
        close.onclick = function() {
          panel.removeChild(close);
          panel.removeChild(buy_button);
          panel.removeChild(more_product_desc);

          panel.appendChild(info_button);
          panel.appendChild(try_button);
          panel.appendChild(product_desc);
        }
        panel.appendChild(close);
      }


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
       iframe.style.right="2%"
       iframe.style.border = "none";
       iframe.width = "460px";
       iframe.height = "360px";

       panel.appendChild(iframe);

       panel.style.height = "370px";
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
       close.innerHTML = "<";
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

         panel.style.height = "300px";
       }

       panel.appendChild(close);
      }
      panel.appendChild(try_button);


      //let text = document.createElement("DIV");
      //panel.appendChild(text);

      content.appendChild(panel);
    }
}

main();
