document.getElementById("toggleSwitch").onclick = function () {
    myFunction()
};

function myFunction() {
    let color = document.body.style.background;
    if (color === 'black') {
        document.body.style.background = "white";
    } else {
        document.body.style.background = "black";
    }

}