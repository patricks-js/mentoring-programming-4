const sum = (a, b) => a + b;
function multiply(a, b) {
  return a * b;
}

const curry = (f) => (a) => (b) => f(a, b);

function curry2(fn) {
  return function curred(a) {
    // 5
    return function curred2(b) {
      // 10
      return fn(a, b);
    };
  };
}

const sumCurried = curry(sum);

const sumFive = sumCurried(5);
console.log(sumFive(10)); // out: 15
console.log(sumFive(20)); // out: 25

console.log(curry(sum)(5)(10)); // out: 15
console.log(curry2(multiply)(5)(10)); // out: 50
