export const toUpperCase = (str) => str.toUpperCase();
export const trim = (str) => str.trim();
export const addPeriod = (str) => `${str} .`;

export const formatText = (str) => addPeriod(trim(toUpperCase(str))); // Returna do mais interno para o mais externo

export function formatText2(str) {
  return trim(addPeriod(str));
}

[1, 2, 3, 4, 5, 6, 7, 8, 9]
  .map((n) => n * 2)
  .filter((n) => n % 2 === 0)
  .every((x) => x >= 5)
  .flat();

console.log(formatText("  hello world  ")); // out: "HELLO WORLD."
console.log(formatText2("  heLLo world  ")); // out: "heLLo world."

const compose =
  (...fns) =>
  (...args) =>
    // biome-ignore lint/performance/noAccumulatingSpread: <explanation>
    fns.reduceRight((res, fn) => [fn.call(...res)], args)[0];
compose(toUpperCase, trim, addPeriod)("  hello world  ");
