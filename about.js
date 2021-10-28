
let about_text = "I am Timothy Schoen, <br><br> I am a developer and music enthousiast, based in The Netherlands. I develop creative audio effects as Octagon Audio.<br><br>I currently work as a DSP developer for Golden Hearing, a company that strives to improve music perception and enjoyment for people with hearing aids.<br><br>I currently study Music and Technology at HKU (University of the Arts, Utrecht). In 2020, I had an internship at plugin developers AudioEase, creators of AltiVerb.<br><br>If you have an interest in any of these subjects, don't hesitate to contact me, I'll always reply!<br><br>";

function about() {

    let container = document.createElement("DIV");
    container.style.padding = "50px";
    container.style.margin = "50px";
    container.style.cssText = panel_css.replaceAll("$theme_color", "white") + "height:300px; width:100%; top:100px;";

    let about_me = document.createElement("DIV");
    about_me.innerHTML += about_text;
    about_me.style.cssText = "font-family: LucidaGrande; outline:none; font-size:14px; color:white; background-color:transparent; position:relative; left:0px;";
    about_me.style.height = "300px";
    about_me.style.left =  "30%";
    about_me.style.top = "30px";
    about_me.style.width = "70%"
    container.appendChild(about_me);


    let my_face = document.createElement("img");
    my_face.src = "./resources/face.jpg";

    my_face.style.height = "280px";
    my_face.style.width = "auto";
    my_face.style.top = "10px";
    my_face.style.left = "10px";
    my_face.style.position = "absolute";
    container.appendChild(my_face);


    content.appendChild(container);
}

about();
