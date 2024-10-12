

var globuri = document.getElementById("globuri");
var figurine = document.getElementById("figurine");
var lumanari = document.getElementById("lumanari");


var c = document.getElementById("clc");
c.addEventListener("click", function clc(){
    var y = document.getElementById("storeContent");
    if (globuri.style.display === "none") {
        y.style.display = "none";
        globuri.style.display = "flex";
        figurine.style.display = "none";
        lumanari.style.display = "none";
    } else {
        y.style.display = "flex";
        globuri.style.display = "none";
        figurine.style.display = "none";
        lumanari.style.display = "none";
    }
})

var d = document.getElementById("clc1");
d.addEventListener("click", function clc1(){
    var y = document.getElementById("storeContent");
    if (figurine.style.display === "none") {
        y.style.display = "none";
        globuri.style.display = "none";
        figurine.style.display = "flex";
        lumanari.style.display = "none";
    } else {
        y.style.display = "flex";
        globuri.style.display = "none";
        figurine.style.display = "none";
        lumanari.style.display = "none";
    }
})

var e = document.getElementById("clc2");
e.addEventListener("click", function clc2(){
    var y = document.getElementById("storeContent");
    if (lumanari.style.display === "none") {
        y.style.display = "none";
        globuri.style.display = "none";
        figurine.style.display = "none";
        lumanari.style.display = "flex";
    }else {
        y.style.display = "flex";
        globuri.style.display = "none";
        figurine.style.display = "none";
        lumanari.style.display = "none";
    }
})

