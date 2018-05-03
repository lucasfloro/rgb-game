let colors = [
    "rgb(255, 0, 0)",
    "rgb(255, 255, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 255, 255)",
    "rgb(0, 0, 255)",
    "rgb(255, 0, 255)"
]

let pickedColor = colors[3];
let colorDisplay = document.getElementById("colorDisplay");

colorDisplay.textContent = pickedColor;


let squares = document.querySelectorAll(".square");

for (let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];

    squares[i].addEventListener("click", function() {
        // grab color of clicked square
        let clickedColor = this.style.backgroundColor;

        //compare color to pickedColor
        if (clickedColor === pickedColor) {
            alert("you searched the color");
        } else {
            this.style.backgroundColor = "#232323";
        }
    })
}
// squares.forEach(element => {
//     element.style
// });