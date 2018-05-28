function myFunction() {
    var x = document.getElementById("overlay");
     var y = document.getElementById("bg");
     var f = document.getElementById("bg2");
    if (x.style.display === "none") {
        x.style.display = "block";
        y.style.position = "absolute";
        f.style.display = "none";
    } else {
        x.style.display === "block";
        x.style.display = "none";
       y.style.position = "relative";
        f.style.display = "block";
    }
  
}