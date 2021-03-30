let input1 = document.getElementById("number1") as HTMLInputElement;; // option #1
let input2 = <HTMLInputElement>document.getElementById("number2"); // option #2

let button = document.getElementById("btn");

button.addEventListener("click", () => {
  console.log(addNumbers(Number(input1.value), Number(input2.value)));
});

function addNumbers(num1: number, num2: number) : number {
  return num1 + num2;
}
