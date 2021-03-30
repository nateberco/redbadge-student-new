var input1 = document.getElementById("number1");
; // option #1
var input2 = document.getElementById("number2"); // option #2
var button = document.getElementById("btn");
button.addEventListener("click", function () {
    console.log(addNumbers(Number(input1.value), Number(input2.value)));
});
function addNumbers(num1, num2) {
    return num1 + num2;
}
