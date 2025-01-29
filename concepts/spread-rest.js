function qualquercoisa(a, b, ...rest) {
  // rest é uma array
  const arr = [14, 15, 16, ...rest]; // spread

  console.log(arr);

  return a + b;
}

qualquercoisa(1, 2, 3, "g", "h", 6, 7, "asdasd", "Asdas", { name: "Patrick" });
