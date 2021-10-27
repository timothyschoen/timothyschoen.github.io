
let about_text = "I am Timothy Schoen, <br><br> I am a developer and music enthousiast, based in The Netherlands. I develop creative audio effects as Octagon Audio.<br><br>I currently work as a DSP developer for Golden Hearing, a company that strives to improve music perception and enjoyment for people with hearing aids.<br><br>I currently study Music and Technology at HKU (University of the Arts, Utrecht). In 2020, I had an internship with plugin developers AudioEase, creators of AltiVerb.<br><br>If you have an interest in any of these subjects, don't hesitate to contact me, I'll always reply!<br><br>";

function about() {

    let container = document.createElement("DIV");
    container.style.padding = "50px";
    container.style.margin = "50px";
    container.style.cssText = "font-family: LucidaGrande; border-radius:5px; border:2px solid white; outline:none; font-size:14px; color:white; background-color:transparent; position:fixed; left:0px;";
    container.style.height = "300px";
    container.style.left = left + "px";
    container.style.top = "80px";
    container.style.width = width + "px";

    let about_me = document.createElement("DIV");
    about_me.innerHTML += about_text;
    about_me.style.cssText = "font-family: LucidaGrande; outline:none; font-size:14px; color:white; background-color:transparent; position:relative; left:0px;";
    about_me.style.height = "300px";
    about_me.style.left =  "250px";
    about_me.style.top = "30px";
    about_me.style.width = "600px"
    container.appendChild(about_me);

/*
    let my_face = document.createElement("DIV");
    my_face.innerHTML += about_text;
    my_face.style.cssText = "font-family: LucidaGrande; border:0px; outline:none; font-size:14px; color:white; background-color:transparent; position:relative; left:0px;";
    my_face.style.height = "300px";
    my_face.style.left = (left - 50) + "px";
    my_face.style.top = "60px";
    my_face.style.width = (width - 100) + "px";
    container.appendChild(my_face); */


    document.body.appendChild(container);
}

about();
