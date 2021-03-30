// Problem 4
// Keep the return type string

function subtractNums(num1: number|string, num2: number|string): string {
  let numberSub = String(+num1 - +num2);
  return numberSub;
}

console.log(subtractNums(10, 5));
