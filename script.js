var charachter =
document.getElementById("block");
function jump() {
    charachter.classList.add("animte");
    setTimeout(function(){
        charachter.classList.remove("animate");
    },500) ;
}
