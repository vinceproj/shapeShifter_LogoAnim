//Wait for animation to finish then switch to static
setTimeout(function () {
    let temp = document.getElementById("logo");
    temp.style.backgroundImage = "url('logo_Self.svg')";
}, 1500)