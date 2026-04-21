import express from "express";

import config from "./config/config.js";
import productRoute from "./routes/product.route.js";

const app = express();

app.get("/", (request, response) => {
  response.send("Home page");
});

app.get("/about", (req, res) => {
  res.send("About page");
});

app.get("/contact", (req, res) => {
  res.send("Contact Page");
});

app.post("/contact", (req, res) => {
  res.send("Contact form submitted.");
});

app.use("/api/products", productRoute);

app.listen(config.port, () => {
  console.log(`Server running at port ${config.port}...`);
});
