var nav = document.getElementById("nav");
var ancor = document.getElementById("move");
var a = document.getElementsByTagName('a');
var spanEffect = document.getElementById("effectt")
a.addEventListener("click", ancorEffect);

function ancorEffect() {
    alert("wassup");
    
}

spanEffect.addEventListener(onmouseover, function() {
    alert('wassup');
    spanEffect.style.fontSize = "30px";
});