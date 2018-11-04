function toogleNav() {
    var x = document.getElementById("myNav");
    if (x.className === "main-nav") {
        x.className += " responsive";
    } else {
        x.className = "main-nav";
    }
}