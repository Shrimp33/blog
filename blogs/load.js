const max = 3;
function getmax() {
    return max;
}

function inval() {
    alert("Invalid page number, please try pages 1 to " + getmax());
}

function load(index) {
    if (index > 0 && index <= getmax()) {
        // If curr dir is /blogs, no need to add /blogs to the path
        if (window.location.href.indexOf("blogs") > -1) {
            window.location.href = "blog" + index + ".html";
        }
        else {
            window.location.href = "blogs/blog" + index + ".html";
        }
    }
    else inval();
}

function draw(canvas, imgsrc, x, y, w, h) {
    var img = new Image();
    img.src = "imgs/" + imgsrc;
    console.log(img.src);
    img.onload = function () {
        var ctx = document.getElementById(canvas)
        ctx.width = w;
        ctx.height = h;
        ctx.getContext("2d").drawImage(img, x, y, w, h);
    }
}

function About() {
    document.getElementById("About").style.display = "block";
    document.getElementById("Blog").style.display = "none";
    document.getElementById("Socials").style.display = "none";
    document.getElementById("Projects").style.display = "none";
}
function Blog() {
    document.getElementById("About").style.display = "none";
    document.getElementById("Blog").style.display = "block";
    document.getElementById("Socials").style.display = "none";
    document.getElementById("Projects").style.display = "none";
}
function Socials() {
    document.getElementById("About").style.display = "none";
    document.getElementById("Blog").style.display = "none";
    document.getElementById("Socials").style.display = "block";
    document.getElementById("Projects").style.display = "none";
}
function Projects() {
    document.getElementById("About").style.display = "none";
    document.getElementById("Blog").style.display = "none";
    document.getElementById("Socials").style.display = "none";
    document.getElementById("Projects").style.display = "block";
}

function Home() {
    window.location.href = window.location.href.substring(0, window.location.href.indexOf("blog") + 4) + "/index.html";
}