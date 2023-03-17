addEventListener("click", createCircle);

function getRandomColor(colorTag) {
    const randomLetter = "123456789ABCDEF"
    let hashTag = "#";
    for (let i = 0; i < 6; i++) {
        hashTag += randomLetter[Math.floor(Math.random() * 15)];
    }
    return hashTag;
}
function createCircle(e) {
    var circle = document.createElement("div");
    circle.className = "circle";
    circle.style.left = e.pageX + "px";
    circle.style.top = e.pageY  + "px";
    circle.style.backgroundColor = getRandomColor();
    document.body.appendChild(circle);
}
