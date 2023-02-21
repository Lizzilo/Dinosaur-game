var character =
document.getElementById("character");
var block = document.getElementById("block");
function jump() {
    if(character.classList != "animate"){
        character.classList.add("animte");
    }
    setTimeout(function(){
        character.classList.remove("animate");
    },500) ;
}


