const express = require("express");

const app = express();
const PORT = 8000;

app.get("/", (req, res) => {
  res.send(
    `
        <h1>This is base end point </h1>
        </br>
        <a href="/books"> books route </a>
        </br>
        <a href="/office-product"> office product route </a>    
        `
  );
});

app.get("/books", (req, res) => {
  const books = [
    {
      id: 1,
      title: "Learn Javascript",
      author: "A",
    },
    {
      id: 2,
      title: "Learn PHP",
      author: "B",
    },
  ];

  res.status(200).json(books);
});

app.get("/office-product", (req, res) => {
  const products = [
    {
      id: 1,
      product_name: "pen",
      price: "5000",
    },
    {
      id: 2,
      product_name: "marker",
      price: "15000",
    },
  ];

  res.status(200).json(products);
});

app.listen(PORT, () => {
  console.log(`Server run at PORT : ${PORT}`);
});
