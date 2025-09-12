$(document).ready(function() {
    $("button").on("click", function() {
        $("body").css("background-color", randomColor());
    });
});

let newColor;

const randomColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    newColor = r * 0.299 + g * 0.587 + b * 0.114;
    return `rgb(${r}, ${g}, ${b})`;
}