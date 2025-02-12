// function fetchData(url) {
//   return new Promise((resolve, reject) => {
//     fetch(url)
//       .then((response) => response.json())
//       .then((data) => resolve(data))
//       .catch((error) => reject(error));
//   });
// } // Promise<Promise<{ id: string }[] as XML>>
// // Promise<{ id: string }[] as JSON>

const url = "https://jsonplaceholder.typicode.com/users";

// fetchData(url).then((data) => console.log(data));

class CustomFetch {
  constructor(url) {
    this.url = url;
  }

  then2(fn) {
    return new CustomFetch(fn(url));
  }

  catch2(fn) {
    return new CustomFetch(fn(url));
  }
}

const data = new CustomFetch(url)
  .then2((data) => console.log(data))
  .then2((data) => console.log(`DATA 2 => ${data}`));

console.log(data);
