function submit() {
    var x = document.getElementById("about");
    if (x.style.visibility === "hidden") {
        x.style.visibility = "visible";
        triangle.style.visibility = "visible"
    } else {
        x.style.visibility = "hidden";
        triangle.style.visibility = "hidden"
    }
}