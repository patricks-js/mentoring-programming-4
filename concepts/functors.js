class Box {
  constructor(x) {
    this.x = x;
  }

  map(fn) {
    const result = fn(this.x);
    return new Box(result);
  }

  inspect() {
    console.log(`Box(${this.x})`);
    return "";
  }
}

const box2 = new Box(5).map((x) => x + 2).map((x) => x * 2);

box2.inspect();

// console.log("Iniciando");
// const box = new Box(5);
// box.inspect();

// console.log("Mapeando box 1");
// const newBox = box.map((x) => x + 2);
// box.inspect();
// newBox.inspect();

// console.log("Mapeando box 2");
// const newBox2 = newBox.map((x) => x * 2);
// box.inspect();
// newBox.inspect();
// newBox2.inspect();

// const Box = (x) => ({
//   map: (fn) => Box(fn(x)),
//   inspect: () => `Box(${x})`,
// });

const original = 5;
const result = original + 2;
const result2 = result * 2;
const result3 = result - 1;

// const resultado = Box(5)
//   .map((x) => x + 2)
//   .map((x) => x * 3)
//   .map((x) => x - 1);

// console.log(resultado.inspect());

// * Array === Functor & Monad

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const arr2 = arr
  .filter((n) => {
    // console.log("Filtrando");
    return n % 2 === 0;
  })
  .map((n) => {
    // console.log("Mapeando");
    return n * 2;
  });

// console.log(arr2);

function customMap(arr, fn) {
  const newArr = [];

  for (const item of arr) {
    newArr.push(fn(item));
  }

  return newArr;
}
