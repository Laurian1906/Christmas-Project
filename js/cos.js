var setGloburiAlbastre = document.getElementById("setGloburiAlbastre");
var numeProdus = document.getElementById("numeProdus");
var pretProdus = document.getElementById("pretProdus");


var element = document.getElementById("divCos");

console.log(element);

var heading = document.createElement("h1");
var node_heading = document.createTextNode("Cos de cumpărături");
    
heading.appendChild(node_heading);
element.appendChild(heading);
    

adaugaCos.addEventListener("click", function(){
    
    if (setGloburiAlbastre){
        var nume = numeProdus.textContent;
        var pret = pretProdus.textContent;

        var para = document.createElement("p");
        var node = document.createTextNode(innerHTML = `${nume} - ${pret}`);

        para.appendChild(node);
        element.appendChild(para);  
    }
    
})    
    






