function add(n1: number, n2: number) {
  return n1 + n2;
}

function printResult(num: number): void {
  // void means that the function does not return anything
  console.log("Result: " + num);
}

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
} // cb is a function that takes a number and returns nothing

printResult(add(5, 12));

let combineValues: (a: number, b: number) => number; // this is a function type

combineValues = add;
// combineValues = printResult; // this will throw an error because printResult does not return a number

console.log(combineValues(8, 8));

addAndHandle(10, 20, (result) => {
  // this is an anonymous function
  console.log(result);
});
