addEventListener("click", createCircle);

function createCircle(e) {
    var circle = document.createElement("div");
    circle.className = "circle";
    circle.style.left = e.pageX + "px";
    circle.style.top = e.pageY  + "px";
    document.body.appendChild(circle);
}