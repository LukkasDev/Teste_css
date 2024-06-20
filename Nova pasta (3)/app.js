document.getElementById("sim").onclick = function () {
    window.location.href = "foarm.html";
};

document.getElementById("nao").onmouseover = function () {
    let button = document.getElementById("nao");
    let x = Math.random() * (window.innerWidth - button.offsetWidth);
    let y = Math.random() * (window.innerHeight - button.offsetHeight);
    button.style.left = x + "px";
    button.style.top = y + "px";
};
