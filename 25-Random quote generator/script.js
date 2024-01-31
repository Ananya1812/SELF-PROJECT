const generateQuote = () => {
  let url = "https://type.fit/api/quotes";
  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      let randomNum = Math.floor(Math.random() * 16) + 1;
      let randomQuote = data[randomNum];
      console.log(randomQuote);
      document.getElementById("quote").innerHTML = randomQuote.text;
      document.getElementById("author").innerHTML = randomQuote.author
        ? randomQuote.author
        : "";
    });
};
// https://fakestoreapi.com/products
// let count = 0;
// function generateQuote() {
//   let url = "https://type.fit/api/quotes";
//   fetch(url)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);
//       let randomNum = Math.floor(Math.random() * 16) + 1;
//       let randomQuote = data[randomNum];
//       console.log(randomQuote);
//       document.getElementById("quote").innerHTML = `${randomQuote.text}`;
//       document.getElementById("author").innerHTML = `${
//         randomQuote.author ? randomQuote.author : ""
//       }`;
//     });
// }
